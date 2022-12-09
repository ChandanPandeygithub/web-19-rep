import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Setting up state
    this.state = {
      userInput: "",
      list: []
    };
  }

  // Set a user input value
  updateInput(value) {
    this.setState({
      userInput: value
    });
  }

  // Add item if user input in not empty
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        value: this.state.userInput
      };

      // Update list
      const list = [...this.state.list];
      list.push(userInput);

      // reset state
      this.setState({
        list,
        userInput: ""
      });
    }
  }

  // Function to delete item from list use id to delete
  deleteItem(key) {
    const list = [...this.state.list];

    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in state
    this.setState({
      list: updateList
    });
  }

  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <hr />
        <div>
          <input
            type="text"
            placeholder="add item . . . "
            value={this.state.userInput}
            onChange={(item) => this.updateInput(item.target.value)}
          />
          <input type="button" onClick={() => this.addItem()} value="ADD" />
        </div>
        <div>
          <ul>
            {/* map over and print items */}
            {this.state.list.map((item) => {
              return (
                <li key={item.id} onClick={() => this.deleteItem(item.id)}>
                  {item.value}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
