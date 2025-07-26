import React from 'react'
import './LandingPage.scss'
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LandingPage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-1">
            <div className="heading">
                <motion.h1
                //  variants={parentVariants} // Apply stagger effect properly
                 initial="hidden"
                 animate="visible"
                 variants={{
                    visible: { 
                        transition: {   delayChildren: 0.3,staggerChildren: 0.1 } // Letters appear one after another
                    } 
                }}
                 >
                    {
                        "REJOUICE".split("").map((char, index) => (
                            <motion.span variants={itemVariants} style={{ display: 'inline-block' }} key={index}>{char}</motion.span>
                        ))
                    }
                </motion.h1>
            </div>

            <div className="s1">
                <div>
                    Strategy, Design,<br />
                    and Performance.
                </div>
                <div>
                    Two Engagement <br />
                    Models: Cash or Equity.
                </div>
            </div>
        </div>
    )
}

export default LandingPage
