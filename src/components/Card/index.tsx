
import './card.scss';

type CarouselProps = {
  name: string,
  logo: string,
}

const Card = (props: CarouselProps) => {
  return (
    <div className='card-box'>
      <img loading='lazy' src={props.logo} alt={props.name} />
      <p>{props.name}</p>
    </div>
  )
}

export default Card;