import { motion, AnimatePresence } from "framer-motion";

const ProfileDetails = ({ close }) => {
  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={close}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[90%] max-w-lg max-h-[85vh] 
          rounded-2xl border border-white/10 
          bg-gradient-to-l from-midnight to-navy shadow-xl flex flex-col overflow-hidden"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={close}
            className="absolute top-4 right-4 p-2 rounded-md bg-white/10 hover:bg-white/20 transition z-10"
          >
            ✕
          </button>

          {/* SCROLLABLE CONTENT */}
          <div className="overflow-y-auto p-5 scrollbar-hide">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="assets/raj.png"
                alt="Tanishq"
                className="w-full object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-white">
                Tanishq Mishra
              </h2>

              <p className="mt-2 text-neutral-400 leading-relaxed">
                I am an aspiring Software Engineer and Computer Science student passionate about building scalable, real-world applications. As a full-stack developer, I work with technologies like React, Node.js, Express, and MongoDB, focusing on efficient APIs and clean backend architecture.

                <br /><br />

                My main interest lies in backend development and system design, where I enjoy solving problems using Data Structures and Algorithms. I have built projects like INGRES AI, a multi-personality chatbot platform showcasing real-time personality switching and contextual consistency.

                <br /><br />

                I am also exploring DevOps and cloud deployment to build complete end-to-end systems, and I’m eager to grow, contribute, and create impactful software solutions.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProfileDetails;