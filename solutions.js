////////////////////////////////////////////////////////////////////////
////////////////// SET ALARM //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function setAlarm(employed, vacationing) {
  if (employed && !vacationing) {
    return true;
  } else {
    return false;
  }
}


console.log(setAlarm(true, false));  
console.log(setAlarm(false, false));  
console.log(setAlarm(true, true));  
console.log(setAlarm(false, true));  



////////////////////////////////////////////////////////////////////////
//////////////////Count Odd Numbers //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


function oddNumberCount(number) {
  let count = 0;

  for (let i = 1; i < number; i += 2) {
    count++;
  }

  return count;
}


console.log(oddNumberCount(7));    
console.log(oddNumberCount(16));   


////////////////////////////////////////////////////////////////////////
////////////////// Disemvoweling Trolls //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


function trollsBeGone(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let result = '';

  for (let i = 0; i < sentence.length; i++) {
    if (!vowels.includes(sentence[i])) {
      result += sentence[i];
    }
  }

  return result;
}


console.log(trollsBeGone("This website is for losers LOL"));  


////////////////////////////////////////////////////////////////////////
////////////////// Bank Account Summary //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


const bankInfo = {
  savings: 600,
  checking: 800,
  moneyMarket: 200,
  creditCard: -2000
};

function bankAccountSummary(bankInfo) {
  let total = 0;
  for (let account in bankInfo) {
    total += bankInfo[account];
  }
  return total;
}

const bankTotal = bankAccountSummary(bankInfo);

function inTheRed(total) {
  return total < 0;
}

console.log(bankTotal); 
console.log(inTheRed(bankTotal));  












