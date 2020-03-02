import React, { useRef, useState, useContext} from 'react';
import { getRandNum, useAnimationFrame } from '../utils/utils.js';
import { ThemeContext } from '../App.js';
import './style.css';

export default function Meters() {
    const numMeters = 8;
    return (
        <div style={{ display: "table", margin:'0 auto', paddingTop:'6px', paddingBottom:'10px'}}>
            {[...Array(numMeters)].map((val, i) => <Meter key={"meter" + i} />)}
        </div>
    );
  }
  
function Meter(){
    const theme = useContext(ThemeContext);
    const canvasMeter = useRef();
    const [numLines, setNumLines] = useState([]);
    let opt, ctx, numLinesUpdTime = new Date();
  
    useAnimationFrame(deltaTime => {
        if(!ctx){
            ctx = canvasMeter.current.getContext("2d");
            ctx.strokeStyle = theme.primary;
            ctx.shadowBlur = 2;
            ctx.shadowColor = theme.secondary;
  
            opt = {
                i: getRandNum(1, canvasMeter.current.width),
                maxLines: 21,
                minLines: 2,
                numLines: getRandNum(2, 21),
                forward: true,
                growing: true,
                lineWidth: 4,
                boundary: 40,
                posBegin: undefined,
                posEnd: undefined,
                interval: 4,
                startTimeGrow: new Date(),
                endTimeGrow: undefined,
                startTimeChangeDir: new Date(),
                endTimeChangeDir: undefined,
                spacing: 1
            }
    
        ctx.lineWidth = opt.lineWidth;
    }
    else{
        ctx.clearRect(0, 0, canvasMeter.current.width, canvasMeter.current.height);

        //randomize grow/shrink
        opt.endTimeGrow = new Date();
        if (opt.endTimeGrow - opt.startTimeGrow >= getRandNum(250, 2000)) {
            opt.growing = !opt.growing;
            opt.startTimeGrow = new Date();
        }
  
        //randomize direction change
        opt.endTimeChangeDir = new Date();
        if (opt.endTimeChangeDir - opt.startTimeChangeDir >= getRandNum(500, 1000)) {
            opt.forward = !opt.forward;
            opt.startTimeChangeDir = new Date();
        }
  
        ctx.beginPath();
        //right side
        for (let k = 1; k <= opt.numLines; k++) {
            const x = opt.i - (opt.lineWidth + opt.spacing) + k * (opt.lineWidth + opt.spacing);
            if (k === opt.numLines) opt.posEnd = x + opt.lineWidth;
  
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvasMeter.current.height);
        }
        //left side
        for (let k = opt.numLines; k >= 1; k--) {
            const x = opt.i - k * (opt.lineWidth + opt.spacing);
            if (k === opt.numLines) opt.posBegin = x + opt.lineWidth;
  
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvasMeter.current.height);
        }
        ctx.stroke();
  
  
        //change direction
        if (opt.forward) {
            if (opt.posEnd < canvasMeter.current.width - opt.boundary) opt.i += opt.interval;
            else if (opt.posEnd >= canvasMeter.current.width - opt.boundary) opt.forward = false;
        } else {
            if (opt.posBegin > opt.boundary) opt.i -= opt.interval;
            else if (opt.posBegin <= opt.boundary) opt.forward = true;
        }
  
        //grow/shrink
        if (opt.growing && opt.numLines < opt.maxLines) opt.numLines += 1;
        else if (opt.numLines > opt.minLines) opt.numLines -= 1;
  
        //update numLines state for box number
        let numLinesUpdTimeNow = new Date();
        if(numLinesUpdTimeNow - numLinesUpdTime >= getRandNum(150,300)){
            setNumLines(parseInt(opt.numLines / opt.maxLines * 100));
            numLinesUpdTime = new Date();
        }
      }
    });
  
    return(
        <div style={{height:'30px', marginTop:'5px', width:'250px'}}>
            <canvas
                ref={canvasMeter}
                style={{
                    boxSizing:'border-box',
                    float: "left",
                    width: "200px",
                    height: "30px",
                    border: "2px solid " + theme.secondary,
                }}
            />
            <MeterBox numLines={numLines} size={'30px'} numLines={numLines}/>
      </div>
    )
  }
  
function MeterBox(props) {
    const theme = useContext(ThemeContext);

    return (
        <div
            className="meterBox"
            style={{
                height: props.size,
                width: (parseInt(props.size.replace('px','')) + 20) + 'px',
                border: '2px solid ' + theme.secondary,
                borderLeft: 0
            }}
        >
        <label style={{color: theme.primary}}>{props.numLines}</label>
        </div>
    );
  }