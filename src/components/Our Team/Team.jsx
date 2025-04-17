import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Our_Working_Team from "../Our_Working_Team/Our_Working_Team";

const OurTeam = () => {
  return (
    <>
    <section className="bg-[#f7f0e7] py-16 px-4 lg:px-20 box-border ">
      <div className="max-w-7xl mx-auto mb-20">
        <p className="text-[#b48f2b] text-base font-bold tracking-[2.56px] leading-[30px] mb-[10px] pr-[10px] relative uppercase ">
          OUR TEAM -
        </p>

        <h2 className="text-[#00113b] text-[32px] sm:text-[40px] md:text-[44px] lg:text-[50px] font-bold tracking-tight leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[64px] w-full max-w-[500px] mb-10">
          Elevating Business <br /> with IT Excellence
        </h2>

        <div className="flex flex-col gap-y-5 ">
          {/* Founder */}
          <div className="bg-white rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10 shadow-md">
            <div className="flex-shrink-0 w-full max-w-sm">
              <img
                src="/src/assets/Team/Sadanand_kumar_yadav.jpg"
                alt="Sadanand Kumar Yadav"
                className="rounded-2xl w-full h-[380px] object-cover object-top shadow-md"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#b48f2b] text-[24px] font-bold leading-[46px] uppercase mt-0 ">
                SADANAND KUMAR YADAV
              </h3>

              <p className="text-[#be6d32] text-[14px] font-semibold mb-[15px] uppercase">
                FOUNDER & CEO
              </p>

              <div className="flex gap-3 mb-4">
                <a
                  href="https://www.linkedin.com/in/sadanand-kumar-yadav-433a81260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#b48f2b] text-[#b48f2b] rounded-full hover:bg-[#b48f2b] hover:text-white transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="launchlysoftware@gmail.com"
                  className="w-10 h-10 flex items-center justify-center border border-[#b48f2b] text-[#b48f2b] rounded-full hover:bg-[#b48f2b] hover:text-white transition"
                >
                  <HiOutlineMail />
                </a>
              </div>

              <p className="text-sm text-#000 text-[15px] leading-relaxed">
                <strong>Sadanand Kumar Yadav</strong> He completed his B.Tech in
                Computer Science in 2024. He started his career in the IT
                industry the same year and has since gained substantial
                experience as a Software Engineer. During this time, he
                successfully managed numerous client projects, showcasing his
                ability to deliver quality work in demanding environments. After
                gaining years of experience throughout his journey, he decided
                to start his own business. Now, he is the{" "}
                <strong>CEO and Founder of Launchly Software Pvt Ltd</strong>.
                The clients she previously worked with are now collaborating
                with him, and he is building and growing her own company.
              </p>
            </div>
          </div>

          {/* Co- Founder */}
          <div className="bg-white rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10 shadow-md">
            <div className="flex-shrink-0 w-full max-w-sm">
              <img
                src="/src/assets/Team/Suraj_Kumar.jpg"
                alt="Suraj Kumar"
                className="rounded-2xl w-full h-[380px] object-cover object-top shadow-md"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[#b48f2b] text-[24px] font-bold leading-[46px] uppercase mt-0 ">
                Suraj Kumar
              </h3>

              <p className="text-[#be6d32] text-[14px] font-semibold mb-[15px] uppercase">
                CO-FOUNDER
              </p>

              <div className="flex gap-3 mb-4">
                <a
                  href="https://www.linkedin.com/in/sadanand-kumar-yadav-433a81260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#b48f2b] text-[#b48f2b] rounded-full hover:bg-[#b48f2b] hover:text-white transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="launchlysoftware@gmail.com"
                  className="w-10 h-10 flex items-center justify-center border border-[#b48f2b] text-[#b48f2b] rounded-full hover:bg-[#b48f2b] hover:text-white transition"
                >
                  <HiOutlineMail />
                </a>
              </div>

              <p className="text-sm text-#000 text-[15px] leading-relaxed">
                <strong>Suraj Kumar</strong> I'm Suraj Kumar, a dedicated MERN
                Stack Developer with strong expertise in building full-stack web
                applications using React.js, Node.js, Express.js, and MongoDB.
                I’ve worked on projects like a real-time chat app with
                Socket.IO, an AI chatbot named Ai-chatPot, cryptocurrency
                dashboards, and more. I'm skilled in frontend technologies like
                HTML, CSS, JavaScript,React, Bootstrap, and Tailwind CSS, and
                have experience in Backend technologies also like Node, MongoDb
                and Express js .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Our_Working_Team />
    </>
  );
};

export default OurTeam;
