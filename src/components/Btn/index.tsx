import './btn.scss'

type BtnProps = {
  children: string,
  hrefProp: string,
}
const Btn = (props: BtnProps) => {
  return <a className='btn-component btn-component-mobile' href={props.hrefProp}>{props.children}</a>
}

export default Btn;