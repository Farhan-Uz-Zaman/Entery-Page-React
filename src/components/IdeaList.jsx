import React, { useContext } from 'react'
import Card from './Card'
import style from './IdeaList.module.css'
import { IdeaContext } from '../Context/Context'

const IdeaList = () => {

    const { ideaList, showDetails } = useContext(IdeaContext);
    const clickHandler = (id, name, details, date, clicked) => {
        clicked = !clicked
        showDetails(id, name, details, date, clicked)
    }

    return (
        <div>
            {ideaList.length ? (
                <Card className={style.users}>

                    <ul>
                        {ideaList.map((idea) => (
                            <li onClick={(e) => clickHandler(idea.id, idea.name, idea.details, idea.date, idea.clicked)}
                                key={idea.id} >
                                {idea.name} (on {idea.date})
                                {idea.clicked && <h3>{idea.details}</h3>}
                            </li>

                        ))}
                    </ul>
                </Card>
            ) : <h2 style={{ color: 'white', textAlign: 'center' }}> No Idea</h2>}
        </div >

    )
}



export default IdeaList

