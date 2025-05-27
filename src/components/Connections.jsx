import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const getConnections = useSelector((appStore) => appStore.connection);

  const fetchConnection = async () => {
    try {
      const connections = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(connections?.data?.data);
      dispatch(addConnection(connections?.data?.data));

      if (connections?.data?.data?.length === 0) {
        console.log("No connections found");
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchConnection();
  },[]);

  if(!getConnections) return;
  return (
    <div className="p-5 m-2 h-auto w-3/5">
      <h1 className="text-5xl mb-10 font-bold text-center">Connections</h1>
      <div>
        {getConnections.map((connection) => (
          <div key={connection?._id} className="p-5 bg-gray-300 flex justify-between items-center mb-4">
            <img className="w-36" src={connection?.photoUrl} alt="photo" />
            <div className="mr-5">
            <h2 className="text-2xl mb-3 font-bold">{connection?.firstName + " " + connection?.lastName}</h2>
            <h2>{connection?.skills.join(", ")}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
