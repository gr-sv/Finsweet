import './App.css';
import Header from './header.js';
import Footer from './footer.js';

function App() {
  return (
    <div className='App'>
		<div className='app'>
			<Header />
			<main className='main'>
				<h1>Finsweet</h1>
			</main>
			<Footer />
		</div>
    </div>
  );
}

export default App;
