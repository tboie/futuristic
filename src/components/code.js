import React, { useRef, useContext } from 'react';
import { getRandNum, useAnimationFrame } from '../utils/utils.js';
import { ThemeContext } from '../App.js';
import { getSideText } from '../data/text.js';
import './style.css';

export default function Code(){
    const theme = useContext(ThemeContext);
    const canvasCode = useRef();
    let ctx, text = getSideText(), direction = "down", paused = false, fontSize = 12;
    let pos = ((text.length * fontSize) / 1.5) * -1;
    let nextPause = new Date(), startPause;
  
    useAnimationFrame(deltaTime => {
        if(!ctx){
            ctx = canvasCode.current.getContext("2d");
            ctx.font = fontSize + "px Arial";
            ctx.fillStyle = theme.primary;
            ctx.shadowBlur = 8;
            ctx.shadowColor = theme.primary;
        }
        else{
            ctx.clearRect(0, 0, canvasCode.current.width, canvasCode.current.height);
  
            if(direction === "down"){
                pos += 26
            }
            else{
                let now = new Date();
    
                if(!paused){
                    pos -= 20;
    
                    if((now - nextPause > getRandNum(750, 1500))){
                        paused = true;
                        startPause = new Date();
                        nextPause = new Date();
                    }
                }
                else{
                    if(startPause && now - startPause > 750){
                        paused = false;
                    }
                }
            }
  
            if(direction === "down" && pos > 0){
                direction = "up";
            }
            else if(direction === "up" && (text.length * fontSize) + pos < canvasCode.current.height){
                direction = "down";
            }
        
            for(let i=0; i<text.length; i++){
                let yPos = ((i+1) * fontSize) + pos;
                if(yPos >= 0 && yPos <= canvasCode.current.height)
                    ctx.fillText(text[i], 10, yPos);
            }
        }
    })
  
    return(
      <canvas ref={canvasCode} width={270} height={240}/>
    )
}
  