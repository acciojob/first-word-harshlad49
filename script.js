function firstWord(str) {
  str = str.trim();
  const index = str.indexOf(' ');
  if (index === -1) return str;
  return str.substring(0, index);
}

// Do not change the code below
const input = prompt("Enter String:");
alert(firstWord(input));
