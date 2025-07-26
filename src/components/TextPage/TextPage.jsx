import React from 'react';
import './TextPage.scss';
import { motion } from 'framer-motion';

const TextPage = () => {
    // Parent animation for sections (Ensures all sections appear together)
    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }, // Fast appearance, no stagger between sections
        },
    };

    // Animation for letters (Stagger effect applied here)
    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Faster letter transition
    };

    // Wraps each letter with motion and adds stagger
    const splitText = (text) => (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                visible: {
                    transition: { staggerChildren: 0.015 }, // Stagger letters for smooth reveal
                },
            }}
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={textVariants} style={{ display: 'inline-block' }}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );

    return (
        <div data-scroll data-scroll-speed="2" className='outer-flex'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={parentVariants}
            >
                {/* Main Heading */}
                <motion.div className='text-up' variants={parentVariants}>
                    <motion.h1>{splitText("We blend the power of strategy, design,")}</motion.h1>
                    <br />
                    <motion.h1>{splitText("and performance marketing to transform founders'")}</motion.h1>
                    <br />
                    <motion.h1>{splitText("visions into remarkable brands. See our services.")}</motion.h1>
                </motion.div>

                {/* Inner flex text content */}
                <motion.div className='inner-flex' variants={parentVariants}>
                    <motion.div className="box">
                        <motion.h1>{splitText("Tomorrow’s brands, today.")}</motion.h1>
                    </motion.div>
                    <motion.div className="box">
                        <motion.h1>
                            <div className="description">
                                {splitText("We are a growth accelerator.")} <br />
                            </div>
                            <div className="description">
                                {splitText("Since 2013, we have been recognized globally for helping founders build market-defining brands that drive sustainable revenue and shape culture.")}
                            </div>
                            <div>{splitText("In 2023, we launched our Venture Model to further support founders.")}</div>
                            <div className="description">
                                {splitText("We partner with five clients a year to give each one the focus and care they deserve.")}
                            </div>
                            {splitText("Learn more ↗")}
                        </motion.h1>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Car Image Section */}
            <div className="car-flex">
                <div className="car-row">
                    <img src="/images/uppercar.avif" alt="Upper Car" />
                </div>
                <div className="car-grid">
                    <div className="car">
                        <img src="/images/leftimg.avif" alt="Left Car" />
                    </div>
                    <div className="car">
                        <img src="/images/right-img.avif" alt="Right Car" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextPage;
 