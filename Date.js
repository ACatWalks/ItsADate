class User{
  constructor(name, sex, race, preferredSex, preferredRace){
    this.name = name;
    this.sex = sex;
    this.race = race;
    this.preferredSex = preferredSex;
    this.preferredRace = preferredRace;
  }
  get name(){
    return this.name;
  }
  get sex(){
    return this.sex;
  }
  get race(){
    return this.race;
  }
  get preferredSex(){
    return this.preferredSex;
  }
  get preferredRace(){
    return this.preferredRace;
  }
  set name(){
    let userName = prompt('Name');
    if(typeof(userName)!== 'string'){
      alert('Error: Name must be a string');
    }
    else {
      this.name = userName;
    }
  }
  set sex(){
    let userSex = prompt('Sex');
    if(userSex == 'Male' || 'Female'){
      this.sex = userSex;
    }
    else {
      alert('Error: Please state whether you are male or female');
    }
  }
  set race(){
    let userRace = prompt('Race');
    if(typeof(userRace)!== 'string'){
      alert('Error: Race must be a string');
    }
    else{
      this.race = userRace;
    }
  }
  set preferredSex(){
    let userPreferredSex = prompt('Are you seeking a man or a woman?');
    if (userPreferredSex == 'Man' || 'Woman'){
      this.preferredSex = userPreferredSex;
    }
    else {
      alert('Please state whether you are seeking a man or a woman');
    }
  }
  set preferredRace(){
    let userPreferredRace = prompt('Do you prefer a specific race(s)? If no preference please leave blank');
    if (typeof(userPreferredRace) == 'string' || 'null'){
      this.preferredRace = userPreferredRace;
    }
    else {
      alert('If you have no preference please leave this field blank');
    }
  }
  findMatch(){
    let potentialMatches = [];
    let count = 0;
    const answer1;
    const answer2;
    const answer3;
    const answer4;
    const answer5;
    const answer6;
    const answer7;
    const answer8;
  }
}
