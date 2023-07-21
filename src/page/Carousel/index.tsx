
import './carousel.scss';

type CarouselProps = {
  showTitle: boolean;
}
const Carousel = ({ showTitle }: CarouselProps) => {

  return (
    <>
      {showTitle && <h2 className='carousel-text'>Trusted by the top companies in the world</h2>}
      <div className='carousel-container'>
        <section>
          <img title='3m' src="./assets/3m.svg" alt="3m" />
          <img title='Barstool' src="./assets/barstool-store.svg" alt="Barstool" />
          <img title='Budweiser' src="./assets/budweiser.svg" alt="Budweiser" />
          <img title='Buzzfeed' src="./assets/buzzfeed.svg" alt="Buzzfeed" />
          <img title='Forbes' src="./assets/forbes.svg" alt="Forbes" />
          <img title='Macys' src="./assets/macys.svg" alt="Macys" />
          <img title='menshealth' src="./assets/menshealth.svg" alt="menshealth" />
        </section>
        <section>
          <img title='3m' src="./assets/3m.svg" alt="3m" />
          <img title='Barstool' src="./assets/barstool-store.svg" alt="Barstool" />
          <img title='Budweiser' src="./assets/budweiser.svg" alt="Budweiser" />
          <img title='Buzzfeed' src="./assets/buzzfeed.svg" alt="Buzzfeed" />
          <img title='Forbes' src="./assets/forbes.svg" alt="Forbes" />
          <img title='Macys' src="./assets/macys.svg" alt="Macys" />
          <img title='menshealth' src="./assets/menshealth.svg" alt="menshealth" />
        </section>
        <section>
          <img title='3m' src="./assets/3m.svg" alt="3m" />
          <img title='Barstool' src="./assets/barstool-store.svg" alt="Barstool" />
          <img title='Budweiser' src="./assets/budweiser.svg" alt="Budweiser" />
          <img title='Buzzfeed' src="./assets/buzzfeed.svg" alt="Buzzfeed" />
          <img title='Forbes' src="./assets/forbes.svg" alt="Forbes" />
          <img title='Macys' src="./assets/macys.svg" alt="Macys" />
          <img title='menshealth' src="./assets/menshealth.svg" alt="menshealth" />
        </section>
      </div>
    </>
  )
}

export default Carousel;