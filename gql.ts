const mutliply = (num1, num2) => num1 * num2;
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

/**
 * Please remove log after debug
 * @author syd
 * Please remove log after debug
 */
console.group();
console.log();
console.log("gql ================== gql");
console.log(" ==================");
console.log(gql);
console.log("END ------------------ END");
console.log();
console.groupEnd();

const parsedGql = (gql: string) => {
    gql.
}

/**
 * Please remove log after debug
 * @author syd
 * Please remove log after debug
 */
console.group();
console.log();
console.log("parsedGql ================== parsedGql");
console.log(" ==================");
console.log(parsedGql);
console.log("END ------------------ END");
console.log();
console.groupEnd();
