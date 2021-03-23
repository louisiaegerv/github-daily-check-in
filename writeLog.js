const fs = require('fs')

fs.appendFile(
  './checkin-log.txt',
  `\nLog: ${new Date().toString()}\n`,
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Wrote log.')
    }
  }
)
