const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, owner } = require('./config.json');
client.prefix=prefix;
client.token=token;
client.owner=owner;
client.dprefix=Array.isArray(prefix)?prefix[0]:prefix
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cd= new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	client.commands.set(command.name, command);
	if(command.aliases){
	if(Array.isArray(command.aliases)
	 for(const al of command.aliases){
	 client.commands.set(al,command)
	 
	 };
	else client.command.set(command.aliases.toString(),command)
	
	
	
	 }
}

client.once('ready', () => {
	console.log('Logged in as '+client.user.tag);
});

client.on('message', async message => {
	if (!prefix.some(p=>message.content.startsWith(p)) || message.author.bot) return;
//identify the prefix
let cp;
prefix.forEach(a=>if(message.content.startsWith(a)){cp=a})
	if (!client.commands.has(message.content.slice(cp.length)).split(/ +/)[0])) return;

	try {
	const cmd=	client.commands.get(command)
  if(cmd.depreciated) return;
  if(cmd.guildOnly&&!message.guild) return;
  if(cmd.ownerOnly&&message.author.id!==owner) return;
  if(message.member&&!message.channel.permissionsFor(message.member).has("SEND_MESSAGES")){
let nc=  await message.author.send("I can't speak there... Give me right perms if you can tysm.")
  message.channel=nc.channel;
  message.member=null;
  message.guild=null;
  message.reply=message.channel.send
  
  
  };
  if(cmd.channel!=="*"&&cmd.channel!==message.channel.type) return; 
  // Kinda redundant but ok
  if(message.member&&!message.member.hasPermission(cmd.perms)) return message.reply("Not enuf permissions for command");
  if(cmd.cooldown&&cd.get(message.author.id+cmd.name)>=parseInt(cmd.cooldown.split("/")[0])) return message.react("🛑");//Its a stop sign...edit apple retard.
  if(cmd.cooldown){cd.set(message.author.id+cmd.name,cd.get(message.author.id+cmd.name)+1||1);
  setTimeout(
  ()=>cd.set(message.author.id+cmd.name,cd.get(message.author.id+cmd.name)-1),
  parseInt(cmd.cooldown.split("/")[1])*1000 )
  
  }
  
    cmd.execute(message, message.content.slice(prefix.length).split(/ +/),client);
	} catch (error) {
		console.error(error);
    //Technically if bot cant send dm and is muted it cant reply either.
		message.reply('there was an error trying to execute that command!');
	}
});
client.lm=new Discord.Collection()
client.on("messageDelete",m=>{
if(m.author.bot||!m.guild) return;
client.lm.set(m.guild.id,client.lm.get(m.guild.id).set(m.id,m))

});
client.on("guildCreate",async g=>{
//Send something nice 
if(Array.isArray(prefix)) let m="My prefixes are "+prefix.map(x=>"`"+x+"`").join(", ");
else let m="My prefix is "+prefix
(g.systemChannel||await g.channels.fetch(g.systemChannelID)).send("Hi! Thank you for inviting me to your guild! "+m).then(ms=>ms.react("🎊"))



})
client.login(token);
