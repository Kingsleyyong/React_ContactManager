import React from 'react'
import { Link } from 'react-router-dom';
import BigCard from './BigCard';

const ContactDetails = (props) => {    
    return (
        <div className="main">
            <BigCard contact={props.location.state.contact} />
            <br></br>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back to contact list</button>
                </Link>
            </div>
        </div>

    )
}

export default ContactDetails;
