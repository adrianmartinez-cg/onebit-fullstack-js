async function calcImc (weight, height){ 
    console.log('Promise was initiated.');
    if(typeof weight != 'number' || typeof height != 'number'){
        return Promise.reject('Non numeric values passed! ');
    } else {
         return new Promise((resolve)=> {
             setTimeout(()=>{
                 let imc = weight / (height ** 2);
                 resolve(imc);
             },2*1000);
         });
    }
    
}

async function executeImc(weight,height){
    try{
        const imc = await calcImc(weight,height);
        console.log(`Promise was resolved. The result was ${imc}`);
        let situation = '';
        if(imc < 18.5) situation = 'Thin';
        else if(imc < 25) situation = 'Normal';
        else if(imc < 30) situation = 'Overweight';
        else if(imc < 40) situation = 'Obesity';
        else situation = 'Severe obesity';
        console.log(`Your situation is : ${situation}`);
    } catch(err){
        console.log(`Promise was rejected. Reason: ${err}`);
    }
    console.log('Last log of executeImc function.');
}

executeImc(75,1.70);
executeImc(75,'');