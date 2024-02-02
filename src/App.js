import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';

function App() {
  return (
    <div className='app'>
		<Header />
		<Home />
		<Footer />
    </div>
  );
}

export default App;
