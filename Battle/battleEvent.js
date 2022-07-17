class BattleEvent {
  constructor(event, battle) {
    this.event = event;
    this.battle = battle;
  }

  textMessage(resolve) {
    const text = this.event.text
      .replace("{Caster}", this.event.caster?.name)
      .replace("{Target}", this.event.target?.name)
      .replace("{Action}", this.event.action?.name);

    const message = new TextMessage({
      text,
      onComplete: () => {
        resolve();
      },
    });
    message.init(this.battle.element);
  }

  submissionMenu(resolve) {
    const menuResponse = new SubmissionMenu({
      caster: this.event.caster,
      enemy: this.event.enemy,
      items: this.battle.items,
      onComplete: submission => {
        resolve(submission);
      },
    });

    menuResponse.init(this.battle.element);
  }

  animation(resolve) {
    const fn = BattleAnimations[this.event.animation];
    fn(this.event, resolve);
  }

  async stateChange(resolve) {
    const { caster, target, damage, recover, status, action } = this.event;
    let who = this.event.onCaster ? caster : target;

    if (action.targetType === "friendly") {
      who = caster;
    }

    if (damage) {
      //modify the target to have less HP
      target.update({
        hp: target.hp - damage,
      });

      //start blinking
      target.pizzaElement.classList.add("battle-damage-blink");
    }

    if (recover) {
      let newHp = who.hp + recover;
      if (newHp > who.maxHp) {
        newHp = who.maxHp;
      }
      who.update({
        hp: newHp,
      });
    }

    if (status) {
      who.update({
        status: { ...status },
      });
    }
    if (status === null) {
      who.update({
        status: null,
      });
    }
    //Wait a little bit
    await utils.wait(600);

    //stop blinking
    target.pizzaElement.classList.remove("battle-damage-blink");
    resolve();
  }

  init(resolve) {
    this[this.event.type](resolve);
  }
}
