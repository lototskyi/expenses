import Expenses from "./components/Expenses/Expenses";

const App = () => {

	const expenses = [
		{ id: 'e1', title: 'Car Insurance', amount: 264.67, date: new Date(2023, 3, 15) },
		{ id: 'e2', title: 'JS Course', amount: 215.23, date: new Date(2023, 3, 13) },
		{ id: 'e3', title: 'New Mobile phone', amount: 715.22, date: new Date(2023, 3, 12) },
		{ id: 'e4', title: 'Gift', amount: 516.18, date: new Date(2023, 3, 9) }
	];

	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses items={expenses}/>
		</div>
	);
}

export default App;
