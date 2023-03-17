import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__overlay"></div>
      <div className="Hero__text">
        <h1>Scegli il meglio...</h1>
        <h2>Fai shopping con noi!</h2>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2017/09/23/16/54/ludwigsburg-germany-2779468_640.jpg"
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
