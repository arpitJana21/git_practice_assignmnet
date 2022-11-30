let num = 10;
let ans = "yes";
for (let i = 2; i < num / 2; i++) {
  if (num % i === 0) {
    ans = "No";
    break;
  }
}
console.log(ans);
