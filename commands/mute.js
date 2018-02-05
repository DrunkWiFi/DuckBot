exports.run = (client, message, args, Discord) => {
    let member = message.mentions.members.first();
      member.mute();
        message.channel.send("Shat ap kiddo " + member);
    }