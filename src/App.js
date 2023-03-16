import ExpenseItem from "./components/ExpenseItem";

function App() {

	const expenses = [
		{ id: 'e1', title: 'Car Insurance', amount: 264.67, date: new Date(2023, 3, 15) },
		{ id: 'e2', title: 'JS Course', amount: 215.23, date: new Date(2023, 3, 13) },
		{ id: 'e3', title: 'New Mobile phone', amount: 715.22, date: new Date(2023, 3, 12) },
		{ id: 'e4', title: 'Gift', amount: 516.18, date: new Date(2023, 3, 9) }
	];

	return (
		<div>
			<h2>Let's get started!</h2>
			<ExpenseItem 
				title={expenses[0].title} 
				amount={expenses[0].amount} 
				date={expenses[0].date} />
			<ExpenseItem 
				title={expenses[1].title} 
				amount={expenses[1].amount} 
				date={expenses[1].date} />
			<ExpenseItem 
				title={expenses[2].title} 
				amount={expenses[2].amount} 
				date={expenses[2].date} />
			<ExpenseItem 
				title={expenses[3].title} 
				amount={expenses[3].amount} 
				date={expenses[3].date} />
		</div>
	);
}

export default App;
