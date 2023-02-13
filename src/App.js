import './App.css';
import ResumeDownload from './download';

function App() {
  return (
    <main>
      <div className='d-flex mt-5 mobile-view'>
        {/* PROFILE & MENU */}        
        <aside className='col-12 col-lg-3 mt-5 d-flex align-items-center text-center' id='sideMenu'>
          <div className='profile'>
            <a href='/'><img src='/fav.png' alt='' /></a>
            <a href='/'><h1 className='display-5'>HANG CHUNG</h1></a>
            <h3>WEB DEVELOPER</h3>
          </div>
          <nav className='navbar'>
            <ul className='nav'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#section-home'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#section-about'>About Me</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#section-projects'>Projects</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#section-contact'>Contact Me</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className='col-12 col-lg-9 mt-5'>
          <div className='section-home d-flex align-items-center justify-content-between' id='section-home'>
            <div className='introduction col-12 col-lg-6'>
              <h1 className='display-4'><strong>HELLO!</strong></h1>
              <h1 className='display-4'><strong>I AM HANG</strong></h1>
              <p>A recent graduate in the field of computer science with a strong background in business.</p>
              <div>
                <ResumeDownload />
              </div>
            </div>
            <div className='about-img'>
              <img src='/imgs/Subject.png' alt='' />
            </div>
          </div>
          <div className='section-about' id='section-about'>
            <h1 className='display-4'><strong>ABOUT ME</strong></h1>
            <p><small>As a recent graduate in the field of computer science and with a background in business, I bring a unique perspective to the world of web development. After recognizing my passion for technology and problem-solving, I made the switch to pursue a career in web development focusing on becoming a full-stack developer.</small></p>
            <p><small>My background in business has given me a strong understanding of the importance of delivering practical solutions that meet the needs of the user. Currently I have been continuously expanding my skills and knowledge in front-end hands-on experience in HTML, CSS, JavaScript, and React. With hands-on experience in building and deploying dynamic web applications, I am confident in my ability to create user-friendly and visually appealing websites.</small></p>
            <p><small>Additionally, I am constantly seeking to expand my skillset and stay up to date with the latest industry trends and technologies. I am a quick learner, a team player and I have a strong work ethic. I am excited to bring my skills, passion, and business acumen to a company where I can contribute to the development of high-quality web applications and help drive business success.</small></p>
            <h1 className='display-4'><strong>SKILLS</strong></h1>
            <div className='row row-cols-1 row-cols-md-3'>
              <div className='col mb-3'>
                <div className='card h-100 card border-success mb-3'>
                  {/* <div className='card-header'>Header</div> */}
                  <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <div>
                      <i className='fa-brands fa-css3-alt'></i>
                      <span>CSS</span>
                    </div>
                    <div>
                      <i className='fa-brands fa-bootstrap'></i>
                      <span>Bootstrap</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col mb-3'>
                <div className='card h-100 card border-success mb-3'>
                  {/* <div className='card-header'>Header</div> */}
                  <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <div>
                      <i className='fa-brands fa-square-js'></i>
                      <span>JavaScript</span>
                    </div>
                    <div>
                      <i className='fa-brands fa-react'></i>
                      <span>ReactJS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col mb-3'>
                <div className='card h-100 card border-success mb-3'>
                  {/* <div className='card-header'>Header</div> */}
                  <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <div>
                      <i className='fa-brands fa-java'></i>
                      <span>Java</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col mb-3'>
                <div className='card h-100 card border-success mb-3'>
                  {/* <div className='card-header'>Header</div> */}
                  <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <div>
                      <i className='fa-brands fa-php'></i>
                      <span>PHP</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col mb-3'>
                <div className='card h-100 card border-success mb-3'>
                  {/* <div className='card-header'>Header</div> */}
                  <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <div>
                      <i className='fa-solid fa-database'></i>
                      <span>MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col mb-3'>
                <div className='card h-100 card border-success mb-3'>
                  {/* <div className='card-header'>Header</div> */}
                  <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <div>
                      <i className='fa-brands fa-jira'></i>
                      <span>Jira</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='section-projects' id='section-projects'>
            <h1 className='display-4'><strong>PROJECTS</strong></h1>
            <div className='container-fluid'>
              <div className='row row-cols-1 mb-3 border border-success'>
                <div className='col border-bottom border-success'>
                  <p><strong>Portfolio Website</strong></p>
                </div>
                <div className='col'>
                  <p><small>URL: <a href='https://ctth1302.github.io/my-portfolio/'>Hang's Portfolio</a></small></p>
                </div>
                <div className='col'>
                  <img src='/imgs/myPortfolio.png' alt='' />
                </div>
                <div className='col'>
                  <p><small>Description: A personal website showcasing my skills, projects, and experiences</small></p>
                </div>
                <div className='col'>
                  <p><small>Technologies: HTML, CSS, Bootstrap, JavaScript, React</small></p>
                </div>
              </div>
              <div className='row row-cols-1 mb-3 border border-success'>
                <div className='col border-bottom border-success'>
                  <p><strong>Immigration Website</strong></p>
                </div>
                <div className='col'>
                  <p><small>URL: <a href='https://www.tbmango.com.au'>TBMango Pty Ltd</a></small></p>
                </div>
                <div className='col'>
                  <img src='/imgs/TBMango.png' alt='' />
                </div>
                <div className='col'>
                  <p><small>Description: A website for an immigration services company to offer a self immigration point calculator and to collect its client's information before consultation, utilizing Wix platform and Velo's APIs including:
                    <li><a href='https://www.wix.com/velo/reference/$w'>Wix Editor Elements ($w)</a></li>
                    <li><a href='https://www.wix.com/velo/reference/wix-crm'>wix-crm</a></li>
                    <li><a href='https://www.wix.com/velo/reference/wix-dataset'>wix-dataset</a></li>
                    <li><a href='https://www.wix.com/velo/reference/wix-members'>wix-members</a></li>
                    <li><a href='https://www.wix.com/velo/reference/wix-bookings'>wix-bookings</a></li>
                  </small></p>
                </div>
                <div className='col'>
                  <p><small>Technologies: Wix, Velo's APIs</small></p>
                </div>
              </div>
              <div className='row row-cols-1 mb-3 border border-success'>
                <div className='col border-bottom border-success'>
                  <p><strong>E-Commerce Website</strong></p>
                </div>
                <div className='col'>
                  <p><small>URL: <a href='https://4bio.com.au/'>4BIO Shop</a></small></p>
                </div>
                <div className='col'>
                  <img src='/imgs/4bio.png' alt='' />
                </div>
                <div className='col'>
                  <p><small>Description: A e-commerce platform for environmental friendly brands to offer their products to end users, built using Shopify</small></p>
                </div>
                <div className='col'>
                  <p><small>Technologies: Shopify, Liquid, CSS</small></p>
                </div>
              </div>
              <div className='row row-cols-1 mb-3 border border-success'>
                <div className='col border-bottom border-success'>
                  <p><strong>University's Project</strong></p>
                </div>
                <div className='col'>
                  <p><small>URL: <a href='/'>A content management system for an e-commerce website</a></small></p>
                </div>
                <div className='col'>
                  <img src='/imgs/uni_admin.png' alt='' />
                  <img src='/imgs/uni_manager.png' alt='' />
                </div>
                <div className='col'>
                  <p><small>Project's Requirements:
                    <li>Build a website, with an authenticated login, where employees with a role of either administrator or manager can manage their web content.</li>
                    <li>Develop a page design and use cases to guide the development of a web based content management system.</li>
                    <li>Provide pages whereby authorised manager users can add, edit and remove data that is used to populate the e-commerce webpages.</li>
                    <li>Provide pages where authorised administrator users can add, edit and remove users of the content management system.</li>
                    <li>Provide a function to automatically log all changes.</li>
                    <li>Provide a function to allow a manager user to report on all changes.</li>
                  </small></p>
                </div>
                <div className='col'>
                  <p><small>Technologies: HTML, CSS, Bootstrap, JavaScript, PHP, MySQL</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className='section-contact' id='section-contact'>
            <h1 className='display-4'><strong>CONTACT ME</strong></h1>
            <p><small><i class='fa-solid fa-envelope'></i>Email: <a href='mailto:ctth1302@gmail.com'>ctth1302@gmail.com</a></small></p>
            <p><small><i class='fa-brands fa-linkedin'></i>LinkedIn: <a href='https://www.linkedin.com/in/hangchung/'>my profile</a></small></p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
