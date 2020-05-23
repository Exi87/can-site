import Nav from "./Nav";
import Header from "./header";
import Spinner from "./spinner";
//import Menu from "./menu";


const homeImage={
  
}
const Layout = ({ children, mainTitle, canSigle, footer }) => (
  <body
    id="top"
    data-spy="scroll"
    data-target=".navbar-collapse"
    data-offset="50"
  >
    <Spinner />
    <Header
      canInfo={{
        canSigle: "Welcome to Centre Ambulancier National(CAN)",
        canTel: "116",
        canHoraire: "24 sur 24 PM (Mon-Sun)",
        canMail: "cann116@mspp.gouv.ht",
      }}
    />

    {children}

    <section class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>

          <a href="index.html" class="navbar-brand">
            <i class=""></i>CAN116
          </a>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#home" class="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="smoothScroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#team" class="smoothScroll">
                Doctors
              </a>
            </li>
            <li>
              <a href="#news" class="smoothScroll">
                News
              </a>
            </li>
            <li>
              <a href="#google-map" class="smoothScroll">
                Contact
              </a>
            </li>
            <li class="appointment-btn">
              <a href="#appointment">Make an appointment</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="home" class="slider" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row">
      
          <div class="owl-carousel owl-theme">
                              <div class="item item-first">
                               
                                   <div class="caption">
                                        <div class="col-md-offset-1 col-md-10">
                                             <h3>Let's make your life happier</h3>
                                             <h1>Healthy Living</h1>
                                             <a href="#team" class="section-btn btn btn-default smoothScroll">Meet Our Doctors</a>
                                        </div>
                                   </div>
                              </div>
  
                              <div class="item item-second">
                                   <div class="caption">
                                        <div class="col-md-offset-1 col-md-10">
                                             <h3>Aenean luctus lobortis tellus</h3>
                                             <h1>New Lifestyle</h1>
                                             <a href="#about" class="section-btn btn btn-default btn-gray smoothScroll">More About Us</a>
                                        </div>
                                   </div>
                              </div>

                              <div class="item item-third">
                                   <div class="caption">
                                        <div class="col-md-offset-1 col-md-10">
                                             <h3>Pellentesque nec libero nisi</h3>
                                             <h1>Your Health Benefits</h1>
                                             <a href="#news" class="section-btn btn btn-default btn-blue smoothScroll">Read Stories</a>
                                        </div>
                                   </div>
                              </div>
                         </div>

        </div>
      </div>
    </section>

    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="wow fadeInUp" data-wow-delay="0.6s">
                Welcome to Centre <i class="fa fa-a-square"></i>Ambulancier
                National
              </h2>
              <div class="wow fadeInUp" data-wow-delay="0.8s">
                <p>
                  Aenean luctus lobortis tellus, vel ornare enim molestie
                  condimentum. Curabitur lacinia nisi vitae velit volutpat
                  venenatis.
                </p>
                <p>
                  Sed a dignissim lacus. Quisque fermentum est non orci commodo,
                  a luctus urna mattis. Ut placerat, diam a tempus vehicula.
                </p>
              </div>
              <figure class="profile wow fadeInUp" data-wow-delay="1s">
                <img
                  src="/static/images/author-image.jpg"
                  class="img-responsive"
                  alt=""
                />
                <figcaption>
                  <h3>Dr. Neil Jackson</h3>
                  <p>General Principal</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="team" data-stellar-background-ratio="1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="wow fadeInUp" data-wow-delay="0.1s">
                Our Doctors
              </h2>
            </div>
          </div>

          <div class="clearfix"></div>

          <div class="col-md-4 col-sm-6">
            <div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
              <img
                src="static/images/team-image1.jpg"
                class="img-responsive"
                alt=""
              />

              <div class="team-info">
                <h3>Nate Baston</h3>
                <p>General Principal</p>
                <div class="team-contact-info">
                  <p>
                    <i class="fa fa-phone"></i> 010-020-0120
                  </p>
                  <p>
                    <i class="fa fa-envelope-o"></i>{" "}
                    <a href="#">general@company.com</a>
                  </p>
                </div>
                <ul class="social-icon">
                  <li>
                    <a href="#" class="fa fa-linkedin-square"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-envelope-o"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="team-thumb wow fadeInUp" data-wow-delay="0.4s">
              <img
                src="static/images/team-image2.jpg"
                class="img-responsive"
                alt=""
              />

              <div class="team-info">
                <h3>Jason Stewart</h3>
                <p>Pregnancy</p>
                <div class="team-contact-info">
                  <p>
                    <i class="fa fa-phone"></i> 010-070-0170
                  </p>
                  <p>
                    <i class="fa fa-envelope-o"></i>{" "}
                    <a href="#">pregnancy@company.com</a>
                  </p>
                </div>
                <ul class="social-icon">
                  <li>
                    <a href="#" class="fa fa-facebook-square"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-envelope-o"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-flickr"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="team-thumb wow fadeInUp" data-wow-delay="0.6s">
              <img
                src="static/images/team-image3.jpg"
                class="img-responsive"
                alt=""
              />

              <div class="team-info">
                <h3>Miasha Nakahara</h3>
                <p>Cardiology</p>
                <div class="team-contact-info">
                  <p>
                    <i class="fa fa-phone"></i> 010-040-0140
                  </p>
                  <p>
                    <i class="fa fa-envelope-o"></i>{" "}
                    <a href="#">cardio@company.com</a>
                  </p>
                </div>
                <ul class="social-icon">
                  <li>
                    <a href="#" class="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-envelope-o"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer data-stellar-background-ratio="5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <div class="footer-thumb">
              <h4 class="wow fadeInUp" data-wow-delay="0.4s">
                Contact Info
              </h4>
              <p>
                Fusce at libero iaculis, venenatis augue quis, pharetra lorem.
                Curabitur ut dolor eu elit consequat ultricies.
              </p>

              <div class="contact-info">
                <p>
                  <i class="fa fa-phone"></i> 010-070-0170
                </p>
                <p>
                  <i class="fa fa-envelope-o"></i>{" "}
                  <a href="#">info@company.com</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="footer-thumb">
              <h4 class="wow fadeInUp" data-wow-delay="0.4s">
                Latest News
              </h4>
              <div class="latest-stories">
                <div class="stories-image">
                  <a href="#">
                    <img
                      src="/static/images/news-image.jpg"
                      class="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
                <div class="stories-info">
                  <a href="#">
                    <h5>Amazing Technology</h5>
                  </a>
                  <span>March 08, 2018</span>
                </div>
              </div>

              <div class="latest-stories">
                <div class="stories-image">
                  <a href="#">
                    <img
                      src="/static/images/news-image.jpg"
                      class="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
                <div class="stories-info">
                  <a href="#">
                    <h5>New Healing Process</h5>
                  </a>
                  <span>February 20, 2018</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="footer-thumb">
              <div class="opening-hours">
                <h4 class="wow fadeInUp" data-wow-delay="0.4s">
                  Opening Hours
                </h4>
                <p>
                  Monday - Friday <span>06:00 AM - 10:00 PM</span>
                </p>
                <p>
                  Saturday <span>09:00 AM - 08:00 PM</span>
                </p>
                <p>
                  Sunday <span>Closed</span>
                </p>
              </div>

              <ul class="social-icon">
                <li>
                  <a
                    href="#"
                    class="fa fa-facebook-square"
                    attr="facebook icon"
                  ></a>
                </li>
                <li>
                  <a href="#" class="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-instagram"></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-12 col-sm-12 border-top">
            <div class="col-md-4 col-sm-6">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2020 Exi.solution | Designer: Ing Marc Erold
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="footer-link">
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="https://www.facebook.com/MSPPCAN116" target="_blank">
                  Facebook
                </a>
                <a href="#">Careers</a>
              </div>
            </div>
            <div class="col-md-2 col-sm-2 text-align-center">
              <div class="angle-up-btn">
                <a
                  href="#top"
                  class="smoothScroll wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <i class="fa fa-angle-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
);

export default Layout;
