import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Container from "./components/Container";
import './App.css';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Container />
    </div>
    </Provider>
  );
}

export default App;
