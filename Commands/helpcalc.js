const l=require("../Utils/calc.json")
module.exports={


name:"helpcalc",
description:"Displays In-depth Help for calc.",
aliases:["hc","helpcalculate","hcalc"],
usage:"helpcalc <Method or Property>"
cooldown:"4/5",
channel:"*",
execute(msg,args,client){
if(!args[1]){
//No args... provide all then
let keys=Object.keys(l)

return msg.channel.send(new Discord.MessageEmbed().setTitle("List of Methods / Properties available for calc")
.setColor("RANDOM")
.setTimestamp()
.setAuthor(msg.guild?msg.guild.me.displayName:client.user.username,client.user.displayAvatarURL())
.addField("Methods/Properties :",keys.slice(0,keys.length/3),true)
.addField("\u200B",keys.slice(keys.length/3,key.length/3*2),true)
.addField("\u200B",keys.slice(keys.length/3*2),true)
.addField("Tip : ","To see what a certain method/property does, do `"+client.prefix+"helpcalc <method/property>`")
)

}
if(!l[args[1]) message.reply("Can't find that property / method. Make sure the case is correct :). To see a whole list of methods or properties, do `/helpcalc`.").then(m=>m.delete({timeout:5000})
msg.reply(new MessageEmbed().setTitle(args[1])
.setDescription(l[args[1]])
.setColor("RANDOM")
.setTimestamp()
.setAuthor(msg.guild?msg.guild.me.displayName:client.user.username,client.user.displayAvatarURL())





}}