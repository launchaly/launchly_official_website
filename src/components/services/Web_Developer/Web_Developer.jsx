import { BadgeCheck } from "lucide-react";

const Web_Development = () => {
  const types = [
    {
      title: "Static Websites",
      desc: "Simple sites without dynamic content, built with HTML, CSS, and JavaScript.",
    },
    {
      title: "Dynamic Websites",
      desc: "Feature-rich sites powered by databases and backend logic (e.g., social media, e-commerce).",
    },
    {
      title: "E-commerce Websites",
      desc: "Online stores built using platforms like Shopify, WooCommerce, or custom-built solutions.",
    },
    {
      title: "Web Applications",
      desc: "Interactive platforms like Google Docs, Trello, and Gmail.",
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
              Website Development
            </h2>

            <p className="text-[#121212] text-[16px] md:text-[18px] mb-6 text-justify lg:text-left">
              Website development is the process of creating, designing,
              deploying, and maintaining a website for the internet or an
              intranet. It involves several aspects, including web design, web
              programming, content creation, client-side and server-side
              scripting, and security configurations.
            </p>

            <div className="w-full bg-[#ae9552] text-white rounded-full px-6 sm:px-10 md:px-20 lg:px-[80px] xl:px-[120px] py-[8px] text-[16px] md:text-[18px] font-semibold tracking-[2px] text-center uppercase my-[30px] shadow-[0_50px_100px_-20px_#32325d40,0_30px_60px_-30px_#0000004d,inset_0_-2px_6px_0_#0a254059]">
              Types of Websites
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

export default Web_Development;
