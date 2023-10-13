import React from 'react';
import './styles/project.css'

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <section id="projects">
        <div className="project-card">
          <h3>Youtube Clone</h3>
          <p>
          A YouTube clone website built using HTML and CSS would mimic 
          the familiar layout and design of the popular video-sharing platform. 
          It would feature a homepage displaying video thumbnails, titles, 
          and user-generated content. Users could navigate through categories, 
          search for videos, and enjoy a clean and intuitive user interface. 
          While it would lack the functionality of playing actual videos or user accounts, 
          it would serve as a static replica showcasing the power of HTML and CSS in web design.
          </p>
        </div>
        <div className="project-card">
          <h3>Amazon Clone</h3>
          <p>
          An Amazon clone website crafted with HTML, CSS, and JavaScript would 
          replicate the look and feel of the e-commerce giant. 
          It would include features such as product listings, a shopping cart, 
          and a checkout process with interactive forms. JavaScript would enable 
          dynamic functionalities like adding items to the cart and calculating the 
          total cost, enhancing the user experience. While it may lack actual 
          e-commerce capabilities, this static version would showcase the 
          power of front-end technologies in emulating real-world web applications.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
