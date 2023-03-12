
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../Utils/api";

const useFetch3= (endpoint) => {
    const [data2, setData2] = useState();
  
    useEffect(() => {
      makeApiCall();
    }, [endpoint]);
  
    const makeApiCall = async () => {
      const res = await fetchDataFromApi(endpoint);
      setData2(res);
    };
  
    return { data2 };
  };
  export default useFetch3;
  