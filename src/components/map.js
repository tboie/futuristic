import React, { useRef, useContext } from 'react';
import { getRandNum, useAnimationFrame } from '../utils/utils.js';
import { ThemeContext } from '../App.js';
import './style.css';

export default function Map(){
    const theme = useContext(ThemeContext);
    let canvasMap = useRef();
    let ctx, matrix;
    
    useAnimationFrame(deltaTime => {
        if(!ctx){
            matrix = Array.from(Array(canvasMap.current.width), () => new Array(canvasMap.current.height));
            for(let i=0; i<matrix.length; i++){
                for(let k=0; k<matrix[0].length; k++){
                    matrix[i][k] = {fade: undefined, opacity: Math.random() >= 0.5 ? 1 : 0, time: new Date(), nextToggle: getRandNum(0, 3000)}
                }
            }

            ctx = canvasMap.current.getContext("2d");
            ctx.fillStyle = theme.primary;
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvasMap.current.width, canvasMap.current.height);
        }
        else{
            let newUpdTime = new Date();
    
            //ctx.clearRect(0, 0, canvasMap.current.width, canvasMap.current.height);
            
            ctx.beginPath();
            for(let i=0; i<canvasMap.current.width; i=i+10){
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvasMap.current.height);
            }
            for(let i=0; i<canvasMap.current.height; i=i+10){
                ctx.moveTo(0, i);
                ctx.lineTo(canvasMap.current.width, i);
            }
            ctx.globalAlpha = 1;
            ctx.stroke();
  
            for(let i=0; i<canvasMap.current.width; i=i+10){
                for(let k=0; k<canvasMap.current.height; k=k+10){
                    let cell = matrix[i][k];
                
                    if(newUpdTime - cell.time > cell.nextToggle){
                        if(!cell.fade){
                            cell.fade = cell.opacity === 0 ? 'in' : 'out'
                        }
                        else{
                            if(cell.fade === 'in'){
                                if(cell.opacity < 1){
                                    cell.opacity += 0.075;
                                }
                                else{
                                    if(newUpdTime - cell.time > cell.nextToggle){
                                        cell.fade = 'out';
                                        cell.time = new Date();
                                        cell.nextToggle = getRandNum(0,3000);
                                    }
                                }
                            }
                            else if(cell.fade === 'out'){
                                if(cell.opacity > 0){
                                    cell.opacity -= 0.075;
                                }
                                else{
                                    if(newUpdTime - cell.time > cell.nextToggle){
                                        cell.fade = 'in';
                                        cell.time = new Date();
                                        cell.nextToggle = getRandNum(0,3000);
                                    }
                                }
                            }
                        }  
                    }
    
                    if(cell.opacity > 1){
                        cell.opacity = 1;
                    }
                    else if(cell.opacity < 0){
                        cell.opacity = 0;
                    }
  
                    if(cell.opacity > 0){
                        ctx.shadowBlur = 2;
                        ctx.shadowColor = "lightgreen";
                    }
                    else if(cell.opacity === 0){
                        ctx.shadowBlur = 0;
                        //ctx.shadowColor = "";
                    }
                    
                    if(cell.opacity !== 0){
                        ctx.globalAlpha = cell.opacity;
                        ctx.fillRect(i, k, 10, 10);
                    }
                }
            }
        }
    })
  
    return(
      <canvas ref={canvasMap} width="270" height="270" />
    )
  }