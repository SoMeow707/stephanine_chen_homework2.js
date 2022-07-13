//Given the array, implement a function for generating a new array which doubles the
//quantity and price in each object
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function doubleQuantityAndPrice(itemsObject) {
  return itemsObject.map((item) => {
    return {
      quantity: item.quantity * 2,
      price: item.price * 2,
    };
  });
}
console.log("Function for double \n", doubleQuantityAndPrice(itemsObject));

//Given the array, implement a function for generating a new array which contains item
//quantity > 2 and price > 300 only.
function filterItems(itemsObject) {
  return itemsObject.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
}
console.log("Function for Filter \n", filterItems(itemsObject));

//Given the array, implement a function to calculate the total value of the items.
function totalValue(itemsObject) {
  return itemsObject.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
}
console.log("Function for total \n", totalValue(itemsObject));

//Given the string, implement a function to remove all the non-alphabet characters and
// extra space in the string and convert the string to all lowercase.
function formatText(str) {
  ans = "";
  for (let i = 0; i < str.length; i++)
    if (str[i].match(/[a-z,' ']/i)) ans += str[i];
  ans = ans.replace(/\s{2,}/g, " ").trim();
  ans = ans.toLowerCase();
  return ans;
}

var ans = formatText(
  "  Perhaps   The Easiest-to-understand The Sum Of All The          Elements In Case An    Array"
);
console.log(ans);

//Implement a function to merge two arrays of objects on uuid, but first has uuid and
// name, second has uuid and role. With the not existing property, fill with null. Sort
// according to uuid after merge.
function merge(first, second) {
  let third = [];
  for (let i = 0; i < first.length; i++) {
    tmp = {
      uuid: first[i].uuid,
      name: first[i].name,
      role: null,
    };
    third.push(tmp);
  }
  for (let i = 0; i < second.length; i++) {
    tmp = {
      uuid: second[i].uuid,
      name: null,
      role: second[i].role,
    };
    third.push(tmp);
  }
  third.sort((a, b) => {
    return a.uuid - b.uuid;
  });
  return third;
}

let first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
let second = [{ uuid: 6, role: "pm" }];

let result = merge(first, second);
console.log(result);
