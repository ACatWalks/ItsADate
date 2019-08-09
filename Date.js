class User{
  constructor(name, sex, race, preferredSex, preferredRace){
    this._name = name;
    this._sex = sex;
    this._race = race;
    this._preferredSex = preferredSex;
    this._preferredRace = preferredRace;
  }
  get name(){
    return this._name;
  }
  get sex(){
    return this._sex;
  }
  get race(){
    return this._race;
  }
  get preferredSex(){
    return this._preferredSex;
  }
  get preferredRace(){
    return this._preferredRace;
  }
  set name(name){
    // let userName = prompt('Name');
    if(typeof(name)!== 'string'){
      alert('Error: Name must be a string');
    }
    else {
      this._name = name;
    }
  }
  set sex(sex){
    //let userSex = prompt('Sex');
    if(sex == 'Male' || 'Female'){
      this._sex = sex;
    }
    else {
      alert('Error: Please state whether you are male or female');
    }
  }
  set race(race){
    //let userRace = prompt('Race');
    if(typeof(race)!== 'string'){
      alert('Error: Race must be a string');
    }
    else{
      this._race = race;
    }
  }
  set preferredSex(preferredSex){
    //let userPreferredSex = prompt('Are you seeking a man or a woman?');
    if (preferredSex == 'Man' || 'Woman'){
      this._preferredSex = preferredSex;
    }
    else {
      alert('Please state whether you are seeking a man or a woman');
    }
  }
  set preferredRace(preferredRace){
    //let userPreferredRace = prompt('Do you prefer a specific race(s)? If no preference please leave blank');
    if (typeof(preferredRace) == 'string' || 'null'){
      this._preferredRace = preferredRace;
    }
    else {
      alert('If you have no preference please leave this field blank');
    }
  }
  findMatch(){
    let potentialMatches = [];
    let count = 0;
    let answer1 = document.getElementById('answer1').value;
    let answer2 = document.getElementById('answer2').value;
    let answer3 = document.getElementById('answer3').value;
    let answer4a = document.getElementById('answer4a').value;
    let answer4b = document.getElementById('answer4b').value;
    let answer4c = document.getElementById('answer4c').value;
    let answer4d = document.getElementById('answer4d').value;
    let answer4e = document.getElementById('answer4e').value;
    let answer4f = document.getElementById('answer4f').value;
    let answer5a = document.getElementById('answer5a').value;
    let answer5b = document.getElementById('answer5b').value;
    let answer5c = document.getElementById('answer5c').value;
    let answer5d = document.getElementById('answer5d').value;
    let answer5e = document.getElementById('answer5e').value;
    let answer5f = document.getElementById('answer5f').value;
    let answer6 = document.getElementById('answer6').value;
    let answer7 = document.getElementById('answer7').value;
    for (i=0; i<otherUserProfiles.length; i++){
      if(this._preferredSex == otherUser._sex && this._preferredRace == otherUser._race || this._preferredRace == 'null'){
        potentialMatches.push(otherUser);
      }
    }
    for (i=0; i<potentialMatches.length; i++){
      if(answer1 == potentialMatches[i].answer1){
        count +=;
      }
      if(answer2 == potentialMatches[i].answer2){
        count +=;
      }
      if(answer3 contains potentialMatches[i].answer3){
        count +=;
      }
      if(answer4a == potentialMatches[i].answer5a){
        count+=;
      }
      if(answer4b == potentialMatches[i].answer5b){
        count+=;
      }
      if(answer4c == potentialMatches[i].answer5c){
        count+=;
      }
      if(answer4d == potentialMatches[i].answer5d){
        count+=;
      }
      if(answer4e == potentialMatches[i].answer5e){
        count+=;
      }
      if(answer4f == potentialMatches[i].answer5f){
        count+=;
      }
      if(answer6 contains potentialMatches[i].answer7){
        count +=;
      }
      if(count < 7){
        potentialMatches.pop(potentialMatches[i])
      }
      count = 0;
    }
    return potentialMatches;
  }
}
