import { BadgeCheck } from "lucide-react";

const App_Development = () => {
  const types = [
    {
      title: "Web App Development",
      desc: "Applications that run in a browser, often built using React, Angular, or Vue.js. Backend technologies like Node.js, Django, or Laravel handle data processing.",
    },
    {
      title: "Desktop App Development",
      desc: "Apps built for Windows, macOS, or Linux using frameworks like Electron or .NET.",
    },
  ];

  return (
    <>
      <section className="bg-white py-12 px-4 md:px-10 lg:px-20 rounded-3xl shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="bg-[#f8f4ef] w-full max-w-[650px] h-[300px] md:h-[400px] lg:h-[550px] flex items-center justify-center shadow-md rounded-2xl mx-auto">
            <img
              src="/src/components/services/App_Development/assets/app.jpeg"
              alt="Website illustration"
              className="h-auto w-[70%] md:w-[60%] lg:w-[80%] object-contain rounded-full"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 w-full">
            <h2 className=" font-roboto font-normal text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.2] tracking-normal  text-center lg:text-left w-full">
              App Development
            </h2>

            <p className="text-[#121212] text-[16px] md:text-[18px] mb-6 text-justify lg:text-left">
              App development is the process of designing, building, testing,
              and deploying software applications for various platforms, such as
              mobile devices (iOS, Android) or desktop systems. It involves
              multiple stages, technologies, and methodologies to ensure the
              application meets user needs and business goals.
            </p>

            <div className="w-full bg-[#ae9552] text-white rounded-full px-6 sm:px-10 md:px-20 lg:px-[80px] xl:px-[120px] py-[8px] text-[16px] md:text-[18px] font-semibold tracking-[2px] text-center uppercase my-[30px] shadow-[0_50px_100px_-20px_#32325d40,0_30px_60px_-30px_#0000004d,inset_0_-2px_6px_0_#0a254059]">
              Types of App Development
            </div>

            <ul className="space-y-4 mt-4">
              {types.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BadgeCheck className="text-[#a28c4d] mt-1 min-w-[20px]" />
                  <div>
                    <p className="font-semibold text-[16px] md:text-lg">
                      Mobile App Development
                    </p>

                    <p className="font-semibold text-[10px] md:text-[15px]">
                      Native Apps:
                    </p>
                    <p className="text-gray-700 text-sm md:text-base">
                      Feature-rich sites powered by databases and backend logic
                      (e.g., social media, e-commerce).
                    </p>
                    <p className="font-semibold text-[10px] md:text-[15px] mt-5">
                      Hybrid Apps:
                    </p>
                    <p className="text-gray-700 text-sm md:text-base">
                      Developed using frameworks like React Native or Flutter to
                      run on multiple platforms.
                    </p>
                    <p className="font-semibold text-[10px] md:text-[15px] mt-5">
                      Progressive Web Apps (PWA):
                    </p>
                    <p className="text-gray-700 text-sm md:text-base">
                      Web-based apps that function like native apps on mobile
                      devices.
                    </p>

                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default App_Development;
