























const mission1 = (arry) => {
    return arry.filter(x => x % 2 == 0);
}
const myArry = [1, 2, 3, 4, 5, 6]
// console.log(Mission1(myArry));


const Mission2 = (str) => {
    const tolist = str.split(" ");
    return tolist.filter(x => x.length >= 4).length;
}
const myStr = "123 1234 12 1234 12 1234"
// console.log(Mission2(myStr))

const Mission3 = (matrix) => {
    return matrix.flat();
}
const myMatrix = [[1, 2], [3, 4]];
// console.log(Mission3(myMatrix))


const Mission5 = (keys, values) => {
    const myObg = {};
    for(let i = 0; i < keys.length; i++){
        myObg[keys[i]] = values[i];
    }
    return myObg;
}
const keys = ["1", "2", "3"];
const values = ["a", "b", "c"];
// console.log(Mission5(keys, values));





    
module.exports = {

mission1,

Mission2,

Mission3,

Mission5
}