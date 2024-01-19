import './App.css';
import Header from './header.js';
import Footer from './footer.js';

function App() {
  return (
    <div className='App'>
		<div className='app'>
			<Header />
			<main className='main'>
				<p>Finsweet</p>
			</main>
			<Footer />
		</div>
    </div>
  );
}

export default App;
