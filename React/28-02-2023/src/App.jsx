import './app.css';
import Header from './components/header';
import ChampCard from './components/champCard';
import Footer from './components/footer';
 
const App = () => {
    return(
        <div className='App'>
            <Header />
            <ChampCard/>
            <Footer />
        </div>
    )
}

export default App;