import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errStatus, setErrStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res?.data);
      dispatch(addUser(res?.data));

      setTimeout(() => {
        navigate("/profile/view");
      }, 100);
    } catch (err) {
      setError(err.message);
      setErrStatus(err.status);
      console.log(err);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(""); // Clear error after 5 seconds
      }, 3000);

      // Cleanup function to clear the timer if component unmounts
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div>
      <div className="card bg-neutral text-neutral-content w-96 h-auto mt-4 rounded-3xl">
        <div className="card-body items-center ">
          <h2 className="card-title mb-4 text-pink-500 text-3xl">Sign Up</h2>
          {error && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {errStatus == 500 ? (
                <span>Error! Please fill the input.</span>
              ) : (
                <span>Already a User.</span>
              )}
            </div>
          )}
          <div className=" ">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">FirstName</legend>
              <input
                type="text"
                className="input text-black"
                placeholder="Type here"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p className="label">Required</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">LastName</legend>
              <input
                type="text"
                className="input text-black"
                placeholder="Type here"
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Email</legend>
              <input
                type="text"
                className="input text-black"
                placeholder="Type here"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="label">Required</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white">Password</legend>
              <input
                type="password"
                className="input text-black"
                placeholder="Type here"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="label">Required</p>
            </fieldset>
            <button
              className="btn btn-active btn-success my-3"
              onClick={() => handleSignUp()}
            >
              Success
            </button>

            <p onClick={() => navigate("/login")}>
              if already account , CLick here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
