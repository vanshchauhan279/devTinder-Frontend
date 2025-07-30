import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Connections from './Connections'
import { useSelector } from 'react-redux'

const Chat = () => {
  const toUserId = useParams();
  const [messages,setMessages] = useState([{text: "How are you"},{text: "Can i all you"}])
  console.log(messages[0].text)
    
  return (
    <div className='flex w-screen justify-center items-center'>
        <div className='w-[50%] border-gray-800 relative h-1/2 border-2 '>
        <div>
          {messages.map((msg,index)=>(
            <p className='bg-blue-700 mb-2 text-white mr-20 block px-2 py-1 rounded-r-lg' key={index}>{msg.text}</p>
          ))} 

        </div>
         <div className='border-t-2 p-2 flex w-full border-black absolute bottom-0' >  
            <input type="text" className='w-full border-2'/>
             <button className='ml-3 rounded p-2 bg-green-700 text-white'>Send</button>
         </div>
        </div>
    </div>
  )
}

export default Chat
