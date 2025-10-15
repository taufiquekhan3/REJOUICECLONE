import React from 'react';
import './TextPage.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Box from '../Box/Box';

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

    const [isHovered1, setIsHovered1] = React.useState(false);

    const [mousePosition1, setMousePosition1] = React.useState({ x: 0, y: 0 });

    const [isHovered2, setIsHovered2] = React.useState(false);

    const [mousePosition2, setMousePosition2] = React.useState({ x: 0, y: 0 });

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

                    <motion.h1>{splitText("and performance marketing to transform founders'")}</motion.h1>

                    <motion.h1>{splitText("visions into remarkable brands. See our services.")}</motion.h1>
                </motion.div>

                {/* Inner flex text content */}
                <motion.div className='inner-flex' variants={parentVariants}>
                    <motion.div className="box" style={{ backgroundColor: "transparent" }}>
                        <motion.h1>{splitText("Tomorrow’s brands, today.")}</motion.h1>
                    </motion.div>
                    <motion.div className="box" style={{ backgroundColor: "transparent" }}>
                        <motion.h1  >
                            <p>
                                {splitText("We are a growth accelerator.")} <br />
                            </p>
                            <p
                                className="description">
                                {splitText("Since 2013, we have been recognized globally for helping founders build market-defining brands that drive sustainable revenue and shape culture.")}
                            </p>
                            <p>{splitText("In 2023, we launched our Venture Model to further support founders.")}</p>
                            <p className="description">
                                {splitText("We partner with five clients a year to give each one the focus and care they deserve.")}
                            </p>
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

                    <div className="car" style={{ position: "relative" }}>
                        <motion.img
                            src="/images/leftimg.avif"
                            alt="Left Car"
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect()
                                setMousePosition1({
                                    x: e.clientX - rect.left,
                                    y: e.clientY - rect.top
                                });
                            }}

                            whileHover={{ scale: 1.05 }}

                        />

                        <AnimatePresence>
                            {isHovered1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        x: mousePosition1.x,
                                        y: mousePosition1.y,
                                        pointerEvents: "none",
                                        zIndex: 10,
                                    }}
                                >
                                    <video
                                        src="/Z2BZfpbqstJ98kkB_RJ-HIGHLIGHT-Work-01.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        style={{
                                            width: "350px",
                                            objectFit: "cover", // optional for cropping/fitting behavior
                                        }}
                                    />

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>


                    <div className="car">
                        <motion.img
                            src="/images/right-img.avif"
                            alt="Right Car"
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect()
                                setMousePosition2({
                                    x: e.clientX - rect.left,
                                    y: e.clientY - rect.top
                                });
                            }}

                            whileHover={{ scale: 1.05 }}
                        />
                        <AnimatePresence>
                            {isHovered2 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        x: mousePosition2.x,
                                        y: mousePosition2.y,
                                        pointerEvents: "none",
                                        zIndex: 10,
                                    }}
                                >
                                    <video
                                        src="/Z2lj25bqstJ98yZV_RJ-WIDGET-RIVIAN (1).mp4"
                                        autoPlay
                                        muted
                                        loop
                                        style={{
                                            width: "350px",
                                            objectFit: "cover", // optional for cropping/fitting behavior
                                        }}
                                    />

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default TextPage;
