'use client'
import { useState, useEffect } from 'react'
import './banner.css'
import { motion } from 'framer-motion'
import Image from 'next/image';

function Banner() {


    const TextVariants = {
        offscreen: {
            width: 0,
            opacity: 0
        },
        onscreen: {
            width: "auto",
            opacity: 1
        },
        exit: {
            width: 0,
            opacity: 0
        }
    };


    const divStyle = {
        backgroundImage: `url(https://i.ibb.co/94LCR9G/banner.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '450px',
        color: 'white',
    };

    const title = ["AUTO MEDICS"];
    const subtitle1 = ["The best car clinic nationwide"];
    const subtitle2 = ["Your trusted partner in the automobile world"];
    const subtitle3 = ["Quality service is our commitment, Customer satisfaction is our priority."];
    const [currentTitle, setCurrentTitle] = useState(-1);
    const [currentSubtitle1, setCurrentSubtitle1] = useState(-1);
    const [currentSubtitle2, setCurrentSubtitle2] = useState(-1);
    const [currentSubtitle3, setCurrentSubtitle3] = useState(-1);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i === title.length) {
                setCurrentTitle(0);
                i = 0;
            } else setCurrentTitle(i);
            i++;
        }, 1000 + title[i].length * 0.25);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let i = 0;
        const detailsInterval = setInterval(() => {
            if (i === subtitle1.length) {
                setCurrentSubtitle1(0);
                i = 0;
            } else setCurrentSubtitle1(i);
            i++;
        }, 3000 + subtitle1[i].length * 0.25);

        return () => clearInterval(detailsInterval);
    }, []);

    useEffect(() => {
        let i = 0;
        const detailsInterval = setInterval(() => {
            if (i === subtitle2.length) {
                setCurrentSubtitle2(0);
                i = 0;
            } else setCurrentSubtitle2(i);
            i++;
        }, 3000 + subtitle2[i].length * 0.25);

        return () => clearInterval(detailsInterval);
    }, []);

    useEffect(() => {
        let i = 0;
        const detailsInterval = setInterval(() => {
            if (i === subtitle3.length) {
                setCurrentSubtitle3(0);
                i = 0;
            } else setCurrentSubtitle3(i);
            i++;
        }, 3000 + subtitle3[i].length * 0.25);

        return () => clearInterval(detailsInterval);
    }, []);
    const props = {
        initial: 'offscreen',
        animate: 'onscreen',
        exit: 'exit',
        variants: TextVariants,
    };



    return (
        <div style={divStyle}>
            <div className='logoContainer'>
                <img className='bannerImg' src={'https://i.ibb.co/xY6tdZG/image-removebg-preview-1.png'} alt='' />
            </div>
            {/* <h1 className='bannerHeader'>AUTO MEDICS</h1> */}
            {/* <motion.h1
                className="bannerHeader"
                transition={{ staggerChildren: 0.2, duration: 0.1 }}
            >
                {title.map((word, index) =>
                    index === currentTitle ? (
                        <motion.span key={index}>
                            {word.split("").map((r, id) => (
                                <motion.span

                                    transition={{
                                        duration: 0.2,
                                        delay: id * 0.2
                                    }}
                                    {...props}
                                    key={id}
                                >
                                    {r}
                                </motion.span>
                            ))}
                        </motion.span>
                    ) : null
                )}
            </motion.h1> */}
            <div >
                {/* <p className='bannerSubTitles'>The best car clinic nationwide</p> */}
                <motion.p
                    className="bannerSubTitles"
                    transition={{ staggerChildren: 0.2, duration: 0.1 }}
                >
                    {subtitle1.map((word, index) =>
                        index === currentSubtitle1 ? (
                            <motion.span key={index}>
                                {word.split("").map((r, id) => (
                                    <motion.span
                                        {...props}
                                        transition={{
                                            duration: 0.1,
                                            delay: id * 0.1
                                        }}
                                        key={id}
                                    >
                                        {r}
                                    </motion.span>
                                ))}
                            </motion.span>
                        ) : null
                    )}
                </motion.p>
                {/* <p className='bannerSubTitles'> Your trusted partner in the automobile world</p> */}
                <motion.p
                    className="bannerSubTitles"
                    transition={{ staggerChildren: 0.2, duration: 0.1 }}
                >
                    {subtitle2.map((word, index) =>
                        index === currentSubtitle2 ? (
                            <motion.span key={index}>
                                {word.split("").map((r, id) => (
                                    <motion.span
                                        {...props}
                                        transition={{
                                            duration: 0.1,
                                            delay: id * 0.1
                                        }}
                                        key={id}
                                    >
                                        {r}
                                    </motion.span>
                                ))}
                            </motion.span>
                        ) : null
                    )}
                </motion.p>
                {/* <p className='bannerSubTitles'>Quality service is our commitment, Customer satisfaction is our priority.</p> */}
                <motion.p
                    className="bannerSubTitles"
                    transition={{ staggerChildren: 0.2, duration: 0.1 }}
                >
                    {subtitle3.map((word, index) =>
                        index === currentSubtitle3 ? (
                            <motion.span key={index}>
                                {word.split("").map((r, id) => (
                                    <motion.span
                                        {...props}
                                        transition={{
                                            duration: 0.1,
                                            delay: id * 0.1
                                        }}
                                        key={id}
                                    >
                                        {r}
                                    </motion.span>
                                ))}
                            </motion.span>
                        ) : null
                    )}
                </motion.p>

            </div>
        </div>
    )
}



export default Banner
