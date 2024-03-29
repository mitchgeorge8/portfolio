import React from "react";
import resume from "../../assets/files/Mitchell George - Resume.pdf";

function Portfolio() {
  return (
    <>
      <h2 className="text-xl md:text-3xl uppercase font-light">Resume</h2>

      <article className="p-8 mt-6 bg-white rounded shadow max-w-3xl mx-auto text-sm md:text-base">
        <div>
          <h3 className="text-2xl md:text-3xl font-Raleway">Mitchell George</h3>
          <div className="text-center font-serif my-2">
            <a
              href="mailto:mitchgeorge8@gmail"
              target="_blank"
              rel="noreferrer"
              className="block md:inline my-1"
            >
              mitchgeorge8@gmail.com
            </a>
            <span className="hidden md:inline"> | </span>
            <a
              href="https://www.google.com/maps/place/Columbus,+OH/@39.9816085,-83.5499017,9z/data=!3m1!4b1!4m5!3m4!1s0x883889c1b990de71:0xe43266f8cfb1b533!8m2!3d39.9611755!4d-82.9987942"
              target="_blank"
              rel="noreferrer"
              className="block md:inline my-1"
            >
              Columbus, OH
            </a>
            <span className="hidden md:inline"> | </span>
            <a
              href="https://www.linkedin.com/in/mitchell-g-george/"
              target="_blank"
              rel="noreferrer"
              className="block md:inline my-1"
            >
              www.linkedin.com/in/mitchell-g-george
            </a>
          </div>
        </div>
        <div className="my-3">
          <h4 className="uppercase text-lg border-b-2 border-gray-500 mb-2">
            Summary
          </h4>
          <p>
            Engineer with a B.S. in Electrical Engineering, full stack web
            development certification, and 4+ years of experience working with a
            team. Looking to apply analytical skills and close attention to
            detail in a fulltime Developer role.
          </p>
        </div>
        <div className="my-3">
          <h4 className="uppercase text-lg border-b-2 border-gray-500 mb-2">
            Relevant Experience
          </h4>
          <div>
            <div className="mb-2">
              <p className="font-semibold">Design Development Engineer</p>
              <a
                href="https://www.nifco.com/en/"
                target="_blank"
                rel="noreferrer"
                className="uppercase font-less-light"
              >
                Nifco America
              </a>
              <span className="float-right font-less-light">Current</span>
              <p className="ml-4 border-l border-gray-500 pl-2 my-2">
                Ensure that every part meets the design intent, both
                aesthetically and functionally. Create part drawings, lead
                design changes, and improve part quality.
              </p>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Customer Quality Engineer</p>
              <a
                href="https://www.nifco.com/en/"
                target="_blank"
                rel="noreferrer"
                className="uppercase font-less-light"
              >
                Nifco America
              </a>
              <span className="float-right font-less-light">2021-2022</span>
              <p className="ml-4 border-l border-gray-500 pl-2 my-2">
                Handled part quality complaints from a wide range of customers.
                Worked with cross-functional teams to establish root causes and
                implement permanent corrective actions.
              </p>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h4 className="uppercase text-lg border-b-2 border-gray-500 mb-2">
            Education
          </h4>
          <div className="">
            <div className="mb-2">
              <p className="italic">Certification</p>
              <span className="float-right font-less-light">2022</span>
              <p className="font-semibold">Full Stack Web Development</p>
              <a
                href="https://eng-bootcamps.osu.edu/coding/"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                The Ohio State University
              </a>
            </div>
            <div className="mb-2">
              <p className="italic">Bachelor of Science</p>
              <span className="float-right font-less-light">2021</span>
              <p className="font-semibold">Electrical Engineering</p>
              <a
                href="https://www.mvnu.edu/undergraduate/academics/engineering"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                Mount Vernon Nazarene University
              </a>
            </div>
            <div className="">
              <p className="italic">Associate of Applied Science</p>
              <span className="float-right font-less-light">2017</span>
              <p className="font-semibold">Industrial Technology</p>
              <a
                href="https://www.college-now.org/engineering-tech-degree"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                North Central State College
              </a>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h4 className="uppercase text-lg border-b-2 border-gray-500 mb-2">
            Other Experience
          </h4>
          <div className="mb-2">
            <p className="font-semibold">Resident Assistant</p>
            <a
              href="https://www.mvnu.edu/"
              target="_blank"
              rel="noreferrer"
              className="uppercase font-less-light"
            >
              Mount Vernon Nazarene University
            </a>
            <span className="float-right font-less-light">2018-2021</span>
            <p className="ml-4 border-l border-gray-500 pl-2 my-2">
              Worked with a team to enforce campus policies, plan student
              events, and foster a healthy community. Oversaw a dorm/apartment
              of students, serving as their main point of contact for questions
              and concerns.
            </p>
          </div>
        </div>

        <div className="my-3">
          <h4 className="uppercase text-lg border-b-2 border-gray-500 mb-2">
            Activities
          </h4>
          <ul>
            <li className="mb-1 ">
              Honors Program
              <span className="float-right font-less-light">2017-2020</span>
            </li>
            <li className="mb-1 ">
              Small group leader
              <span className="float-right font-less-light">2018-2021</span>
            </li>
            <li className="mb-1 ">
              Sustainability Club Leader
              <span className="float-right font-less-light">2020-2021</span>
            </li>
            <li className="">
              Student mentor
              <span className="float-right font-less-light">2019</span>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h4 className="uppercase text-lg border-b-2 border-gray-500 mb-2">
            Skills
          </h4>
          <ul className="flex flex-wrap -mb-2">
            <li className="mb-2">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                JavaScript
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.mongodb.com/mern-stack"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                MERN Stack
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://restfulapi.net/"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                REST APIs
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://en.wikipedia.org/wiki/Progressive_web_application"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                Progressive Web Applications
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                Object-Oriented Programming
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/MVC"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                Model-View-Controller
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                Object-Relational Mapping
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                Tailwind CSS
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.w3schools.com/sql/default.asp"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                SQL
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://graphql.org/"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                GraphQL
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
                className="border-r border-gray-500 pr-2 mr-2 md:pr-3 md:mr-3"
              >
                HTML
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                CSS
              </a>
            </li>
          </ul>
        </div>
      </article>
      <div className="max-w-3xl mx-auto text-right mt-1">
        <a href={resume} target="_blank" rel="noreferrer">
          Click here for PDF
        </a>
      </div>
    </>
  );
}

export default Portfolio;
