import './bar.scss'

type BarProps = {
  inner: string,
}
const Bar = (props: BarProps) => {
  return <section className='bar-header'>{props.inner}</section>
}

export default Bar;