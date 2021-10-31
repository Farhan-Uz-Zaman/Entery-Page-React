import React, { useContext, useState } from 'react'
import Card from './Card'
import style from './AddIdeas.module.css';
import Button from './Button';
import ErrorModal from './ErrorModal';
import { IdeaContext } from '../Context/Context'

const AddIdeas = () => {
    const { addIdea } = useContext(IdeaContext)
    const [newName, setNewName] = useState(" ")
    const [newDetails, setNewDetails] = useState(" ")
    const [newDate, setNewDate] = useState(" ")
    const [error, setError] = useState(false)

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }
    const detailsHandler = (event) => {
        setNewDetails(event.target.value)
    }
    const dateHandler = (event) => {
        setNewDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (newName.trim().length === 0 || newDetails.trim().length === 0) {
            setError(true)
            return
        }
        addIdea(newName, newDetails, newDate)
        setNewName('')
        setNewDetails('')
        setNewDate('')
    }
    const errorHandler = () => {
        setError(false)
    }
    return (
        <div>
            {error && <ErrorModal title="Error" text="Please check your input" buttonClicked={errorHandler} />}
            <Card className={style.input}>

                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="userName">Name</label>
                        <input type='text' value={newName} onChange={nameHandler} />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type='text' value={newDetails} onChange={detailsHandler} />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='date' value={newDate} onChange={dateHandler} />
                    </div>
                    <div>
                        <Button type="submit">Add</Button>
                    </div>
                </form >

            </Card>
        </div>
    )
}



export default AddIdeas

