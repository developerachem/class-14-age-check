const ageForm = document.querySelector('#ageForm');
const ageCalculetorPage = document.querySelector('.age-calculetor');
const rerultPage = document.querySelector('.rerult');
const resetBtn = document.querySelector('#resetBtn');
const rerult = document.querySelector('#rerult');
const relode = document.querySelector('.relode');




const name = document.querySelector('input[type="text"]');
const nameVallMassage = document.querySelector('#nameVallMassage');

name.addEventListener('blur', function () {
    if (name.value === "") {
        nameVallMassage.innerHTML = '*Name Field Required ';
        name.style.border = "1px solid red";
    }
})
name.addEventListener('keyup', function () {
    if (name.value === "") {
        nameVallMassage.innerHTML = '*Name Field Required ';
        name.style.border = "1px solid red";
    } else {
        nameVallMassage.innerHTML = '';
        name.style.border = "1px solid green";
    }
})

const date = document.querySelector('input[type="date"]');
const ageValMassage = document.querySelector('#ageValMassage');
date.addEventListener('blur', function () {
    if (date.value === "") {
        ageValMassage.innerHTML = '*Name Field Required ';
        date.style.border = "1px solid red";
    }
})
date.addEventListener('keyup', function () {
    if (date.value === "") {
        ageValMassage.innerHTML = '*Date Field Required ';
        date.style.border = "1px solid red";
    } else {
        ageValMassage.innerHTML = ' ';
        date.style.border = "1px solid green";
    }
})





ageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]');
    const age = this.querySelector('input[type="date"]').value;
    const gender = this.querySelector('input[type="radio"]:checked');




    if (name.value === "" && age === "" && gender === null) {
        nameVallMassage.innerHTML = '*Name Field Required '
        name.style.border = "1px solid red";

        ageValMassage.innerHTML = '*Date Field Required ';
        date.style.border = "1px solid red";


    } else if (name.value === "") {
        nameVallMassage.innerHTML = '*Name Field Required '
        name.style.border = "1px solid red";
    } else if (age === "") {

        ageValMassage.innerHTML = '*Date Field Required ';
        date.style.border = "1px solid red";
    } else {

        ageCalculetorPage.classList.add('d-none');
        relode.classList.remove('d-none');

        setTimeout(() => {



            relode.classList.add('d-none');
            rerultPage.classList.remove('d-none')
        }, 3000)
        

        let mainMonth = manthCal();
        let birthYear = new Date(age);
        let currentDate = new Date();

        let totalAgeSec = Math.floor(Math.abs((currentDate.getTime() - birthYear.getTime()) / 1000));
        console.log(totalAgeSec);
        let totalMunite = Math.floor(totalAgeSec / 60);
        let totalHours = Math.floor(totalMunite / 60);
        let totalDay = Math.floor(totalHours / 24);

        let totalWeek = Math.floor(totalDay / 7);
        let totalMonth = Math.floor(totalDay / 30);
        let totalYear = Math.floor(totalMonth / 12);


        let month = totalMonth - ( totalYear * 12 );
        let day = totalDay - ( totalYear * 12 * 30 ) - ( month * 30 );





        rerult.innerHTML = `
            <span> Hello <b>${name.value}</b> . </span>
            <br>
            <span> Your Age <b>${zerro(totalYear)}</b> Years Old . </span>
            <br>
            <span> You Are <b>${gender.value}</b> . </span>
            <hr>
            <span>And Your Total Age is : <b>${zerro(totalYear)}</b> Year / <b>${zerro(month)}</b> Month / <b>${zerro(day)}</b> Day .</span> <br>
            <span>Total Month : <b>${totalMonth}</b> Month .</span> <br>
            <span>Total Week : <b>${totalWeek}</b> Week .</span> <br>
            <span>Total Day : <b>${totalDay}</b> Day .</span> <br>
            <span>Total Hours : <b>${totalHours}</b> Hours .</span> <br>
            <span>Total Munite : <b>${totalMunite}</b> Munite .</span> <br>
            <span>Total Secend : <b>${totalAgeSec}</b> Secend .</span> <br>
        `
    }

})
resetBtn.addEventListener('click', function () {

    rerultPage.classList.add('d-none')
    relode.classList.remove('d-none');

    setTimeout(() => {
        ageCalculetorPage.classList.remove('d-none');
        relode.classList.add('d-none');
    }, 2000)
})

