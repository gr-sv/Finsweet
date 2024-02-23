import React from 'react';
import Layout from './components/widgets/layout/layout.jsx'

function App ({ children }) {
  return (
    <div className='app'>
		<Layout>
			{ children }
		</Layout>		
    </div>
  );
}

export default App;
