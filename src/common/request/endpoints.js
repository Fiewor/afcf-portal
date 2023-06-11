export default {
  getBlogs: {
    url: "/api/v1/blogs",
    method: "get",
  },
  postBlog: {
    url: "/api/v1/blogs",
    method: "post",
  },
  updateBlog: {
    url: "/api/v1/blogs",
    method: "put",
  },
  deleteBlog: (id) => ({
    url: `/api/v1/blogs?id=${id}`,
    method: "delete",
  }),
  getUserByEmail: (email) => ({
    url: `/afm-members/api/v1/user/email?email=${email}`,
    method: "get",
  }),
  loginUser: {
    url: "/afm-members/api/v1/user/login",
    method: "post",
  },
};
