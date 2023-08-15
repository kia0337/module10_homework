let myarr ;
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
