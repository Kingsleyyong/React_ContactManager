import React, { useState, useEffect } from "react";
import { uuid } from 'uuidv4';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails";
import DeleteConfirmation from "./DeleteConfirmation";

function App() {

    // const contact = [
    //     {
    //         id: "1",
    //         name: "Tom",
    //         email: "tom@gmail.com"
    //     },
    //     {
    //         id: "2",
    //         name: "Nick",
    //         email: "nick@gmail.com"
    //     }
    // ];

    const LOCAL_STORAGE_KEY = "contacts"
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        setContacts([...contacts, { id: uuid(), ...contact }]);
    }
    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList)
    }
    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
        if (retriveContacts) setContacts(retriveContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className="ui container">
            <Router>
                <Header />

                <Switch>
                    <Route
                        path="/"
                        exact
                        // component={() => (
                        //     <ContactList contact={contacts} getContactID={removeContactHandler} />
                        // )}

                        render={(props) => (
                            <ContactList
                                {...props}
                                contact={contacts}

                            />
                        )}

                    />
                    <Route
                        path="/add"
                        // component={() => (
                        //     <AddContact addContactHandler={addContactHandler} />
                        // )}

                        render={(props) => (
                            <AddContact
                                {...props}
                                addContactHandler={addContactHandler}
                            />
                        )}
                    />

                    <Route
                        path="/contact/:id"
                        exact
                        component={ContactDetails}
                    />

                    <Route
                        path="/contact/:id/delete"
                        render={(props) => (
                            <DeleteConfirmation
                                {...props}
                                getContactID={removeContactHandler}
                            />
                        )}

                    />
                </Switch>

                {/* <AddContact addContactHandler={addContactHandler} />
                <ContactList contact={contacts} getContactID={removeContactHandler} /> */}
            </Router>

        </div >
    );
}

export default App;
