import React from 'react';
import './Approach.scss';
import { motion } from 'framer-motion';

const Approach = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.3 }  // ✅ Added slight delay per text block
        }
    };

    return (
        <div className='outer-pad'>
            <h1>Our Approach.</h1>

            <div className='a1 a2'>
                <div className="a1-approach text">
                    <h1>A simple philosophy: <br /> quality over quantity.</h1>
                </div>

                {/* Animated Section */}
                <motion.div
                    className="a1-approach"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}  // ✅ Adjusted for better triggering
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.02 }  // ✅ Smooth letter stagger
                        }
                    }}
                >
                    <motion.h1 variants={textVariants}>
                        We build brands that set new benchmarks. To do so, we don’t do volume.
                        We partner with only five clients a year, ensuring unmatched focus,
                        precision, and impact. Every detail is crafted, every decision strategic,
                        and every outcome transformative.
                    </motion.h1>
                </motion.div>
            </div>

            <div className='a1 a3'>
                <div className="a1-approach text">
                    <h1>Performance & emotion. <br /> You need both.</h1>
                </div>
                <motion.div
                    className="a1-approach"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}  // ✅ Adjusted for better triggering
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.02 }  // ✅ Smooth letter stagger
                        }
                    }}
                >
                    <motion.h1 variants={textVariants}>
                        Data is vital. Fostering an emotional connection with your audience is equally vital
                        if you want to drive retention and advocacy. That’s why we create brands that
                        not only captivate but also deliver measurable and sustainable growth.
                    </motion.h1>
                </motion.div>
            </div>

            <div className="video">
                <video autoPlay loop muted>
                    <source src='/Z2BbT5bqstJ98kk6_REJOUICE-PORTFOLIO-LOOP-PROJECTS.mp4' />
                </video>
            </div>
        </div>
    );
};

export default Approach;
