import React from 'react';

function About() {
  return (
    <section className="title">
      <h1 className="name">About Me</h1>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img className="mb-5 justify-content-center" src="" alt="Profile Robert Kreuser" />
          <p>
            Welcome to my about me page. I'm Robert Kreuser, also known as MNlegion in the GitHub community. I am an aspiring Full-Stack Developer and have dedicated myself since February of 2022 to learning all the necessary skills to help me get started down that path. While I admit that I have a lot of learning still ahead of me, I have accomplished quite a bit to get to this point. I had no prior experience with web development at the start of 2022 and today you are here on my digital portfolio built using React.
          </p>
          <p>I started this journey in order to reinvent myself in a field that I had always been passionate about but intimidated to join. My personal goal for 2022 was to learn a new skill that I could apply to real world use and it immediately became clear that it was finally time to take the plunge. Despite the challenges, the time committment, and the hurdles along the way, I haven't regretted a second of it. I immerse myself in content daily, trying to learn as much as possible while applying that to actual application.</p>
          <p>I hope that you find my first React application a decent starting point. I will continue to update and expand upon my experiences and projects along the way while also incorportating more advanced tools as I learn them. Thank you so much for your interest and please feel welcome to provide comments, feedback, and critism via my contact page.</p>
          <p>
            View full <a href="#/resume" className="link">resume</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;