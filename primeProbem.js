let num = 11;
let ans = "yes";
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    ans = "No";
    break;
  }
}
console.log(ans);
