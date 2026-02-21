import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__intro">Front-end Publisher</p>

        <h2 className="hero__title">
          Hi, I’m <span>DAHYE</span>
        </h2>

        <p className="hero__desc">
          I build clean and accessible web interfaces.
        </p>
      </div>
    </section>
  );
};

export default Hero;
