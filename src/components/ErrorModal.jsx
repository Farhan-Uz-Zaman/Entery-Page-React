import React from 'react'
import Button from './Button'
import Card from './Card'
import style from './ErrorModal.module.css'
const ErrorModal = (props) => {
    return (
        <div className={style.backdrop}>
            <Card className={style.modal}>
                <header className={style.header}>
                    <h2 >{props.title}</h2>
                </header>
                <div><h5>{props.text}</h5></div>
                <footer>
                    <Button onClick={props.buttonClicked}>Okay</Button>
                </footer>
            </Card>
        </div>
    )

}

export default ErrorModal
