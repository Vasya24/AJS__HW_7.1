class Character {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.attact;
      this.defence;
        if (type === 'Bowman' || type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman' || type === 'Zombie') {
       this.attack = 40;
       this.defence = 10;
    } else if (type === 'Magician' || type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
    }
  }

  export { Character }