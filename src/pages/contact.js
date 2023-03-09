const Contact = () => {
  return (
    <div className="section-contact" id="section-contact">
      <h1 className="display-4">
        <strong>CONTACT ME</strong>
      </h1>
      <p>
        <small>
          <i class="fa-solid fa-envelope"></i>Email:{' '}
          <a href="mailto:ctth1302@gmail.com">ctth1302@gmail.com</a>
        </small>
      </p>
      <p>
        <small>
          <i class="fa-brands fa-linkedin"></i>LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/hangchung/">My Profile</a>
        </small>
      </p>
      <p>
        <small>
          <i class="fa-brands fa-square-github"></i>Github:{' '}
          <a href="https://github.com/ctth1302">My Repositories</a>
        </small>
      </p>
    </div>
  );
};
export default Contact;
