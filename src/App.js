import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import data from "./data.json";
import news from "./news.json";
import Header from "./header";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { donnees: data, overviews: news, theme: "white" };
		this.handleToogle = () => {
			console.log("toogle");
			// this.setState((previousState) => ({
			// 	theme: !previousState.theme,
			// }));
		};
	}
	render() {
		return (
			<div className='w-2/3 shadow-md m-auto mt-5'>
				<Header handleToogle={this.handleToogle()} />
				<div className='flex flex-wrap w-128 justify-center bord shadow-md'>
					{this.state.donnees.map((item, i) => (
						<Card key={i + 1} id={i + 1} item={item} />
					))}
				</div>
				<h1 className='text-gray-400'>overview-today</h1>
				<div className='flex flex-wrap w-128 h-128 justify-center bord shadow-md'>
					{this.state.overviews.map((item, i) => (
						<Card2 key={i + 1} id={i + 1} item={item} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
