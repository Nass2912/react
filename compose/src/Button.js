import className from "classnames"

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) => 
{
  return (
    <button className="bg-red-400 border-red-500 text-white border-2 border-slate-300 px-2 py-1.5 border">
      {children}
    </button>
  )
}

Button.propTypes = {
  checkVariaitonValue: (
    {primary,secondary,success,warning,danger}) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)

    if(count > 1){
      return new Error("Only one of the mains are acceptable")
    }
  }
}

export default Button