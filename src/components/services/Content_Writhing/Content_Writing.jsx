import { BadgeCheck } from "lucide-react";

const Content_Writing = () => {
  const types = [
    {
      title: "Blog Writing",
    },
    {
      title: "Website Content Writing",
    },
    {
      title: "Social Media Content",
    },
  ];

  return (
    <>
      <section className="bg-white py-12 px-4 md:px-10 lg:px-20 rounded-3xl shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="bg-[#f8f4ef] w-full max-w-[650px] h-[300px] md:h-[400px] lg:h-[550px] flex items-center justify-center shadow-md rounded-2xl mx-auto">
            <img
              src="/src/components/services/Web_Developer/assets/web1.png"
              alt="Website illustration"
              className="h-auto w-[70%] md:w-[60%] lg:w-[80%] object-contain rounded-full"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 w-full">
            <h2 className=" font-roboto font-normal text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.2] tracking-normal  text-center lg:text-left w-full">
              Content Writing
            </h2>

            <p className="text-[#121212] text-[16px] md:text-[18px] mb-6 text-justify lg:text-left">
              Content writing is the process of creating, editing, and
              publishing written content for digital and print media. It plays a
              crucial role in marketing, branding, and communication, helping
              businesses connect with their audience through valuable,
              informative, and engaging text.
            </p>

            <div className="w-full bg-[#ae9552] text-white rounded-full px-6 sm:px-10 md:px-20 lg:px-[80px] xl:px-[120px] py-[8px] text-[16px] md:text-[18px] font-semibold tracking-[2px] text-center uppercase my-[30px] shadow-[0_50px_100px_-20px_#32325d40,0_30px_60px_-30px_#0000004d,inset_0_-2px_6px_0_#0a254059]">
              Types of Content Writing
            </div>

            <ul className="space-y-4 mt-4">
              {types.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BadgeCheck className="text-[#a28c4d] mt-1 min-w-[20px]" />
                  <div>
                    <p className="font-semibold text-[16px] md:text-lg">
                      {item.title}
                    </p>
                    <p className="text-gray-700 text-sm md:text-base">
                      {item.desc}
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

export default Content_Writing;
