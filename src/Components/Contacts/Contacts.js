import React, { useEffect, useState } from 'react';
import axios from '../../data/axios-config';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loaded, setLoaded] = useState(false)

    // functions
    const sortAlpabetically = (a, b) => {
        if (a.full_name < b.full_name) {
            return -1;
        }
        if (a.full_name > b.full_name) {
            return 1;
        }
        return 0;
    }

    // on render
    useEffect(() => {
        if (!loaded) {
            axios.get("contact").then(({ data }) => {
                setContacts(data);
                setLoaded(true);
            });
        } else {
            return null
        }
    }, [loaded, contacts]);


    contacts.sort(sortAlpabetically);

    return (
        <div>
            <div>
                {contacts.map((contact) => (
                    <div className="card m-4" key={contact.full_name}>
                        <div className="card-body">
                            <div className="row lineHeight">
                                <div className="col-md-2">
                                    <div className="firstLetter">{contact.full_name[0]}</div>
                                </div>
                                <div className="col-md-2">{contact.full_name}</div>
                                <div className="col-md-4">{contact.email}</div>
                                <div className="col-md-2">{contact.phone}</div>
                                <div className="col-md-2">{contact.date_of_birth}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts