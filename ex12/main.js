let devForm = document.getElementById('devForm');
let addExpBtn = document.getElementById('addExp');
let numberExps = 0;
let developersInfo = [];

function removeExperience(id){
    let expId = 'exp-'+id;
    let expToRemove = document.getElementById(expId);
    devForm.removeChild(expToRemove);
}

addExpBtn.addEventListener('click', function (ev) {
        numberExps++;
        let numberExpsToStr = new Number(numberExps).toString();
        let submitBtn = document.getElementById('submitInfo');
        devForm.removeChild(submitBtn);
        // Fazer innerHTML += corrompe o listener (Wtf?)
        let adjacentHTML ='<div id=exp-'+numberExpsToStr + '><label for="techName-'+ numberExpsToStr + '">Nome da tecnologia: </label>'
                        + '<input type="text" name="techName-' + numberExpsToStr 
                        + '" id = "techName-' + numberExpsToStr + '">'
                        + '<br><span>Tempo de experiência: </span><label for="timeExp1-' + numberExpsToStr + '">0-2 Anos </label>'
                        + '<input type="radio" name="timeExp-' + numberExpsToStr 
                        + '" id = "timeExp1-' + numberExpsToStr + '" value="0-2 Anos" checked>'
                        + '<label for="timeExp2-' + numberExpsToStr + '">3-4 Anos </label>'
                        + '<input type="radio" name="timeExp-' + numberExpsToStr 
                        + '" id = "timeExp2-' + numberExpsToStr + '"value="3-4 Anos">'
                        + '<label for="timeExp3-' + numberExpsToStr + '">5+ Anos </label>'
                        + '<input type="radio" name="timeExp-' + numberExpsToStr 
                        + '" id = "timeExp3-' + numberExpsToStr + '"value="5+ Anos">'
                        + '<br><br><button id="removeExp-' + numberExpsToStr + '" type= "button" >Remover Experiência</button>'
                        + '</div>';
        devForm.insertAdjacentHTML('beforeend',adjacentHTML);
        let removeExpId = 'removeExp-' + numberExpsToStr;
        let removeExpBtn = document.getElementById(removeExpId);
        removeExpBtn.addEventListener('click',function(ev){
            let expId = 'exp-'+numberExpsToStr;
            let expToRemove = document.getElementById(expId);
            devForm.removeChild(expToRemove);
        });
        devForm.appendChild(submitBtn);
});

devForm.addEventListener('submit',function(ev){
    ev.preventDefault();
    let experiencesElem = document.querySelectorAll('div[id^="exp-"]');
    let devInfo = {};
    let userName = devForm.children.name.value;
    let experiences = [];
    experiencesElem.forEach(function(elem){
        let experience = {}
        let expId = elem.id.split('exp-')[1];
        const techName = elem.children['techName-'+expId].value;
        const timeExp = elem.querySelector('input[name^="timeExp-"]:checked').value;
        experience["id"]=expId;
        experience["techName"]=techName;
        experience["timeExp"]=timeExp;
        experiences.push(experience);
        elem.parentNode.removeChild(elem);
    });
    devInfo.userName = userName;
    devInfo.experiences = experiences;
    developersInfo.push(devInfo);
    devForm.reset();
    console.log(developersInfo);
})

// Como melhorar este código: Criar funções createInput e createLabel , onde o for do label pode ser referenciado por htmlFor
// Utilizar classes em vez de seletores css mais complexos
