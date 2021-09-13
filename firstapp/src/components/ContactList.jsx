import React, { useState, useEffect } from 'react'
import Contact from './Contact'
import axios from 'axios';

export default function ContactList() {

    const [contacts, setcontacts] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => {
    //             return response.json();
    //         }).then((data) => {
    //             setcontacts(data);
    //         })
    // }, [])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            console.log(response);
            setcontacts(response.data);
        })
    }, [])

    // const contacts = [
    //     {
    //         id: 1,
    //         name: "Jasmeet",
    //         email: "jasmeet@gmail.com",
    //         phone: '1545261526',
    //         city: "Delhi"
    //     },
    //     {
    //         id: 2,
    //         name: "deepak",
    //         email: "deepak@gmail.com",
    //         phone: '6515261526',
    //         city: "Delhi"
    //     },
    //     {
    //         id: 3,
    //         name: "surya",
    //         email: "surya@gmail.com",
    //         phone: '9875261526',
    //         city: "Delhi"
    //     },
    // ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-6 mt-4">
                        {
                            contacts.map((contact) => (
                                <Contact
                                    key={contact.id}
                                    name={contact.name}
                                    email={contact.email}
                                    phone={contact.phone}
                                    city={contact.address.city}
                                />
                            ))
                        }
                        {/* <Contact name="Ravi Chandran" /> */}
                        {/* <Contact name={contact.name} /> */}
                        {/* <Contact {...contact} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
