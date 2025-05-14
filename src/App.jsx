import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")

  const nameHandler = (char) => {
    setName(char)
  }

  const emailHandler = (char) => {
    setEmail(char)

  }

  const numberHandler = (char) => {
    setNumber(char)

  }

  const addressHandler = (char) => {
    setAddress(char)

  }


  const submitHandler = (event) => {
    event.preventDefault()
    const formObject = {
       name,
       email,
       number,
       address
    }
    console.log(formObject)
  }


  return (
    // <div>
    //   <form style={{ display: 'flex' }}>
    //     <label>Name: </label>
    //     <input type="text" placeholder='Enter the name' onChange={(event) => nameHandler(event.target.value)} />
    //     <label>Email: </label>
    //     <input type='email' placeholder='Enter the email' onChange={(event) => emailHandler(event.target.value)} />
    //     <label>Phone Number: </label>
    //     <input type="text" placeholder='Enter the number' onChange={(event) => numberHandler(event.target.value)} />
    //     <label>Address</label>
    //     <input type='text' placeholder='Enter the address' onChange={(event) => addressHandler(event.target.value)} />
    //     <button onClick={(event) => submitHandler(event)}>Submit</button>

    //   </form>
    // </div>

    <div>
  <form 
    style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      maxWidth: '400px', 
      margin: 'auto', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      backgroundColor: '#f9f9f9' 
    }}
  >
    <label style={{ marginBottom: '5px' }}>Name:</label>
    <input 
      type="text" 
      placeholder="Enter the name" 
      onChange={(event) => nameHandler(event.target.value)} 
      style={{ marginBottom: '15px', padding: '8px' }} 
    />

    <label style={{ marginBottom: '5px' }}>Email:</label>
    <input 
      type="email" 
      placeholder="Enter the email" 
      onChange={(event) => emailHandler(event.target.value)} 
      style={{ marginBottom: '15px', padding: '8px' }} 
    />

    <label style={{ marginBottom: '5px' }}>Phone Number:</label>
    <input 
      type="text" 
      placeholder="Enter the number" 
      onChange={(event) => numberHandler(event.target.value)} 
      style={{ marginBottom: '15px', padding: '8px' }} 
    />

    <label style={{ marginBottom: '5px' }}>Address:</label>
    <input 
      type="text" 
      placeholder="Enter the address" 
      onChange={(event) => addressHandler(event.target.value)} 
      style={{ marginBottom: '20px', padding: '8px' }} 
    />

    <button 
      onClick={(event) => submitHandler(event)} 
      style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
      Submit
    </button>
  </form>
</div>

  )
}

export default App
