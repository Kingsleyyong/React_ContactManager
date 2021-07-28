import React from 'react'
import user from '../Images/userImg.png'


export default function BigCard(props) {
    return (
        <div>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{props.contact.name}</div>
                    <div className="description">{props.contact.email}</div>
                </div>
            </div>
        </div>
    )
}
