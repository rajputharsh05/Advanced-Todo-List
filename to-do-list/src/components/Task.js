//import { useState } from 'react'
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

const InnerBox = style.div`
   height : 50%;
   width : 75%;
   background-color : white;
   input{
    height:100%;
    width:100%;
    border:none;
   }
   
`
const Button = style.button`
    height : 50%;
    width : 7%;
    background-color : white;
    border : none;
`


const Task = ({DeleteItem,Text,Id,MoveUp,MoveDown})=>{
    
    //console.log(Id);
    
    //const [info,Setinfo] = useState(Text);
    
    
//     const handleChange = (e) =>{
//     e.stopPropagation()
//     e.preventDefault()
       
//     Setinfo(e.target.value)
// }

//   const handleUndo = ()=>{
//     // console.log(info)
//     //Setinfo(Text);
//   }
  return(
      <Container>
            <InnerBox><input id={Id}  type='text' value={Text}></input></InnerBox>
            <Button id={Id} onClick={DeleteItem}>Delete</Button>
            <Button id={Id} onClick={MoveUp}>Up</Button>
            <Button id={Id} onClick={MoveDown}>Down</Button>
        </Container>
    )
}


export default Task

















//<p id={Id} onDoubleClick={handleClick}>{Text}</p>
//   const handleclick = (e)=>{
    
    //   }
    //     const handlekey = (e) =>{
    //         e.stopPropagation()
    //         e.preventDefault()
    //         if(e.keyCode === 46)
    //         {
    //            DeleteItem(e)
    //         }else if(e.keyCode === 38)
    //         {
    //            MoveUp(e)
    //         }else if(e.keyCode === 40)
    //         {
    //             MoveDown(e)
    //         }
    //   }