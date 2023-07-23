import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './description.scss';

const Description = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    descAnimation();
  }, [])
  
  function descAnimation() {
    
    gsap.from('.text-animation1', {
      scrollTrigger: {
        trigger: '.text-animation1',
        start: 'top 90%',
        end: 'center 20%',
        scrub: true,
      },
      opacity: 0,
      y: 100,
      absolute: true
    })
  }

  return (
    <div className='description-container container'>
      <img src="./assets/thirdeye-moc-platform.png" alt="Mockup phone" />
      <div className='description-text text-animation1'>
        <p className='orange p-feature'>Feature #1</p>
        <h2>How to install our app</h2>
        <p className='p-description'>To get started using our app, you can install it through Play Store or by our site itself, it's up to you, it's free.</p>
        <div className='icons-container'>
          <div className='div-icon'>
            <i className="fa-solid fa-book-open fa-2x"></i>
            <div>
              <p>Super Useful!</p>
              <p>100% TRUSTED</p>
            </div>
          </div>
          <div className='div-icon'>
            <i className="fa-solid fa-bolt fa-2x"></i>
            <div>
              <p>Servers every time!</p>
              <p>100% TRUSTED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description;