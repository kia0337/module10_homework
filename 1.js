// Проверка на четность
let res = prompt("Введите число");
let result = +res; 
if ((typeof(result) == "number") && (isNaN(result) == 'NaN')) {
    if (result % 2 == 0){
        console.log('Число  четное ')
    } else  {
        console.log('Число  нечетное ')
    }
    } else {
    console.log("Упс, кажется, вы ошиблись")
};
