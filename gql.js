const mutliply = (num1, num2) => num1 * num2;
const validJSON = `
{
  "name": "Iran",
  "points": 2
}
`;
const gql = `
{
  name
  points
  cities {
    name
    points
    parishes {
      name
      points
    }
  }
  states {
    name
    points
    cities {
      name
      points
      country {
        name
        points
        states {
            name
            points
        }
      }
    }
  }
}
`;

const parsedGql = (inpGql) => {
  const arrLine = inpGql.split("\n");
  let concatArr = "";
  for (let i = 0; i < arrLine.length; i++) {
      if (arrLine[i]) {
        if (arrLine[i].trim() === "{") {
          concatArr = concatArr + arrLine[i].trim();
        } else if(arrLine[i].trim().endsWith("{")) {
           concatArr = concatArr + `"${arrLine[i].slice(0, arrLine[i].lastIndexOf("{")).trim()}": {`
        } else if(arrLine[i].trim() === "}") {
            if (arrLine[i +1] && arrLine[i + 1].trim() !== "}") {
                concatArr = concatArr + arrLine[i].trim() + "," 
            } else {
                concatArr = concatArr + arrLine[i].trim() 
            }
        }
          else {
              if (arrLine[i + 1].trim() === "}") {
                  concatArr = concatArr + `"${arrLine[i].trim()}": null`;
              } else {
                concatArr = concatArr + `"${arrLine[i].trim()}": null,`;
              }
        }
      }
  }
  return concatArr;
};

const proccessOpenBraces = (line) =>  `"${line.slice(0, line.lastIndexOf("{")).trim()}": {`

const proccessCloseBraces = (line, nextLine) =>  nextLine === "}" ?  line + "," : line

const parsedFpGql = (inpGql) => {
  return inpGql.split("\n").map((line, index, arr) => {
      line = line.trim()
return line && line.endsWith("{") ? proccessOpenBraces(line) : line.endsWith("}") ? proccessCloseBraces(line, arr[index +1]) : null
  });
};

console.log(parsedFpGql(gql))

// const convertedStr = parsedGql(gql);
// 
// console.log("convertedStr => ", convertedStr)
// console.log("Parsed convertedStr => ", JSON.parse(convertedStr));

// const myJSON = JSON.parse(convertedStr);
// console.log(JSON.parse(validJSON).name);
