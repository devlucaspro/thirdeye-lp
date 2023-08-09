import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './contact.scss';

const Contact = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from('.svg-animation', {
      scrollTrigger: {
        trigger: '.svg-animation',
        start: 'bottom 90%',
      },
      opacity: 0,
      x: -5,
      stagger: .4,
    })
  })


  return (
    <div className='container contact-container'>
      <a href='https://www.instagram.com/ribeiroo.dev'>Start using ThirdEye</a>
      <div className='svgs-icons'>
        <svg className='svg-animation' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 47 46" fill="none">
          <path d="M3.91669 5.75H15.6667C17.7442 5.75 19.7367 6.55774 21.2057 7.99551C22.6747 9.43329 23.5 11.3833 23.5 13.4167V40.25C23.5 38.725 22.8811 37.2625 21.7793 36.1841C20.6775 35.1058 19.1832 34.5 17.625 34.5H3.91669V5.75Z" stroke="url(#paint0_linear_30_176)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M43.0833 5.75H31.3333C29.2558 5.75 27.2634 6.55774 25.7943 7.99551C24.3253 9.43329 23.5 11.3833 23.5 13.4167V40.25C23.5 38.725 24.119 37.2625 25.2207 36.1841C26.3225 35.1058 27.8169 34.5 29.375 34.5H43.0833V5.75Z" stroke="url(#paint1_linear_30_176)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_30_176" x1="13.7084" y1="5.75" x2="13.7084" y2="40.25" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_30_176" x1="33.2917" y1="5.75" x2="33.2917" y2="40.25" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className='svg-animation' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 46 46" fill="none">
          <path d="M30.6667 34.5L42.1667 23L30.6667 11.5" stroke="url(#paint0_linear_30_168)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.3333 11.5L3.83331 23L15.3333 34.5" stroke="url(#paint1_linear_30_168)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_30_168" x1="36.4167" y1="11.5" x2="36.4167" y2="34.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_30_168" x1="9.58331" y1="11.5" x2="9.58331" y2="34.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className='svg-animation' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 46 46" fill="none">
          <path d="M42.1666 23H34.5L28.75 40.25L17.25 5.75L11.5 23H3.83331" stroke="url(#paint0_linear_32_104)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_32_104" x1="23" y1="5.75" x2="23" y2="40.25" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className='svg-animation' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 46 46" fill="none">
          <path d="M23 36.4167L36.4167 23L42.1667 28.75L28.75 42.1667L23 36.4167Z" stroke="url(#paint0_linear_30_179)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M34.5 24.9166L31.625 10.5416L3.83331 3.83325L10.5416 31.6249L24.9166 34.4999L34.5 24.9166Z" stroke="url(#paint1_linear_30_179)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.83331 3.83325L18.3731 18.3731" stroke="url(#paint2_linear_30_179)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.0833 24.9167C23.2004 24.9167 24.9167 23.2004 24.9167 21.0833C24.9167 18.9662 23.2004 17.25 21.0833 17.25C18.9662 17.25 17.25 18.9662 17.25 21.0833C17.25 23.2004 18.9662 24.9167 21.0833 24.9167Z" stroke="url(#paint3_linear_30_179)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_30_179" x1="32.5833" y1="23" x2="32.5833" y2="42.1667" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_30_179" x1="19.1666" y1="3.83325" x2="19.1666" y2="34.4999" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_30_179" x1="11.1032" y1="3.83325" x2="11.1032" y2="18.3731" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear_30_179" x1="21.0833" y1="17.25" x2="21.0833" y2="24.9167" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EB5E28"/>
              <stop offset="1" stop-color="#EB5E28" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>


      </div>
    </div>
  )
}

export default Contact;