window.PizzaTypes = {
  normal: "normal",
  spicy: "spicy",
  veggie: "veggie",
  fungi: "fungi",
  chill: "chill",
};

window.Pizzas = {
  s001: {
    name: "Slice Samuari",
    type: PizzaTypes.spicy,
    src: "/images/pizzas/s001.png",
    icon: "/images/icons/spicy.png",
    actions: ["damage1", "clumsyStatus", "saucyStatus"],
  },
  s002: {
    name: "Bacon Brigade",
    description: "A salty warrior who fears nothing",
    type: PizzaTypes.spicy,
    src: "/images/pizzas/s002.png",
    icon: "/images/icons/spicy.png",
    actions: ["damage1", "saucyStatus", "clumsyStatus"],
  },
  v001: {
    name: "Kall me Kale",
    type: PizzaTypes.veggie,
    src: "/images/pizzas/s001.png",
    icon: "/images/icons/veggie.png",
    actions: ["damage1"],
  },
  f001: {
    name: "Portobello Express",
    type: PizzaTypes.fungi,
    src: "/images/pizzas/f001.png",
    icon: "/images/icons/fungi.png",
    actions: ["damage1"],
  },
};
