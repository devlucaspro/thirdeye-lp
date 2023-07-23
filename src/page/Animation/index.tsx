import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './animation.scss';

const Animation = () => {

  gsap.registerPlugin(ScrollTrigger);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, [])

  useEffect(() => {
    animationGsap();
  }, [hasRendered])

  function animationGsap() {

    gsap.to('.svg1', {
      scrollTrigger: {
        trigger: '.svg1',
        start: 'center center',
        scrub: true,
      },
      y: 400,
      rotate: 180,
      opacity: 0,
    });

    gsap.to('.svg2', {
      scrollTrigger: {
        trigger: '.svg2',
        start: 'center center',
        scrub: true,
      },
      y: 400,
      rotate: -180,
      opacity: 1,
      borderRadius: '50%',
    })

    gsap.to('.svg-title', {
      scrollTrigger: {
        trigger: '.svg-title',
        start: 'top center',
        scrub: true,
      },
      y: 480,
      opacity: 1,
    })

    gsap.to('.title2', {
      scrollTrigger: {
        trigger: '.title2',
        start: 'center center',
        scrub: true,
      },
      y: 480,
      opacity: 1,
    })
  };

  return (
    <div className='container'>
      <div className='svg-container'>
        <div className='svg svg1'></div>
          <h2 className='svg-title'>Don't be afraid to use us</h2>
      </div>
      <div className='svg-container'>
        <div className='svg svg2'></div>
          <h2 className='svg-title title2'>Start using today</h2>
      </div>
    </div>
  )
}

export default Animation;