// MINIMUM HW TASK 

// 1 task 
function preciseAddition(a, b) {
    let factor = 10; 
    return (a * factor + b * factor) / factor;
}
  
let additionResult = preciseAddition(0.1, 0.2);
console.log(additionResult); // 0.3

// 2 task 
let stringNumber = "1";
let number = 2;

// ---
let additionStringResult = Number(stringNumber) + number;

console.log(additionStringResult); // 3

// 3 task 
function calculateFilesOnFlashDrive(flashDriveSizeGB, fileSizeMB) {
    let flashDriveSizeMB = flashDriveSizeGB * 1024;
    let numberOfFiles = Math.floor(flashDriveSizeMB / fileSizeMB);
    return numberOfFiles;
}
  
// ---
let flashDriveSizeGB = 4; // 4 гб
let fileSizeMB = 820; // 820 мб
  
let filesResult = calculateFilesOnFlashDrive(flashDriveSizeGB, fileSizeMB);
console.log(`На флешку объемом ${flashDriveSizeGB} ГБ помещается ${filesResult} файлов размером ${fileSizeMB} МБ.`);
  
// MEDIUM HW TASK 

// 1 task 
// Функция для расчета количества шоколадок и сдачи
function calculateChocolatesAndChange(walletAmount, chocolatePrice) {
    let numberOfChocolates = Math.floor(walletAmount / chocolatePrice);
    let change = walletAmount % chocolatePrice;
    return {
      numberOfChocolates: numberOfChocolates,
      change: change
    };
}
  
// Пример 
let walletAmount = parseFloat(prompt("Cуммa денег в кошельке:")); // Сумма денег в кошельке
let chocolatePrice = parseFloat(prompt("Цена одной шоколадки:")); // Цена одной шоколадки
  
let chocolatesResult = calculateChocolatesAndChange(walletAmount, chocolatePrice);
console.log(`Можете купить ${chocolatesResult.numberOfChocolates} шоколадок.`);
console.log(`Остается сдача: ${chocolatesResult.change.toFixed(2)} денег.`);
  
// 2 task 
// Запрашиваем трехзначное число
let threeDigitNumber = parseInt(prompt("Введите трехзначное число:"));

// Извлекаем последнюю цифру
let lastDigit = threeDigitNumber % 10;

// Убираем последнюю цифру из числа
threeDigitNumber = Math.floor(threeDigitNumber / 10);

// Извлекаем следующую последнюю цифру 
let middleDigit = threeDigitNumber % 10;

// Убираем среднюю цифру из числа
threeDigitNumber = Math.floor(threeDigitNumber / 10);

// Оставшаяся цифра - первая цифра
let firstDigit = threeDigitNumber;

// Составляем перевернутое число
let reversedNumber = (lastDigit * 100) + (middleDigit * 10) + firstDigit;

// Выводим перевернутое число
console.log(`Перевернутое число: ${reversedNumber}`);
  
// MAXIMUM HW TASK 

// 1 task 
// Cумма вклада
let depositAmount = parseFloat(prompt("Введите сумму вклада в банк:"));

// Процентная ставка 
let annualInterestRate = 0.05;

// Количество месяцев
let numberOfMonths = 2;

// Расчет процентов
let interestAccrued = depositAmount * (annualInterestRate / 12) * numberOfMonths;

// Сумма начисленных процентов
console.log(`Сумма начисленных процентов за 2 месяца: ${interestAccrued.toFixed(2)}`);
