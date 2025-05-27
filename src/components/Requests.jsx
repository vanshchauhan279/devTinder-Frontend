import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const getRequests = useSelector((appStore) => appStore.request);

  const handleClick = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(res?.data?.data?._id));
    } catch (err) {
      console.log(err);
    }
  };

  const connectionRequests = async () => {
    try {
      const requests = await axios.get(BASE_URL + "/user/request/receive", {
        withCredentials: true,
      });
      const data = Array.isArray(requests.data) ? requests.data : [];
      dispatch(addRequest(data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    connectionRequests();
  }, []);

  if (!getRequests || getRequests.length === 0) {
    return <h1 className="text-2xl m-4">No Connection Request Found </h1>;
  }

  return (
    <div className="p-5 m-2 h-auto w-3/5">
      <h1 className="text-5xl mb-10 font-bold text-center">Requests</h1>
      <div>
        {getRequests.map((request) => (
          <div
            key={request?._id}
            className="p-5 bg-gray-300 flex justify-between items-center mb-4"
          >
            <img
              className="w-36"
              src={request?.fromUserId?.photoUrl}
              alt="photo"
            />
            <div className="mr-5 mt-5">
              <h2 className="text-2xl mb-3 font-bold">
                {request?.fromUserId?.firstName +
                  " " +
                  request?.fromUserId?.lastName}
              </h2>
            </div>
            <div className="">
              <button
                className="bg-blue-500 px-4 py-2 text-white rounded-lg mx-4"
                onClick={() => handleClick("rejected", request?._id)}
              >
                Reject
              </button>
              <button
                className="bg-pink-500 px-4 py-2 text-white rounded-lg"
                onClick={() => handleClick("accepted", request?._id)}
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
