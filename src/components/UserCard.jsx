import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFromFeed } from "../utils/userFeed";

const UserCard = ({ user }) => {
  const dispatch = useDispatch(); //data.data.connection._id

 

  const { firstName, lastName, photoUrl, gender, skills } = user;

  console.log(user);
  const handleLike = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(removeFromFeed(_id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card bg-base-100 w-92 rounded-3xl  shadow-sm mt-16 bg-slate-300 p-10 ">
      <figure>
        <img src={photoUrl} alt="user photo" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <h2 className="card-title">{gender}</h2>
        </div>
        <p>{skills.join(" ")}</p>
        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => handleLike("ignored", user?._id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleLike("interested", user?._id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
