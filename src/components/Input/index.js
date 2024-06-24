import React from 'react'
import './styles.css';

function Input({label,state,setState,placeholder}) {
  return (
      <div className='input-wrapper'>
          <p className='label-input'>{label}</p>
          <input value={state} onChange={(e) => setState(e.target.value)} className='custom-input' placeholder={placeholder} />
    </div>
  )
}

export default Input;