// THIS FIXES A "PROCESS NOT DEFINED" ERROR
window.process = {
  env: {
    NODE_ENV: "development",
  },
};
