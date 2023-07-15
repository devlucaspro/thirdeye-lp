
import Card from '../../components/Card';
import './carousel.scss';

const Carousel = () => {
  return (
    <div className='carousel-container container'>
      <h2>Trusted by the top companies in the world</h2>
      <section>
        <Card name='Instagram' logo='./assets/ig.png' />
        <Card name='Youtube' logo='./assets/yt.png' />
        <Card name='Github' logo='./assets/gh.png' />
        <Card name='LinkedIn' logo='./assets/linkedin.png' />
        <Card name='Facebook' logo='./assets/fb.png' />
        <Card name='Figma' logo='./assets/figma.png' />
      </section>
    </div>
  )
}

export default Carousel;