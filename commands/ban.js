exports.run = (client, message, args, Discord) => {
    let member = message.mentions.members.first();
      member.ban();
        message.channel.send("YOU HAVE BEEN BANISHED :D " + member);
    }