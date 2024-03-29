import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Trainers from "./components/Trainers"
function App() {
  return (
<div>
<Navbar />
<Header/>
<Trainers/>
<Footer/>
<main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Counts Section ======= */}
          <section id="counts" className="counts section-bg">
            <div className="container">
              <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={1232} data-purecounter-duration={1} className="purecounter" />
                  <p>Students</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={64} data-purecounter-duration={1} className="purecounter" />
                  <p>Courses</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={42} data-purecounter-duration={1} className="purecounter" />
                  <p>Events</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                  <p>Trainers</p>
                </div>
              </div>
            </div>
          </section>{/* End Counts Section */}
          {/* ======= Why Us Section ======= */}
          <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="content">
                    <h3>Why Choose Mentor?</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                      Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                    </p>
                    <div className="text-center">
                      <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-receipt" />
                          <h4>Corporis voluptates sit</h4>
                          <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-cube-alt" />
                          <h4>Ullamco laboris ladore pan</h4>
                          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-images" />
                          <h4>Labore consequatur</h4>
                          <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                        </div>
                      </div>
                    </div>
                  </div>{/* End .content*/}
                </div>
              </div>
            </div>
          </section>{/* End Why Us Section */}
          {/* ======= Features Section ======= */}
          <section id="features" className="features">
            <div className="container" data-aos="fade-up">
              <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                <div className="col-lg-3 col-md-4">
                  <div className="icon-box">
                    <i className="ri-store-line" style={{color: '#ffbb2c'}} />
                    <h3><a href>Lorem Ipsum</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box">
                    <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}} />
                    <h3><a href>Dolor Sitema</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                  <div className="icon-box">
                    <i className="ri-calendar-todo-line" style={{color: '#e80368'}} />
                    <h3><a href>Sed perspiciatis</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <i className="ri-paint-brush-line" style={{color: '#e361ff'}} />
                    <h3><a href>Magni Dolores</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-database-2-line" style={{color: '#47aeff'}} />
                    <h3><a href>Nemo Enim</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-gradienter-line" style={{color: '#ffa76e'}} />
                    <h3><a href>Eiusmod Tempor</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-file-list-3-line" style={{color: '#11dbcf'}} />
                    <h3><a href>Midela Teren</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-price-tag-2-line" style={{color: '#4233ff'}} />
                    <h3><a href>Pira Neve</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-anchor-line" style={{color: '#b2904f'}} />
                    <h3><a href>Dirada Pack</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-disc-line" style={{color: '#b20969'}} />
                    <h3><a href>Moton Ideal</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-base-station-line" style={{color: '#ff5828'}} />
                    <h3><a href>Verdo Park</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4">
                  <div className="icon-box">
                    <i className="ri-fingerprint-line" style={{color: '#29cc61'}} />
                    <h3><a href>Flavor Nivelanda</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Features Section */}
          {/* ======= Popular Courses Section ======= */}
          <section id="popular-courses" className="courses">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Courses</h2>
                <p>Popular Courses</p>
              </div>
              <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="course-item">
                    <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Web Development</h4>
                        <p className="price">$169</p>
                      </div>
                      <h3><a href="course-details.html">Website Design</a></h3>
                      <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt="" />
                          <span>Antonio</span>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                          <i className="bx bx-user" />&nbsp;50
                          &nbsp;&nbsp;
                          <i className="bx bx-heart" />&nbsp;65
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* End Course Item*/}
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div className="course-item">
                    <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Marketing</h4>
                        <p className="price">$250</p>
                      </div>
                      <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                      <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt="" />
                          <span>Lana</span>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                          <i className="bx bx-user" />&nbsp;35
                          &nbsp;&nbsp;
                          <i className="bx bx-heart" />&nbsp;42
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* End Course Item*/}
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div className="course-item">
                    <img src="assets/img/course-3.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Content</h4>
                        <p className="price">$180</p>
                      </div>
                      <h3><a href="course-details.html">Copywriting</a></h3>
                      <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt="" />
                          <span>Brandon</span>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                          <i className="bx bx-user" />&nbsp;20
                          &nbsp;&nbsp;
                          <i className="bx bx-heart" />&nbsp;85
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* End Course Item*/}
              </div>
            </div>
          </section>{/* End Popular Courses Section */}
          {/* ======= Trainers Section ======= */}
        
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
       
</div>
  );
}

export default App;
