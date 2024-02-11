import { useLayoutEffect,useEffect,useRef } from "react"
export default function Layout(){

    const inputRef = useRef(null);

    useLayoutEffect(() =>{
        console.log(inputRef.current.value); /// same as same as useEffect but render before the componet render and change the value according to it
    },[])
    useEffect(()=>{
        inputRef.current.value = "pranith";
    
    },[])
    return (
        <div className="App">
        <input ref={inputRef} value="Logith"></input>
        </div>
    )
}