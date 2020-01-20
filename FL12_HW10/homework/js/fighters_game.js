/* Your code goes here */
const Fighter = props => {
    const name = props.name;
    const damage = props.damage;
    const agility = props.agility;
    const totalHP = props.hp;
    let wins = 0;
    let losses = 0;

    let currentHP = totalHP;
    const HUNDRED = 100;
    const HUNDREDONE = 101;

    const getName = () => {
        return name;
    }
    const getDamage = () => {
        return damage;
    }
    const getAgility = () => {
        return agility;
    }
    const getHealth = () => {
        return currentHP;
    }
    const attack = instance => {
        const attackSuccesChance = HUNDRED - instance.getAgility();
        const randChance = Math.floor(Math.random() * HUNDREDONE);
        let info = '';
        if (attackSuccesChance > randChance) {
            instance.dealDamage(getDamage());
            info = `${getName()} make ${getDamage()} damage to ${instance.getName()}`;
        } else {
            info = `${getName()} attack missed`;
        }
        console.log(info)
    }
    const logCombatHistory = () => {
        console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
    }
    const heal = amount => {
        currentHP += amount;
        if (currentHP > totalHP) {
            currentHP = totalHP;
        }
    }
    const dealDamage = dmg => {
        currentHP -= dmg;
        if (currentHP < 0) {
            currentHP = 0;
        }
    }
    const addWin = () => {
        wins++;
    }
    const addLoss = () => {
        losses++;
    }
    return { getName, getHealth, getDamage, getAgility, attack, logCombatHistory, heal, dealDamage, addLoss, addWin }
}
const battle = (fighter1, fighter2) => {
    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() > 0) {
                fighter2.attack(fighter1);
                if (fighter1.getHealth() === 0) {
                    fighter1.addLoss();
                    fighter2.addWin();
                }
            } else {
                fighter2.addLoss();
                fighter1.addWin();
            }
        }
    } else {
        const loser = fighter1.getHealth() === 0 ? fighter1.getName() : fighter2.getName();
        console.log(`${loser} is dead and can't fight.`);
    }
}
