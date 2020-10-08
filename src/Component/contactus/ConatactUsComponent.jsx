import React, {Component} from 'react';
import axios from 'axios';
import styles from '../../static/css/contactus.css';


class ContactUsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})

    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSumbmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: this.state

        }).then((response)=>{

            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            }else if (response.data.status === 'fail') {
                alert("Message failed to send");
            }
        })
        
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }

    render() {
        return(

            
            <div className="contactusform">
                
                <form id="contact-form" onSubmit={this.handleSumbmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp"/>                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn_contact_submit">Submit</button>
                </form>

            </div>

        );
    }
}

export default ContactUsComponent;
