import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './DSAPage.css';

const lessons = [
  {
    title: 'Introduction to Data Structures and Algorithms',
    content: 'Learn the basics of data structures and algorithms, their importance, and applications.',
   
    navigation: {
      link: '/dsaintronotes',
    },
  },
  {
    title: 'Arrays',
    content: 'Understand arrays, their operations, and complexities in different programming scenarios.',
    difficulty: 'Intermediate',
    navigation: {
      link: '/arrays',
      label: 'Arrays',
    },
  },
  {
    title: 'Linked Lists',
    content: 'Explore linked lists, their types (singly, doubly, circular), and operations like insertion and deletion.',
    difficulty: 'Intermediate',
    navigation: {
      link: '/linked-lists',
    },
  },
  {
    title: 'Stacks and Queues',
    content: 'Learn about stacks (LIFO) and queues (FIFO), their implementations, and use cases.',
    difficulty: 'Intermediate',
    navigation: {
      link: '/stacks-queues',
    },
  },
  {
    title: 'Trees',
    content: 'Understand tree data structure, binary trees, traversal algorithms (inorder, preorder, postorder), and binary search trees (BST).',
    difficulty: 'Advanced',
    navigation: {
      link: '/trees',
    },
  },
  {
    title: 'Graphs',
    content: 'Explore graphs, their representation (adjacency matrix, adjacency list), and traversal algorithms (DFS, BFS).',
    difficulty: 'Advanced',
    navigation: {
      link: '/graphs',
    },
  },
];

const DSAPage = () => {
  const fadeInTitle = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const fadeInLesson = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  return (
    <animated.div className="dsa-page-container" style={fadeInTitle}>
      <animated.h1 className="dsa-page-title">Data Structures and Algorithms (DSA)</animated.h1>
      <animated.div className="lessons-container" style={fadeInLesson}>
        {lessons.map((lesson, index) => (
          <Link key={index} to={lesson.navigation.link} className="lesson-link">
            <animated.div className="lesson-card">
              <h2 className="lesson-title">{lesson.title}</h2>
              <p className="lesson-content">{lesson.content}</p>
            </animated.div>
          </Link>
        ))}
      </animated.div>
    </animated.div>
  );
};

export default DSAPage;
