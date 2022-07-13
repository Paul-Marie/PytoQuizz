const mongoose = require("mongoose");

// Discord' channel model
const channelSchema = new mongoose.Schema({
  identifier: { type: String, required: true    },
  message:    { type: String, default: "ping !" },
  guild:      { type: String, required: true    },
  type:       { type: String, required: true    },
  mode:       { type: Boolean                   }
});

module.exports = mongoose.model("Channel", channelSchema);
