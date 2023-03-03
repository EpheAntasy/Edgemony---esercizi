import './app.css';
import { useState } from 'react';
import Header from './components/header';
import Gallery from './components/gallery';
import ChampCard from './components/champCard';
import Footer from './components/footer';
import Banner from './components/banner';
import Hero from './components/hero/Hero';
import Slider from './components/slider/Slider';
import Modal from './components/modal';

const App = () => {
    const [modal, setModal] = useState({ visible: false, data: null });
    const [nightMode, setNightMode] = useState(false);

    return (
        <div className={!nightMode ? "App" : "App nightMode"}>
            <Header setNightMode={setNightMode} />
            <Hero />
            <h2 className='GallerySlider__title'>Modalità di Gioco</h2>
            <div className='GallerySlider__container'>
                <Gallery />
                <Slider />
            </div>
            <Banner isTitleRight image='https://www.leagueoflegends.com/static/marksman-b339ed8fd7e04ff2c3fca022c5d299fb.png' alt='jinx' title='GIOCA ORA!' />
            <ChampCard setIsOpen={setModal} />
            <Banner isImgRight image='https://www.leagueoflegends.com/static/support-d63ae08baf517425864ddc020a5871d5.png' alt='tresh' title='GIOCA ORA!' />
            <Footer />
            <Modal isOpen={modal.visible} setIsOpen={setModal} data={modal.data} />
        </div>
    )

}

export default App;