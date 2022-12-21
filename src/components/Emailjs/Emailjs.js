import React from 'react';
import emailjs from 'emailjs-com';
import classNames from 'classnames';
import './Emailjs.css';
export default function Emailjs({ isOpen, card }) {
    const classPopup = classNames(`popup`, {
        popup_opened: isOpen
    });

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_jqb24ow', 'template_mlgutby', e.target, '-LJby7CkMCeE2d5DF')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={classPopup} >
            <form className="contact-form" onSubmit={sendEmail}>

                <input type="text" name="message" defaultValue={card.material} />
                <input type="text" name="price" defaultValue={card.price} />

                <input type="submit" value="Send" />
            </form>
        </div>
    );
}