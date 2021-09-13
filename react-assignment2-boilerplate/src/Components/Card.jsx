import React from 'react'

export default function Card(props) {

    // const [description, setdescription] = useState('');
    // const [id, setid] = useState('');
    // useEffect(() => {
    //     setdescription(props.description);
    //     setid(props.id);
    // });

    const saveNews = () => {
        const newCard = {
            description: props.description,
            url: props.url,
            title: props.title,
            author: props.author,
            urlToImage: props.urlToImage
        }
        props.readLater(newCard);
    };

    return (
        <div className="card my-5" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-img"><img className="image" src={props.urlToImage} /></h5>
                <p className="card-text">{props.title}</p>
                <p className="card-text"><b>{props.author}</b></p>
                <button type="submit" className="btn btn-primary" onClick={() => {
                    saveNews();
                }}>
                    Read Later
        </button>
            </div>
        </div>
    );
}
