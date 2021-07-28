import React from 'react'
import { Link } from 'react-router-dom';
import user from '../Images/userImg.png'

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="ui grid item">
            <img src={user} alt="user" className="two wide column image" />
            <div className="five wide column">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <Link to={{ pathname: `/contact/${id}/delete`, state: { contact: props.contact } }}>
                <i
                    className="trash alternate outline icon right floated right aligned big"
                    style={{ color: "red", marginTop: "7px" }}
                ></i>
            </Link>

        </div>

    )
}

export default ContactCard
