import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { feedData } from "../utils/userFeed";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((appStore) => appStore.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(feedData(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
 if(!feed || feed.length===0){
  return <h1>No more user</h1>
 }
  return (
    feed && (
      <div>
        <UserCard user={feed[0]}/>
      </div>
    )
  );
};

export default Feed;
