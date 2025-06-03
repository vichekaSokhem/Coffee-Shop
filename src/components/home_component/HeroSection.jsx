import React from "react";
import Matcha from "../../assets/heroSection/matcha.png";
import Caramel from "../../assets/heroSection/caramel.png";
import Strawberry from "../../assets/heroSection/strawberry.png";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Matcha,
    title: "Matcha Crème Frappuccino",
    subtitle:
      "A creamy and refreshing blend of premium matcha green tea, milk, and ice—topped with a swirl of whipped cream.",
    modal: "Orange",
    bgColor: "#84D19E",
  },
  {
    id: 2,
    image: Caramel,
    title: "Ultra Caramel Frappuccino",
    subtitle:
      "Layers of caramel, whipped cream, and rich coffee blended with ice—topped with more caramel and cold foam for the ultimate sweet treat.",    modal: "Zero",
    bgColor: "#D1BF84",
  },
  {
    id: 3,
    image: Strawberry,
    title: "Strawberries & Crème Frappuccino",
    subtitle:
      "A delicious blend of ripe strawberries, milk, and ice, layered with swirls of whipped cream.",
    modal: "Cola",
    bgColor: "#E594B7",
  },
];
const HeroSection = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="bg-brandDark text-white "
      >

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px] 2xl:h-[720px] ">
          {/* ______ Headphone Info ______ */}
          <div className="flex flex-col justify-center py-10 md:py-0 xl:max-w-[900px] order-2 md:order-1">
            <div className="space-y-5 text-center">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-5xl font-oleo font-bold text-shadow text-primary mx-[100px] my-[10px]"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm mx-[100px] leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className=" px-4 py-2 bg-white inline-block font-normal rounded-sm"
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* ______ Headphone List Separator ______ */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-1"
              >
              </motion.div>

              {/* Headphone list switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10 m-[50px]"
              >
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        key={item.id}
                        onClick={() => handleActiveData(item)}
                        className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                      >
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt=""
                            className={`w-[80px] img-shadow ${
                              activeData.image === item.image
                                ? "opacity-100 scale-110"
                                : "opacity-50"
                            }`}
                          />
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* ______ Hero Image ______ */}
          <div className=" relative order-1 md:order-2 2xl:left-1/2  ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,
                  x: -100,

                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="left-1/3 top-1/8 w-[150px] img-shadow relative z-10 md:w-[200px] xl:w-[220px] 2xl:w-[300px]  "
              />
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;