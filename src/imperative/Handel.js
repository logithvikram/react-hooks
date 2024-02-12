import React, { useRef } from "react";
import Button from "./Button";

function Handle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();//access the child element form parent element by using ref 
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default Handle;