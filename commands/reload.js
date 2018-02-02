exports.run = (client, message, args, Discord) => {
    if(!args || args.size < 1) return message.channel.send("Must provide a command name to reload.");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.channel.send(`The command ${args[0]} has been reloaded`);
    console.log('\x1b[33m\x1b[1m', "[Bot Update] " + '\x1b[35m' + "Command Reloaded » ", '\x1b[34m' + `${args[0]}`, '\x1b[0m');
  };