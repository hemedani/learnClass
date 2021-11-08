const obj = { address: { codePosti: 222 } };

let shahr = obj?.address?.country?.shahr;

// if (obj && obj.address && obj.address.country && obj.address.country.shahr) shahr = obj.address.country.shahr;

console.log(shahr);

const tavan = (adad) => adad * adad;

console.log(tavan(5));
console.log([3, 5].map(tavan));
