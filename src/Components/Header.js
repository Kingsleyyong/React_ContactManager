import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="ui one item menu">
            <div className="item">
                <Link to="/" style={{ color: 'black' }}><h2>Contact Manager</h2></Link>
            </div>
        </div>
    )
}