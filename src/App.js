import React, { useContext } from 'react';
import Map from './components/map.js';
import Code from './components/code.js';
import Meters from './components/meters.js';
import Title from './components/title.js';
import Main from './components/main.js';
import './App.css';

const themes = {
  main: {
    primary: 'lightgreen',
    secondary: 'green'
  }
};

export const ThemeContext = React.createContext(themes.main);

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={themes.main}>
      <div id="container">
        <div style={{width:'900px', display:'inline-block', marginTop:'24px'}} >
          <Main/>
          <div style={{float:'right'}}>
            <div className="divGlow" style={{width:'270px', border: '4px solid ' + theme.primary}}>
              <div style={{width:'100%', backgroundColor: 'black'}}>
                <Title title="COMPILER ARRAY"/>
                <Meters/>
              </div>
              <div style={{width:'270px', backgroundColor: 'black', borderTop: '4px solid ' + theme.primary}}>
                <Code/>
              </div>
            </div>
            <div className="divGlow" style={{width:'270px', marginTop:'28px', border: '4px solid ' + theme.primary}}>
              <Title title="COMPILER STATUS"/>
              <Map/>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}



export default App;
