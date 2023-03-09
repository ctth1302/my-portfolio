import './App.css';
import useLocalStorage from 'use-local-storage';
import Projects from './pages/projects';
import Contact from './pages/contact';
import About from './pages/about';
import Home from './pages/home';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <main data-theme={theme}>
      <div className="d-flex main-body mobile-view">
        {/* PROFILE & MENU */}
        <aside
          className="col-12 col-lg-3 d-flex align-items-center text-center"
          id="sideMenu"
        >
          <div className="profile">
            <a href="https://ctth1302.github.io/my-portfolio/">
              <img src="./fav.png" alt="" />
            </a>
            <a href="https://ctth1302.github.io/my-portfolio/">
              <h1 className="display-5">HANG CHUNG</h1>
            </a>
            <h3>REACT DEVELOPER</h3>
          </div>
          <div className="navbar-desktop">
            <nav className="navbar">
              <ul className="nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#section-home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-about">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-contact">
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="navbar-mobile">
            <nav className="navbar">
              <ul className="nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#section-home"
                  >
                    <i class="fa-solid fa-house"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-about">
                    <i class="fa-solid fa-user"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-projects">
                    <i class="fa-solid fa-list"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-contact">
                    <i class="fa-solid fa-address-card"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <button onClick={switchTheme} className="switchButton">
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <div className="col-12 col-lg-9 main-content">
          <Home></Home>
          <About></About>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>
    </main>
  );
}

export default App;
