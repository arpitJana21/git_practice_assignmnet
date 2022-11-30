let str = "1234321"; // ans : "Yes"
let N = str.length;
let ans = "Yes";
for (let i = 1; i < Math.floor(N / 2); i++) {
  if (str[i] === str[N - i - 2]) {
    ans = "No";
    break;
  }
  console.log(ans);
}
