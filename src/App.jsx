import React from 'react';
import Layout from './components/widgets/layout/layout.jsx'
import Header from './components/widgets/header/header.jsx';
import Footer from './components/widgets/footer/footer.jsx';
import Home from './Pages/home/home.jsx';

function App({ children }) {
  return (
    <div className='app'>
		<Layout>
			{ children }
		</Layout>		
    </div>
  );
}

export default App;
