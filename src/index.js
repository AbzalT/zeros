// https://dic.academic.ru/dic.nsf/ruwiki/889321

// Сколько раз множитель встречается в числе
countFactor = (value, base) => {
  count = 0;
  while(value % base == 0 && value!=0) {
    count++;
    value=~~(value/base);    
  }
  return count;
}
// function zeros(n, base) {
//   var counter = 0;
//   for (var i = base; n/i >= 1; i *= base)
//     counter += Math.floor(n/i);
//   return counter;
// }

// Факторизация - разложение числа на множители
factors = (number, element) => 
  element.endsWith('!!') ?           
      (
        // Двойной факториал
        (number % 2 == 0) ? [...Array(number/2).keys()].map((x,i)=>2*++i) : [...Array((number-1)/2+1).keys()].map((x,i)=> 2*i+1)
      ) : 
      (
        // Простой факториал      
        [...Array(number).keys()].map(x => ++x)
      );

// Конвертируем строку в число
// Знаки !! и ! при конвертации можно не удалять - parseInt их пропустит
// Разложение числа на множители
// Сумма 2 в каждом множителе
// Сумма 5 в каждом множителе
module.exports = expression => {
  count2 = 0;
  count5 = 0;
  expression.split('*').forEach(element => {        
    factors(parseInt(element,10), element).forEach(value => { 
      count2+= countFactor(value,2);            
      count5+= countFactor(value,5);                        
    });
  });
  return Math.min(count2,count5); 
}
