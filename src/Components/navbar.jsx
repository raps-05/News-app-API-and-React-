
import '../Components/custom.scss';
const Navbar = ({setCategory,activeLink,category,handleWeather}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-transparent text-dark p-4 border border-secondary "  >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <span className='badge bg-gray text-dark fs-4'style={{cursor:"pointer",fontWeight:"bold",fontFamily:"garamond"}}>{category} 📰</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav" style={{justifyContent:"space-between"}}>
      <ul className="navbar-nav px-4 mx-4 ">
        
        <li className="nav-item px-4">
          <div className={`nav-link ${activeLink==='science' ? 'active':''}`} onClick={()=>setCategory("Science")} style={{cursor:"pointer",fontWeight:"bold",fontFamily:"garamond"}} > Science👩🏻‍🔬🧪</div>
        </li>
        <li className="nav-item px-4">
          <div className={`nav-link ${activeLink==='technology' ? 'active':''}`} onClick={()=>setCategory("Technology")} style={{cursor:"pointer",fontWeight:"bold",fontFamily:"garamond"}}>Technology📟💽</div>
        </li>
        <li className="nav-item px-4">
          <div className={`nav-link ${activeLink==='health' ? 'active':''}`} onClick={()=>setCategory("Health")} style={{cursor:"pointer",fontWeight:"bold",fontFamily:"garamond"}}> Health🏥</div>
        </li>
        <li className="nav-item px-4">
          <div className={`nav-link ${activeLink==='sports' ? 'active':''}`} onClick={()=>setCategory("Sports")} style={{cursor:"pointer",fontWeight:"bold",fontFamily:"garamond"}}> Sports🏓</div>
        </li>
        <li className="nav-item px-4">
          <div className={`nav-link ${activeLink==='business' ? 'active':''}`} onClick={()=>setCategory("Business")} style={{cursor:"pointer",fontWeight:"bold",fontFamily:"garamond"}}> Business🏢</div>
        </li>
        <li className="nav-item px-4">
          <div className={`nav-link ${activeLink==='entertainment' ? 'active':''}`} onClick={()=>setCategory("Entertainment")} style={{cursor:"pointer",fontWeight:"bold",fontFamily:"garamond"}} >Entertainment📻🎥</div>
        </li>
        <button onClick={handleWeather} style={{width:"70px",height:"50px", borderRadius:"10px",marginTop:"40px",}}>
        {/* <li className="nav-item "> */}
          <div className={`nav-link ${activeLink==='weather' ? 'active':''}`} onClick={()=>setCategory("Weather")} style={{cursor:"pointer",fontWeight:"bold",fontFamily:"garamond",fontSize:"13px"}} >Weather🌤️</div>
        {/* </li> */}
        </button>
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;
