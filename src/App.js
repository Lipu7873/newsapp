import { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import axios from "axios"
import NewsContent from './components/NewsContent/NewsContent';
import APIKEY from './components/data/config';
import Footer from './components/Footer/Footer';

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([])
   const [newsResults, setNewsResults] = useState();
   const [lodeMore, setLodemore] = useState(20);

  
  const newsApi = async () => {
    try{
      
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}&category=${category}&pageSize=${lodeMore}`
      );
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults)
     
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    newsApi();
  },[newsResults,category, lodeMore])
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />

      <NewsContent
        setLodemore={setLodemore}
        lodeMore={lodeMore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  );
}

export default App;
