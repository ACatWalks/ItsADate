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
    let answer1;
    let answer2;
    let answer3;
    let answer4;
    let answer5;
    let answer6;
    let answer7;
    for (i=0; i<otherUserProfiles.length; i++){
      if(this._preferredSex == otherUser._sex && this._preferredRace == otherUser._race){
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
      if(answer4 == potentialMatches[i].answer5){
        count+=;
      }
      if(answer6 contains potentialMatches[i].answer7){
        count +=;
      }
      if(count < 4){
        potentialMatches.pop(potentialMatches[i])
      }
      count = 0;
    }
    return potentialMatches;
  }
}
