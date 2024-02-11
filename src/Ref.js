import React, {useRef, useEffect} from 'react';

const Ref = () => {
  
  const colorParagraph = useRef(null); 
  const colors = ['#d529d0', '#03a9f4', '#d14614fa', '#d51858', '#9c27b0', '#ffc107', '#ff5722', '#61dafb', '#4caf50', '#07600a', '#65e96a'];
  const selectedColor = useRef(null); 
  const selectedCustomColor = {current: null} 

  useEffect(() => {
    console.log(colorParagraph);
    console.log(colorParagraph.current);
  });

  useEffect(() =>{
   // console.log('statement executed for selectedColor refhook changes');
  },[selectedColor.current]);

  useEffect(() => {
   // console.log('statement executed from effect hook for custom variable changes');
  }, [selectedCustomColor.current]);

  const styleParagraph = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    colorParagraph.current.style.color = colors[randomColor];

    selectedColor.current = colors[randomColor];
    // console.log('selected color', selectedColor.current);

    selectedCustomColor.current = colors[randomColor];
    // console.log('custom variable color selection', selectedCustomColor.current);
  }

  return (
    <div>
      <button onClick={() => {styleParagraph()}}>Click me!</button>
      <p ref={colorParagraph}>Hi my name is logith</p>  
    </div>
  )
};

export default Ref;