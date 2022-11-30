let str = "1234321"; // ans : "Yes"
let N = str.length;
let ans = "Yes";
for (let i = 0; i < Math.floor(N / 2); i++) {
  if (str[i] !== str[N - i - 1]) {
    ans = "No";
    break;
  }
}
console.log(ans);
