import React from 'react';
import { Link } from 'react-router-dom';
import BigCard from './BigCard';

export default function DeleteConfirmation(props) {
    const { id } = props.location.state.contact;
    const deleteContactHandler = (id) => {
        props.getContactID(id);
        props.history.push("/");
    }

    return (
        <div>
            <div className="">
                <h3>Are you sure to delete contact below?</h3>
            </div>
            <br />
            <BigCard contact={props.location.state.contact} />
            <br></br>
            <div className="center-div">
                <button
                    className="ui button red center"
                    onClick={() => deleteContactHandler(id)}
                >Confirm to delete</button>
                <Link to="/">
                    <button
                        className="ui button blue center">
                        Cancel
                    </button>
                </Link>
            </div>

        </div>
    )
}
