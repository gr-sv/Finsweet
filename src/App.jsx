import React from 'react';
import Header from './components/widgets/header/header.jsx';
import Footer from './components/widgets/footer/footer.jsx';
import Home from './Pages/home/home.jsx';

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
