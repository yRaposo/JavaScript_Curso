let Champion;
let Monster;

let choseChampion = (Math.random()).toFixed(1);
let choseMonster = (Math.random()).toFixed(1);

if (choseChampion > 0.5) {
    Champion = createKnight('Knight');
} else {
    Champion = createSorcerer('Sorcerer');
}

if (choseMonster > 0.5) {
    Monster = createLittleMonster();
} else {
    Monster = createBigMonster();
};

stage.start(
    Champion,
    Monster,
    document.querySelector('#Champion'),
    document.querySelector('#Monster')
)

