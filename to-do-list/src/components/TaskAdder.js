import { useState } from 'react'
import style from 'styled-components'

const Container = style.div`
    background-color : black;
    height : 100px;
    width : 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:10px
`

const Form = style.form`
    height : 50%;
    width : 75%;
    background-color : black;
    display:flex;
    align-items: center;
    input{
        height :100%;
        width : 85%;
        border : none;
        margin-right : 6%;
        background-color : white;
    }
    button{
        height : 100%;
        width : 10%;
        background-color : gray;
        border : none;
        margin-right : 10%;
    }
`

const TaskAdder = ({AddItem}) => {

    const [msg,Setmsg] = useState("")

    const handleChange = (e) => {
        Setmsg(e.target.value)
    } 

    const handleClick = async (e) => {
        e.preventDefault()
        //console.log(Math.floor(Date.now() / 1000))
        if(msg !== "")
        {
            console.log(msg)
            AddItem(msg)
        }
        else alert('Enter value')
        Setmsg("")
    } 

    const handleEnter = (e) =>{
        if(e.key === "Enter"){
            e.stopPropagation()
            e.preventDefault()
            handleClick(e)
        }
    }
    return (
        <Container>
            <Form>
                <input type='text' value={msg} placeholder='Enter Your Task Here' onChange={handleChange} onSubmit={handleEnter}></input>
                <button onClick={handleClick} type='submit'>Add Item</button>
            </Form>
        </Container>
    )
}

export default TaskAdder