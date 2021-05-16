import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/node-blog.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://github.com/namrathaDevi/node_blog">Node Blog</a>
                      </h3>
                      <span>Markdown</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/youtube-clone.png)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://github.com/namrathaDevi/youtube-clone">"Youtube Clone"</a>
                      </h3>
                      <span>React.js & Firebase</span>
                    </div>
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
