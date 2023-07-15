// import * as S from './example.scss';

// NameProps = {}
type CardProps = {
  title: string,
  description?: string,
  img?: string,
  hasButton?: boolean,
  hasDescription?: boolean,
  textButton?: string,
}

const Studyts = ({ 
  title = '', 
  description = '', 
  img = '',
  hasButton = false,
  textButton = 'Comprar',
}: CardProps) => {

  return (
    <div>
      <img src={img} alt="Photo" />
      <h4>{title}</h4>
      <p>{description}</p>
      {hasButton && <button>{textButton}</button>}
    </div>
  )
}

export default Studyts;