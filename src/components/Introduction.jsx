import React, { Component } from "react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/img_bg.jpg)",opacity:'0.95' }}>
                <div className="overlay" style={{opacity:'0.3'}}></div>
                <div className="container-fluid" style={{backgroundColor:'rgba(0, 0,0, 0.3)'}}>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div style={{fontSize:'50px',fontWeight:'900', color:'white'}}>
                          <h3 style={{color:'white'}}>Hey There !</h3>
                          <span><Typewriter
                            string="I'm Namratha Devi"
                            delay={100}
                            cursor="|"
                          /></span>
                           </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Introduction;