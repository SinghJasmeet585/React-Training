import React from 'react'

export default function Contact(props) {

    return (
        <div className="card my-5" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.email}</p>
                <p className="card-text">{props.phone}</p>
                <p className="card-text">{props.city}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
