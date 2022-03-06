import {useState,useEffect} from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortController = new AbortController();

        fetch(url,{signal:abortController.signal})
        .then(res=>{
            if (!res.ok)
            {
                throw Error ("cannot fetch data!");
            }
            return res.json()
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            setError(false);
        })
        .catch(err=>{
            setIsPending(false);
            setError(true);
        })

        return () => abortController.abort();

    },[url])

    return {data,isPending,error};
}
 
export default useFetch;