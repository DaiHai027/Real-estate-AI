import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const reviews = [
  {
    id: 1,
    title: "Exceptional Service and Quality Properties",
    clientName: "John Smith",
    designation: "CEO",
    feedback:
      "I am extremely impressed with the AI-generated real estate properties offered by this website. The attention to detail, quality of listings, and personalized service have exceeded my expectations. The team behind this platform has truly revolutionized the real estate industry. I highly recommend their services to anyone looking for their dream home 🚀",
    url: "https://i.ibb.co/BKJBBbt/1.jpg",
  },
  {
    id: 2,
    title: "Efficient and User-Friendly Experience",
    clientName: "Emily Johnson",
    designation: "CTO",
    feedback:
      "Finding a new property has never been easier thanks to this AI-powered real estate website. The user interface is intuitive, and the search filters allow me to quickly narrow down my options. The AI-generated listings are comprehensive and provide all the necessary details. I appreciate the efficiency and convenience this platform offers. Kudos to the team for creating such a user-friendly experience! 👏",
    url: "https://i.ibb.co/xFLg9Sq/2.jpg",
  },
  {
    id: 3,
    title: "Unparalleled Accuracy and Realism",
    clientName: "Mark Davis",
    designation: "Product Manager",
    feedback:
      "I was initially skeptical about AI-generated real estate properties, but this website has completely changed my perspective. The accuracy and realism of the listings are remarkable. It's hard to believe that these properties were generated by AI. The attention to detail in terms of floor plans, virtual tours, and property descriptions is impressive. I am thrilled with the options presented to me and can confidently say that this platform is a game-changer in the real estate industry 💯",
    url: "https://i.ibb.co/9TKZ3kN/3.jpg",
  },
];
export default function Testimonial() {
  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="container px-6 py-10 lg:py-20 mx-auto">
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold tracki text-center dark:text-gray-50">
            Clients says <span className="text-primary">...</span>
          </h1>
          <div className="divider my-1 bg-primary h-[5px] w-[5%] mx-auto"></div>
          <p className="py-3 text-sm lg:text-lg w-full lg:w-[40%] mx-auto text-center text-gray-600">
            Feedback are invaluable sources of fuel the <br/>growth and improvement
          </p>
        </div>
        <div className="flex items-start max-w-6xl mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => {
            const { id, clientName, designation, feedback, url } = review;
            return (
              <SwiperSlide key={id}>
                  <div>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="38"
                      fill="currentColor"
                      className="bi bi-quote text-primary"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />{" "}
                    </svg>
                    <p className="flex items-center text-center text-gray-500 mx-2nmp run">
                      {feedback}
                    </p>
                    <div className="flex flex-col items-center justify-center mt-8">
                      <img
                        className="object-cover rounded-full w-14 h-14"
                        src={url}
                        alt=""
                      />
                      <div className="mt-4 text-center">
                        <h1 className="font-semibold text-gray-800 dark:text-white">
                          {clientName}
                        </h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {designation}
                        </span>
                      </div>
                    </div>
                  </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
      </div>
    </section>
  );
}
