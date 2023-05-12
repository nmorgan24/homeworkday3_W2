////////////////////////////////////////////////////////////////////////
/////////////////////////// MadLibs //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const words = {
    number: '',
    adjective: '',
    pluralNoun: '',
    adverb: '',
    anotherAdjective: ''
  };
  
  function startMadlib() {
    words.number = prompt('Give me a number:');
    words.adjective = prompt('Give me an adjective:');
    words.pluralNoun = prompt('Give me a plural noun:');
    words.adverb = prompt('Give me an adverb:');
    words.anotherAdjective = prompt('Give me another adjective:');
  }
  
  startMadlib();
  console.log(words);
  
  const story = `Once upon a time a group of ${words.number} General Assembly graduates 
  got together and made a startup called ${words.adjective} Technologies. 
  Their goal was to create smart ${words.pluralNoun}. 
  They approached the challenge ${words.adverb}, 
  which ultimately led them to ${words.anotherAdjective} fame.`;
  
  alert(story);
  