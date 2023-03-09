import ResumeDownload from '../download';

const Home = () => {
  return (
    <div
      className="section-home d-flex align-items-center justify-content-between"
      id="section-home"
    >
      <div className="introduction col-12 col-lg-6">
        <h1 className="display-4">
          <strong>HELLO!</strong>
        </h1>
        <h1 className="display-4">
          <strong>I AM HANG</strong>
        </h1>
        <p>
          A React developer with a strong background in business and a passion
          for creating dynamic and engaging user interfaces.
        </p>
        <div>
          <ResumeDownload />
        </div>
      </div>
      <div className="about-img">
        <img src="./imgs/Subject.png" alt="" />
      </div>
    </div>
  );
};
export default Home;
