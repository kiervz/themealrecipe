import React from 'react'
import Meals from './meals/Meals'
import Navigation from './navigation/Navigation'
import Search from './search/Search'

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