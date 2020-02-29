
const purples =
  `lavender	#E6E6FA	rgb(230,230,250)
thistle	#D8BFD8	rgb(216,191,216)
plum	#DDA0DD	rgb(221,160,221)
violet	#EE82EE	rgb(238,130,238)
orchid	#DA70D6	rgb(218,112,214)
fuchsia	#FF00FF	rgb(255,0,255)
magenta	#FF00FF	rgb(255,0,255)
mediumorchid	#BA55D3	rgb(186,85,211)
mediumpurple	#9370DB	rgb(147,112,219)
blueviolet	#8A2BE2	rgb(138,43,226)
darkviolet	#9400D3	rgb(148,0,211)
darkorchid	#9932CC	rgb(153,50,204)
darkmagenta	#8B008B	rgb(139,0,139)
purple	#800080	rgb(128,0,128)
indigo	#4B0082	rgb(75,0,130)`;

let reds = `	lightsalmon	#FFA07A	rgb(255,160,122)
salmon	#FA8072	rgb(250,128,114)
darksalmon	#E9967A	rgb(233,150,122)
lightcoral	#F08080	rgb(240,128,128)
indianred	#CD5C5C	rgb(205,92,92)
crimson	#DC143C	rgb(220,20,60)
firebrick	#B22222	rgb(178,34,34)
red	#FF0000	rgb(255,0,0)
darkred	#8B0000	rgb(139,0,0)
maroon	#800000	rgb(128,0,0)
tomato	#FF6347	rgb(255,99,71)
orangered	#FF4500	rgb(255,69,0)
palevioletred	#DB7093	rgb(219,112,147)`;

let spectrum = `15 	#ff4000	rgb(255, 64, 0)	hsl(15, 100%, 50%)
30 	#ff8000	rgb(255, 128, 0)	hsl(30, 100%, 50%)
45 	#ffbf00	rgb(255, 191, 0)	hsl(45, 100%, 50%)
60 	#ffff00	rgb(255, 255, 0)	hsl(60, 100%, 50%)
75 	#bfff00	rgb(191, 255, 0)	hsl(75, 100%, 50%)
90 	#80ff00	rgb(128, 255, 0)	hsl(90, 100%, 50%)
105 	#40ff00	rgb(64, 255, 0)	hsl(105, 100%, 50%)
120 	#00ff00	rgb(0, 255, 0)	hsl(120, 100%, 50%)
135 	#00ff40	rgb(0, 255, 64)	hsl(135, 100%, 50%)
150 	#00ff80	rgb(0, 255, 128)	hsl(150, 100%, 50%)
165 	#00ffbf	rgb(0, 255, 191)	hsl(165, 100%, 50%)
180 	#00ffff	rgb(0, 255, 255)	hsl(180, 100%, 50%)
195 	#00bfff	rgb(0, 191, 255)	hsl(195, 100%, 50%)
210 	#0080ff	rgb(0, 128, 255)	hsl(210, 100%, 50%)
225 	#0040ff	rgb(0, 64, 255)	hsl(225, 100%, 50%)
240 	#0000ff	rgb(0, 0, 255)	hsl(240, 100%, 50%)
255 	#4000ff	rgb(64, 0, 255)	hsl(255, 100%, 50%)
270 	#8000ff	rgb(128, 0, 255)	hsl(270, 100%, 50%)
285 	#bf00ff	rgb(191, 0, 255)	hsl(285, 100%, 50%)
300 	#ff00ff	rgb(255, 0, 255)	hsl(300, 100%, 50%)
315 	#ff00bf	rgb(255, 0, 191)	hsl(315, 100%, 50%)
330 	#ff0080	rgb(255, 0, 128)	hsl(330, 100%, 50%)
345 	#ff0040	rgb(255, 0, 64)	hsl(345, 100%, 50%)
360 	#ff0000`;

// let splitting = purpleString.split("\n").map(line => line.split("\t"));
// let purples = splitting.map(val => val[1]);


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


console.log(shuffle([1, 2, 3]))
console.log(shuffle([1, 2, 3]))
console.log(shuffle([1, 2, 3]))


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// alert(rgbToHex(0, 51, 255)); // #0033ff


const extractColors = (rawColorText) => {
  return rawColorText.split("\n").map(line => line.split("\t")).map(x => x[1]);

}

let colorSpectrum = extractColors(reds);
// console.log(extractColors(reds))

function generateString() {
  let randoNum = Math.floor(Math.random() * colorSpectrum.length) + 1;
  let randomString = "";
  for (let i of Array(randoNum).keys()) {
    let randomCharAt = Math.floor((Math.random() * 25) + 97);
    randomString += String.fromCharCode(randomCharAt);
  }
  return randomString;
}

function massProduceStrings(howMany) {
  return [...Array(howMany).keys()].map(x => generateString());
}

// console.log(massProduceStrings(10))


const colorAccordingToLength = (str) => {
  let clr = colorSpectrum[str.length - 1]
  let bckgrnd = chroma(clr).brighten();
  bckgrnd = bckgrnd._rgb.map(val => {
    if (typeof val === "number") {
      return Math.floor(val);
    }
  })
  // console.log("bckr", bckgrnd);
  let stringified = rgbToHex(bckgrnd[0], bckgrnd[1], bckgrnd[2]);
  // console.log("strngy", stringified)
  return [str, clr, stringified]
}


const addColorsToStrs = (randomStrings) => {
  return randomStrings.map(str => colorAccordingToLength(str));
}

let colors = addColorsToStrs(massProduceStrings(130));

const colorsDiv = document.getElementById("colors");


const randomBetweenRanges = (low, high) => {
  return Math.floor(Math.random() * (high - low) + low)
}

const callRandomAsString = (...args) => {
  let randomize = [...args];
  return shuffle(randomize);
  // console.log(randomize);
  // return func()
}

const convertToHtml = (contentAndColor) => {
  let wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("wrapperdiv")
  let newP = document.createElement("p");
  wrapperDiv.appendChild(newP);
  let lengthProp = contentAndColor[0].length;
  newP.textContent = contentAndColor[0];
  wrapperDiv.style = `margin : ${lengthProp * 1.3 + 2}px; padding : ${lengthProp * 2 - 3} px`;
  let shuffled = callRandomAsString(["black", contentAndColor[1], contentAndColor[1]]);
  newP.style = `padding : ${lengthProp * 1.3}px; margin : ${lengthProp * .8}px; color : ${contentAndColor[1]};   
  background: linear-gradient(${randomBetweenRanges(40, 60)}deg, ${shuffled});
  `;
  // newP.style = `color : ${contentAndColor[1]}`
  // newP.style = `background-color : ${contentAndColor[2]}`;
  // newP.style = `fontSize : ${contentAndColor[0].length}`
  // let fontsize = (contentAndColor[0].length * 1.2) + 5;
  // newP.style.fontSize = `${fontsize}px`;
  // wrapperDiv.style.
  newP.classList.add("randomstring")
  return wrapperDiv;
}

// let colorsEl = document.getElementsByClassName("colors");


const appendToDom = (htmlListToAppend) => {
  for (let raw of htmlListToAppend) {

    let converted = convertToHtml(raw);
    colorsDiv.appendChild(converted)
  }
}

appendToDom(colors)
