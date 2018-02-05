const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")
const version = "0.0.1";
const fs = require("fs");

//permsystem
const permjson = require("./perms/perms.json");
const perm = require("./perms/perms.js");

client.on("ready", () => {
  console.log("DuckBot Version " + version + " Started! GODSPEED!");
  console.log("Duck Duck Goose :D")
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
  });
  
  client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
  
    // This is the best way to define args. Trust me.
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    //perms
    if (perm.check(permjson, message, command) == 0) {
      if (message.author.id == "142721776458137600") {
        message.reply("AUGUST YOU ARE A WEENIER <3");
      }else{
        message.reply("Permission Denied, You must be either be special, or own me.");
      }
      return;
    }

    // The list of if/else is replaced with those simple 2 lines:
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args, Discord);
    } catch (err) {
      console.error(err);
    }
  });
  

client.login(config.token);