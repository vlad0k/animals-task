class Animals {
    constructor(name, ...expressions) {
        this.name = name;
        this.expressions = expressions;
    }
    getNotification(i){
        console.log(this.expressions);
        var bar = document.createElement('div');
        bar.id = 'snackBar' + (i+1);
        bar.innerHTML = (this.expressions[i]);
        document.body.appendChild(bar);
        bar.onclick = event => event.target.remove();
        setTimeout(()=>{
                bar.remove(bar);
        }, 3000);
    };
}
var params = {
    "fox": [
        'Лиса',
        'Лиса хитрый зверь',
        'Он ничем не отличался от ста тысяч других лисиц',
        'Рыжий лис'
    ],
    "wolf": [
        'Волк',
        'Волк вожак стаи',
        'Волк собирает грибы в лесу',
        'Волк меняет шкуру, но не нрав'
    ],
    "boar": [
        'Kaбан',
        'Кабан дикий свин',
        'Кабан свинья, которая не поддалась на уговоры',
        'Кабан санитар леса'
    ]
}
var buttons = [...document.getElementsByClassName('button_showMessage')];
buttons.forEach((elem, i) => {
    elem.onclick = () => {
        var select = document.getElementById("mySelect").value;
        var bar = new Animals(...params[select])
        bar.getNotification(i);
    }
})