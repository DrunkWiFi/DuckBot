exports.run = (client, message, args, Discord) => {
let member = message.mentions.members.first();
  member.kick();
    message.channel.send("GET OUTA MY SERVER :D " + member);
}