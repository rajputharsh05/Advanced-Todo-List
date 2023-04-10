import style from 'styled-components'


const Container = style.div`
   height : 100px;
   width : 100%;
   display : flex;
   justify-content : center;
   align-items: center;
`

// const handleclick = async (e) =>{
//   e.preventDefault();
//   const val = await fetch('http://localhost:3000/api/to-do/',{
//     method:'POSt',
//     body:JSON.stringify(({work:"Shopping"})),
//     headers:{
//         'Content-Type':'application/json'
//     }
//   })
//   const data = await val.text()
//   console.log(data)
// }

const Navbar = () =>{
    return (
        <Container>
            <h1>WORKS</h1>
        </Container>
    )
}

export default Navbar