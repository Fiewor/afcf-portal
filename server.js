require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 4000;
const appDir = process.env.MODE === "development" ? "public" : "build";
const afmMembersBaseUrl = process.env.AFM_MEMBERS_BASE_URL || "";

console.log(process.env.MODE);
console.log(appDir);
console.log(afmMembersBaseUrl);

app.use(express.static(path.join(__dirname, appDir), { index: false }));

app.use(
  "/afm-members",
  createProxyMiddleware({
    target: afmMembersBaseUrl,
    changeOrigin: true,
    pathRewrite: {
      "^/afm-members/": "/",
    },
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, appDir, "index.html"));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
