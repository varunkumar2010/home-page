// import logo from './assets/logo.png';
// import './App.css';
// import Header from '.src/pages/components/header';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//         <Header/>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Header from 'mom/src/pages/components/header';
// import Body from './body';


function App() {
  return (
      <div>
        <Header />
        <main style={{ padding: '20px', textAlign: 'center' }}>
          {/* <h1 style={{ color: '#1a4d4d' }}>Welcome to the Office Portal</h1>
          <p style={{ color: '#333' }}>User details.</p> */}
        </main>
       
      </div>
    
  );
}

export default App;