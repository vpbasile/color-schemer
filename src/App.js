import Slider from './components/Slider';
import ColorDisplay from './components/ColorDisplay';
import './App.css';
import { useState } from 'react';
// Add in bootstrap

function App() {

  let [foregroundBrightness, setForegroundBrightness] = useState(80);
  let [backgroundBrightness, setBackgroundBrightness] = useState(2);
  let [hueMain, setHueMain] = useState(150);
  let [huePrimary, setHuePrimary] = useState(211.1);
  let [hueSecondary, setHueSecondary] = useState(278.2);
  let [hueSuccess, setHueSuccess] = useState(133.7);
  let [hueDanger, setHueDanger] = useState(354.3);
  let [hueWarning, setHueWarning] = useState(45);
  let [hueInfo, setHueInfo] = useState(188.2);

  let values = [
    {
      "name": "Brightness - Foreground", "min": 0, "max": 100, "value": foregroundBrightness,
      "onChange": (e) => { setForegroundBrightness(e.target.value); 
        // console.log(`Brightness - Foreground: ${foregroundBrightness}`)
       }, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Brightness - Background", "min": 0, "max": 100, "value": backgroundBrightness,
      "onChange": (e) => { setBackgroundBrightness(e.target.value); 
        // console.log(`Brightness - Background: ${backgroundBrightness}`)
       }, foreground: foregroundBrightness, background: backgroundBrightness
    }
  ]

  let colors = [
    {
      "name": "Hue - Main", "min": 0, "max": 360, "value": hueMain,
      "onChange": (e) => { setHueMain(e.target.value); 
        // console.log(`Hue - Main: ${hueMain}`) 
      }, hue: hueMain, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Primary", "min": 0, "max": 360, "value": huePrimary,
      "onChange": (e) => { setHuePrimary(e.target.value); 
        // console.log(`Hue - Primary: ${huePrimary}`) 
      }, hue: huePrimary, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Secondary", "min": 0, "max": 360, "value": hueSecondary,
      "onChange": (e) => { setHueSecondary(e.target.value); 
        // console.log(`Hue - Secondary: ${hueSecondary}`) 
      }, hue: hueSecondary, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Success", "min": 0, "max": 360, "value": hueSuccess,
      "onChange": (e) => { setHueSuccess(e.target.value); 
        // console.log(`Hue - Success: ${hueSuccess}`) 
      }, hue: hueSuccess, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Danger", "min": 0, "max": 360, "value": hueDanger,
      "onChange": (e) => { setHueDanger(e.target.value); 
        // console.log(`Hue - Danger: ${hueDanger}`) 
      }, hue: hueDanger, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Warning", "min": 0, "max": 360, "value": hueWarning,
      "onChange": (e) => { setHueWarning(e.target.value); 
        // console.log(`Hue - Warning: ${hueWarning}`) 
      }, hue: hueWarning, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Info", "min": 0, "max": 360, "value": hueInfo,
      "onChange": (e) => { setHueInfo(e.target.value); 
        // console.log(`Hue - Info: ${hueInfo}`) 
      }, hue: hueInfo, foreground: foregroundBrightness, background: backgroundBrightness
    }

  ]

  return (
    <div className="App container">
      <header className="App-header">
        <h1>Color Schemer</h1>

      </header>
      <div className='row App-body'>
        {values.map((value, index) => {
          return (
            <Slider key={index} name={value.name} min={value.min} max={value.max} value={value.value} onChange={value.onChange} color={value.color} />)
        }
        )}
        {colors.map((color, index) => {
          return (
            <div key={index} className="sliderANDdisplay">
              <Slider key={`slider-${index}`} {...color} />
              <ColorDisplay key={`colorDisplay-${index}`} text={color.name}
              foreground={foregroundBrightness} background={backgroundBrightness} hue={color.hue} />
            </div>
          )
        })}
        {/* Need to handle class "muted" */}
      </div>
      <div className='row App-footer'>
        {/* Nav Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://getbootstrap.com/">Bootstrap</a>
          <a className="navbar-brand" href="https://accessiblepalette.com/">Accessible Palette</a>
          <a className="navbar-brand" href="https://www.w3schools.com/colors/colors_picker.asp">Color Picker from W3Schools</a>
        </nav>
      </div>
    </div>
  );
}

export default App;
