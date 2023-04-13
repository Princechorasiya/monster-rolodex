import "./App.css";
import React, { Component } from "react";
import CardList from "./component/CardList/CardList.Component";
import Search from "./component/Search/Search.Component";

class App extends Component {
	//method coming from components
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};

		// this.handleChange = this.handleChange.bind(this); arrow functions directly bind this keyword to the class so we dont have to this agian and again

		// arrow have lexical scope
	}
	handleChange = (e) => {
		this.setState({ searchField: e.target.value }, () =>
			console.log(this.state.searchField)
		);
		// console.log(this.state); //this is one behind
	};
	//point at which the component id rendered
	componentDidMount() {
		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then((response) => response.json())
		// 	.then((users) => this.setState({ monsters: users }));

		const getData = async () => {
			// console.log("working fine");
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			// console.log(response);
			const result = await response.json();
			// console.log(result);
			this.setState({ monsters: result });
		};
		getData();
	}

	//we need usique id because to react needs to know which one to change upon changes doesnt rerender all of them
	render() {
		const { monsters, searchField } = this.state;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			// class is  className
			// anything inside { } is js code

			<div className='App'>
				<h1>MONSTER-ROLODEX</h1>
				{/* <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>{this.state.string}</p>
					<button
						onClick={() =>
							this.setState({
								string: "hello liza",
							})
						}
					>
						Change name
					</button>
				</header> */}
				<Search placeholder='search monster' handleChange={this.handleChange} />
				<CardList name='prince' monsters={filteredMonsters} />

				{/* value changes  state changes and thus render si called again  */}
				{/* //we generally get the data from the database either form our server or 3rd party server*/}
			</div>
		);
	}
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
