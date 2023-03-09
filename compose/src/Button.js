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
    <button>
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