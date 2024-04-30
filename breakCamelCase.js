function solution(string) {
  let newCharArray = [];
  string.split("").map((char) => {
    if (char.toUpperCase() === char) {
      newCharArray.push(" ");
      newCharArray.push(char);
    } else {
      newCharArray.push(char);
    }
  });
  return newCharArray.join("");
}

console.log(solution("")); // ""
console.log(solution("camelCasing")); // "camel Casing"
console.log(solution("camelCasingTest")); // "camel Casing Test"
