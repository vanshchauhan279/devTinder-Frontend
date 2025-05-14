import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((appStore)=>appStore.user);  
  console.log(user)
  return (
    <div className='mt-10 w-full'>
      <div className='flex items-center justify-around'>
        <img className='rounded-full w-52 p-5 ml-10' src={user.photoUrl} alt="user photo" />
        <h1 className='font-bold  text-7xl '>{user.firstName}</h1>
      </div> 
      <div className='flex justify-center mr-16'>
        <ul className='text-5xl p-10'>
          <li className='mb-5'>FirstName - {user.firstName}</li>
          <li className='mb-5'>LastName - {user.lastName}</li>
          <li className='mb-5'>User Email - {user.email}</li>
          <li className='mb-5'>Skills - {user.skills.join(' , ')}</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Profile
