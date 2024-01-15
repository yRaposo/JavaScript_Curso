const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'LittleMonster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'BigMonster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1EL: null,
    fighter2EL: null,

    start(fighter1, fighter2, fighter1EL, fighter2EL) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;

        this.fighter1EL.querySelector('.attackButton').addEventListener('click', () => this.doAtack(this.fighter1, this.fighter2));

        this.fighter2EL.querySelector('.attackButton').addEventListener('click', () => this.doAtack(this.fighter2, this.fighter1));

        this.update();
    },

    update() {
        //F1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life}`;
        let f1PCT = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1EL.querySelector('.bar').style.height = `${f1PCT}%`;

        //F2
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life}`;
        let f2PCT = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2EL.querySelector('.bar').style.height = `${f2PCT}%`;
    },

    doAtack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Chutando cachoro morto');
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefence = attacked.defense * defenseFactor;

        if (actualAttack > actualDefence) {
            attacked.life -= actualAttack
            attacked.life = attacked.life < 0 ? 0 : attacked.life;

            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}, que ficou com ${attacked.life} de vida`);
        } else {
            log.addMessage(`${attacked.name} conseguiu defender...`);
        }

        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEL = document.querySelector('.Log');
        logEL.innerHTML = '';

        for (let i in this.list) {
            logEL.innerHTML += `<li> ${this.list[i]}</li>`;
        }
    }
}