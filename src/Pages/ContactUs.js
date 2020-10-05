import React from 'react';
import ContactUsComponent from '../Component/contactus/ConatactUsComponent';
import styles from '../static/css/gye.css';

class ContactUs extends React.Component {
    render() {
        return(
            <div>
                <div className="gyetitle">
                    <h1>ContactUs</h1>
                </div>
                <hr></hr>
                <ContactUsComponent></ContactUsComponent>
            </div>
        );
    }
}

export default ContactUs;