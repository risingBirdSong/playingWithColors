
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


const extractColors = (rawColorText) => {
  return rawColorText.split("\n").map(line => line.split("\t")).map(x => x[1]);

}

//hardcoded globabl

let colorsA = [
  '#001F3F',
  '#0074D9',
  '#7FDBFF',
  '#39CCCC',
  '#3D9970',
  '#2ECC40',
  '#01FF70',
  '#FFDC00',
  '#FF851B',
  '#FF4136',
  '#F012BE',
  '#B10DC9',
  '#85144B',
  '#FFFFFF',
  '#DDDDDD',
  '#AAAAAA',
  '#111111']

let colorSpectrum = extractColors(reds);

const globalOptions = {
  howMany: 250,
  globalColors: colorSpectrum
}

const container = document.getElementById("container");
// let myP = document.createElement("p");
// myP.textContent = "hello";
// container.appendChild(myP);

function randomChoseItemFromArr(arr) {
  return arr[Math.floor(Math.random() * arr.length - 1)];
}

function randomInRange(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

//options {} - low : number, high : number

let myOptions = { low: 10, high: 100, scaledDownRange: 25, scaledDownOffset: 20 }

function parallelogramMaker(options) {
  let newShape = document.createElement('h1');
  let randomColor = randomChoseItemFromArr(globalOptions.globalColors);
  let anotherRandomColor = randomChoseItemFromArr(globalOptions.globalColors);
  newShape.style.background = `radial-gradient(${randomColor}, ${anotherRandomColor})`;
  let randomNum = randomInRange(options.low, options.high);
  newShape.style.width = `${randomNum}px`;
  newShape.style.height = `${randomNum}px`;
  let scaledDown = Math.round((randomNum / options.high) * options.scaledDownRange) + options.scaledDownOffset;
  // newShape.style.border = `${randomInRange(2, 5)}px double ${anotherRandomColor} `;
  // newShape.style.borderRadius = `${ borderRadius } px`;
  newShape.classList.add("parallelogram");
  return newShape;
}

let parallelograms = [...Array(globalOptions.howMany).fill(".")].map(x => parallelogramMaker(myOptions));

function appender(arrOfItems) {
  console.log(arrOfItems);
  for (let item of arrOfItems) {
    container.appendChild(item);
  }
}

appender(parallelograms);
// console.log(test);