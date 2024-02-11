import React from 'react';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/home/home.jsx';

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
