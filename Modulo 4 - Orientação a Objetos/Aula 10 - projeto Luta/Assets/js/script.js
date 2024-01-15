let log = new Log(document.querySelector('.Log'));

let ChampionChoose = Math.random().toFixed(1);
let MonsterChoose = Math.random().toFixed(1);

let Champion
let Monster

if (ChampionChoose > 0.5) {
    Champion = new Knight('Fulano');
} else {
    Champion = new Sorcerer ('Beltrano');
}

if (MonsterChoose > 0.5) {
    Monster = new LittleMonster();
} else {
    Monster = new BigMonster();
}

const stage = new Stage(
    Champion,
    Monster,
    document.querySelector('#Champion'),
    document.querySelector('#Monster'),
    log
);

stage.start();