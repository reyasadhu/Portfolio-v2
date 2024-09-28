"use client";

import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Experiences from "./containers/Experiences";
import Projects from "./containers/Projects";
import UCSD from "../assets/UCSD.png";
import IITBBS from "../assets/IITBBS.png";
import WBCHSE from "../assets/WBCHSE.png";
import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";
import Adobe from "../assets/AdobeRedLogo.png";
import IQAir from "../assets/IQAir.png";
import Leaps from "../assets/LeapsLogo.png";
import FancyTestimonialsSlider from "./components/Testimonials";
import { useEffect } from "react";

export default function Home() {
  const testimonials = [
    {}
    // {
    //   img: Adobe,
    //   quote:
    //     "He was a culture fit for our team at Adobe, but I also believe he would fit in anywhere where hard work and collaboration are valued.",
    //   name: "Kellen C. - ",
    //   role: "My Mentor at Adobe",
    // },
  ];

  const sections = [
    { id: "Experience", title: "Experience" },
    { id: "Projects", title: "Projects" },
    { id: "Blogs", title: "Education" },
    // { id: "Recommendations", title: "Recommendations" },
    { id: "Connect", title: "Connect" },
  ];

  const sendEmail = () => {
    window.location.href = "mailto:reyasadhu7687@gmail.com";
  };

  const makeCall = () => {
    window.location.href = "tel:+"; 
  };

  return (
    <div className="w-full px-5 sm:px-10 md:px-[15%] lg:px-[25%] flex flex-col py-10">
      <Hero />
      <div
        id="nav"
        className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              const element = document.getElementById(section.id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mb-5 text-[#96979A] px-5 py-2 rounded-md text-sm font-medium"
          >
            {section.title}
          </button>
        ))}
      </div>
      <h2 id="Experience" className="mt-10 mb-3 text-2xl font-bold">
        Experience
      </h2>
      <Experiences />
      <h2 id="Projects" className="mt-14 mb-3 text-2xl font-bold">
        Projects
      </h2>
      <div className="flex flex-wrap w-full justify-between">
        <Projects />
      </div>
      <h2 id="Blogs" className="mt-14 mb-3 text-2xl font-bold">
        Education
      </h2>
      <Blog
        schoolLink="https://medium.com/@juliuscecilia33/predicting-nba-game-results-using-machine-learning-and-python-6be209d6d165"
        backgroundColor="#F8F8FA"
        imageSrc={UCSD}
        imageAlt="UCSD"
        degree="M.S. in ECE: Machine Learning & Data Science, GPA: 3.71/4"
        school="University of California San Diego"
        time="August 2023 - Present"
        courseDescription={["",
          "• Relevant Coursework: Natural Language Processing, Visual Learning, Computer Vision, GPU Programming, Probability & Statistics for Data Science, Statistical Learning, Parameter Estimation.",
          "• Gained proficiency to perform robust statistical analysis, and hypothesis testing and apply various machine learning algorithms for predictive modeling and data-driven decision-making.",
          "• Developed skills to process and analyze visual data, and acquired parallel programming expertise, enhancing computational efficiency for large-scale data processing and machine learning tasks.",
          "• Gained extensive theoretical knowledge on gradient descent and convex optimization for optimization and Bayesian statistics for probabilistic inference."
        ]}
      />
      <Blog
        schoolLink="https://medium.com/@juliuscecilia33/building-real-time-typing-indicators-in-java-19e245539794"
        school="Indian Institute of Technology Bhubaneswar"
        imageAlt=""
        imageSrc={IITBBS}
        backgroundColor="#FFFFFF"
        degree="B.Tech.(Honours) in Electrical Engineering, GPA: 3.91/4"
        time="July 1017 - May 2021"
        courseDescription={["",
          "• I have undertaken coursework in CS including DS and Algorithms, and Software Engineering and electives in Machine Learning, Information Theory and Image Processing enabling me proficient in C/C++, Python, DBMS, OS.",
          "• I have done several projects in classification and regression models, deep learning, and image classification.",
          "• I achieved the second-highest CGPA among a cohort of 60 students majoring in Electrical Engineering."]}
      />
      <Blog
        schoolLink="https://medium.com/@juliuscecilia33/building-real-time-typing-indicators-in-java-19e245539794"
        school="Rahara Bhabanath Institution, India"
        imageSrc={WBCHSE}
        imageAlt="WBCHSE"
        backgroundColor="#F8F8FA"
        degree="Higher Secondary"
        time="2016 - 2017"
        courseDescription={["","Scored 91.6% and was top of my class."]}
      />
      {/* <h2 id="Recommendations" className="mt-14 mb-3 text-2xl font-bold">
        Recommendations
      </h2>
      <FancyTestimonialsSlider testimonials={testimonials} /> */}
      <h2 id="Connect" className="mt-14 mb-3 text-2xl font-bold">
        Let&rsquo;s Connect
      </h2>
      <div className="flex flex-col">
        <button
          onClick={sendEmail}
          className="bg-[#E95278] mb-5 text-white px-5 py-2 rounded-md text-sm font-medium"
        >
          Email me: reyasadhu7687@gmail.com
        </button>
        {/* <button
          onClick={makeCall}
          className="bg-[#E95278] mb-5 text-white px-5 py-2 rounded-md text-sm font-medium"
        >
          Call me: 562-332-4687
        </button> */}
      </div>
    </div>
  );
}
