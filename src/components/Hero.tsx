import { motion } from "framer-motion";
function Hero() {
  return (
    <div 
      className="flex flex-col p-5 mt-10 md:flex-row lg:flex-row-reverse lg:items-center lg:w-10/12 mx-auto"
      
    >
        <motion.img src="/illustration-working.svg" alt="" className="md:w-1/2 scale-125"
          initial={{ opacity: 0 , x: 300 }}
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 1, stiffness: 50 }}
        />
        <motion.div className=" flex flex-col gap-5 mt-10 text-center md:text-left"
          initial={{ opacity: 0 , x: -300 }}
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 1 }}
        >
            <h1 className=" text-4xl  font-bold text-veryDarkBlue">More than just shorter links</h1>
            <p className="text-xl font-medium text-grayishViolet">
            Build your brand’s recognition and get detailed insights 
            on how your links are performing.
            </p>
            <button
                className="font-bold w-3/5 mx-auto hove text-white bg-cyan px-5 py-3 rounded-full hover:cursor-pointer hover:bg-darkCyan transition-colors duration-300 lg:w-4/12 lg:mx-0"
            >
                Get Started
            </button>
        </motion.div>
    </div>
  )
}

export default Hero