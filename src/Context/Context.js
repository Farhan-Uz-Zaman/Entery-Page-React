import React, { useState, createContext } from 'react'

export const IdeaContext = createContext();

const IdeaContextProvider = (props) => {
    const [ideaList, setIdeaList] = useState([])
    const addIdea = (newName, newDetails, newDate) => {
        setIdeaList([...ideaList, {
            id: ideaList.length,
            name: newName,
            details: newDetails,
            date: newDate,
            clicked: false
        }]
        )
    }
    const showDetails = (id, name, details, date, clicked) => {
        const newList = ideaList.map(idea => (idea.id === id ? { id, name, details, date, clicked } : idea))
        setIdeaList(newList)
    }
    return (
        <IdeaContext.Provider
            value={{ ideaList, setIdeaList, addIdea, showDetails }}>
            {props.children}
        </IdeaContext.Provider>
    )
};
export default IdeaContextProvider;
