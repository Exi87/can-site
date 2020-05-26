import Nav from "./Nav";
import Link from "next/link";
import Header from "./header";
import Head from "next/head";
//import Spinner from "./spinner";
//import Menu from "./menu";

const homeImage = {};
const Layout = ({ children, canSigle, footer }) => (
  <body
    id="top"
    data-spy="scroll"
    data-target=".navbar-collapse"
    data-offset="50"
  >
    {/* <Spinner /> */}
    <Header
      canInfo={{
        canSigle: "Bienvenue au Centre Ambulancier National(CAN)",
        canTel: "116",
        canHoraire: "24 sur 24(Lun-Dim)",
        canMail: "cann116@mspp.gouv.ht",
      }}
    />

    {children}

    <section class="navbar navbar-default navbar-static-top " role="navigation">
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
            <i class="fa "></i>CAN
          </a>

          {/* <a href="index.html" class="navbar-brand" style={{marginTop:'5px'}}>
        <img src="/static/images/can-logo.png" 
            width="100" height="100"
         class="d-inline-block align-top"
          alt="" loading="lazy"/>
           
        </a>  */}
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            {/* 
           <Link href="#home">
        <a>Acceuil</a>
      </Link>  */}
            {/* <li>
              <a href="#home" class="smoothScroll">
                Acceuil
              </a>
            </li>

             */}
            <li>
              <a href="#about" class="smoothScroll">
                A propos
              </a>
            </li>
            {/* <li>
              <a href="#team" class="smoothScroll">
                Nos Sections
              </a>
            </li> */}
            <li>
              <a href="#news" class="smoothScroll">
                Nos Sections
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

    {/* <section id="home">
    
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/static/images/slider1.jpg" alt="First slide" />
    </div>
  
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</section> */}

    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="wow fadeInUp" data-wow-delay="0.6s">
                Bienvenue au Centre <i class="fa fa-a-square"></i>Ambulancier
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
                  <h3>Dr. Herold Didie Louis</h3>
                  <p>Directeur Principal</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*


   
   team
   
   */}

    {/*News section*/}

    <section id="news" data-stellar-background-ratio="2.5">
      <div class="container">
        <div className="row">
          <div class="col-md-12 col-sm-12">
            {/*  SECTION TITLE*/}
            <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
              <h2>Sections</h2>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            {/* NEWS THUMB*/}
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.4s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image1.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                {/* <span>March 08, 2018</span> */}
                <h3>
                  <a href="news-detail.html" style={{}}>
                    {" "}
                    Section flotte
                  </a>

                  {/* <a href="news-detail.html">Plus detail</a> */}
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Exinord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            {/* NEWS THUMB*/}
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.4s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image1.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                {/* <span>March 08, 2018</span> */}
                <h3>
                  <a href="news-detail.html" style={{}}>
                    {" "}
                    Section flotte
                  </a>

                  {/* <a href="news-detail.html">Plus detail</a> */}
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Exinord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            {/* NEWS THUMB*/}
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.4s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image1.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                {/* <span>March 08, 2018</span> */}
                <h3>
                  <a href="news-detail.html" style={{}}>
                    {" "}
                    Section flotte
                  </a>

                  {/* <a href="news-detail.html">Plus detail</a> */}
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Exinord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            {/* NEWS THUMB*/}
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.4s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image1.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                {/* <span>March 08, 2018</span> */}
                <h3>
                  <a href="news-detail.html" style={{}}>
                    {" "}
                    Section flotte
                  </a>

                  {/* <a href="news-detail.html">Plus detail</a> */}
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Exinord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            {/* NEWS THUMB*/}
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.4s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image1.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                {/* <span>March 08, 2018</span> */}
                <h3>
                  <a href="news-detail.html" style={{}}>
                    {" "}
                    Section flotte
                  </a>

                  {/* <a href="news-detail.html">Plus detail</a> */}
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Exinord</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            {/* NEWS THUMB*/}
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.6s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image2.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                {/* <span>February 20, 2018</span> */}
                <h3>
                  <a href="news-detail.html">Centre d'appel</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Werley</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*End news section*/}

    {/* Contact map*/}

    <section id="google-map">
      {/* How to change your own map point
            1. Go to Google Maps
            2. Click on your location point
            3. Click "Share" and choose "Embed map" tab
   4. Copy only URL and paste it within the src="" field below */}
      <iframe
       
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.679798714529!2d-72.30740108563094!3d18.543366473317583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb9e7963a3a5a41%3A0x4839bd0dc1e7944b!2sCentre%20Ambulancier%20National!5e0!3m2!1sfr!2sht!4v1590506454383!5m2!1sfr!2sht"
        
      style={{width:'100%',
      height:"350px",
      frameBorder:"0",
      border:'0',
      allowFullScreen:"",
      ariaHidden:"false",
      tabindex:"0"
    
    }}
    
      ></iframe>
    </section>
    {/* Contact map*/}

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

{
  /*

   <section id="team" data-stellar-background-ratio="1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="wow fadeInUp" data-wow-delay="0.1s">
                Nos Sections
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
                <h3>Flotte</h3>
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

                  <h3>Flotte</h3>
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










         <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <a href="news-detail.html">
                <img
                  src="/static/images/garage.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>January 27, 2018</span>
                <h3>
                  <a href="news-detail.html">Garage</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Cepler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                  
          <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image3.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>January 27, 2018</span>
                <h3>
                  <a href="news-detail.html">Logistique</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Saintyl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          

          <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image3.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>January 27, 2018</span>
                <h3>
                  <a href="news-detail.html">Information et Communication</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Cepler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image3.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>January 27, 2018</span>
                <h3>
                  <a href="news-detail.html">Garage</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Cepler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          
*/
  //section
}
