import React, { useRef, useState, useContext} from 'react';
import { getRandNum, useAnimationFrame } from '../utils/utils.js';
import { ThemeContext } from '../App.js';
import Title from './title.js';
import { getMainText } from '../data/text.js';
import './style.css';

export default function Main(){
    const theme = useContext(ThemeContext);
    const canvasNums = useRef();
    const canvasText = useRef();

    let ctxNum, ctxText, direction = "down", paused = false, fontSize = 16, 
        hPos = 168, hDirection = getRandNum(0,1) === 1 ? 'down' : 'up', hTime = new Date();

    const text = getMainText();
    const nums = new Array(text.length - 0 + 1).fill().map((item, index) => 0 + index);
    let pos = -168;
    let nextPause = new Date(), startPause;

    useAnimationFrame(deltaTime => {
        if(!ctxNum){
            ctxNum = canvasNums.current.getContext("2d");
            ctxNum.font = fontSize + "px Arial";
            ctxNum.fillStyle = theme.primary;
            ctxNum.shadowBlur = 8;
            ctxNum.shadowColor = theme.primary;

            ctxText = canvasText.current.getContext("2d");
            ctxText.font = fontSize + "px Arial";
            ctxText.fillStyle = theme.primary;
            ctxText.shadowBlur = 8;
            ctxText.shadowColor = theme.primary;

            hPos = getRandNum(0, canvasText.current.height);
        }
        else{
            ctxNum.clearRect(0, 0, canvasNums.current.width, canvasNums.current.height);
            ctxText.clearRect(0, 0, canvasText.current.width, canvasText.current.height);

            if(direction === "down"){
                pos += 56
            }
            else{
                let now = new Date();
    
                if(!paused){
                    pos -= 28;
    
                    if((now - nextPause > getRandNum(1500, 2500))){
                        paused = true;
                        startPause = new Date();
                        nextPause = new Date();
                    }
                }
                else{
                    if(startPause && now - startPause > 1250){
                        paused = false;
                    }
                }
            }
  
            if(direction === "down" && pos > 0){
                direction = "up";
            }
            else if(direction === "up" && (nums.length * fontSize) + pos < canvasNums.current.height){
                direction = "down";
            }
            
            for(let i=0; i<nums.length; i++){
                let yPos = ((i+1) * fontSize) + pos;
                if(yPos >= 0 && yPos <= canvasNums.current.height){
                    ctxNum.fillText(nums[i], 3, yPos);
                    ctxText.fillText(text[i], 9, yPos);
                }
            }

            if(!paused){
                if(hDirection === 'up'){
                    if(hPos <=40)
                        hDirection = 'down';
                    else
                        hPos -= 14;
                }
                else if(hDirection === 'down'){
                    if(hPos >= canvasText.current.height-40)
                        hDirection = 'up';
                    else
                        hPos +=14;
                }
            }
            else{
                console.log(pos + ' ' + hPos);
                hDirection = getRandNum(0, 1) ? 'up' : 'down';
            }

            ctxText.shadowBlur = 0;
            ctxText.globalAlpha = 0.5;
            ctxText.fillRect(0, hPos, canvasText.current.width, fontSize);
            ctxText.globalAlpha = 1;
            ctxText.shadowBlur = 8;
        }
    })

    return(
        <div className='divGlow' style={{float:'left', boxSizing:'border-box', height: '928px', width:'590px', border: '4px solid ' + theme.primary}}>
            <Title title='>> C:\ > DIR / MIR / PROG / VIM.EXE'/>
            <div style={{height:'100%', width:'100%'}}>
                <div style={{width:'100%', height:'100%', display:'flex'}}>
                    <canvas id="canvasMainLeftNums" ref={canvasNums} width="36" height="886" style={{borderRight: '4px solid ' + theme.primary}}/>
                    <canvas id="canvasMainRightText" ref={canvasText} width="542" height="886"/>
                </div>
            </div>
        </div>
    )
}