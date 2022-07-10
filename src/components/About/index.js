import React from "react";

function About() {
  return (
    <>
      <h2 className="text-xl md:text-3xl">About Me</h2>

      <div className="md:grid md:grid-cols-3 md:gap-12 pt-6">
        <div className="md:col-span-2 md:text-lg text-gray-800">
          <p className="mb-2">Hello.</p>
          <p className="my-2">
            My name is Mitchell George. I'm an engineer by day and a web
            developer by night. I have a passion for logic and mathematics, and
            I'm pretty detail oriented. Engineering suits me well, but building
            websites has quickly become one of my favorite things to do.
          </p>
          <p className="mt-4">My formal education includes:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Certification in Full Stack Web Development</li>
            <li>Bachelor's Degree in Electrical Engineering</li>
            <li>Associate's Degree in Industrial Technology</li>
          </ul>
          <p className="my-2">
            Some of my biggest hobbies and passions are making coffee, playing
            chess, and learning about nature. I try to do all three every day.
          </p>
          <p className="mt-2 mb-4 md:mb-0">
            If you'd like to get to know me better, send me a message through
            the Contact section above!
          </p>
        </div>

        <img
          src={require("../../assets/images/mitchell-george.jpg")}
          alt="Me sitting outside"
          className="w-full h-96 object-cover object-top rounded shadow"
        ></img>
      </div>
    </>
  );
}

export default About;
