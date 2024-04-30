import { useState } from "react"

function Contact() {
    const [fromState, setFormState] = useState({})

    const changeHandler = (event) => {
        setFormState({...fromState, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        window.Email.send({
            Host : "smtp.elasticemail.com", 
            Username : "chadimangled@gmail.com",
            Password : "D3901F6BC513FB9AF13F957CDBD3D5FCBC1E",
            To : "chadimangled@gmail.com",
            From : "chadimangled@gmail.com",
            Subject : "Portfolio : " + fromState.subject, 
            Body : fromState.email + "  " + fromState.message ,
        }).then(message => {
            if (message ==="OK") {
                alert("Votre message a été envoyé avec succès.")
            } else {
                alert("Erreur : Le message n'as pas pu être envoyer.")
            }
        })
    }

    return (
            <form className="from-card" onSubmit={submitHandler} method="POST">
                <input type="text" placeholder="Nom" name="name" onChange={changeHandler} required/>
                <input type="text" placeholder="Email" name="email" onChange={changeHandler} required/>
                <input type="text" placeholder="Objet" name="subject" onChange={changeHandler} required/>
                <textarea placeholder="Message" name="message" cols="30" rows="5" onChange={changeHandler}></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
    )
}

export default Contact
