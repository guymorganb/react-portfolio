import React, { useState } from "react";
import emailjs from 'emailjs-com';


function Contact() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        let errorMsgs = [];

        if (!emailPattern.test(email)) {
            errorMsgs.push("Please enter a valid email address.");
        }
        if (!comment) {
            errorMsgs.push("Please enter a valid comment.");
        }
        if(errorMsgs.length){
            setErrors(errorMsgs);
            return;
        }

        const templateParams = {
            from_email: email,
            to_email: 'guymorganb@gmail.com',
            subject: 'New Contact Form Submission',
            phone: phone || "no phone provided",
            message: comment,
        };

        try {
            const response = await emailjs.send('service_gvf31oy', 'template_z7rig0g', templateParams, '6LB0K-SK5llKtCruJ')
            if (response.status === 200) {
                setLoading(false);
                errorMsgs.push("Message sent successfully!");
            } else {
                setLoading(false);
                errorMsgs.push("Server Error.");
            }
        } catch (err) {
            errorMsgs.push("An error occurred while sending the message.");
            console.error(err);
        }
        setErrors(errorMsgs);
    }

    return (
        <>
            <section id="Contact">
                <div className="formcontainer">
                    <h2>Contact</h2>
                    <form id="typebox" onSubmit={handleSubmit}>
                    <div>
                        {/* spinner for loading */}
                        {loading && (
        <div className="spinner-container">
            <div className="spinner"></div>
        </div>
    )}
                        {/* error messages */}
                        {errors.length > 0 && (<ul className="messages">{errors.map((error, index) => (<li key={index} className="error-text">{error}</li>))}</ul>)}
                    </div>
                        <div>
                            <label htmlFor="email_address">Your E-Mail:</label>
                            <input type="text" name="email_address" id="email_address" value={email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="phone">Your Phone:</label>
                            <input type="text" name="phone" id="phone" value={phone} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="comment">Your Message:</label>
                            <textarea name="comment" id="comment" value={comment} onChange={handleInputChange} />
                        </div>
                        <div id="buttons">
                            <label>&nbsp;</label>
                            <input type="submit" id="register" defaultValue="Send" />
                            <input type="button" id="reset_form" value="Reset" onClick={() => { setEmail(''); setPhone(''); setComment(''); setErrors([]); }} />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;
