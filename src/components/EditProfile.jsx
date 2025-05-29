import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((appStore)=>appStore.user)
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [gender, setGender] = useState(user?.gender);
  const [skills, setSkills] = useState(user?.skills?.join(", "));
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  console.log(gender)

  const handleEdit = async () => {
    try{
    const res = await axios.patch(
      BASE_URL + "/profile/edit",
      {
        firstName,
        lastName,
        gender,
        skills,
        photoUrl,
      },
      {
        withCredentials: true,
         headers: {
      "Content-Type": "application/json" // ✅ explicitly set headers
    }
      }
    );
    dispatch(addUser(res.data.data))
    console.log(res)
    // console.log(gender)
}
catch(err){
    console.log(err)
}
  };

  return (
    <div className=" bg-neutral text-neutral-content w-auto  mt-12 rounded-3xl h-auto  min-h-0 mb-10 ">
      <div className="p-5 items-center ">
        <h2 className="text-2xl mb-5">Edit Profile!</h2>
        <div className=" justify-end">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-white text-sm">
              First Name
            </legend>
            <input
              type="text"
              className="input text-black w-72"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <legend className="fieldset-legend text-white text-sm">
              Last Name
            </legend>
            <input
              type="text"
              className="input text-black"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <legend className="fieldset-legend text-white text-sm">
              Gender
            </legend>
            <input
              type="text"
              className="input text-black"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />

            <legend className="fieldset-legend text-white text-sm">
              PhotoUrl
            </legend>
            <input
              type="text"
              className="input text-black"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />

            <legend className="fieldset-legend text-white text-sm">
              Skills
            </legend>
            <input
              type="text"
              className="input text-black"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />

            <button className="btn btn-primary w-32 btn-sm mt-8 items-center" onClick={handleEdit}>
              Save Profile
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
