class Battle {
  constructor(config) {
    this.element = null;
    this.combatants = {
      player1: new Combatant(
        {
          ...Pizzas.s001,
          hp: 50,
          team: "player",
          maxHP: 50,
          xp: 0,
          maxXp: 100,
          level: 1,
          status: null,
        },
        this
      ),
      enemy1: new Combatant(
        {
          ...Pizzas.v001,
          hp: 50,
          team: "enemy",
          maxHP: 50,
          xp: 30,
          maxXp: 100,
          level: 1,
          status: null,
        },
        this
      ),
      enemy2: new Combatant(
        {
          ...Pizzas.f001,
          hp: 50,
          team: "enemy",
          maxHP: 50,
          xp: 20,
          maxXp: 100,
          level: 1,
          status: null,
        },
        this
      ),
    };
    this.activeCombatants = {
      player: "player1",
      enemy: "enemy1",
    };
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("Battle");
    this.element.innerHTML = `
    <div class="Battle_hero">
        <img src="/images/characters/people/hero.png" alt="hero"/>
    </div>
    <div class="Battle_enemy">
        <img src="/images/characters/people/npc3.png" alt="enemy"/>
    </div>
    `;
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);

    Object.keys(this.combatants).forEach(key => {
      let combatant = this.combatants[key];
      combatant.id = key;
      combatant.init(this.element);
    });
  }
}