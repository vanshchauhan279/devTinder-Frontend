import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";


const Requests = () => {

const dispatch = useDispatch();
const getRequests = useSelector((appStore)=>appStore.request)


  const connectionRequests = async () => {
    try {
      const requests = await axios.get(BASE_URL + "/user/request/receive", {
        withCredentials: true,
      });
      console.log(requests.data);
      dispatch(addRequest(requests?.data))
      if (requests?.data?.length === 0) {
        console.log("No connections found");
        return;
      }

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    connectionRequests();
  },[]);

  if(!getRequests) return;

  return (<div className="p-5 m-8 h-auto w-3/5">
      <h1 className="text-5xl mb-10 font-bold text-center">Requests</h1>
      <div>
        {getRequests.map((request, index) => (
          <div key={index} className="p-5 bg-gray-300 flex justify-between">
            <img className="w-36" src={request?.fromUserId?.photoUrl} alt="photo" />
            <div className="mr-5 mt-5">
            <h2 className="text-2xl mb-3 font-bold">{request?.fromUserId?.firstName + " " + request?.fromUserId?.lastName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
