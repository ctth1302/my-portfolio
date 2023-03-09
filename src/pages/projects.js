const Projects = () => {
  return (
    <div className="section-projects" id="section-projects">
      <h1 className="display-4">
        <strong>PROJECTS</strong>
      </h1>
      <div className="container-fluid">
        <div className="row row-cols-1 mb-3 border border-success">
          <div className="col border-bottom border-success">
            <p>
              <strong>Portfolio Website - This Project</strong>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                URL:{' '}
                <a href="https://ctth1302.github.io/my-portfolio/">
                  Hang's Portfolio
                </a>
              </small>
            </p>
          </div>
          <div className="col">
            <img src="./imgs/myPortfolio.png" alt="" />
          </div>
          <div className="col">
            <p>
              <small>
                Description: A personal website showcasing my skills, projects,
                and experiences
              </small>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                Technologies: HTML, CSS, Bootstrap, JavaScript, React, GitHub
              </small>
            </p>
          </div>
        </div>
        <div className="row row-cols-1 mb-3 border border-success">
          <div className="col border-bottom border-success">
            <p>
              <strong>E-Commerce Website</strong>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                URL:{' '}
                <a href="https://amazon-ctth1302.vercel.app/">
                  Simple E-Commerce Page
                </a>
              </small>
            </p>
          </div>
          <div className="col">
            <img src="./imgs/ecommerce.png" alt="" />
          </div>
          <div className="col">
            <p>
              <small>
                Description: A simple e-commerce website with:
                <ul>
                  <li>front end: using NextJS and Tailwind CSS</li>
                  <li>
                    backend web API: using Next Connect and MongoDB to handle
                    authentication, order history
                  </li>
                  <li>payment gateway: Paypal</li>
                </ul>
              </small>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                Technologies: HTML, CSS, Tailwind, JavaScript, React, NextJS,
                MongoDB, GitHub
              </small>
            </p>
          </div>
        </div>
        <div className="row row-cols-1 mb-3 border border-success">
          <div className="col border-bottom border-success">
            <p>
              <strong>University's Project</strong>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                URL: A content management system for an e-commerce website
              </small>
            </p>
          </div>
          <div className="col">
            <img src="./imgs/uni_admin.png" alt="" />
            <img src="./imgs/uni_manager.png" alt="" />
          </div>
          <div className="col">
            <p>
              <small>
                Project's Requirements:
                <li>
                  Build a website, with an authenticated login, where employees
                  with a role of either administrator or manager can manage
                  their web content.
                </li>
                <li>
                  Develop a page design and use cases to guide the development
                  of a web based content management system.
                </li>
                <li>
                  Provide pages whereby authorised manager users can add, edit
                  and remove data that is used to populate the e-commerce
                  webpages.
                </li>
                <li>
                  Provide pages where authorised administrator users can add,
                  edit and remove users of the content management system.
                </li>
                <li>Provide a function to automatically log all changes.</li>
                <li>
                  Provide a function to allow a manager user to report on all
                  changes.
                </li>
              </small>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                Technologies: HTML, CSS, Bootstrap, JavaScript, PHP, MySQL
              </small>
            </p>
          </div>
        </div>
        <div className="row row-cols-1 mb-3 border border-success">
          <div className="col border-bottom border-success">
            <p>
              <strong>Immigration Website</strong>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                URL: <a href="https://www.tbmango.com.au">TBMango Pty Ltd</a>
              </small>
            </p>
          </div>
          <div className="col">
            <img src="./imgs/TBMango.png" alt="" />
          </div>
          <div className="col">
            <p>
              <small>
                Description: A website for an immigration services company to
                offer a self immigration point calculator and to collect its
                client's information before consultation, utilizing Wix platform
                and Velo's APIs including:
                <li>
                  <a href="https://www.wix.com/velo/reference/$w">
                    Wix Editor Elements ($w)
                  </a>
                </li>
                <li>
                  <a href="https://www.wix.com/velo/reference/wix-crm">
                    wix-crm
                  </a>
                </li>
                <li>
                  <a href="https://www.wix.com/velo/reference/wix-dataset">
                    wix-dataset
                  </a>
                </li>
                <li>
                  <a href="https://www.wix.com/velo/reference/wix-members">
                    wix-members
                  </a>
                </li>
                <li>
                  <a href="https://www.wix.com/velo/reference/wix-bookings">
                    wix-bookings
                  </a>
                </li>
              </small>
            </p>
          </div>
          <div className="col">
            <p>
              <small>Technologies: Wix, Velo's APIs</small>
            </p>
          </div>
        </div>
        <div className="row row-cols-1 mb-3 border border-success">
          <div className="col border-bottom border-success">
            <p>
              <strong>E-Commerce Website</strong>
            </p>
          </div>
          <div className="col">
            <p>
              <small>
                URL: <a href="https://4bio.com.au/">4BIO Shop</a>
              </small>
            </p>
          </div>
          <div className="col">
            <img src="./imgs/4bio.png" alt="" />
          </div>
          <div className="col">
            <p>
              <small>
                Description: A e-commerce platform for environmental friendly
                brands to offer their products to end users, built using Shopify
              </small>
            </p>
          </div>
          <div className="col">
            <p>
              <small>Technologies: Shopify, Liquid, CSS</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
