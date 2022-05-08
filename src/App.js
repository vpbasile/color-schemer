import Slider from './components/Slider';
import Button from './components/Button';
import TextInput from './components/TextInput';
import ColorDisplay from './components/ColorDisplay';
import './App.css';
import { useState } from 'react';
// const fs = require('fs');
// Add in bootstrap

function App() {

  let [foregroundBrightness, setForegroundBrightness] = useState(55);
  let [backgroundBrightness, setBackgroundBrightness] = useState(5);
  let [hueMain, setHueMain] = useState(150);
  let [saturationMain, setSaturationMain] = useState(100);
  let [huePrimary, setHuePrimary] = useState(211.1);
  let [hueSecondary, setHueSecondary] = useState(278.2);
  let [hueSuccess, setHueSuccess] = useState(133.7);
  let [hueDanger, setHueDanger] = useState(354.3);
  let [hueWarning, setHueWarning] = useState(45);
  let [hueInfo, setHueInfo] = useState(188.2);
  let [fileName, setFileName] = useState("colorScheme");

  let brightnessArray = [
    {
      "name": "Brightness - Foreground", "sliderMin": 0, "sliderMax": 100, "sliderValue": foregroundBrightness,
      "onChange": (e) => {
        setForegroundBrightness(e.target.value);
        // console.log(`Brightness - Foreground: ${foregroundBrightness}`)
      }, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Brightness - Background", "sliderMin": 0, "sliderMax": 100, "sliderValue": backgroundBrightness,
      "onChange": (e) => {
        setBackgroundBrightness(e.target.value);
        // console.log(`Brightness - Background: ${backgroundBrightness}`)
      }, foreground: foregroundBrightness, background: backgroundBrightness
    }
  ]

  let hueArray = [
    {
      "name": "Hue - Main", "sliderMin": 0, "sliderMax": 360, "sliderValue": hueMain,
      "onChange": (e) => {
        setHueMain(e.target.value);
        // console.log(`Hue - Main: ${hueMain}`) 
      }, hue: hueMain, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Primary", "sliderMin": 0, "sliderMax": 360, "sliderValue": huePrimary,
      "onChange": (e) => {
        setHuePrimary(e.target.value);
        // console.log(`Hue - Primary: ${huePrimary}`) 
      }, hue: huePrimary, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Secondary", "sliderMin": 0, "sliderMax": 360, "sliderValue": hueSecondary,
      "onChange": (e) => {
        setHueSecondary(e.target.value);
        // console.log(`Hue - Secondary: ${hueSecondary}`) 
      }, hue: hueSecondary, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Success", "sliderMin": 0, "sliderMax": 360, "sliderValue": hueSuccess,
      "onChange": (e) => {
        setHueSuccess(e.target.value);
        // console.log(`Hue - Success: ${hueSuccess}`) 
      }, hue: hueSuccess, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Danger", "sliderMin": 0, "sliderMax": 360, "sliderValue": hueDanger,
      "onChange": (e) => {
        setHueDanger(e.target.value);
        // console.log(`Hue - Danger: ${hueDanger}`) 
      }, hue: hueDanger, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Warning", "sliderMin": 0, "sliderMax": 360, "sliderValue": hueWarning,
      "onChange": (e) => {
        setHueWarning(e.target.value);
        // console.log(`Hue - Warning: ${hueWarning}`) 
      }, hue: hueWarning, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Hue - Info", "sliderMin": 0, "sliderMax": 360, "sliderValue": hueInfo,
      "onChange": (e) => {
        setHueInfo(e.target.value);
        // console.log(`Hue - Info: ${hueInfo}`) 
      }, hue: hueInfo, foreground: foregroundBrightness, background: backgroundBrightness
    }

  ]

  // save data to localStorage 
  function saveStateToLocalStorage(object) {
    localStorage.setItem('state', JSON.stringify(object));
  }

  // Fetch data from local storage 
  function fetchStateFromLocalStorage() {
    let data = localStorage.getItem('state');
    if (data !== undefined) {
      JSON.parse(data)
    }
  }

  function onStartedDownload(id) {
    console.log(`Started downloading: ${id}`);
  }

  function onFailed(error) {
    console.log(`Download failed: ${error}`);
  }

  function css() {
    let css = ``;
    css += `
    body {
      background-color: hsl(${hueMain}, ${saturationMain}%, ${backgroundBrightness}%);
      color: hsl(${hueMain}, ${saturationMain}%, ${foregroundBrightness}%);
    }
    /* Color classes for text */
    .text-primary {color: hsl(${huePrimary}, 50%, ${foregroundBrightness}%) !important;}
    .text-secondary {color: hsl(${hueSecondary}, 50%, ${foregroundBrightness}%) !important;}
    .text-success {color: hsl(${hueSuccess}, 50%, ${foregroundBrightness}%) !important;}
    .text-danger {color: hsl(${hueDanger}, 50%, ${foregroundBrightness}%) !important;}
    .text-warning {color: hsl(${hueWarning}, 50%, ${foregroundBrightness}%) !important;}
    .text-info {color: hsl(${hueInfo}, 50%, ${foregroundBrightness}%) !important;}
    /* Color classes for background */
    .bg-primary {background-color: hsl(${huePrimary}, 50%, ${backgroundBrightness}%) !important;}
    .bg-secondary {background-color: hsl(${hueSecondary}, 50%, ${backgroundBrightness}%) !important;}
    .bg-success {background-color: hsl(${hueSuccess}, 50%, ${backgroundBrightness}%) !important;}
    .bg-danger {background-color: hsl(${hueDanger}, 50%, ${backgroundBrightness}%) !important;}
    .bg-warning {background-color: hsl(${hueWarning}, 50%, ${backgroundBrightness}%) !important;}
    .bg-info {background-color: hsl(${hueInfo}, 50%, ${backgroundBrightness}%) !important;}
    /* Color classes for border */
    .border-primary {border-color: hsl(${huePrimary}, 50%, ${foregroundBrightness}%) !important;}
    .border-secondary {border-color: hsl(${hueSecondary}, 50%, ${foregroundBrightness}%) !important;}
    .border-success {border-color: hsl(${hueSuccess}, 50%, ${foregroundBrightness}%) !important;}
    .border-danger {border-color: hsl(${hueDanger}, 50%, ${foregroundBrightness}%) !important;}
    .border-warning {border-color: hsl(${hueWarning}, 50%, ${foregroundBrightness}%) !important;}
    .border-info {border-color: hsl(${hueInfo}, 50%, ${foregroundBrightness}%) !important;}
    `;
    return css;
  }


  function saveColors() {
    console.log("Saving colors...");
    // Create two files - a CSS and a JSON
    let outputJSON = JSON.stringify({ brightnessArray: brightnessArray, hueArray: hueArray }, null, 4);
    const blobJSON = new Blob([outputJSON]);
    let outputCSS = css();
    const blobCSS = new Blob([outputCSS]);
    // Create links for the files
    const downloadJSON = URL.createObjectURL(blobJSON, { type: "text/plain" });
    const downloadCSS = URL.createObjectURL(blobCSS, { type: "text/css" });
    // Make links
    var jsonLink = document.createElement("a");
    jsonLink.href = downloadJSON
    jsonLink.download = `${fileName}.json`;
    var cssLink = document.createElement("a");
    cssLink.href = downloadCSS
    cssLink.download = `${fileName}.css`;
    // Download them
    jsonLink.click();
    cssLink.click();
    // saveStateToLocalStorage(output);
    console.log("Colors saved!");

  }

  return (
    <div className="App container">
      <div className='row App-body'>
        <div id='pageSimulator' className='col-md-6'
          style={{
            backgroundColor: `hsl(${hueMain}, ${saturationMain}%, ${backgroundBrightness}%)`,
            color: `hsl(${hueMain}, ${saturationMain}%, ${foregroundBrightness}%)`
          }}>

          <h1>Color Schemer</h1>
          <hr />
          <TextInput onChange={(e) => {setFileName(e.target.value); console.log(fileName)}} defaultValue={fileName} foregroundBrightness={backgroundBrightness} backgroundBrightness={foregroundBrightness} hue={hueMain} labelText={"Input filename: "} />
          <Button onClick={saveColors} value="Save to file" foregroundBrightness={backgroundBrightness} backgroundBrightness={foregroundBrightness} hue={hueMain} labelText={"Click to export: "} />
          <hr />
          {brightnessArray.map((brightness, index) => {
            return (
              <Slider key={index} name={brightness.name} min={brightness.sliderMin} max={brightness.sliderMax} sliderValue={brightness.sliderValue} onChange={brightness.onChange} />
            )
          }
          )}
          <Slider key={'mainSat'} name={'Main saturation'} min={0} max={100} sliderValue={saturationMain} onChange={(e) => {setSaturationMain(e.target.value); console.log(saturationMain)}} />
          <hr />
          <div className="textBox">
            <h2>Regular text</h2>
            <p>This is what most of your text will look like.  Below are the standard Bootstrap color classes.
              These sliders will eventually set apparent brightness, but for now they just control l as in hsl.  I also want to display the apparent brightness contrast ratio.
            </p>
            <Slider key={`slider0`} {...hueArray[0]} />
          </div>
          <div id='primaryDisplay' className='textBox' style={{ backgroundColor: `hsl(${huePrimary}, 50%, ${backgroundBrightness}%)`, color: `hsl(${huePrimary}, 50%, ${foregroundBrightness}%)` , border: `2px solid hsl(${huePrimary}, 50%, ${foregroundBrightness}%)`}}>
            <h2><Slider key={`slider1`} {...hueArray[1]} /></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget euismod consectetur, nisl nisl aliquet nunc, euismod euismod nunc nisl euismod.</p>
          </div>
          <div id='secondaryDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueSecondary}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueSecondary}, 50%, ${foregroundBrightness}%)` , border: `2px solid hsl(${hueSecondary}, 50%, ${foregroundBrightness}%)`}}>
            <h2><Slider key={`slider2`} {...hueArray[2]} /></h2>
            <p>Secondary should really be gray.  I haven't figured out how to calculate the grays that match the apparent brightness contrast ratio.</p>
          </div>
          <div id='successDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueSuccess}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueSuccess}, 50%, ${foregroundBrightness}%)` , border: `2px solid hsl(${hueSuccess}, 50%, ${foregroundBrightness}%)`}}>
            <h2><Slider key={`slider3`} {...hueArray[3]} /></h2>
            <p>Success. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget euismod consectetur, nisl nisl aliquet nunc, euismod euismod nunc nisl euismod.</p>
          </div>
          <div id='dangerDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueDanger}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueDanger}, 50%, ${foregroundBrightness}%)` , border: `2px solid hsl(${hueDanger}, 50%, ${foregroundBrightness}%)`}}>
            <h2><Slider key={`slider4`} {...hueArray[4]} /></h2>
            <p>Danger. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget euismod consectetur, nisl nisl aliquet nunc, euismod euismod nunc nisl euismod.</p>
          </div>
          <div id='warningDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueWarning}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueWarning}, 50%, ${foregroundBrightness}%)` , border: `2px solid hsl(${hueWarning}, 50%, ${foregroundBrightness}%)`}}>
            <h2><Slider key={`slider5`} {...hueArray[5]} /></h2>
            <p>Warning. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget euismod consectetur, nisl nisl aliquet nunc, euismod euismod nunc nisl euismod.</p>
          </div>
          <div id='infoDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueInfo}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueInfo}, 50%, ${foregroundBrightness}%)` , border: `2px solid hsl(${hueInfo}, 50%, ${foregroundBrightness}%)`}}>
            <h2><Slider key={`slider6`} {...hueArray[6]} /></h2>
            <p>Info. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget euismod consectetur, nisl nisl aliquet nunc, euismod euismod nunc nisl euismod.</p>
          </div>
          {/* Nav Bar */}
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="https://getbootstrap.com/">Bootstrap</a>
            <a className="navbar-brand" href="https://accessiblepalette.com/">Accessible Palette</a>
            <a className="navbar-brand" href="https://www.w3schools.com/colors/colors_picker.asp">Color Picker from W3Schools</a>
          </nav>
        </div>
        {/* Need to handle class "muted" */}
      </div>
    </div>
  );
}

export default App;
