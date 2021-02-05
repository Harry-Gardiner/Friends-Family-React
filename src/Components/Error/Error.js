const Error = () => {
    return (
        <div className="alert alert-danger">
            <h4>Error</h4>
            <p>Contact not submitted</p>
            <small>
                <ul>
                    <li>Check full name is less than 50 characters</li>
                    <li>Check valid email added, e.g. name@email.co.uk</li>
                    <li>Check valid phone number added</li>
                    <li>Check valid date of birth provided</li>
                </ul>
            </small>
        </div>
    )
};

export default Error;