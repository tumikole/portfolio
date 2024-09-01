import React from 'react';
import './styles/Home.scss';
import Image from '../assets/images/Tumisang.jpg'

const Home = () => (
  <section className="home">
    <img src={Image} alt="img" className="home__image" />
    <div className="home__bio">
      <h2>Welcome to My Portfolio</h2>
      <p>Hi! I'm Tumisang, a fullstack web developer and QA engineer</p>
    </div>
  </section>
);

export default Home;
