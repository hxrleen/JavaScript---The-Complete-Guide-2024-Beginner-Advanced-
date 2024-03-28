let attackValue=10;
let chosenMaxLife =100; 
let currentPlayerHealth =chosenMaxLife;
let currentMonsterHealth =chosenMaxLife;
let monster_attack_value=12;

let strongAttackValue=16;
let healValue=5;

let hasBonusLife=true;


adjustHealthBars(chosenMaxLife);

function endRound()
{
    const initialPlayerHealth=currentPlayerHealth;
    const playerDamage = dealPlayerDamage(monster_attack_value);
    currentPlayerHealth-=playerDamage;

    if(currentPlayerHealth<=0 && hasBonusLife)
    {
        hasBonusLife=false;
        removeBonusLife();
        currentPlayerHealth=initialPlayerHealth;
        alert("your bonus life has been activated");
        setPlayerHealth(initialPlayerHealth);
    }

    if(currentMonsterHealth<=0 && currentPlayerHealth>0)
    {
        alert("You won");
    }
    else if(currentPlayerHealth<=0 && currentMonsterHealth>0)
    {
        alert('You Lost');
    }
    else if(currentMonsterHealth<=0 && currentPlayerHealth<=0)
    {
        alert('Draw match');
    }

    if(currentMonsterHealth<=0 && currentPlayerHealth>0 || 
        currentMonsterHealth>0 && currentPlayerHealth<=0 ||
        currentMonsterHealth<=0 && currentPlayerHealth<=0 )
        {
            resetGame(chosenMaxLife);
        }

}

//Attack 
function attackHandler()
{
    const mode='Attack';
    attack(mode);
}



function strongAttackHandler(attckValue)
{
    const mode='strongAttack';
    attack(mode);
}


function attack(mode)
{
    let maxDamage;
    if(mode=='Attack')
    {
        maxDamage=attackValue;
    }
    else if(mode=='strongAttack'){
        maxDamage=strongAttackValue;
    }
    const damage = dealMonsterDamage(maxDamage);

    currentMonsterHealth-=damage;
    endRound();
}

//Healing 

function healHandler()
{
    let HEAL_VALUE;
    if(currentPlayerHealth >= chosenMaxLife -healValue)
    {
        alert("You can't heal more than this");
        HEAL_VALUE=chosenMaxLife-currentPlayerHealth;
    }
   else{
    HEAL_VALUE= healValue;
   }
    
   increasePlayerHealth(healValue);
   currentPlayerHealth+=healValue;
   endRound();
}



attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healHandler);