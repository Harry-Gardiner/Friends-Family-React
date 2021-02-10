import React, { useEffect, useState } from 'react';
import axios from '../../data/axios-config';
import { Link } from 'react-router-dom';

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

    const setUkDate = (string) => {
        let split = string.split('-');
        let newDate = `${split[2]}/${split[1]}/${split[0]}`;
        return newDate;
    }

    const daysTillBirthday = (birthday) => {  // e.g. 11/12/1987
        const birthdayArray = birthday.split("/");
        const currentYear = new Date().getFullYear();
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(currentYear, birthdayArray[1] - 1, birthdayArray[0], 12, 0, 0, 0);
        const secondDate = new Date(); // todays date
        const diffDays = Math.round((firstDate.getTime() - secondDate.getTime()) / (oneDay));
        // check days is a - number
        if (diffDays > 0 && diffDays < 20) {
            return (<div className="alert alert-warning text-center m-3">{`${diffDays} Days Until Birthday!`}</div>);
        } else if (diffDays === 0) {
            return (<div className="alert alert-success text-center m-3">Happy Birtday!</div>);
        }
    }

    // Delete contact
    const handleDelete = (id) => {
        axios.delete(`/contact/${id}`).then(() => {
            // refresh contact list on success
            axios.get("contact").then(({ data }) => {
                setContacts(data);
            });
        });
    };

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
                                <div className="col-md-1">
                                    <div className="firstLetter">{contact.full_name[0]}</div>
                                </div>
                                <div className="col-md-2">{contact.full_name}</div>
                                <div className="col-md-2">{contact.email}</div>
                                <div className="col-md-2">{contact.phone}</div>
                                <div className="col-md-2">{setUkDate(contact.date_of_birth)}</div>
                                <div className="col-md-1">
                                    <Link className="btn btn-warning" to={`/edit/${contact.id}`}>Edit</Link>
                                </div>
                                <div className="col-md-1">
                                    <button className="btn btn-danger" onClick={() => handleDelete(contact.id)}>Delete</button>
                                </div>
                            </div>
                            {daysTillBirthday(setUkDate(contact.date_of_birth))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts