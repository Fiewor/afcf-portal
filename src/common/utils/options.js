export const yesOrNo = [
  { key: "y", text: "Yes", value: "Yes" },
  { key: "n", text: "No", value: "No" },
];

export const randomOptions = [
  { key: "agri", text: "Agriculture", value: "Agriculture" },
  { key: "tech", text: "Technology", value: "Technology" },
];

export const industryTypes = [
  { key: "agri", text: "Agriculture", value: "Agriculture" },
  { key: "tech", text: "Technology", value: "Technology" },
];

export const businessTypes = [
  {
    key: "softDev",
    text: "Software Development",
    value: "Software Development",
  },
  { key: "fashDes", text: "Fashion Design", value: "Fashion Design" },
];

export const districts = [
  { key: "fc", text: "Faith-City", value: "Faith-City" },
  { key: "ant", text: "Anthony", value: "Anthony" },
];

export const states = [
  { key: "la", text: "Lagos", value: "Lagos" },
  { key: "og", text: "Ogun", value: "Ogun" },
  { key: "oy", text: "Oyo", value: "Oyo" },
];

export const years = Array.from({ length: 20 }, (_, i) => ({
  key: String(i + 1),
  text: String(i + 1),
  value: String(i + 1),
}));

export const levelOptions = [
  { key: "1", text: "100 Level", value: "100" },
  { key: "2", text: "200 Level", value: "200" },
  { key: "3", text: "300 Level", value: "300" },
  { key: "4", text: "400 Level", value: "400" },
  { key: "5", text: "500 Level", value: "500" },
  { key: "6", text: "600 Level", value: "600" },
];

export const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
];

export const programOptions = [
  { key: "u", text: "Undergraduate", value: "undergraduate" },
  { key: "g", text: "Graduate", value: "graduate" },
];

export const sessionOptions = [
  { key: "1", text: "2022/2023", value: "2022/2023" },
  { key: "2", text: "2023/2024", value: "2023/2024" },
  { key: "3", text: "2024/2025", value: "2024/2025" },
];

export const semesterOptions = [
  { key: "first", text: "First Semester", value: "first-semester" },
  { key: "second", text: "Second Semester", value: "second-semester" },
];

export const departmentOptions = [
  { key: "biochem", text: "Biochemistry", value: "biochemistry" },
  { key: "med", text: "Medicine", value: "medicine" },
  {
    key: "elect",
    text: "Electrical Engineering",
    value: "electrical-engineering",
  },
  { key: "cs", text: "Computer Science", value: "graduate" },
];

export const roleOptions = [
  { key: "co", text: "Coordinator", value: "coordinator" },
  { key: "out", text: "Outreach Head", value: "outreach-head" },
  { key: "wcs", text: "WCS Head", value: "wcs-head" },
  { key: "md", text: "Music Director", value: "music-director" },
];

export const daysOptions = [
  { key: "sun", text: "Sunday", value: "sunday" },
  { key: "mon", text: "Monday", value: "monday" },
  { key: "tue", text: "Tuesday", value: "tuesday" },
  { key: "wed", text: "Wednesday", value: "wednesday" },
  { key: "thurs", text: "Thursday", value: "thursday" },
  { key: "fri", text: "Friday", value: "friday" },
  { key: "sat", text: "Saturday", value: "saturday" },
];

const days = daysOptions.map((options) => options.text);

const currentDate = new Date();

const month = currentDate.getMonth() + 1,
  currentDay = currentDate.getDate(),
  year = currentDate.getFullYear();

export const dateOptions = days.map(
  (_, i) =>
    i < 5 && {
      key: i,
      text: `${currentDay + i} / ${month} / ${year}`,
      value: `${currentDay + i} / ${month} / ${year}`,
    }
);
