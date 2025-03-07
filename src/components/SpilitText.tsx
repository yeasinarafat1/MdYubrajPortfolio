import { motion } from "framer-motion";

const SplitText = ({text1, text2}: {text1: string, text2: string}) => {
  return (
    
      <div className="w-full flex items-center justify-center text-2xl md:text-3xl font-bold uppercase overflow-hidden font-oswald">
        {/* Left part sliding in */}
        <motion.span
          initial={{ x: "-200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="inline-block"
        >
          {text1}
        </motion.span>

        {/* Right part sliding in */}
        <motion.span
          initial={{ x: "200%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="inline-block"
        >
          {text2}
        </motion.span>
      </div>
    
  );
};

export default SplitText;
