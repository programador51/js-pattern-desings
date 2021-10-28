/** 
 * This example it's just to show that composition can be almost better
 * than use inheritence (or OOP) at least on Javascript.
 * 
 * The main focus of this, is that the actions are pure functions that can be use to 
 * create more complex code just re-using that small pieces of code
 * 
*/

function flyer({name}){
    return{
        fly:()=>console.log(`${name} flyied!`)
    }
}

function swimmer({name}){
    return{
        swim:()=>console.log(`${name} swam`)
    }
}

function swimmingMonsterCreator(name){
    const monster = { name:name };

    return{
        ...monster,
        ...swimmer(monster)
    }
}

function flyingSwimmingMonsterCreator(name){
    const monster = { name:name };

    return{
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }
}

const halloweenMonster = flyingSwimmingMonsterCreator('Monter man')
halloweenMonster.swim();
halloweenMonster.fly();