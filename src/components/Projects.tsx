import './Projects.scss';

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="section__inner">
        <h2 className="section__title">Projects</h2>

        <div className="projects__list">
          <div className="projects__item">
            <p className="projects__period">2025.09 ~ 2026.02</p>
            <h3 className="projects__name">
              현대오토에버 GSPS / SHE Portal 구축
            </h3>
            <p className="projects__desc">
              React 기반 사내 시스템 구축 및 UI 퍼블리싱
            </p>
            <div className="projects__stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>HTML5</span>
              <span>SCSS</span>
              <span>AG-Grid</span>
              <span>MUI</span>
              <span>Design System Component</span>
            </div>
          </div>

          <div className="projects__item">
            <p className="projects__period">2023.06 ~ 2025.09</p>
            <h3 className="projects__name">EBSe English</h3>
            <p className="projects__desc">
              유지보수 및 운영, 웹접근성 개선 작업
            </p>
            <div className="projects__stack">
              <span>HTML5</span>
              <span>CSS</span>
              <span>jQuery</span>
              <span>Responsive</span>
            </div>
          </div>

          <div className="projects__item">
            <p className="projects__period">2023.06 ~ 2025.01</p>
            <h3 className="projects__name">함께학교</h3>
            <p className="projects__desc">신규 사이트 구축 퍼블리싱</p>
            <div className="projects__stack">
              <span>Responsive</span>
              <span>Semantic Markup</span>
              <span>SCSS</span>
            </div>
          </div>

          <div className="projects__item">
            <p className="projects__period">2022.03 ~ 2023.06</p>
            <h3 className="projects__name">매일유업 매일아이 / 우유안부</h3>
            <p className="projects__desc">유지보수 및 운영 (적응형)</p>
            <div className="projects__stack">
              <span>Adaptive</span>
              <span>HTML5</span>
              <span>Semantic</span>
              <span>jQuery</span>
              <span>JSP</span>
            </div>
          </div>

          <div className="projects__item">
            <p className="projects__period">2022.03 ~ 2023.06</p>
            <h3 className="projects__name">에쓰오일 보너스카드</h3>
            <p className="projects__desc">유지보수 및 운영 (적응형)</p>
            <div className="projects__stack">
              <span>Adaptive</span>
              <span>HTML5</span>
              <span>Semantic</span>
              <span>jQuery</span>
              <span>JSP</span>
            </div>
          </div>

          <div className="projects__item">
            <p className="projects__period">2022.03 ~ 2023.06</p>
            <h3 className="projects__name">LG생활건강 오휘 / 빌리프</h3>
            <p className="projects__desc">유지보수 및 운영 (적응형)</p>
            <div className="projects__stack">
              <span>Adaptive</span>
              <span>HTML5</span>
              <span>Semantic</span>
              <span>jQuery</span>
              <span>JSP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
