module.exports={
/* Example of what a module exports should look like*/

name:"calc",
description:"Evaluates a simple math statement.",
aliases:["calculate","c"],
usage:"calc <statement>"
cooldown:"3/5",
channel:"*",
guildOnly:true,
permissions:["SEND_MESSAGES"],
execute(msg,args,client){
args[1]=args.slice(1).join(" ")
if(!args[1]) return msg.reply("Please provide a math statement. Usage : "+client.prefix+this.usage)
if(args[1].length>100) return msg.reply("Too long statement.")
/*Code Sanitation - don't want people executing random stuff */
args[1]=args[1].replace(/[\(\[{]/g,"(").replace(/[\)\]}/ ,")").toLowerCase();
/*replaced []{} with ().*/
let allowedChars="abcdefghijklmnopqrstuvwxyz1234567890+-*/^%.(),"
if(allowedChars.search(new RegExp("^["+allowedChars+"]"))!==-1) return msg.reply("Illegal Characters Found!");

for(let func of args[1].match(/[a-z]+/g)){



}



}



}

