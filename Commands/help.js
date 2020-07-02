const Discord= new Discord.MessageEmbed()
module.exports={
name:"help",
description:"Displays list of commands, or help page for each command",
usage:"help [command]"
cooldown:"1/3",
channel:"*",
execute(msg,args,client){
if(!args[1]) return msg.reply(new MessageEmbed().setTitle("List of commands")
.setDescription("All commands you can use")
.setTimestamp()
.setColor("RANDOM")
.setAuthor(msg.guild?msg.guild.me.displayName:client.user.username,client.user.displayAvatarURL())
.addFields(client.commands.map(x=>{return {name:x.name+x.ownerOnly?" **OWNER ONLY** ":"",value:x.description+x.usage?x.usage:"No usage specified..."}}))
)
if(!client.commands.has(args[1].toLowerCase())) return msg.channel.send(`Not Found... do \`${client.prefix}help\` for a list of available commands.`);
let c=client.commands.get(args[1].toLowerCase())
msg.reply(new MessageEmbed().setTitle(c.name)
.setDescription(c.description?c.description:"No description specified.")
.setColor("RANDOM")
.setTimestamp()
.setAuthor(msg.guild?msg.guild.me.displayName:client.user.username,client.user.displayAvatarURL())
.addField("Usage",x.syntax?(client.prefix+x.syntax):"No usage specified.")
.addField("Aliases",x.alias.join(", ")||x.alias)
.addField("Status",x.depreciated?"Depreciated":"Available")




)



}
}






}
