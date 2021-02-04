import React from 'react';

const AddContacts = () => {
    return (
        <form>
            <div className="form-group mt-5">
                <label htmlFor="full name">Full Name</label>
                <input type="text" className="form-control" id="full name" name="full name" />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="email" className="form-control" id="Email" name="Email" />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Phone Number</label>
                <input type="text" className="form-control" id="Phone" name="Phone" />
            </div>
            <div className="form-group">
                <label htmlFor="Email">Date Of Birth</label>
                <input type="email" className="form-control" id="Date Of Birth" name="Date Of Birth" />
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
    );
};

export default AddContacts