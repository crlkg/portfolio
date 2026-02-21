import './Contact.scss';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section__inner">
        <h2 className="section__title">Contact</h2>

        <div className="contact__content">
          <p className="contact__text">
            새로운 프로젝트와 협업을 기다리고 있습니다.
          </p>

          <ul className="contact__list">
            <li>
              <span>Email</span>
              <a href="mailto:crlkg.j@gmail.com">crlkg.j@gmail.com</a>
            </li>

            <li>
              <span>GitHub</span>
              <a
                href="https://github.com/crlkg"
                target="_blank"
                rel="noreferrer"
              >
                github.com/crlkg
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
