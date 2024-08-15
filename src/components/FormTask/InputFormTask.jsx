import React from 'react'
import '../../styles/InputFormTask.css'

//Input del Formulario - Recibira Props y sera reutilizable
export default function InputFormTask() {
    return (
        <div id='Contenedor-Input_IFM'>
            <label htmlFor="name-task-input">Task Name:</label>
            <input type="text" name="name-task-input" id="Name-Task-Input_IFT" placeholder='Task Name' />
        </div>
    )
}
