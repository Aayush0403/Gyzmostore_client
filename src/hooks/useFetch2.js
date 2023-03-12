
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../Utils/api";

const useFetch2= (endpoint) => {
    const [data1, setData1] = useState();
  
    useEffect(() => {
      makeApiCall();
    }, [endpoint]);
  
    const makeApiCall = async () => {
      const res = await fetchDataFromApi(endpoint);
      setData1(res);
    };
  
    return { data1 };
  };
  export default useFetch2;
  