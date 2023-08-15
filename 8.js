let myMap = new Map([
    ['key1', 'value4'],
    ['key2', 'value3'],
    ['key3', 'value2']
  ]);
  myMap.set('key4', 'value1');
  for (let pair of myMap) {
    console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
  }; 