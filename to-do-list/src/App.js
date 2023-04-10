import './App.css';
import Task from './components/Task';
import style from 'styled-components'
import TaskAdder from './components/TaskAdder';
import { useEffect, useState } from 'react';
import Navbar from './components/NavBar';


const Container = style.div`
  height:100%;
  width: 100%;
  background-color : #555555;
  display : flex;
  flex-direction : column;
  gap: 10px
`

const  App = () => {

  const [Items,SetItems] = useState([])
  
  async function fetchdata(){
    const data = await fetch("/api/to-do/",{
      method:"GET",
    })
    const value = await data.json();
    SetItems(value)
  }

  useEffect(()=>{
    fetchdata();
  },[])

  const MoveUp = (e)=>{
    console.log(Items)
    const ID = Number(e.target.id)
    //console.log(ID)
    const NewItems = []
    if(Number(Items[0].id) === ID)
    {
      SetItems(Items)
    }else
    {
        Items.forEach((i) => {
              if(Number(i.id) === ID)
              {
                  const xd = NewItems.pop();
                  NewItems.push(i);
                  NewItems.push(xd);
              }
              else
              {
                 NewItems.push(i) 
              }
        })
        //console.log(NewItems)
        SetItems(NewItems)
        //console.log(Items)
    }
  }


  const MoveDown = (e)=>{
    const ID = Number(e.target.id)
    var cnt = 0;
    var NewItems = []
    var xd={};
    if(Number(Items[Items.length-1].id) === ID)
    {
      SetItems(Items)
    }else{
    Items.forEach((i)=>{
        if(Number(i.id) === ID)
          {
            xd = i;
            cnt++;
          }else
            {
              NewItems.push(i)
              if(cnt === 1)
              {
                NewItems.push(xd)
                cnt++;
              }
            }
    })
    SetItems(NewItems)
  }
  }

  const AddItem = async (item)=>{
    const idx = Math.floor(Date.now() / 1000);
    const obj = {work:item,id:idx};
    await fetch('/api/to-do/',{
      method:'POST',
      body:JSON.stringify((obj)),
      headers:{
        'Content-Type':'application/json'
      }
    })


    async function fetchdata()
    {
      const data = await fetch("/api/to-do/",{
        method:"GET",
      })
      const value = await data.json();
      SetItems(value)
    }
    fetchdata();
  }

  const DeleteItem = async (e)=> {
    const ID = e.target.id
    console.log(typeof(ID))
    const NewItems = Items.filter( i => String(i.id) !== ID)
    SetItems(NewItems)
    await fetch("/api/to-do/",{
      method:'DELETE',
      body:JSON.stringify({id:ID}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  
  return (
    <Container >
      <Navbar></Navbar>
      <TaskAdder AddItem={AddItem}></TaskAdder>
      {
        Items.map((item) => {
          return (
            <Task DeleteItem={DeleteItem} MoveUp={MoveUp} MoveDown={MoveDown} Id={item.id} Text={item.work}></Task>
          )
        })
      }
    </Container>
  );
}

export default App;
