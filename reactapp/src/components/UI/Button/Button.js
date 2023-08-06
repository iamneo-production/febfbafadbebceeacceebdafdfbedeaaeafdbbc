import React from 'react'
const Button = ({children, onClick, disabled}) => {
  return (
    <div className="button">
    <button onClick = {onClick} disabled = {disabled}>{children}</button>
    </div>
)
}

export default Button