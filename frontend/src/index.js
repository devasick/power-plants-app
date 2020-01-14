import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './Common/Style.scss';  

import * as serviceWorker from './serviceWorker';
function App() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
  
  export default App;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
