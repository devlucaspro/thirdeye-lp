import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Product = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    productAnimation();
  }, [])

  function productAnimation() {
  
    gsap.from('.text-animation2', {
      scrollTrigger: {
        trigger: '.text-animation2',
        start: 'top 90%',
        end: 'center 20%',
        scrub: true,
      },
      opacity: 0,
      y: 50,
    })
  }


  return (
    <div className='description-container container'>
      <img src="./assets/thirdeye-person.png" alt="Avatar image" />
      <div className='description-text text-animation2'>
        <p className='orange p-feature'>Feature #2</p>
        <h2>Make your life easy with our product</h2>
        <p className='p-description'>
        Welcome to the future of online payments with thirdEye! We are thrilled to introduce our
        cutting-edge payment solution that leverages the power of Web3 technology,
        revolutionizing the way you transact and interact with the digital economy.
        </p>
      </div>
    </div>
  )
}

export default Product;