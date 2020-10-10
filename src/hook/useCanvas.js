import { useState, useEffect, useRef } from 'react';

export function draw(ctx,imageData){
  ctx.putImageData(imageData,0,0);
};

export function useCanvas(size){
    const canvasRef = useRef(null);
    const [rgbData, setRgbData] = useState([]);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        const imageData = ctx.createImageData(size[0],size[1]);
        let index = 0;
        rgbData.forEach((rgb) => {
          imageData.data[index+0] = rgb[0];
          imageData.data[index+1] = rgb[1];
          imageData.data[index+2] = rgb[2];
          imageData.data[index+3] = 255;
          index += 4;
        });
        draw(ctx,imageData);
    });

    return [ rgbData, setRgbData, canvasRef, size];
}
