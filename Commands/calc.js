const mE=require("mathExtended.json")
const lis=require("../Utils/calc.json")
module.exports={


name:"calc",
description:"Evaluates a simple math statement.",
aliases:["calculate","c"],
usage:"calc <statement>"
cooldown:"3/5",
channel:"*",
guildOnly:false,
permissions:["SEND_MESSAGES"],
execute(msg,args,client){
class MoreMath extends Math {
/*No fromHex because no.*/
ceil(x,y){
if(y>10) y=10
if(!y) return Math.ceil(y)
return Math.ceil(x*(10**y))/100


}
floor(x,y){
if(y>10) y=10
if(!y) return Math.floor(y)
return Math.floor(x*(10**y))/10**y


}
round(x,y){
if(y>10) y=10
if(!y) return Math.round(y)
return Math.round(x*(10**y))/10**y


}
randNum(x,y){


return Math.floor(Math.random()*y)+x

}
fromBin(x){

return parseInt(x,2)

}
toBin(x){
return x.toString(2)
}
toHex(x){
return x.toString(16)
}
this.timeStamp=new Date().getTime()


}

args[1]=args.slice(1).join(" ")
if(!args[1]) return msg.reply("Please provide a math statement. Usage : "+client.prefix+this.usage)
if(args[1].length>100) return msg.reply("Too long statement.")
/*Code Sanitation - don't want people executing random stuff */
args[1]=args[1].replace(/[\(\[{]/g,"(")
.replace(/[\)\]}/g, ")")
.replace(/\^/g,"**")
.replace(/\|([0-9\.])+\|/g,(a,b)=>"abs("+b+")");
/*replaced []{} with ()., ^ to ** for power, and finally |x| to abs(x)*/
let allowedChars="abcdefghijklmnopqrstuvwxyz1234567890+-*/^%.(),"
if(allowedChars.search(new RegExp("^["+allowedChars+"]","i"))!==-1) return msg.reply("Illegal Characters Found!");
try{
let a = eval(args[1].replace(/[a-z]+/g,(func)=>{
if(mE[func]) func=mE[func];
if(!MoreMath[func]) return msg.channel.send("Unknown property / method : `"+func+"`.\n If you want to see a list of all available preoperties / method, react with a 📃")
.then(m=>m.react("📃"))
.then(r=>listMethods(r.message))

return "MoreMath."+func



}))
return msg.channel.send("Result : ```"+a+"```.")
}catch(e){
msg.channel.send("Error whilst interpreting.")

}
function listMethods(message){
let keys=Object.keys(lis)

message.channel.send(new Discord.MessageEmbed().setTitle("List of Methods / Properties available for calc")
.setColor("RANDOM")
.setTimestamp()
.setAuthor(msg.guild?msg.guild.me.displayName:client.user.username,client.user.displayAvatarURL())
.addField("Methods/Properties :",keys.slice(0,keys.length/3),true)
.addField("\u200B",keys.slice(keys.length/3,key.length/3*2),true)
.addField("\u200B",keys.slice(keys.length/3*2),true)
.addField("Tip : ","To see what a certain method/property does, do `"+client.prefix+"helpcalc <method/property>`")
)

}
}



}

