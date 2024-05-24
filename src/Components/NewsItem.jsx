import logo from '../assets/logoaly.jpeg'
const Newsitem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-transparent text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src?src:logo} style={{ height: "200px", width: "325px", objectFit: "cover"  }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ height: "300px" , overflow:"hidden"}}>
                <h5 className="card-title" style={{fontFamily:"garamond"}}>{title}</h5>
                {/* slice is used to limit the length of the text
                    takes the characters from starting index till n-1 */}
                <p className="card-text"style={{fontFamily:"garamond"}}>{description ? description.slice(0, 90) : "The News you are looking for is not available"}</p>
                <a href={url} className="btn btn-dark">Read More..</a>
            </div>
        </div>
    );
};

export default Newsitem;




// const Newsitem=({title,description,src,url}) => {
//     return (
//         <div className="card" style={{maxWidth:"345px"}}>

//   <img src={src} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{description}</p>
//     <a href={url} className="btn btn-primary">Read More</a>
//   </div>
// </div>
//     );
// };

// export default Newsitem
// ;