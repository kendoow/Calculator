//доходы
const Salary = document.getElementById('Salary'),
      AdditionalIncome1 = document.getElementById('Income1.0'),
      AdditionalIncome2 = document.getElementById('Income2.0');
//расходы
const Rent = document.getElementById('Rent'),
      AdditionalSpending = document.getElementById('Additional1.0'),
      Transport = document.getElementById('Transport');
//total inputs
const TotalMonthInput = document.getElementById('total-month'),
      TotalDayInput = document.getElementById('total-day'),
      SaveUpPerYear = document.getElementById('total-year');
      SavingUp = document.getElementById('accumulation');
      Spend = document.getElementById('spend')
      RefreshBtn = document.getElementById('refresh');
const inputs = document.querySelectorAll('.input');

      
//алгоритмы для подсчета различных значений
      
const strToNum = str => str.value ? parseInt(str.value) : 0;
// прибыль в месяц
function totalPerMonth() {
    return strToNum(Salary) + strToNum(AdditionalIncome1) + strToNum(AdditionalIncome2);
}
// траты в месяц      
function totalCosts() {
    return strToNum(Rent) + strToNum(AdditionalSpending) + strToNum(Transport);
}
      
// доступно в месяц
const countAvailableMoney = () => totalPerMonth() - totalCosts();
      countAvailableMoneyWSaveup = () => countAvailableMoney() - savingUp();
// доступно в день
const countDailyIncome = () => Math.floor((totalPerMonth() - totalCosts()) / 30);

// экномим
const savingUp = () => Math.floor(countAvailableMoney() * 0.1)

// в копилку за год
const saveUpPerYear = () => savingUp() * 12;


RefreshBtn.onclick = () => { 
    TotalMonthInput.value = countAvailableMoneyWSaveup();
    TotalDayInput.value = countDailyIncome();
    SavingUp.value = savingUp();
    Spend.value = totalCosts();
    SaveUpPerYear.value = saveUpPerYear();
}