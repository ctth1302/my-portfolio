const About = () => {
  return (
    <div className="section-about" id="section-about">
      <h1 className="display-4">
        <strong>ABOUT ME</strong>
      </h1>
      <p>
        <small>
          {' '}
          I am a React developer focusing on becoming a full-stack developer who
          has transitioned to the tech industry from a business background. I am
          passionate about using technology to create meaningful solutions that
          make a positive impact on people's lives.
        </small>
      </p>
      <p>
        <small>
          My experience in business has given me a unique perspective and
          skillset that I bring to my development work. I understand the
          importance of user experience and how it can impact business success.
          Currently I have been continuously expanding my skills and knowledge
          in front-end hands-on experience in HTML, CSS, JavaScript, and React.
          With hands-on experience in building and deploying dynamic web
          applications, I am confident in my ability to create user-friendly and
          visually appealing websites.
        </small>
      </p>
      <p>
        <small>
          Additionally, I am constantly seeking to expand my skillset and stay
          up to date with the latest industry trends and technologies. I am a
          quick learner, a team player and I have a strong work ethic. I am
          dedicated to delivering high-quality work and exceeding the
          expectations of my clients. If you are interested in working with me
          or have a project you would like to discuss, please don't hesitate to
          reach out. Thank you for taking the time to visit my portfolio
          website!
        </small>
      </p>
      <h1 className="display-4">
        <strong>SKILLS</strong>
      </h1>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-3">
          <div className="card h-100 card border-success mb-3">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div>
                <i className="fa-brands fa-css3-alt"></i>
                <span>CSS</span>
              </div>
              <div>
                <i className="fa-brands fa-bootstrap"></i>
                <span>Bootstrap</span>
              </div>
              <div>
                <i class="fa-solid fa-file-code"></i>
                <span>Tailwind</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card h-100 card border-success mb-3">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div>
                <i className="fa-brands fa-square-js"></i>
                <span>JavaScript</span>
              </div>
              <div>
                <i className="fa-brands fa-react"></i>
                <span>React</span>
              </div>
              <div>
                <i class="fa-solid fa-file-code"></i>
                <span>Next JS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card h-100 card border-success mb-3">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div>
                <i className="fa-brands fa-java"></i>
                <span>Java</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card h-100 card border-success mb-3">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div>
                <i className="fa-brands fa-php"></i>
                <span>PHP</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card h-100 card border-success mb-3">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div>
                <i className="fa-solid fa-database"></i>
                <span>MySQL</span>
              </div>
              <div>
                <i className="fa-solid fa-database"></i>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col mb-3">
          <div className="card h-100 card border-success mb-3">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <div>
                <i className="fa-brands fa-jira"></i>
                <span>Jira</span>
              </div>
              <div>
                <i class="fa-brands fa-square-github"></i>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
