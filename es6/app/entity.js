class Entity {
  constructor(name, height, land){
    this.name = name;
    this.height = height;
    this.land = land;
  }

  greet(){
    console.log(`hi! I'm ${this.name} from ${this.land}!!!!!!`);
  }
}

export default Entity
