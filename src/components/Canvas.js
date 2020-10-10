import React, { useEffect } from 'react'
import { useCanvas } from '../hook/useCanvas';

const Canvas = props => {
  const [ rgbData, setRgbData, canvasRef, size ] = useCanvas([props.width,props.height]);
  const red = genValue(8);
  const green = [...red];
  const blue = [...red];
  let renderValue = [];
  useEffect(()=>{
    renderValue = arrangeData(red,green,blue);
    setRgbData(renderValue);
  },renderValue);

  return <canvas
    ref={canvasRef}
    width={size[0]}
    height={size[1]}/>
};

const genValue = (step) =>{
  let temp = [];
  for (let i=0; i<256;i+=step){
    temp = [...temp,i];
  }
  return temp;
};

const arrangeData = (red,green,blue) => {
  const response= red.map((r)=>{
    return green.map((g) => {
        return blue.map(b => [r,g,b]);
    });
  }).flat(2);
  return response;
}

export default Canvas
