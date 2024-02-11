import axios from "axios"
import { useEffect,useState } from "react";
export default function Effect(){
    const [data,setData] = useState("");
    const [count,setCount] = useState(0);

     useEffect(() => {
       axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  },[count]);//spefiy when the useeffet hook was work 

    return(
        <div>
         {data}
          <h1>{count}</h1>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click
          </button>
        </div>
      );
}