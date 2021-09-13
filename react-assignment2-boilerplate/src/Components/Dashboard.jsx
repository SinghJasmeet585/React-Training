import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

export default function Dashboard() {

    const [newsList, setNewsList] = useState([]);
    const[readlaterdb,setReadlaterdb] =useState([]);


    const readLater = (newCard) => {
        axios
          .post('http://localhost:3100/news', newCard, {
            headers: { 'Content-Type': 'application/json' },
          })
          .then(function (response) {
            if (response.status === 201) {
              // [...contact, response.data]
              console.log(response.data)
              setReadlaterdb([...readlaterdb, response.data]);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    useEffect(() => {
        console.log('First useEffect');
        // Other Logic
        axios
            .get('https://newsapi.org/v2/top-headlines?country=in&apikey=33fcabff40ab4437a26bca550e33d0cc&page=1')
            .then((response) => {
                setNewsList(response.data.articles);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <div className="container-fluid">

            <div className="row">
                
                    {
                        newsList.map((news) => (
                            <Card
                            key = {news.id}
                            urlToImage = {news.urlToImage}
                            title = {news.title}
                            author = {news.author}
                            description = {news.description}
                            url = {news.url}
                            readLater = {readLater}
                            />
                        ))
                    }
                
            </div>
        </div>
    )
}
