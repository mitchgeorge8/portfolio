import React from "react";

function About() {
  return (
    <>
      <h2 className="text-xl md:text-3xl">About Me</h2>

      <div className="md:grid md:grid-cols-3 md:gap-12 pt-6">
        <div className="md:col-span-2 text-base md:text-lg text-gray-800">
          <p className="mb-2">Hello.</p>
          <p className="my-2">
            My name is Mitchell George. I'm an engineer by day and a web
            developor by night. I have a passion for logic and mathematics, and
            I'm pretty detail oriented. Engineering suits me well, but building
            websites has quickly become one of my favorite things to do.
          </p>
          <p className="mt-4">My formal education includes:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Bachelor's Degree in Electrical Engineering</li>
            <li>Associate's Degree in Industrial Technology</li>
            <li>Certification in Full Stack Web Development</li>
          </ul>
          <p className="my-2">
            Some of my biggest hobbies and passions are making coffee, playing
            chess, and learning about nature.
          </p>
          <p className="my-2">
            I have a cat named Shino, and recently I've been teaching her to do
            tricks. Her favorite is high-five, but she can also sit, lay, and
            stand.
          </p>
          <p className="mt-2 mb-4 md:mb-0">
            If you'd like to know more about to me, find the Contact section
            above and reach out!
          </p>
        </div>

        <img
          src={require("../../assets/images/mitchell-george.jpg")}
          alt="Me sitting outside"
          className="w-full h-96 object-cover object-top rounded-md"
        ></img>
      </div>
    </>
  );
}

export default About;
