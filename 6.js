// Сравнение элементов массива
let array = [1, 5, 6, 9, 5];
function hasDuplicateElements(array) {
  let elementCount = {};
  for (let i = 0; i < array.length; i++) {
    if (elementCount[array[i]]) {
      return console.log('true'); // Найден дубликат
    } else {
      elementCount[array[i]] = true;
    }
  }
  return false; // Дубликаты не найдены
};

// весь массив из одинаковых элементов
let index = 0;
for (let i = 0; i < array.length; i++) {
  if (array[0] == array[i] ) {
  index++;
    };
};
console.log(index)
if(index == array.length){
  console.log("массив состоит из одинаковых элементов");
  }else{
    console.log("массив не состоит из одинаковых элементов")
  };

