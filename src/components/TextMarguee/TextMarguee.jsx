import React from 'react'
import './TextMarguee.scss'
import { motion } from "framer-motion";


const TextMarguee = () => {

    const itemVariants1 = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.4 } }
    }

    
    const itemVariants2 = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.4 } }
    }

    return (
        <div className='marguee'>
            <div className='img-container'>
                <span><img src="/images/Z0cA4ZbqstJ970C3_Rivian_logo_and_wordmark2 (1).svg" alt="" /> </span>
                <span><img src="/images/Z2LneZbqstJ98pKu_Moxion.svg" alt="" /> </span>
                <span><img src="/images/Z2HXc5bqstJ98naA_Proof.svg" alt="" /> </span>
                <span><img src="/images/Z1r07ZbqstJ98aSL_8VCVCFirm.svg" alt="" /> </span>

                <span><img src="/images/Z2FkCZbqstJ98mFM_Behance.svg" alt="" /> </span>
                <span><img src="/images/Z2Lo5ZbqstJ98pLj_HYPERFRAME.svg" alt="" /> </span>
                <span><img src="/images/Z0cAzJbqstJ970Cv_Frame1073714686.svg" alt="" /> </span>

                <span><img src="/images/Z0cAypbqstJ970Cs_Frame1073714684.svg" alt="" /> </span>


            </div>
            <div className='line'></div>
            <motion.div className="text-apart"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.02 }  // ✅ Smooth letter stagger
                    }
                }}

            >
                <motion.h1 variants={itemVariants1}>Rejouice at a Glance.</motion.h1>
                <motion.h1 variants={itemVariants2}>hello@rejouice.com</motion.h1>
            </motion.div>
        </div>
    )
}

export default TextMarguee
