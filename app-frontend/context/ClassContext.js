import React, { useState, createContext, useEffect } from "react";
import { getClasses, addClass, updateClass, deleteClass} from '../api';

export const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);

  // Fetch classes from the backend when the component mounts
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getClasses();
        setClasses(response);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  // Function to add new class
  const addClasses = async (newClass) => {
    try {
      const response = await addClass(newClass);
      console.log('Class added:', response); 
      setClasses([...classes, response]); 
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

   // Function to update class details
   const updateClasses = async (updatedClass) => {
    try {
      const response = await updateClass(updatedClass);
      console.log('Class details updated:', response); 
      setClasses([...classes, response]); 
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

   // Function to delete class details
   const deleteClasses = async (deletedClass) => {
    try {
      await deleteClass(deletedClass);
      console.log('Class deleted:'); 
      setClasses((prevClasses) => prevClasses.filter((c) => c.id !== deletedClass));
    } catch (error) {
      console.error('Error deleting class at Context:', error);
    }
  };


   //Func to mark class
   const markClass = (markedClass) => {
    setClasses(classes.map(c => c.id === markedClass ? { ...c, mark: !c.mark } : c));
  };



  //Provide state and addClass function to the rest of app
  return (
    <ClassContext.Provider value={{ classes, addClasses, updateClasses, deleteClasses , markClass, setClasses }}>
      {children}
    </ClassContext.Provider>

  );
};

