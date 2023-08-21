import React, { useState } from "react";

function Contact() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'email_address':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'comment':
                setComment(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle the form logic here when submit is clicked
    }

    return (
        <>
            <section id="Contact">
                <div className="formcontainer">
                    <h2>Contact</h2>
                    <form id="typebox" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email_address">E-Mail:</label>
                            <input type="text" name="email_address" id="email_address" value={email} onChange={handleInputChange} />
                            <span>*</span>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name="phone" id="phone" value={phone} onChange={handleInputChange} />
                            <span>*</span>
                        </div>
                        <div>
                            <label htmlFor="comment">Comment:</label>
                            <textarea name="comment" id="comment" value={comment} onChange={handleInputChange} />
                        </div>
                        <div id="buttons">
                            <label>&nbsp;</label>
                            <input type="button" id="register" defaultValue="Send" />
                            <input type="button" id="reset_form" value="Reset" onClick={() => { setEmail(''); setPhone(''); setComment(''); }} />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;
