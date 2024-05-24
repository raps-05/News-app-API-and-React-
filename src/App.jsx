
import { useState } from 'react';
import Navbar from './Components/navbar';
import NewsBoard from './Components/Newsboard';
import NewsItem from './Components/NewsItem';
import './Components/custom.scss';
import ScrollingText from './Components/ScrollingText';
import FooTer from './Components/footer';



function App() {
  const [category, setCategory] = useState("general");
  const [activeLink, setActiveLink] = useState("general");

  const handleLinkClick = (clickedCategory) => {
    setCategory(clickedCategory);
    setActiveLink(clickedCategory);
  };

  return (
    <div
    style={{
      // backgroundImage: " url('src/assets/_ (1).jpeg')",
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      backdropFilter: 'blur(5px)',
      backgroundColor:'palewhite',
    }}>
      <Navbar setCategory={handleLinkClick} activeLink={activeLink} category={category}/>
      <ScrollingText />
      <NewsBoard category={category}/>
      <NewsItem/>
      <FooTer/>
      {/* <ScrollingText /> */}

      
    </div>


    

  );
}

export default App;