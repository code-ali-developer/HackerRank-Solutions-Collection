
 
 function breakrecod(sec) {
let max=sec[0]
let min=sec[0]
let maxcount=0
let mincount=0
for (let i = 0; i < sec.length; i++) {
    const element = array[i];
    if (max>sec[i]) {
        maxcount++
    }
    if (min<sec[i]) {
        mincount++
    }
    
}
