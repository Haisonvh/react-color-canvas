import React, { useEffect } from 'react'
import { useCanvas } from '../hook/useCanvas';

const Canvas = props => {
  const [ rgbData, setRgbData, canvasRef, size ] = useCanvas([props.width,props.height]);
  const red = genValue(8);
  const green = [...red];
  const blue = [...red];
  let renderValue = [];
  useEffect(()=>{
    renderValue = arrangeData(red,green,blue,size);
    setRgbData(renderValue);
  },renderValue);

  return <canvas
    data-testid="test-canvas"
    ref={canvasRef}
    width={size[0]}
    height={size[1]}/>
};

export const genValue = (step) =>{
  let temp = [];
  for (let i=step; i<=256;i+=step){
    temp = [...temp,i];
  }
  return temp;
};

export const arrangeData = (red,green,blue,size) => {
  let response = [];
  for (let y = 0; y < size[1] ;y++){
    for (let x = 0 ; x < size[0] ; x++){
      let stepx = Math.floor(x/32);
      let stepy = Math.floor(y/32);
      const indexR = Math.abs((32*stepx) - x + (stepx%2)*31); //indexR = [0..31,31..0,0..31.......]
      const indexG = Math.abs((32*stepy) - y + (stepy%2)*31);//indexG = [0..31,31..0,0..31.......]
      const indexB = stepy*8 + stepx;//indexB = [0..31]
      response.push([red[indexR],green[indexG],blue[indexB]]);
    }
  }
  return response;
};
export default Canvas
