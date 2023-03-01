import './app.css';
import Header from './components/header';
import Gallery from './components/gallery';
import ChampCard from './components/champCard';
import Footer from './components/footer';
import Banner from './components/banner';
import Hero from './components/hero/Hero';

const App = () => {
    return (
        <div className='App'>
            <Header />
            <Hero />
            <Gallery />
            <Banner image='https://www.leagueoflegends.com/static/marksman-b339ed8fd7e04ff2c3fca022c5d299fb.png' alt='jinx' title='INIZIA SUBITO A GIOCARE!' />
            <ChampCard />
            <Banner isImgRight image='https://www.leagueoflegends.com/static/support-d63ae08baf517425864ddc020a5871d5.png' alt='tresh' title='INIZIA SUBITO A GIOCARE!' />
            <Footer />
        </div>
    )
}

export default App;