import React from 'react'

import { FaHeart } from 'react-icons/fa'
import { Link } from "react-router-dom";

import './Navigation.css'

const Navigation = () => {
    return (
        <div className="d-flex__space__between header">
            <h2 style={{textAlign: 'center'}}>
                <Link to='/'>The Meal Recipe</Link>
            </h2>
            <Link className="favorite" to='/favorites'><FaHeart /></Link>
        </div>
    )
}

export default Navigation