import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I'M intrested in Web programming
                        (React - Firebase, Mern Stack) and Python.
                        <br /> I'm a motivated developer and designer who learnt
                         creating custom websites with ReactJs,
                        JavaScript, HTML5 & CSS3, and MongoDB.
                        <br />
                        I'm also good at typing                    
                       </p>
                      <p>
                        It's my first Internship,
                        It is a boost for my carier oppurtunities 
                        I love nature{" "}
                        <span role="img">{"💚"}</span> .
                      </p>
                    </div>
                    <ul class="tag_list">
                      <li>Html & Css</li>
                      <li>JavaScript</li>
                      <li>Bootstrap & jQuery</li>
                      <li>React</li>
                      <li>MongoDB</li>
                      <li>C++</li>
                      <li>C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my stratings
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-globe" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I like to code personalized websites, and enjoy bringing
                      ideas to life in the browser.
                    </p>
                  </div>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;