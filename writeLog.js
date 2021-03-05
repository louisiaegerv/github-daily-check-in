const fs = require("fs");

fs.appendFile("./checkin-log.txt", `Log: ${new Date().toString()}`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Wrote log.");
  }
});
