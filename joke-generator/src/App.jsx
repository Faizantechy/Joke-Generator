import React from 'react'
import {useState} from 'react'

function App() {



  const [Jokes, setJokes] = useState('')
  const getJokes = async () => {

    const API='https://sv443.net/jokeapi/v2/joke/dark?type=single'
    
    const res = await fetch(API)
    const data = await res.json()
    const { joke } = data;
setJokes(joke)    
  }
  return (
    <div>


      <div className="joke-generator w-[70%] mx-auto mt-10 px-9 py-5 text-white bg-green-500 text-center space-y-5 ">

        <h1 className='text-center text-4xl font-bold'>Joke Generator in Reactjs and Tailwind</h1>

        <button className='px-[80px] py-4 rounded-lg text-2xl active:scale-[90%] bg-green-800 text-white font-bold' onClick={getJokes}>Generate Joke</button>


          
          <p className='text-2xl mt-2 font-semibold'>{Jokes}</p>


      

      </div>
    </div>
  )
}

export default App