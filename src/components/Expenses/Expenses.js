import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css';

const Expenses = ({ items }) => {


	const [filteredYear, setFilteredYear] = useState('2023');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	}

	const filteredExpenses = items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>

			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

				{filteredExpenses.map(expense => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date} />
				))}
			</Card>
		</div>
	);
}

export default Expenses;