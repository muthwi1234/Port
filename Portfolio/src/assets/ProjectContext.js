// ProjectContext.js
import React, { createContext, useContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const projects = [
    // Your projects data
    {
      title: "React Reserve",
      subtitle: "MERN Stack",
      description: "Lorem ipsum...",
      image: "./project-1.gif",
      link: "https://reactbootcamp.com",
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description: "Lorem ipsum...",
      image: "./project-2.gif",
      link: "https://reedbarger.com",
    },
    {
      title: "DevChat",
      subtitle: "React and Firebase",
      description: "Lorem ipsum...",
      image: "./project-3.gif",
      link: "https://jsbootcamp.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description: "Lorem ipsum...",
      image: "./project-4.gif",
      link: "https://pythonbootcamp.com",
    },
  ];

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  return useContext(ProjectContext);
};
