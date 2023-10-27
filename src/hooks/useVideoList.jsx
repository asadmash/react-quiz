import { useEffect, useState } from "react";
//STEP:6-> import getDatabase and neccesary module from firebase database
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  get,
  startAt,
  limitToFirst,
} from "firebase/database";

// STEP:1-> export the hook as a default export
export default function useVideoList(page) {
  // STEP:10-> Maintain loading state
  const [loading, setLoading] = useState(true);
  // STEP:11-> Maintain error state
  const [error, setError] = useState(false);
  // STEP:15-> maintain a local state for videos and update inside if snapshot exist
  const [videos, setVideos] = useState([]);
  // STEP:18-> Maintain a state to track if has more videos or not
  const [hasMore, setHasMore] = useState(true);
  // STEP:2->create use effect hook with empty array dependancy
  useEffect(() => {
    // STEP:3->we need to get data from database in a asynchronous way so we create a async function
    async function fetchVideos() {
      // STEP:5-> get reference of firebase database
      const db = getDatabase();
      // STEP:7-> get reference of our videos
      const videosRef = ref(db, "videos");
      // STEP:8-> order the videos according provided order
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(10)
      );

      //// STEP:9-> Now fetch the data using try catch
      try {
        // STEP:12-> Set error and loading state
        setError(false);
        setLoading(true);
        // STEP:12-> request firebase database
        const snapshot = await get(videoQuery);
        // STEP:13-> update loading state
        setLoading(false);
        // STEP:14-> check data arrived or not
        if (snapshot.exists()) {
          // STEP:16->convert snapshot object to array and update setVideos state
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          // STEP:19-> when there are no videos update has more value
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    //STEP:4->call the fetchVideos function
    fetchVideos();
  }, [page]);

  // STEP:17->return all requred item
  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
