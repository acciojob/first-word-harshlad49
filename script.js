function firstWord(s) {
  // Trim leading/trailing spaces
  s = s.trim();
  
  // Find the index of the first space
  const index = s.indexOf(' ');
  
  // If no space is found, return the entire string
function firstWord(s) {
  // Trim leading/trailing spaces
  s = s.trim();
  
  // Find the index of the first space
  const index = s.indexOf(' ');
  
  // If no space is found, return the entire string
  if (index === -1) return s;

  // Return substring up to the first space
  return s.substring(0, index);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

