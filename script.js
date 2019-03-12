class Animals {
    constructor(i, ...expressions) {
        this.barId = i;
        this.expressions = expressions;
    }
    getNotification(){
        var bar = document.createElement('div');
        bar.className = 'snackBar' + (this.barId+1);
        bar.innerHTML = this.expressions[this.barId];
        document.body.appendChild(bar);
        bar.onclick = event => event.target.remove();
        setTimeout(()=>{
          bar.remove();
        }, 3000);
    };
}
var params = {
    "fox": [
        'Лиса хитрый зверь',
        'Он ничем не отличался от ста тысяч других лисиц',
        'Рыжий лис'
    ],
    "wolf": [
        'Волк вожак стаи',
        'Волк собирает грибы в лесу',
        'Волк меняет шкуру, но не нрав'
    ],
    "boar": [
        'Кабан дикий свин',
        'Кабан свинья, которая не поддалась на уговоры',
        'Кабан санитар леса'
    ]
}
var buttons = [...document.getElementsByClassName('button_showMessage')];
buttons.forEach((elem, i) => {
    elem.onclick = () => {
        var select = document.getElementById("mySelect").value;
        var bar = new Animals(i, ...params[select])
        bar.getNotification();
    }
})
