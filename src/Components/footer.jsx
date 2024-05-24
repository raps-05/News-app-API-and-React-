import React from 'react';

const FooTer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-text">

                GitHub:
                    <a href='https://github.com/raps-05' target='_blank' rel='noreferrer'><img src='src/assets/github-mark-white.png' alt="github" style={{height:"50px",width:"50px",borderRadius:"50%"}}/>
                    </a>
                    Linkdin:
                    <a href='https://www.linkedin.com/feed/' target='_blank' rel='noreferrer'> <img src="src/assets/LinkedIn Logo free icons designed by Google.jpeg" alt='Linkdin'style={{height:"50px",width:"50px",borderRadius:"50%"}}/></a>
                    Instagram:
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'> <img src="src/assets/Instagram free icons designed by Freepik.jpeg" alt='Insta' style={{height:"50px",width:"50px",borderRadius:"50%"}}/></a>
                    
                     <span>© 2024 Copyright: raps-05(Divya)</span>
                    
                </div>
            </div>
        </div>
    );
};

export default FooTer;