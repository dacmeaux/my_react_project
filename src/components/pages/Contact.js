import React, {Component} from 'react';

class Contact extends Component{
    constructor(props){
        super(props);

        this.initialState = {
            contact_name: 'Duane Comeaux',
            contact_email: 'dacmeaux@gmail.com',
            contact_phone: "4046420726"
        };

        this.state = this.initialState;
    }

    componentDidMount(){

    }

    formatPhoneNumber(){
        let phone = this.state.contact_phone.split('');
        phone = '('+ phone[0] + phone[1] + phone[2] +') '+ phone[3] + phone[4] + phone[5] +'-'+ phone[6] + phone[7] + phone[8] + phone[9];

        return(
            <React.Fragment>
                {phone}
            </React.Fragment>
        )
    }

    formatEmail(){
        let email = this.state.contact_email;
        return(
            <React.Fragment>
                <a href={'mailto:'+ email} className="email-address" title="Contact Email" >{email}</a>
            </React.Fragment>
        )
    }

    render(){
        return (
            <div className="page contact-page">
                <p>Contact {this.state.contact_name} at {this.formatPhoneNumber()} or {this.formatEmail()}</p>
            </div>
        );
    }
}

export default Contact;