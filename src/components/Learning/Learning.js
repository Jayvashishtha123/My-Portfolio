import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './Learning.css';

const topics = [
  {
    title: 'Data Structures and Algorithms (DSA)',
    description: 'Learn the fundamentals of data structures and algorithms, including arrays, linked lists, trees, graphs, and sorting algorithms.',
    path: '/dsapage',
  },
  {
    title: 'Competitive Programming',
    description: 'Sharpen your problem-solving skills and prepare for coding competitions with challenging problems and advanced algorithms.',
    // path: '/competitive-programming',
  },
  {
    title: 'Database Management Systems (DBMS)',
    description: 'Understand the principles of database management systems, including SQL, relational databases, and database design.',
    // path: '/dbms',
  },
  {
    title: 'Computer Networks (CN)',
    description: 'Explore the concepts of computer networks (CN), including the OSI model, TCP/IP, routing, and network protocols.................',
    // path: '/computer-networks',
  },
];

const Learning = () => {
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const introAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 800 });
  const cardsAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1200 });

  return (
    <div className="learning-container">
      <animated.h1 style={titleAnimation} className="learning-title">Learning</animated.h1>
      <animated.p style={introAnimation} className="learning-intro">Explore our coding topics. Click on a card to dive deeper into each topic.</animated.p>
      <animated.div style={cardsAnimation} className="learning-cards">
        {topics.map((topic, index) => (
          <Link key={index} to={topic.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <animated.div className="learning-card">
              <h2 className="card-title">{topic.title}</h2>
              <p className="card-description">{topic.description}</p>
            </animated.div>
          </Link>
        ))}
      </animated.div>
    </div>
  );
};

export default Learning;
