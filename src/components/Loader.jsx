import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/tntlogo-white.png';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#060010]"
        >
            {/* Optional background effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* <motion.img
                src={logo}
                alt="Tagntarget Logo"
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                className="w-30 md:w-40 object-contain"
            /> */}

            <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-75"
                />
            </div>
        </motion.div>
    );
};

export default Loader;
