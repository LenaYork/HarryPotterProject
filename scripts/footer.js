//здесь будет js код
let out = document.querySelector('.out');

function t1() {

    let name1 = prompt(`Загадай желание!`);
    alert(`Твоё желание ${name1} исполнено!`);

}

document.querySelector('.t1').onclick = t1;

function cap() {
    let cap = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];
    let cap1 = '';
    for (let i = 0; i < cap.length; i++) {
        cap1 += 'Congratulations' + '!' + 'Your school' + ' ' + cap[i];
        out.innerHTML = cap1;
    }
}
document.querySelector('.cap').onclick = cap;

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}