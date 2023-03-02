import './index.css'
import SliderBtn from '../sliderBtn/SliderBtn'
import { useState } from 'react';

const Slider = () => {

    const videos = [
        "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt04d1a8eb899e9dd4/5d87c234c7fab32df76ddee5/summonersrift.mp4",
        "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt368bbe12c8917439/5d87c69c5b3acf6e5c6efa6a/howlingabyss.mp4",
        "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt358cbfdb47618c25/5d87c2345b3acf6e5c6efa5e/teamfighttactics.mp4",
    ]

    const [videoPlay, setVideoPlay] = useState(0)

    const prevVideo = () => setVideoPlay((prevIndexVideo) => prevIndexVideo < 1 ? 2 : prevIndexVideo - 1)

    const nextVideo = () => setVideoPlay((prevIndexVideo) => prevIndexVideo > 1 ? 0 : prevIndexVideo + 1)


    return (
        <div className="Slider">
            <div className="Slider__container">
                <video className='video' src={videos[videoPlay]} autoPlay={true} />
                <div className="Btn__container">
                    <SliderBtn text="<" onClickFun={prevVideo}></SliderBtn>
                    <SliderBtn text=">" onClickFun={nextVideo}></SliderBtn>
                </div>
            </div>
        </div>
    )
}

export default Slider