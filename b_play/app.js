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


const globalOptions = {
  howMany: 200,
  globalColors: colorsA
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

let myOptions = { low: 20, high: 100, scaledDownRange: 25, scaledDownOffset: 20 }

function parallelogramMaker(options) {
  let randomHShape = Math.floor(Math.random() * 6 + 1)
  let newShape = document.createElement(`h${randomHShape}`);
  let randomColor = randomChoseItemFromArr(globalOptions.globalColors);
  newShape.style.backgroundColor = randomColor;
  let randomNum = randomInRange(options.low, options.high);
  newShape.style.width = `${randomNum}px`;
  newShape.style.height = `${randomNum}px`;
  let scaledDown = Math.round((randomNum / options.high) * options.scaledDownRange) + options.scaledDownOffset;
  newShape.style.transform = `rotate(${scaledDown}deg)`;
  let anotherRandomColor = randomChoseItemFromArr(globalOptions.globalColors);
  let borderRadius = randomInRange(10, 20);
  newShape.style.border = `${randomInRange(1, 4)}px solid ${anotherRandomColor}`;
  // newShape.style.borderRadius = `${borderRadius}px`;
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