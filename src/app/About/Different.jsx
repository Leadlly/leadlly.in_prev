import { Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import dashboard from "../assets/about/dashboard.png";
import planner1 from "../assets/about/planner1.png";
import planner2 from "../assets/about/planner2.png";
import growth1 from "../assets/about/growth1.png"
import growth2 from "../assets/about/growth2.png"
import revision from "../assets/about/revision.png"
import workshop from "../assets/about/workshop.png"
import "./About.css"
export const Different = () => {
  return (
    <section className="overflow-hidden bg-gradient flex flex-col items-center py-8">
      <div className="full rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans font-bold mb-8">
        <Heading
          className="text-center"
          fontWeight="normal"
          fontFamily="Urbanist"
          opacity={1}
          zIndex={10}
          color="transparent"
          w="auto"
          h="auto"
          fontSize={{
            base: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
            xl: "3.5rem",
          }}
        >
          <span className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
            How are we
          </span>
          <br />
          <span className="gradient-text text-[3rem] md:text-[80px] lg:text-[100px]">Diffferent?</span>
        </Heading>
      </div>

      <div className="features-grid">
      <div className="feature-item dashboard">
        <h2>Dashboard</h2>
        <p>It provides an overview of courses, progress, performance metrics, tasks, notifications, resources, and communication tools.</p>
        <Image src={dashboard} alt="Dashboard" />
      </div>
      <div className="feature-item planner">
        <div className="plan">
        <h2>Planner</h2>
        <p>It helps organize study schedules, topics that need to be covered.</p>
        </div>
        <div className="planner-images">
        <Image src={planner1} alt="Planner 1" className="planner1"/>
        <Image src={planner2} alt="Planner 2" className="planner2" />
        </div>
      </div>
      <div className="feature-item quizzes">
        <h2>Quizzes</h2>
        <p>It will monitor progress, pinpoint areas needing improvement, and strategically allocate your revision time.</p>
      </div>
      <div className="feature-item error-book">
        <h2>Error Book</h2>
        <p>It will help you identify and overcome pitfalls specific to your learning style and subject matter.</p>
      </div>
      <div className="feature-item growth-meter">
        <div className="growth">
          <h2>Growth Meter</h2>
          <p>Track your grades, identify areas where you've excelled, and witness your academic progress unfold throughout the year.</p>
        </div>
        <div className="growth-meter-images">
          <Image src={growth1} alt="Growth Meter 1" className="growth1" />
          <Image src={growth2} alt="Growth Meter 2" className="growth2" />
        </div>
      </div>
      <div className="feature-item library">
        <h2>Library</h2>
        <p>It provides access to educational resources, such as e-books, articles, and videos, for research and study.</p>
      </div>
    
      <div className="feature-item  revision">
        <h2>Revision Tracker</h2>
        <p>It will monitor progress, pinpoint areas needing improvement, and strategically allocate your revision time.</p>
        <Image src={revision} alt="Dashboard" />
      </div>
      <div className="feature-item workshop">
        <div className="workshop-text">
        <h2>Workshop</h2>
        <p>Develop critical thinking skills, master problem-solving strategies, and discover effective study methods.</p>
        </div>
        <div className="workshop-images">
        <Image src={workshop} alt="Planner 1" className="workshop1"/>
        
        </div>
      </div>
      <div className="feature-item more-coming">
        <h2>More coming soon</h2>
        <p>We are currently doing lots of interviews to make this platform more helpful.</p>
      </div>
      <div className="feature-item study-room">
        <h2>Study Room</h2>
        <p>Mentors will provide you guidance, answer your doubts, offer subject-specific support, and motivate you like your sibling.</p>
      </div>
      
      
    </div>
    </section>
  );
};
