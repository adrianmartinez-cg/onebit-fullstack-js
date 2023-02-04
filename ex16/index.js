const dayjs = require("dayjs");

function showInfoBirthday(birthdayDate){
    const birthday = dayjs(birthdayDate);
    const today = dayjs();

    const ageInYears =today.diff(birthday,'year');
    const nextBirthday = birthday.add(ageInYears+1,'year');
    const daysToNextBday = nextBirthday.diff(today,'day')+1

    console.log(`Idade: ${ageInYears}`);
    console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`);
    console.log(`Dias até completar ${ageInYears+1} anos: ${daysToNextBday}`);
}

showInfoBirthday('1996-06-29');