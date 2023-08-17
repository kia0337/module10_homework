let myarr = ["ms", 4, "s", 8, true, 3, 0, NaN, 9];;
countEven = 0;
countOdd = 0;
сountZero = 0;
for (let i = 0; i < myarr.length; i++) {
  if ((typeof (myarr[i]) == "number") && !(isNaN(myarr[i]))) {
    if ((myarr[i] % 2 == 0) && (myarr[i] !== 0)) {
      countEven++;
    } else if ((myarr[i] % 2 !== 0) && (myarr[i] !== 0)) {
      countOdd++;
    } else if (myarr[i] == 0) {
      сountZero++;
    };
  };
};
console.log(countEven);
console.log(countOdd);
console.log(сountZero);
