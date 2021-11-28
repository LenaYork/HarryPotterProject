//здесь будет js код
let out = document.querySelector('.out');

function t1() {
    let name = '';
    let name1 = prompt(`Загадай желание!`);
    //alert(`Твоё желание ${name1} исполнено!`);
    name += 'Ваше желание' + ' ' + `${name1} ` + '' + 'исполнено!';
    if (name1 === '') {
        out.innerHTML = 'Пожалуйста, напишите Ваше желание!';
    } else if (name1 === null) {
        out.innerHTML = 'Желаний нет! Вы счастливый человек!';
    } else {
        out.innerHTML = name;
    }
}
document.querySelector('.t1').onclick = t1;


function GetValue() {
    let caps = ['Gryffindor!', 'Slytherin!', 'Ravenclaw!', 'Hufflepuff!'];
    let random = caps[Math.floor(Math.random() * caps.length)];
    document.querySelector('.out_cap').innerHTML = random;
}
document.querySelector('.cap').onclick = GetValue;


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}