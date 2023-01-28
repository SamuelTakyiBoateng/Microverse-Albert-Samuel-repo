//Samuel Solution
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = [];
  let orangeCount = [];
  let appleAtSamHouse = 0;
  let orangeAtSamHouse = 0;
  apples.map((x) => {
    appleCount.push(x + a);
  });
  orange.map((x) => {
    orangeCount.push(x + b);
  });
  appleCount.map((x) => {
    if (x >= s && x <= t) {
      appleAtSamHouse++;
    }
  });
  orangeCount.map((x) => {
    if (x >= s && x <= t) {
      orangeAtSamHouse++;
    }
  });
  console.log(appleAtSamHouse);
  console.log(orangeAtSamHouse);
}
