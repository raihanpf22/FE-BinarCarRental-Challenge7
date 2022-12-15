import React, { Children, FC, Fragment, ReactNode } from 'react'
import Navbar from '../component/Navbar'

type Props = {
    children?: ReactNode
}

const MainLayout: FC<Props> = (props) => {
    
    const {children} = props

  return (
    <Fragment>
        <Navbar/>
        {children}
    </Fragment>
  )
}

export default MainLayout