import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Learning.css';

const topics = [
  {
    title: 'Data Structures and Algorithms (DSA)',
    description: 'Learn the fundamentals of data structures and algorithms, including arrays, linked lists, trees, graphs, and sorting algorithms.',
  },
  {
    title: 'Competitive Programming',
    description: 'Sharpen your problem-solving skills and prepare for coding competitions with challenging problems and advanced algorithms.',
  },
  {
    title: 'Database Management Systems (DBMS)',
    description: 'Understand the principles of database management systems, including SQL, relational databases, and database design.',
  },
  {
    title: 'Computer Networks',
    description: 'Explore the concepts of computer networks, including the OSI model, TCP/IP, routing, and network protocols.',
  },
];

const Learning = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });
  const slideIn = useSpring({ from: { transform: 'translateY(50px)', opacity: 0 }, to: { transform: 'translateY(0)', opacity: 1 }, config: { duration: 1000 } });

  return (
    <div className="learning-container">
      <animated.h1 style={fadeIn} className="learning-title">Learning</animated.h1>
      <animated.p style={fadeIn} className="learning-intro">Explore our coding topics. Click on a card to dive deeper into each topic.</animated.p>
      <div className="learning-cards">
        {topics.map((topic, index) => (
          <animated.div key={index} style={slideIn} className="learning-card">
            <h2 className="card-title">{topic.title}</h2>
            <p className="card-description">{topic.description}</p>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
