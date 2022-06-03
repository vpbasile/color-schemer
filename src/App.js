import Slider from './components/Slider';
import Button from './components/Button';
import TextInput from './components/TextInput';
import './App.css';
import { useState } from 'react';
// const fs = require('fs');
// Add in bootstrap

function App() {
  // <> Define the data structure for App:
  // All of the values that will be input
  let [foregroundBrightness, setForegroundBrightness] = useState(66);
  let [backgroundBrightness, setBackgroundBrightness] = useState(5);
  let [currentContrastRatio, setCurrentContrastRatio] = useState(contrastRatio(foregroundBrightness, backgroundBrightness))
  let [hueMain, setHueMain] = useState(150);
  let [saturationMain, setSaturationMain] = useState(50);
  let [huePrimary, setHuePrimary] = useState(211.1);
  let [hueSuccess, setHueSuccess] = useState(133.7);
  let [hueDanger, setHueDanger] = useState(354.3);
  let [hueWarning, setHueWarning] = useState(45);
  let [hueInfo, setHueInfo] = useState(188.2);
  let [fileName, setFileName] = useState("colorScheme");

  // <> Define useful globals
  let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget euismod consectetur, nisl nisl aliquet nunc, euismod euismod nunc nisl euismod.`
  let loremDiv = <div className='col textBox'><h2>Lorem ipsum</h2>{lorem}</div>

  // <> Initialize the brightness sliders
  let brightnessArray = [
    {
      "name": "Brightness - Foreground", "sliderMin": 0, "sliderMax": 100, "sliderValue": foregroundBrightness,
      "onChange": (e) => {
        setForegroundBrightness(e.target.value); setCurrentContrastRatio(contrastRatio(foregroundBrightness, backgroundBrightness));
      }, foreground: foregroundBrightness, background: backgroundBrightness
    },
    {
      "name": "Brightness - Background", "sliderMin": 0, "sliderMax": 100, "sliderValue": backgroundBrightness,
      "onChange": (e) => {
        setBackgroundBrightness(e.target.value); setCurrentContrastRatio(contrastRatio(foregroundBrightness, backgroundBrightness));
      }, foreground: foregroundBrightness, background: backgroundBrightness
    }
  ]

  // <> Initialize the hue sliders
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
      "name": "Hue - Secondary", "sliderMin": 0, "sliderMax": 360, "sliderValue": 0,
      hue: 0, foreground: foregroundBrightness, background: backgroundBrightness
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
    <div id='pageSimulator' className="container App-body" style={{
      backgroundColor: `hsl(${hueMain}, ${saturationMain}%, ${backgroundBrightness}%)`,
      color: `hsl(${hueMain}, ${saturationMain}%, ${foregroundBrightness}%)`
    }}>
      <div id='title' className='row'>
        <h1>Color Schemer</h1>
        <h2>A tool for quickly creating acessible color palettes</h2>
        <hr />
      </div>
      <div id='contrastSelection' className='row'>
        <div id='mainDisplay' className="col textBox">
          <h2>Step 1:Contrast</h2>
          <p>Select brightness of foreground and background colors.  Aim for a AAA rating.</p>
          {brightnessArray.map((brightness, index) => {
            return (
              <Slider key={index} name={brightness.name} min={brightness.sliderMin} max={brightness.sliderMax} sliderValue={brightness.sliderValue} onChange={brightness.onChange} style={{ color: `hsl(${hueMain}, ${saturationMain}%, ${foregroundBrightness}%)` }} />
            )
          }
          )}
          <div className='col textbox' id="contrastRatioDisplay">
            <table className='table text-center'>
              <thead>
                <tr>
                  <td>Contrast Ratio</td>
                  <td>WCAG Rating</td>
                </tr>
              </thead>
              <tbody><tr>
                <td>{currentContrastRatio.ratio}</td>
                <td>{currentContrastRatio.symbol}</td>
              </tr></tbody>
            </table>
          </div>
          <p>{currentContrastRatio.text}</p>
          <hr />
          <h2>Step 2:</h2>
          <p>Select a hue for the main foreground and background colors.</p>
          {/* <> Sliders to select hue and satiration */}
          <Slider key={`slider0`} {...hueArray[0]} style={{ color: `hsl(${hueMain}, ${saturationMain}%, ${foregroundBrightness}%)` }} />
          {/* <Slider key={'mainSat'} name={'Main saturation'} min={0} max={100} sliderValue={saturationMain} onChange={(e) => { setSaturationMain(e.target.value); console.log(saturationMain) }}  style={{color: `hsl(${hueMain}, ${saturationMain}%, ${foregroundBrightness}%)`}}/> */}
          <p>{lorem}</p>
          <table className='table'><thead><td></td><td>HSL</td></thead>
            <tbody>
              <tr>
                <td>background</td><td>hsl({hueMain}, {saturationMain}%, {backgroundBrightness}%)</td>
              </tr>
              <tr>
                <td>foreground</td><td>hsl({hueMain}, {saturationMain}%, {foregroundBrightness}%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col textBox'>
          <hr />
          <h2>Step 3:</h2>
          <p>Choose hues to assign to the standard Bootstrap color classes.</p>
          <p>This is what most of your text will look like. {lorem}</p>
        </div>
        <div id='primaryDisplay' className='textBox' style={{ backgroundColor: `hsl(${huePrimary}, 50%, ${backgroundBrightness}%)`, color: `hsl(${huePrimary}, 50%, ${foregroundBrightness}%)`, border: `2px solid hsl(${huePrimary}, 50%, ${foregroundBrightness}%)` }}>
          <h2>Primary text</h2>
          <h2><Slider key={`slider1`} {...hueArray[1]} style={{ backgroundColor: `hsl(${huePrimary}, 50%, ${backgroundBrightness}%)`, color: `hsl(${huePrimary}, 50%, ${foregroundBrightness}%)` }} /></h2>
          <p>This is primary text. {lorem}</p>
          <table id='primaryCodes' className='table'><thead><td></td><td>HSL</td></thead>
            <tbody>
              <tr>
                <td>background</td><td>hsl({huePrimary}, 50%, {backgroundBrightness}%)</td>
              </tr>
              <tr>
                <td>foreground</td><td>hsl({huePrimary}, 50%, {foregroundBrightness}%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        {loremDiv}
        <div id='secondaryDisplay' className='textBox' style={{ backgroundColor: `hsl(0, 0%, ${backgroundBrightness}%)`, color: `hsl(0, 0%, ${foregroundBrightness}%)`, border: `2px solid hsl(0, 0%, ${foregroundBrightness}%)` }}>
          <h2>Secondary text</h2>
          <h2><Slider key={`slider2`} disabled={true} {...hueArray[2]} style={{ backgroundColor: `hsl(0, 0%, ${backgroundBrightness}%)`, color: `hsl(0, 0%, ${foregroundBrightness}%)` }} /></h2>
          <p><sapn class="fw-bold">Secondary should really be gray.</sapn> {lorem}</p>
          <table id='secondaryCodes' className='table'><thead><tr>
            <tr>
              <td></td><td>HSL</td>
            </tr>
          </tr></thead>
            <tbody>
              <tr>
                <td>background</td><td>hsl(0, 0%, {backgroundBrightness}%)</td>
              </tr>
              <tr>
                <td>foreground</td><td>hsl(0, 0%, {foregroundBrightness}%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        {loremDiv}
        <div id='successDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueSuccess}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueSuccess}, 50%, ${foregroundBrightness}%)`, border: `2px solid hsl(${hueSuccess}, 50%, ${foregroundBrightness}%)` }}>
          <h2>Success text</h2>
          <h2><Slider key={`slider3`} {...hueArray[3]} style={{ backgroundColor: `hsl(${hueSuccess}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueSuccess}, 50%, ${foregroundBrightness}%)` }} /></h2>
          <p>Success. {lorem}</p>
          <table id='successCodes' className='table'><thead><td></td><td>HSL</td></thead>
            <tbody>
              <tr>
                <td>background</td><td>hsl({hueSuccess}, 50%, {backgroundBrightness}%)</td>
              </tr>
              <tr>
                <td>foreground</td><td>hsl({hueSuccess}, 50%, {foregroundBrightness}%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        {loremDiv}
        <div id='dangerDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueDanger}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueDanger}, 50%, ${foregroundBrightness}%)`, border: `2px solid hsl(${hueDanger}, 50%, ${foregroundBrightness}%)` }}>
          <h2>Danger text</h2>
          <h2><Slider key={`slider4`} {...hueArray[4]} style={{ backgroundColor: `hsl(${hueDanger}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueDanger}, 50%, ${foregroundBrightness}%)` }} /></h2>
          <p>Danger. {lorem}</p>
          <table id='dangerCodes' className='table'><thead><td></td><td>HSL</td></thead>
            <tbody>
              <tr>
                <td>background</td><td>hsl({hueDanger}, 50%, {backgroundBrightness}%)</td>
              </tr>
              <tr>
                <td>foreground</td><td>hsl({hueDanger}, 50%, {foregroundBrightness}%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        {loremDiv}
        <div id='warningDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueWarning}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueWarning}, 50%, ${foregroundBrightness}%)`, border: `2px solid hsl(${hueWarning}, 50%, ${foregroundBrightness}%)` }}>
          <h2>Warning text</h2>
          <h2><Slider key={`slider5`} {...hueArray[5]} style={{ backgroundColor: `hsl(${hueWarning}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueWarning}, 50%, ${foregroundBrightness}%)` }} /></h2>
          <p>Warning. {lorem}</p>
          <table id='warningCodes' className='table'><thead><td></td><td>HSL</td></thead>
            <tbody>
              <tr>
                <td>background</td><td>hsl({hueWarning}, 50%, {backgroundBrightness}%)</td>
              </tr>
              <tr>
                <td>foreground</td><td>hsl({hueWarning}, 50%, {foregroundBrightness}%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        {loremDiv}
        <div id='infoDisplay' className='textBox' style={{ backgroundColor: `hsl(${hueInfo}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueInfo}, 50%, ${foregroundBrightness}%)`, border: `2px solid hsl(${hueInfo}, 50%, ${foregroundBrightness}%)` }}>
          <h2>Info text</h2>
          <h2><Slider key={`slider6`} {...hueArray[6]} style={{ backgroundColor: `hsl(${hueInfo}, 50%, ${backgroundBrightness}%)`, color: `hsl(${hueInfo}, 50%, ${foregroundBrightness}%)` }} /></h2>
          <p>Info. {lorem}</p>
          <table id='infoCodes' className='table'><thead><td></td><td>HSL</td></thead>
            <tbody>
              <tr>
                <td>background</td><td>hsl({hueInfo}, 50%, {backgroundBrightness}%)</td>
              </tr>
              <tr>
                <td>foreground</td><td>hsl({hueInfo}, 50%, {foregroundBrightness}%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="saveDiv" className='col textBox'>
          <hr />
          <h2>Step 4 (optional): Export</h2>
          <p>Choose a filename and click save to export the selected colors to the CSS and JSON files.  The CSS contains ONLY color overrides - there is no spacing information.</p>
          <TextInput onChange={(e) => { setFileName(e.target.value); console.log(fileName) }} defaultValue={fileName} foregroundBrightness={backgroundBrightness} backgroundBrightness={foregroundBrightness} hue={hueMain} labelText={"Input filename: "} />
          <Button onClick={saveColors} value="Save to file" foregroundBrightness={backgroundBrightness} backgroundBrightness={foregroundBrightness} hue={hueMain} labelText={"Click to export: "} />
        </div>
        <hr/>
        <div id="footer" className='col textBox' >
          <h2>Links</h2>
          <ul className='' style={{
            backgroundColor: `hsl(${hueMain}, ${saturationMain}%, ${backgroundBrightness}%) !important`,
            color: `hsl(${hueMain}, ${saturationMain}%, ${foregroundBrightness}%) !important`
          }}>
            <li className='list-group-item'><a href="https://getbootstrap.com/">Bootstrap</a></li>
            <li className='list-group-item'><a href="https://accessiblepalette.com/">Accessible Palette</a></li>
            <li className='list-group-item'><a href="https://www.w3schools.com/colors/colors_picker.asp">Color Picker from W3Schools</a></li>
            <li className='list-group-item'><a href="https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/how-to-calculate/">How to calculate contrast</a></li>
          </ul>
        <hr/>

          <h2>To do:</h2>
          <ul>
            <li className='info'>component-Switch</li>
          </ul>
        </div>
      </div>
      {/* Need to handle class "muted" */}
    </div >
  );

  // <> Color handling functions

  function contrastRatio(lumForeground, lumBackground) {
    // Normalize the luminosity values from 0:100 to 0:1
    lumForeground = lumForeground / 100;
    lumBackground = lumBackground / 100;
    // The formula assumes that lumForeground is the luminance of the lighter of the two colors, and lumBackground is the luminance of the darker of the two colors.
    let ratio
    if(lumForeground > lumBackground) { ratio = (lumForeground + 0.05) / (lumBackground + 0.05) }
    else { ratio = (lumBackground + 0.05) / (lumForeground + 0.05) }
    // Keep it to one decimal place
    ratio = Math.round(ratio * 10) / 10;
    if (ratio >= 7) {
      return { ratio: ratio, symbol: "AAA", text: "The foreground text is legible against the background color." };
    } else if (ratio >= 4.5) {
      return { ratio: ratio, symbol: "AA", text: "The foreground text is legible against the background color." };
    } else if (ratio >= 3) {
      return { ratio: ratio, symbol: "!", text: "The contrast is only sufficient for large text." };
    } else {
      return { ratio: ratio, symbol: "Fail", text: "The contrast is insufficient." };
    }
  }

  // <> End of color handling functions

  function css() {
    let css = ``;
    css += `
    body {
      background-color: hsl(${hueMain}, ${saturationMain}%, ${backgroundBrightness}%);
      color: hsl(${hueMain}, ${saturationMain}%, ${foregroundBrightness}%);
    }
    /* Color classes for text */
    .text-primary {color: hsl(${huePrimary}, 50%, ${foregroundBrightness}%) !important;}
    .text-secondary {color: hsl(0, 0%, ${foregroundBrightness}%) !important;}
    .text-success {color: hsl(${hueSuccess}, 50%, ${foregroundBrightness}%) !important;}
    .text-danger {color: hsl(${hueDanger}, 50%, ${foregroundBrightness}%) !important;}
    .text-warning {color: hsl(${hueWarning}, 50%, ${foregroundBrightness}%) !important;}
    .text-info {color: hsl(${hueInfo}, 50%, ${foregroundBrightness}%) !important;}
    /* Color classes for background */
    .bg-primary {background-color: hsl(${huePrimary}, 50%, ${backgroundBrightness}%) !important;}
    .bg-secondary {background-color: hsl(0, 0%, ${backgroundBrightness}%) !important;}
    .bg-success {background-color: hsl(${hueSuccess}, 50%, ${backgroundBrightness}%) !important;}
    .bg-danger {background-color: hsl(${hueDanger}, 50%, ${backgroundBrightness}%) !important;}
    .bg-warning {background-color: hsl(${hueWarning}, 50%, ${backgroundBrightness}%) !important;}
    .bg-info {background-color: hsl(${hueInfo}, 50%, ${backgroundBrightness}%) !important;}
    /* Color classes for border */
    .border-primary {border-color: hsl(${huePrimary}, 50%, ${foregroundBrightness}%) !important;}
    .border-secondary {border-color: hsl(0, 0%, ${foregroundBrightness}%) !important;}
    .border-success {border-color: hsl(${hueSuccess}, 50%, ${foregroundBrightness}%) !important;}
    .border-danger {border-color: hsl(${hueDanger}, 50%, ${foregroundBrightness}%) !important;}
    .border-warning {border-color: hsl(${hueWarning}, 50%, ${foregroundBrightness}%) !important;}
    .border-info {border-color: hsl(${hueInfo}, 50%, ${foregroundBrightness}%) !important;}
    `;
    return css;
  }
}

export default App;
