import style from './Button.module.css';

const Button = ({icon, text, isOutline, ...rest}) => {
  return (
    <button {...rest} className={isOutline ? style.outline_btn : style.primary_btn}>
      {icon}
      {text}
    </button>
  )
}
export default Button