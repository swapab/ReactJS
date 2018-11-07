import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SharedSnackbarProvider } from './SharedSnackbar.context';
import ButtonA from './ButtonA.component';
import ButtonB from './ButtonB.component';

import Calculator from './lifting-state-up/Calculator';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
}

class App extends Component {
  render() {
    return (
      <div styles={styles.app}>
        <SharedSnackbarProvider>
          <ButtonA/>
          <ButtonB/>
        </SharedSnackbarProvider>
      </div>
    )
  }
}

// export default App;

export default Calculator;

