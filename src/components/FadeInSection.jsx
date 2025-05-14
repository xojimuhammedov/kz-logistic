// components/FadeInSection.js
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box } from '@chakra-ui/react';

const MotionBox = motion(Box);

const FadeInSection = ({ children, delay = 0, direction = 'up' }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // faqat bir marta animatsiya ishlaydi
        threshold: 0.05,    // component 5% ekranga ko‘ringanda ishga tushadi
    });

    // Yo'nalish bo'yicha animatsiya holati
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay,
            },
        },
    };

    return (
        <MotionBox
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
        >
            {children}
        </MotionBox>
    );
};

export default FadeInSection;
