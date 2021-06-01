let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineIndex = 0
let numberOfEntries = 0
let outputArray = []
let index = 0

function processEntry(entry) {
  if (!outputArray.includes(entry)) {
    outputArray[index] = entry
    index += 1
  }
}

rl.on('line', function (line) {

  if (lineIndex == 0) {

    numberOfEntries = parseInt(line)

    if (numberOfEntries == 0) {
      rl.close()
      return
    }

  } else if (lineIndex < numberOfEntries) {

    processEntry(line)

  } else { // last line

    processEntry(line)
    rl.close()

    let outputString = ""

    for (let i = 0; i < outputArray.length; i++) {
      outputString += outputArray[i] + "\n"
    }

    console.log(outputString)
    return

  }

  lineIndex += 1
})