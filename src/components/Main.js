import React from 'react'
import Meals from './Meals'
import Navigation from './Navigation'
import Search from './Search'

const Main = (props) => {
  return (
    <>
        <Navigation />
        <Search />
        <Meals />
    </>
  )
}

export default Main