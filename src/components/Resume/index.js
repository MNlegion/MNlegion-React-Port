import React from 'react'; 

function Resume() {

return(
<section className="title mb-5">
    <h1 className="name">Skills and Qualifications</h1>
        <hr></hr>
        <div className="row justify-content-center" id="resume">
            <div className="mt-5 pl-5 pr-5">
                <p>Business executive and full stack developer with experience the MERN stack.</p>

                <p className="mt-5">
                <a href="https://www.linkedin.com/in/robert-kreuser-b09bb7133/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Rkreuser LinkedIn"/></a>
                </p>
                <p>
                {/* Download my full <a href="NEED TO INSERT IN RESUME LINK FROM ASSETS" className="link">resume</a> */}
                <br></br>
                </p>
            </div>
        </div>

        <div className="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Tailwind, Bulma), JavaScript, jQuery, React.js, IndexedDB</p>
            </div>
    
            <div id="front-back" className="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;