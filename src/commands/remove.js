module.exports = {
  name: "remove",
  description: "Supprime tout les rappels d'un channel",
  options: [{
    name: "channel",
    description: "Le channel du rappel",
    type: 7,
    channel_types: [0],
    required: true
  }]
};
