import React from "react";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9">
          <p>
            Hello. My name is Mitchell George. I have an Associates's degree in
            Industrual Technology, a Bachelor's degree in Electrical
            Engineering, and I'm working toward a certification in full stack
            web development.
          </p>
          <p>
            Some of my biggest hobbies and passions are making coffee, playing
            chess, and learning about nature.
          </p>
          <p>
            I have a cat named Shino, and recently I've been teaching her to do
            tricks. Her favorite is high-five, but she can also sit, lay, and
            stand.
          </p>
          <p>
            If you'd like to know more about to me, click on the Contact button
            above and reach out!
          </p>
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <img
            src={require("../../assets/images/mitchell-george.jpg")}
            alt="Mitchell George"
            className="img-fluid"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default About;
