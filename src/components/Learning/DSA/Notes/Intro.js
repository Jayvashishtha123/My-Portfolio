import React from 'react';
import "./intro.css"
const IntroDSANotes = () => {
  // Define content data
  const contentSections = [
    {
      title: 'What is Data Structure?',
      content: `
        A data structure is a particular way of organising data in a computer so that it can be used effectively. 
        The idea is to reduce the space and time complexities of different tasks.

        The choice of a good data structure makes it possible to perform a variety of critical operations effectively. 
        An efficient data structure also uses minimum memory space and execution time to process the structure. 
        A data structure is not only used for organising the data. It is also used for processing, retrieving, and storing data. 
        There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. 
        So we must have good knowledge of data structures.
      `,
    },
    {
      title: 'Need Of Data Structure:',
      content: `
        The structure of the data and the synthesis of the algorithm are relative to each other. 
        Data presentation must be easy to understand so the developer, as well as the user, can make an efficient implementation of the operation. 
        Data structures provide an easy way of organising, retrieving, managing, and storing data.

        Here is a list of the needs for data:

        - Data structure modification is easy.
        - It requires less time.
        - Save storage memory space.
        - Data representation is easy.
        - Easy access to the large database.
      `,
    },
    {
      title: 'Classification/Types of Data Structures:',
      content: `
        There are mainly two types of data structures:

        1. Linear Data Structure:
           Elements are arranged in a linear sequence.
           Example: lists, stack, queue, etc.

        2. Non-Linear Data Structure:
           Elements are arranged in one-many, many-one, and many-many dimensions.
           Example: tree, graph, table, etc.
      `,
    },
    {
      title: 'Most Popular Data Structures:',
      content: `
        1. Array:
           An array is a collection of data items stored at contiguous memory locations. 
           This makes it easier to calculate the position of each element by simply adding an offset to a base value.

        2. Linked Lists:
           Like arrays, Linked List is a linear data structure where elements are not stored at contiguous locations; they are linked using pointers.

        3. Stack:
           Stack is a linear data structure that follows LIFO (Last In First Out) or FILO (First In Last Out) order. 
           It supports operations like push, pop, top, size, and isEmpty.
      `,
    },
  ];

  return (
    <div className="dsa-introduction-container">
      {contentSections.map((section, index) => (
        <div key={index} className="dsa-section">
          <h2 className="dsa-section-title">{section.title}</h2>
          <p className="dsa-section-content">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default IntroDSANotes;
