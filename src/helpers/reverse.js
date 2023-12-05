function reverse(array) {
    let reversed=[];
    let count=0;
    for (let index = array.length; index >= 0; index--) {
        reversed[count]=array[index];
        count++;
    }
    reversed.shift();
    return reversed;
}
export default reverse;