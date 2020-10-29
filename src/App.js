import React, { useEffect } from 'react';
import './App.css';
import { Switch } from '@material-ui/core';
import MediaCard from './Comphonent/comphonent/News.js/News';
import { useState } from 'react';


function App() {
  const [articles, setAirticles]= useState([])
  useEffect( () => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0fc06a8e019240e1ba2291db460dd336')
    .then(res=>res.json())
    .then(data=>setAirticles(data.articles))
   }, [])
  return (
    <div>
      <Switch></Switch>
      <h1>news hadline{articles.length}</h1>
{
  articles.map(article=><MediaCard article={article}></MediaCard>)
}    </div>
  );
}

export default App;
