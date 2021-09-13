import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReadCard from './ReadCard';

export default function ReadNow() {
    const [readNow, setReadNow] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3100/news')
            .then((response) => setReadNow(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container-fluid">

            <div className="row">
                
                    {
                        readNow.map((news) => (
                            <ReadCard
                            key = {news.id}
                            urlToImage = {news.urlToImage}
                            title = {news.title}
                            author = {news.author}
                            description = {news.description}
                            url = {news.url}
                            />
                        ))
                    }
                
            </div>
        </div>
    )
}
