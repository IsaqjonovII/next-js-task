import React from 'react';
import c from "./Style.module.css"

const Container = ({children}) => {
  return (
    <div className={c.container}>
      {children}
    </div>
  )
}

export default Container
