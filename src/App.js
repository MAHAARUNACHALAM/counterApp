
import { Component } from "react";
import './App.css';
import Counter from './components/counter';

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

//changing the App to a class component and implement the react lifecycle methods
class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}


export default App;
