function newCalcImcPromise(weight, height){
    return new Promise((resolve,reject) => {
        console.log('Promise was initiated.');
        if(typeof weight != 'number' || typeof height != 'number'){
            reject('Non numeric values passed! ');
        } else {
            setTimeout(()=>{
                let imc = weight / (height ** 2);
                console.log('Entering timeout function.');
                resolve(imc);
            },2*1000);
        }
    });
}

function calcImc(weight,height){
    let calcImcPromise = newCalcImcPromise(weight,height);
    calcImcPromise.then((result)=> {
        console.log(`Promise was resolved. The result was ${result}`);
        let situation = '';
        if(result < 18.5){
            situation = 'Thin';
        } else if(result < 25){
            situation = 'Normal';
        } else if(result < 30){
            situation = 'Overweight';
        } else if(result < 40){
            situation = 'Obesity';
        } else {
            situation = 'Severe obesity';
        }
        console.log(`Your situation is : ${situation}`);
    }).catch((reason) => {
        console.log(`Promise was rejected. Reason: ${reason}`);
    });
    console.log('Last log of calcImc function.');
}

calcImc(75,1.70);
calcImc(75,'');