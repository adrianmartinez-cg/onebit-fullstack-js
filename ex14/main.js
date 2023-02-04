const media = (...nums) => nums.reduce((accum,num)=> accum + num,0) / nums.length;

const mediaPond = (...nums) => {
    let accumWeight = 0;
    return nums.reduce((accum,{number,weight}) => {
        accumWeight += weight;
        return accum + number * weight;
    },0) / accumWeight;
};

const mediana = (...nums) => {
    let N = nums.length;
    let mid = parseInt(Math.floor(N/2));
    if(N % 2 == 0){
        let secElem = nums[mid];
        let firstElem = nums[mid - 1];
        return media(firstElem,secElem);
    } else {
        return nums[mid];
    }
};

const moda = (...nums) => {
    let ocurrences = {'maxOccur': 0, 'number': 0};
    nums.forEach( num => {
        let val = ocurrences[num] ?? 0;
        ocurrences[num] = val+1;
        if(ocurrences[num] > ocurrences['maxOccur']){
            ocurrences['maxOccur'] = ocurrences[num];
            ocurrences['number'] = num;
        }
    });
    return ocurrences['number']; 
};

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n=> n === num).length
    ]);
    quantities.sort((a,b)=> b[1]-a[1]);
    return quantities[0][0];
}
