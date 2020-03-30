var money = prompt ("Ваш бюджет на месяц?", ' ');
var time = prompt ('Введите дату в формате YYYY-MM-DD', '');


var appData = {
			budget: money,
			timeData: time,
			expenses: {},
			optionalExpenses: {},
			income: [],
			savings: false
};

alert(appData.budget / 30);


//Записать ответы в объект expenses в формате:
//expenses: {
//“ответ на первый вопрос” : “ответ на второй вопрос” 
//}

var a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),

	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),

	a4 = prompt("Во сколько обойдется?", '');
	

//appData.expenses.a1 = a2;
//appData.expenses.a3 = a4;

var expenses = {a1, a2, a3, a4};

console.log("Расходы в этом месяце:");
console.log(a1, ':', a2);
console.log(a3, ':', a4);

