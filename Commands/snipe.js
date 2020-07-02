const DF= require("../Utils/DateFormatter.js")
module.exports={
/* Example of what a module exports should look like*/

name:"snipe",
description:"Displays latest deleted messages. Default shows 1 deleted messages in channel where command is issued.",
aliases:["s","snip"],
usage:"snipe [amountOfMessages] [channel]"
cooldown:"2/10",
channel:"*",
guildOnly:true,
permissions:["MANAGE_MESSAGES"],
execute(msg,args,client){

/*Damn need to identify if it is a channel or amount of msgs*/
 /*is a channel mention*/ 
 if(!args[1]){args=[args[0],1,msg.channel]}
 args[2]=msg.guild.channels.cache.get((args[2]||args[1]).replace(/[^0-9]+/g,""))||msg.guild.channels.cache.find(x=>x.name.toLowerCase()===(args[2]||args[1]).toLowerCase())
 if(args[2]&&args.length===2) args[1]=null;else{
if(parseInt(args[1])==args[1]){
 if(parseInt(args[1])<10){args[1]=parseInt(args[1])
 }else return msg.reply("Please provide a valid amount of messages to delete. ( 1 to 10 ) Usage : "+this.usage);
 
}else if(args[1].length<=17) return msg.reply("Please provide a valid amount of messages to delete. ( 1 to 10 ) Usage : "+this.usage);

}


 
msg.reply(new Message.DiscordEmbed().setTitle(`Last ${args[1]} deleted messages in ${args[2].name}`)
.setAuthor(args[1]===1?client.lm.first().author.tag:"Multiple Authors",client.lm.first().author.displayAvatarURL()||client.user.displayAvatarURL())
.setColor("RANDOM")
.setTimestamp()
.setFooter("I am always waiting to snipe")
.addFields(client.lm.map(x=>({name:x.author.tag+" at "+new DF(x.createdAt).format(),value:x.content.substr(0,500)+"..."})).slice(0,args[1]))

}
}