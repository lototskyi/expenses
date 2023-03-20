import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
	{ id: 'e1', title: 'Car Insurance', amount: 264.67, date: new Date(2023, 3, 15) },
	{ id: 'e2', title: 'JS Course', amount: 215.23, date: new Date(2023, 3, 13) },
	{ id: 'e3', title: 'New Mobile phone', amount: 715.22, date: new Date(2020, 3, 12) },
	{ id: 'e4', title: 'Gift', amount: 516.18, date: new Date(2021, 3, 9) }
];

const App = () => {

	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses items={expenses}/>
		</div>
	);
}

export default App;
