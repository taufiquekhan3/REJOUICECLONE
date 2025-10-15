import React, { useEffect, useRef } from 'react'
import './Box.css'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Box = ({children}) => {

    // const itemvariants1 = {  STEP1 -- LEARN TO MOVE A BOX 
    //     hidden: { opacity: 0, x: -100 },
    //     visible: { opacity: 1, x: 200, transition: { duration: 2 }, rotate: 360 }
    // }

    // LEARN TO TRACK POSITION OF CURSOR USING MOTIONVALUES

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const magneticX = useMotionValue(0);
    const magneticY = useMotionValue(0);

    const springX = useSpring(magneticX, { stiffness: 400, damping: 10 });
    const springY = useSpring(magneticY, { stiffness: 400, damping: 10 });


    const ref = useRef(null);


    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);
            console.log('mouseX', mouseX);
            console.log('mouseY', mouseY);
        }


        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, [mouseX, mouseY])

    useEffect(() => {
        const updateMagneticEffect = () => {

            const el = ref.current;  // get element box

            if (!el) return;

            const rect = el.getBoundingClientRect();
            const elCenterX = rect.left + rect.width / 2;
            const elCenterY = rect.top + rect.height / 2;

            const dx = mouseX.get() - elCenterX;
            const dy = mouseY.get() - elCenterY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const magneticRadius = 200;

            if (distance < magneticRadius) {
                // Move element slightly toward the cursor
                magneticX.set(dx * 0.3);
                magneticY.set(dy * 0.3);
            } else {
                magneticX.set(0);
                magneticY.set(0);
            }

            requestAnimationFrame(updateMagneticEffect);
        };

        updateMagneticEffect();

    }, [mouseX, mouseY])


    // STEP2 -- LEARN TO MOVE A BOX WITH CURSOR POSITION
    return (
        <>
            <motion.div 
                ref={ref}
                style={
                    {
                        x:  springX,
                        y:  springY


                    }
                }
            >
                {children}

            </motion.div>
        </>
    )
}

export default Box
