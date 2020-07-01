module.exports={
name:"eval",
description:"Owner-only eval",
channel:"*",
ownerOnly:true,
execute(message){
return message.channel.send("`"+eval(message).valueOf()+"`")
}





}
