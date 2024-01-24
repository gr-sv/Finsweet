import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className='app'>
		<Header />
		<main className='main'>
			<h1 className='visually-hidden'>Finsweet</h1>
		</main>
		<Footer />
    </div>
  );
}

export default App;
