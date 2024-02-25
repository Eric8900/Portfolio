import { useState, useEffect } from 'react';
import '../index.css';
import { motion } from 'framer-motion';
import { WavyBackground } from './WavyBackground';

function Home() {
  const phrases = ['junior', 'web developer', 'competitive programmer', 'world traveler', 'singer', 'sprinter'];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const changePhrase = () => {
      setFade(false); 
      const nextIndex = (phrases.indexOf(currentPhrase) + 1) % phrases.length;
      setTimeout(() => {
        setCurrentPhrase(phrases[nextIndex]);
        setFade(true); 
      }, 700);
    };

    const intervalId = setInterval(changePhrase, 3000);

    return () => clearInterval(intervalId);
  }, [currentPhrase]);

  return (
    <WavyBackground children={
      <>
       <div id='home' className={`h-screen w-screen flex justify-center items-center text-white`}>
        <motion.div initial={{ opacity : 0 }} animate={{ opacity : 1 }} transition={{ ease: "easeInOut", duration: 0.7 }} className='p-5 text-center'>
            <h1 className='text-4xl'>
            Hi, I'm <b className='text-4xl text-4xl text-[#00ffea]'>Eric Chen</b>, and I'm a{' '}
            <span id='changingText' className={`${fade ? 'fade-in' : 'fade-out'} text-4xl text-[#00ffea]`}>
                {currentPhrase}
            </span>{' '}
            from Texas.
            </h1>
        </motion.div>
    </div>
      </>
    } backgroundFill='#0B0B0B'/>
  );
}

export default Home;
