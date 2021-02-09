import React, { useEffect, useState } from 'react';
import axios from '../../data/axios-config';
import history from '../../history';
import ErrorMsg from '../Error/Error';

const EditContacts = (props) => {
    // local state
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
    });

    const [error, setError] = useState(false);

    // Props
    const id = props.match.params.id;

    // on render
    useEffect(() => {
        axios.get(`/contact/${id}/edit`).then(({ data }) => {
            setState({
                name: data.full_name,
                email: data.email,
                phone: data.phone,
                dob: data.date_of_birth,
            });
        });
    }, [id]);

    // Events
    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.patch(`/contact/${id}`, state).then(() => {
            // return to home page if successful
            history.push("/");
        }, error => {
            console.log(error); // logs an error message
            console.log(error.response); // the response object
            setError(true);
        });
    };

    return (
        <form onSubmit={handleUpdate}>
            {!error ? null : <ErrorMsg />}
            <div className="form-group mt-5">
                <label htmlFor="full name">Full Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="full name"
                    name="name"
                    required
                    onChange={handleChange}
                    value={state.name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={state.email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Phone Number:</label>
                <input
                    type="text"
                    className="form-control"
                    id="Phone"
                    name="phone"
                    required
                    onChange={handleChange}
                    value={state.phone}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Date Of Birth:</label>
                <input
                    type="date"
                    className="form-control"
                    id="Date Of Birth"
                    name="dob"
                    required
                    onChange={handleChange}
                    value={state.dob}
                />
            </div>
            <button className="btn btn-primary" type="submit">Edit Contact</button>
        </form>
    );
};

export default EditContacts;