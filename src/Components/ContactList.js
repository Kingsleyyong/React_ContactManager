import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {

    const renderContactList = props.contact.map((obj) => {
        return (
            <ContactCard
                contact={obj}
                key={obj.id} />
        )
    })
    return (
        <div className="main">
            <div className="ui grid">
                <h1 className="left floated six wide column">Contact List</h1>
                <Link to="/add" className="right floated right aligned six wide column">
                    <button className="ui button blue">Add Contact</button>
                </Link>
            </div>
            
                
            
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList;

