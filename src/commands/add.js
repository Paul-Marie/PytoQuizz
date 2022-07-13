module.exports = {
  name: "add",
  description: "Ajoute un rappel dans un channel",
  options: [{
    name: "channel",
    description: "Le channel ou le rappel se fera",
    type: 7,
    channel_types: [0],
    required: true
  }, {
    name: "type",
    description: "le type d'évenement à alerter",
    required: true,
    type: 3,
    choices: [{
      name: "Field Boss",
      value: "field"
    }, {
      name: "World Boss",
      value: "world"
    }, {
      name: "Chaos Boss",
      value: "chaos"
    }, {
      name: "Arena",
      value: "arena"
    }]
  }, {
    name: "message",
    description: "Message à transmetre lors du rappel dans le channel",
    type: 3,
    required: false
  }, {
    name: "mode",
    description: "Spécifi si le rappel ce fera à l'heure précise ou 10min avant",
    required: false,
    type: 4,
    choices: [{
      name: "10min avant",
      value: 0
    }, {
      name: "à l'heure",
      value: 1
    }]
  }]
};
