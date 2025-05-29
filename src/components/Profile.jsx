import React from "react";
import { useSelector } from "react-redux";

import EditProfile from "./EditProfile";


const Profile = () => {
  const user = useSelector((appStore) => appStore.user);

   
 if (!user) {
    return null; // Or <div>Loading...</div>
  }
  return (
    <div className="flex">
    <div className="mt-10 w-full">
      <div className="flex items-center justify-around">
        {user.photoUrl && (<img
          className="rounded-full w-52 p-5 ml-10"
          src={user.photoUrl }
          alt="user photo"
        />)}
        <h1 className="font-bold  text-7xl text-green-600">{user.firstName}</h1>
      </div>
      <div className="flex justify-center mr-16">
        <ul className="text-5xl p-10">
          <li className="mb-5">
            <span className="text-blue-500 font-semibold">FirstName - </span>
            <span className="text-black">{user.firstName}</span>
          </li>
          <li className="mb-5">
            <span className="text-blue-500 font-semibold">LastName - </span>
            <span className="text-black">{user.lastName}</span>
          </li>
          <li className="mb-5">
            <span className="text-blue-500 font-semibold">Gender - </span>
            <span className="text-black">{user.gender}</span>
          </li>
          <li className="mb-5">
            <span className="text-blue-500 font-semibold">User Email - </span>
            <span className="text-black">{user.email}</span>
          </li>
          <li className="mb-5">
            <span className="text-blue-500 font-semibold">Skills - </span>
            <span className="text-black">{user.skills.join(", ")}</span>
          </li>
        </ul>
      </div>
    </div>
    <EditProfile/>
    </div>
  );
};

export default Profile;
