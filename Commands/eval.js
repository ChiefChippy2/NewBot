module.exports={
name:"eval",
description:"Owner-only eval",
channel:"*",
ownerOnly:true,
execute(message,args){
try{
return message.channel.send(("```"+eval(args.slice(1).join(" ")).valueOf()).substr(0,1997)+"```")
}catch(e){
return message.channel.send("Error Occurred: \n```"+e.valueOf().substr(0,2000-21)+"```")

}
}





}
