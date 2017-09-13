function NonrepeatingCharacter(str) {
  let len = str.length;
  let countObj = {}

  for (let i = 0; i < len; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]]++;
    }
    else {
      countObj[str[i]] = 1;
    }
  }

  for (let j = 0; j < len; j++) {
    if (countObj[str[j]] === 1) return str[j];
  }
}

NonrepeatingCharacter('hello world hi there z');