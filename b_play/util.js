let rawA = `
.navy { color: #001F3F; }
.blue { color: #0074D9; }
.aqua { color: #7FDBFF; }
.teal { color: #39CCCC; }
.olive { color: #3D9970; }
.green { color: #2ECC40; }
.lime { color: #01FF70; }
.yellow { color: #FFDC00; }
.orange { color: #FF851B; }
.red { color: #FF4136; }
.fuchsia { color: #F012BE; }
.purple { color: #B10DC9; }
.maroon { color: #85144B; }
.white { color: #FFFFFF; }
.silver { color: #DDDDDD; }
.gray { color: #AAAAAA; }
.black { color: #111111; }
`;

let colorsA = rawA.split("\n").map(line => line.split(": ")).map(chunked => chunked[1]).filter(truthy => truthy).map(val => val.split(";")).map(z => z[0])
console.log(colorsA);