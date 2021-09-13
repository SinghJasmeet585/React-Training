import React from 'react'
import  { useState, useEffect } from 'react'

export default function Card(props) {
  // const[description,setdescription]=useState('');
  // const[id,setid]=useState('');
  // useEffect(() => {
  //  setdescription(props.description);
  //  setid(props.id);
  //     });
  
  const saveNews = () => {
    const newCard={
      description:props.description,
      url:props.url
    }
    props.readLater(newCard);
};
    return (
        <div className="card-inline" style={{width:"17rem"}}>
        <div className="card-body ">
        <div className="card-image-myimg" ><img className="myimg" src={props.urlToImage}/> </div>
        <p className="card-title" >{props.title}</p>
        <p className="card-author"><b>{props.author}</b></p>
        <button type="submit" className="btn btn-primary" onClick={() => {
                    saveNews();
                }}>
                    Read Later
        </button>
      </div>
    </div>
    )
}