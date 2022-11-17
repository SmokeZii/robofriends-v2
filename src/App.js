import React, {Component} from "react";
import {robots} from "./robots";

// Components
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: "",
        }
    }

    onSreachInput = ( {target} ) => {
        this.setState({searchfield: target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter( robot => robot.name.toLowerCase().includes( this.state.searchfield.toLocaleLowerCase() ));
        return (
            <main className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchInput={this.onSreachInput} />
                <CardList robots={filteredRobots}/>
            </main>
        )
    }
}

export default App;