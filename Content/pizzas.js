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
