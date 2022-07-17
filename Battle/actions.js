window.Actions = {
  damage1: {
    name: "whomp",
    success: [
      { type: "textMessage", text: "{Caster} uses whomp" },
      { type: "animation", animation: "spin" },
      { type: "stateChange", damage: 10 },
    ],
  },
};
