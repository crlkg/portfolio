import './About.scss';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <h2 className="section__title">About</h2>

        <div className="about__content">
          <p className="about__text">
            안녕하세요, 4년차 웹퍼블리셔 정다혜입니다.
            <br />
            다양한 웹 환경에서 실무를 경험한 퍼블리셔입니다. 적응형과 반응형
            프로젝트를 수행하며 구조와 유지보수를 고려한 마크업을 지향합니다.
          </p>

          <ul className="about__list">
            <li className="about__item">Semantic Markup</li>
            <li className="about__item">Responsive Web</li>
            <li className="about__item">Adaptive Layout 경험</li>
            <li className="about__item">유지보수를 고려한 구조 설계</li>
          </ul>

          <div className="about__skills">
            <h3 className="about__skills-title">Skills</h3>
            <div className="about__skills-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>jQuery</span>
              <span>Responsible Web</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>GitHub</span>
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
