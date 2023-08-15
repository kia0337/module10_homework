// Сравнение элементов массива
let array ;
let counter = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j] ) {
    counter++;
    } ;
  };
};
if (counter>0){
  console.log("true")
} else{
  console.log("false")
};
// весь массив из одинаковых элементов
let index = 0;
for (let i = 0; i < array.length; i++) {
  if (array[0]- array[i] == 0 ) {
  index++;
    };
};
console.log(index)
if(index==array.length){
  console.log("массив состоит из одинаковых элементов");
  }else{
    console.log("массив не состоит из одинаковых элементов")
  };