import { useState } from "react";
import { useEffect } from "react";
import Newsitem from "./NewsItem";
import '../Components/custom.scss';

const NewsBoard= ({category}) => {

    const [articles, setArticles] = useState([]);
    const [country, setCountry] = useState("in");
    useEffect(() => {
        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(res=>res.json()).then(data=>setArticles(data.articles))

   
    },[category,country])

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };



    return (
        <div>
           <h3 className="text-center fst-bold py-5 m-5" style={{fontFamily:"garamond"}}>Top <span className="badge bg-danger ">HeadLines</span></h3> 
           
           <div className="text-center my-3">
        <label htmlFor="country-select" className="me-2"style={{fontFamily:"garamond"}}>Choose Country:</label>
        <select
          id="country-select"
          value={country}
          onChange={handleCountryChange}
          className="form-select d-inline-block w-25"
        >
          <option value="in" className="option-list">India</option>
          <option value="us"className="option-list">United States</option>
          <option value="gb"className="option-list">United Kingdom</option>
          <option value="au"className="option-list">Australia</option>
          <option value="ca"className="option-list">Canada</option>
          <option value="de"className="option-list">Germany</option>
          <option value="fr"className="option-list">France</option>
          <option value="jp"className="option-list">Japan</option>
          <option value="ru"className="option-list">Russia</option>
          <option value="ch"className="option-list">China</option>
          <option value="it"className="option-list">Italy</option>
          <option value="nl"className="option-list">Netherlands</option>
          <option value="es"className="option-list">Spain</option>
          <option value="be"className="option-list">Belgium</option>
          <option value="br"className="option-list">Brazil</option>
          <option value="mx"className="option-list">Mexico</option>
          <option value="se"className="option-list">Sweden</option>
          <option value="no"className="option-list">Norway</option>
          <option value="pl"className="option-list">Poland</option>
          <option value="at"className="option-list">Austria</option>
          <option value="hu"className="option-list">Hungary</option>
          <option value="cz"className="option-list">Czech Republic</option>
          <option value="eg"className="option-list">Egypt</option>
          <option value="kr"className="option-list">South Korea</option>
        </select>
      </div>
           
           {
                articles.map((news,index)=>{
                    return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                })
            }
        
        </div>
    );
};

export default NewsBoard;