import React from 'react'

import { FaHeart } from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom";

import './Navigation.css'

const Navigation = () => {
    const route = useLocation()
    
    return (
        <div className="d-flex__space__between header">
            <h2 style={{textAlign: 'center'}}>
                <Link to='/'>The Meal Recipe</Link>
            </h2>
            { route.pathname !== '/favorites' && <Link className="favorite" to='/favorites'><FaHeart /></Link>}
        </div>
    )
}

export default Navigation