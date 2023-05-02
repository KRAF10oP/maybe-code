const keepAlive = require('./server.js')
const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: "", //Discord Bot Token
prefix: "+", //Discord Bot Prefix
intents: "all" //Discord Intents
})
//Callbacks
bot.onMessageDelete()
bot.onInviteDelete()
bot.onInviteCreate()
bot.onChannelDelete()
bot.onChannelCreate()
bot.onBanRemove()
bot.onBanAdd()
bot.onLeave()
bot.onJoin()
bot.onInteractionCreate()
bot.onMessage()
bot.onGuildJoin()
bot.onGuildLeave()

//Command Example

bot.command({
name: "eval", 
code: `
$eval[$message]
$onlyForIDs[726326726078103622;]`
})
//
bot.awaitedCommand({
name: "sm2!",
code: ` 
$addCmdReactions[982999843767210026]
               $setServerVar[over1;1]      $modifyChannelPerms[$guildID;$getServerVar[smreg1];-sendmessage] **__Registration Closed.__**               $suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "sm3!",
code: ` 
$addCmdReactions[982999843767210026]
               $setServerVar[over2;1]      $modifyChannelPerms[$guildID;$getServerVar[smreg2];-sendmessage] **__Registration Closed.__**               $suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "sm4!",
code: ` 
$addCmdReactions[982999843767210026]
               $setServerVar[over3;1]      $modifyChannelPerms[$guildID;$getServerVar[smreg3];-sendmessage] **__Registration Closed.__**               $suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "sm5!",
code: ` 
$addCmdReactions[982999843767210026]
               $setServerVar[over4;1]      $modifyChannelPerms[$guildID;$getServerVar[smreg4];-sendmessage] **__Registration Closed.__**               $suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "sm6!",
code: ` 
$addCmdReactions[982999843767210026]
               $setServerVar[over5;1]      $modifyChannelPerms[$guildID;$getServerVar[smreg5];-sendmessage] **__Registration Closed.__**               $suppressErrors[An Error Occured]`
})
//Scrims
bot.awaitedCommand({
name: "smreg1",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 1](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$mentionedChannels[1]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp1]>
3️⃣ **Number Of Slots**
$getServerVar[smslots1]
4️⃣ **Number Of Tags**
$getServerVar[smtags1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smreg1;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}] 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smidp1",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 1](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg1]>
2️⃣ **IDP Role**
<@&$mentionedRoles[1]>
3️⃣ **Number Of Slots**
$getServerVar[smslots1]
4️⃣ **Number Of Tags**
$getServerVar[smtags1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smidp1;$mentionedRoles[1]]  $onlyIf[$roleExists[$mentionedRoles[1]]==true;<@$authorID>, This role does not exists.] 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$mentionedRoles[1]];<@$authorID>, This role is higher than me on role position.]
 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smslots1",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 1](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg1]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp1]>
3️⃣ **Number Of Slots**
$message[1]
4️⃣ **Number Of Tags**
$getServerVar[smtags1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smslots1;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum slot limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=25;<@$authorID>, Max Slot Limit For Scrims is \`25\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smtags1",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 1](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg1]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp1]>
3️⃣ **Number Of Slots**
$getServerVar[smslots1]
4️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smtags1;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum Tag limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max Tag Limit For Scrims is \`4\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smreg2",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 2](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$mentionedChannels[1]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp2]>
3️⃣ **Number Of Slots**
$getServerVar[smslots2]
4️⃣ **Number Of Tags**
$getServerVar[smtags2]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smreg2;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}] 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smidp2",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 2](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg2]>
2️⃣ **IDP Role**
<@&$mentionedRoles[1]>
3️⃣ **Number Of Slots**
$getServerVar[smslots2]
4️⃣ **Number Of Tags**
$getServerVar[smtags2]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smidp2;$mentionedRoles[1]]  $onlyIf[$roleExists[$mentionedRoles[1]]==true;<@$authorID>, This role does not exists.] 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$mentionedRoles[1]];<@$authorID>, This role is higher than me on role position.]
 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smslots2",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 2](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg2]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp2]>
3️⃣ **Number Of Slots**
$message[1]
4️⃣ **Number Of Tags**
$getServerVar[smtags2]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smslots2;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum slot limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=25;<@$authorID>, Max Slot Limit For Scrims is \`25\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smtags2",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 2](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg2]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp2]>
3️⃣ **Number Of Slots**
$getServerVar[smslots2]
4️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smtags2;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum Tag limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max Tag Limit For Scrims is \`4\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smreg3",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 3](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$mentionedChannels[1]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp3]>
3️⃣ **Number Of Slots**
$getServerVar[smslots3]
4️⃣ **Number Of Tags**
$getServerVar[smtags3]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smreg3;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}] 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smidp3",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 3](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg3]>
2️⃣ **IDP Role**
<@&$mentionedRoles[1]>
3️⃣ **Number Of Slots**
$getServerVar[smslots3]
4️⃣ **Number Of Tags**
$getServerVar[smtags3]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smidp3;$mentionedRoles[1]]  $onlyIf[$roleExists[$mentionedRoles[1]]==true;<@$authorID>, This role does not exists.] 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$mentionedRoles[1]];<@$authorID>, This role is higher than me on role position.]
 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smslots3",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 3](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg3]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp3]>
3️⃣ **Number Of Slots**
$message[1]
4️⃣ **Number Of Tags**
$getServerVar[smtags3]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smslots3;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum slot limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=25;<@$authorID>, Max Slot Limit For Scrims is \`25\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smtags3",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 3](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg3]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp3]>
3️⃣ **Number Of Slots**
$getServerVar[smslots3]
4️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smtags3;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum Tag limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max Tag Limit For Scrims is \`4\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smreg4",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 4](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$mentionedChannels[1]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp4]>
3️⃣ **Number Of Slots**
$getServerVar[smslots4]
4️⃣ **Number Of Tags**
$getServerVar[smtags4]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smreg4;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}] 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smidp4",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 4](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg4]>
2️⃣ **IDP Role**
<@&$mentionedRoles[1]>
3️⃣ **Number Of Slots**
$getServerVar[smslots4]
4️⃣ **Number Of Tags**
$getServerVar[smtags4]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smidp4;$mentionedRoles[1]]  $onlyIf[$roleExists[$mentionedRoles[1]]==true;<@$authorID>, This role does not exists.] 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$mentionedRoles[1]];<@$authorID>, This role is higher than me on role position.]
 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smslots4",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 4](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg4]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp4]>
3️⃣ **Number Of Slots**
$message[1]
4️⃣ **Number Of Tags**
$getServerVar[smtags4]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smslots4;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum slot limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=25;<@$authorID>, Max Slot Limit For Scrims is \`25\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smtags4",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 4](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg4]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp4]>
3️⃣ **Number Of Slots**
$getServerVar[smslots4]
4️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smtags4;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum Tag limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max Tag Limit For Scrims is \`4\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smreg5",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 5](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$mentionedChannels[1]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp5]>
3️⃣ **Number Of Slots**
$getServerVar[smslots5]
4️⃣ **Number Of Tags**
$getServerVar[smtags5]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smreg5;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}] 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smidp5",
code: `$deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 5](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg5]>
2️⃣ **IDP Role**
<@&$mentionedRoles[1]>
3️⃣ **Number Of Slots**
$getServerVar[smslots5]
4️⃣ **Number Of Tags**
$getServerVar[smtags5]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smidp5;$mentionedRoles[1]]  $onlyIf[$roleExists[$mentionedRoles[1]]==true;<@$authorID>, This role does not exists.] 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$mentionedRoles[1]];<@$authorID>, This role is higher than me on role position.]
 
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smslots5",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 5](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg5]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp5]>
3️⃣ **Number Of Slots**
$message[1]
4️⃣ **Number Of Tags**
$getServerVar[smtags5]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smslots5;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum slot limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=25;<@$authorID>, Max Slot Limit For Scrims is \`25\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "smtags5",
code: ` $deleteCommand $editMessage[$getServerVar[smconfigid];{newEmbed: {description:[Custom Config 5](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg5]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp5]>
3️⃣ **Number Of Slots**
$getServerVar[smslots5]
4️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[smtags5;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum Tag limit for scrims is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max Tag Limit For Scrims is \`4\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
//
bot.awaitedCommand({
name: "tagcheck1",
code: `$deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 1](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$mentionedChannels[1]>
2️⃣ **Number Of Tags**
$getServerVar[tctags1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tagcheck1;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}] 
$suppressErrors[An Error Occured]`
})

bot.awaitedCommand({
name: "tctags1",
code: ` $deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 1](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck1]>
2️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tctags1;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum tag limit for tagcheck is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max tag limit for tagcheck is \`6\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "tagcheck2",
code: `$deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 2](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$mentionedChannels[1]>
2️⃣ **Number Of Tags**
$getServerVar[tctags2]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tagcheck2;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "tctags2",
code: ` $deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 2](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck2]>
2️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tctags2;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum tag limit for tagcheck is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max tag limit for tagcheck is \`6\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "tagcheck4",
code: `$deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 4](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$mentionedChannels[1]>
2️⃣ **Number Of Tags**
$getServerVar[tctags4]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tagcheck4;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}] 
$suppressErrors[An Error Occured]`
})

bot.awaitedCommand({
name: "tctags4",
code: ` $deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 4](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck4]>
2️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tctags4;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum tag limit for tagcheck is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max tag limit for tagcheck is \`6\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "tagcheck3",
code: `$deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 3](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$mentionedChannels[1]>
2️⃣ **Number Of Tags**
$getServerVar[tctags3]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tagcheck3;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "tctags3",
code: ` $deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 3](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck3]>
2️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tctags3;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum tag limit for tagcheck is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max tag limit for tagcheck is \`6\`{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "tagcheck5",
code: `$deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 5](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$mentionedChannels[1]>
2️⃣ **Number Of Tags**
$getServerVar[tctags5]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tagcheck5;$mentionedChannels[1]]  $onlyIf[$findServerChannel[$mentionedChannels[1];no;$guildID]!=;<@$authorID>, The channel you mentioned does not exists.{delete:2s}]
$suppressErrors[An Error Occured]`
})
bot.awaitedCommand({
name: "tctags5",
code: ` $deleteCommand $editMessage[$getServerVar[tcconfigid];{newEmbed: {description:[Tagcheck Config 5](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck5]>
2️⃣ **Number Of Tags**
$message[1]} {footer:React with emojis to setup}{color:GREEN}};$channelID] $setServerVar[tctags5;$message[1]] $onlyIf[$isNumber[$message[1]]==true;<@$authorID>, **Please provide a valid number.**{delete:2s}] $onlyIf[$message[1]>=1;<@$authorID>, Minimum tag limit for tagcheck is \`1\`{delete:2s}]
$onlyIf[$message[1]<=4;<@$authorID>, Max tag limit for tagcheck is \`6\`{delete:2s}]
$suppressErrors[An Error Occured]`
})

bot.awaitedCommand({
name: "idpchannel",
code: '$title[1;🛠 IDP Manager (2/5)]     $description[1;What is the ID for the custom?]                     $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;customid;{newEmbed: {description:You Failed To Provide Custom ID In Time. Try Again!} {color:RED}}]      $setServerVar[idpchannel;$mentionedChannels[1]] $onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**} {footer:Requested by $userTag[$authorID]} {color:RED}}]           $onlyBotPerms[sendmessage;**❌ | I dont have enough perms to execute this command. Permissions missing:** SEND_MESSAGES]           $onlyIf[$channelExists[$mentionedChannels[1;no]]==true;{newEmbed: {description:Use the command again and this time mention a channel existing in this server.} {color:RED}}]                            $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "customid",
code: '$title[1;🛠 IDP Manager (3/5)]     $description[1;What is the pass for the custom?]                     $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;custompass;{newEmbed: {description:You Failed To Provide Custom pass In Time. Try Again!} {color:RED}}]    $setServerVar[customid;$message[1]] $onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**} {footer:Requested by $userTag[$authorID]} {color:RED}}]           $onlyBotPerms[sendmessage;**❌ | I dont have enough perms to execute this command. Permissions missing:** SEND_MESSAGES] $suppressErrors[An error occured while executing this command please report this issue on our support server] '
})
bot.awaitedCommand({
name: "custompass",
code: '$title[1;🛠 IDP Manager (4/5)]     $description[1;What is the MAP for the custom?]                     $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;custommap;{newEmbed: {description:You Failed To Provide Custom MAP In Time. Try Again!} {color:RED}}]    $setServerVar[custompass;$message] $onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**} {footer:Requested by $userTag[$authorID]} {color:RED}}]           $onlyBotPerms[sendmessage;**❌ | I dont have enough perms to execute this command. Permissions missing:** SEND_MESSAGES] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "custommap",
code: '$title[1;🛠 IDP Manager (5/5)]     $description[1;What is the Start Time for the custom?]                     $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;customtime;{newEmbed: {description:You Failed To Provide Custom MAP In Time. Try Again!} {color:RED}}]    $setServerVar[custommap;$message[1]] $onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**} {footer:Requested by $userTag[$authorID]} {color:RED}}]           $onlyBotPerms[sendmessage;**❌ | I dont have enough perms to execute this command. Permissions missing:** SEND_MESSAGES] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "customtime",
code: '$description[1;Are you sure to send the idp in $getServerVar[idpchannel]?]     $footer[1;Type “confirm” to confirm or dont send any msg in the next 1m to cancel the process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;confirm;confirmation;{newEmbed: {description:You Failed To Provide Confirmation In Time. Try Again!} {color:RED}}]    $setServerVar[customtime;$message[1]] $onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**} {footer:Requested by $userTag[$authorID]} {color:RED}}]           $onlyBotPerms[sendmessage;**❌ | I dont have enough perms to execute this command. Permissions missing:** SEND_MESSAGES] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
//
bot.awaitedCommand({
name: "confirmation",
code: '$channelSendMessage[$getServerVar[idpchannel];{newEmbed: {author:Scrims Mod:$userAvatar[$clientId]} {title:Custom IDP} {description: ID: \`$getServerVar[customid]\`\nPASS: \`$getServerVar[custompass]\`\nMAP: \`$getServerVar[custommap]\`\nSTART TIME: \`$getServerVar[customtime]\`} {color:00FF99} {footer:$serverName Custom IDP.:$serverIcon}}]         $description[1;<:tick:963055291719639150> | **Successfully sent the idp in <#$getServerVar[idpchannel]>.**]            $color[1;GREEN]           $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})

//
bot.awaitedCommand({
name: "slotlistchannel",
code: '$title[1;🛠 Slotlist Manager (2/26)]                   $description[1;What is the 1st Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team1;{newEmbed: {description:You Failed To Select 1st Team Name In Time. Try Again!} {color:RED}}]          $setServerVar[slotlistchannel;$mentionedChannels[1]] $onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**} {footer:Requested by $userTag[$authorID]} {color:RED}}]           $onlyBotPerms[sendmessage;**❌ | I dont have enough perms to execute this command. Permissions missing:** SEND_MESSAGES] $suppressErrors[An error occured while executing this command please report this issue on our support server] $onlyIf[$channelExists[$mentionedChannels[1;no]]==true;{newEmbed: {description:Use the command again and this time mention a channel existing in this server.} {color:FF0000}}]'
})
//
bot.awaitedCommand({
name: "team1",
code: '$title[1;🛠 Slotlist Manager (3/26)]                   $description[1;What is the 2nd Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team2;{newEmbed: {description:You Failed To Select 2nd Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team1;$message]    $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
//
bot.awaitedCommand({
name: "team2",
code: '$title[1;🛠 Slotlist Manager (4/26)]                   $description[1;What is the 3rd Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team3;{newEmbed: {description:You Failed To Select 3rd Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team2;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})

bot.awaitedCommand({
name: "team3",
code: '$title[1;🛠 Slotlist Manager (5/26)]                   $description[1;What is the 4th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team4;{newEmbed: {description:You Failed To Select 4th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team3;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})

bot.awaitedCommand({
name: "team4",
code: '$title[1;🛠 Slotlist Manager (6/26)]                   $description[1;What is the 5th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team5;{newEmbed: {description:You Failed To Select 5th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team4;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team5",
code: '$title[1;🛠 Slotlist Manager (7/26)]                   $description[1;What is the 6th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team6;{newEmbed: {description:You Failed To Select 6th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team5;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team6",
code: '$title[1;🛠 Slotlist Manager (8/26)]                   $description[1;What is the 7th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team7;{newEmbed: {description:You Failed To Select 7th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team6;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team7",
code: '$title[1;🛠 Slotlist Manager (9/26)]                   $description[1;What is the 8th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team8;{newEmbed: {description:You Failed To Select 7th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team7;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team8",
code: '$title[1;🛠 Slotlist Manager (10/26)]                   $description[1;What is the 9th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team9;{newEmbed: {description:You Failed To Select 8th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team8;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team9",
code: '$title[1;🛠 Slotlist Manager (11/26)]                   $description[1;What is the 10th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team10;{newEmbed: {description:You Failed To Select 9th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team9;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team10",
code: '$title[1;🛠 Slotlist Manager (12/26)]                   $description[1;What is the 11th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team11;{newEmbed: {description:You Failed To Select 10th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team10;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team11",
code: '$title[1;🛠 Slotlist Manager (13/26)]                   $description[1;What is the 12th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team12;{newEmbed: {description:You Failed To Select 11th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team11;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team12",
code: '$title[1;🛠 Slotlist Manager (14/26)]                   $description[1;What is the 13th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team13;{newEmbed: {description:You Failed To Select 12th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team12;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team13",
code: '$title[1;🛠 Slotlist Manager (15/26)]                   $description[1;What is the 14th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team14;{newEmbed: {description:You Failed To Select 13th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team13;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team14",
code: '$title[1;🛠 Slotlist Manager (16/26)]                   $description[1;What is the 15th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team15;{newEmbed: {description:You Failed To Select 14th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team14;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team15",
code: '$title[1;🛠 Slotlist Manager (17/26)]                   $description[1;What is the 16th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team16;{newEmbed: {description:You Failed To Select 15th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team15;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team16",
code: '$title[1;🛠 Slotlist Manager (18/26)]                   $description[1;What is the 17th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team17;{newEmbed: {description:You Failed To Select 16th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team16;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team17",
code: '$title[1;🛠 Slotlist Manager (19/26)]                   $description[1;What is the 18th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team18;{newEmbed: {description:You Failed To Select 17th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team17;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team18",
code: '$title[1;🛠 Slotlist Manager (20/26)]                   $description[1;What is the 19th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team19;{newEmbed: {description:You Failed To Select 18th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team18;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team19",
code: '$title[1;🛠 Slotlist Manager (21/26)]                   $description[1;What is the 20th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team20;{newEmbed: {description:You Failed To Select 19th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team19;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team20",
code: '$title[1;🛠 Slotlist Manager (22/26)]                   $description[1;What is the 21th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]                  $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team21;{newEmbed: {description:You Failed To Select 20th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team20;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})

bot.awaitedCommand({
name: "team21",
code: '$title[1;🛠 Slotlist Manager (23/26)]                   $description[1;What is the 22th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team22;{newEmbed: {description:You Failed To Select 21th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team21;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team22",
code: '$title[1;🛠 Slotlist Manager (24/26)]                   $description[1;What is the 23th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team23;{newEmbed: {description:You Failed To Select 22th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team22;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team23",
code: '$title[1;🛠 Slotlist Manager (25/26)]                   $description[1;What is the 24th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team24;{newEmbed: {description:You Failed To Select 23th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team23;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team24",
code: '$title[1;🛠 Slotlist Manager (26/26)]                   $description[1;What is the 25th Team Name?] $footer[1;Dont reply anything within the next min to cancel this process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;team25;{newEmbed: {description:You Failed To Select 24th Team Name In Time. Try Again!} {color:RED}}]      $setServerVar[team24;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "team25",
code: '$setServerVar[sureornot;$message[1]] $description[1;Are you sure to send this slotlist in $getServerVar[slotlistchannel]?] $footer[1;Type "confirm" to confirm or dont send any msg in the next 1m to cancel the process.]              $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;confirm;confirmationsl;{newEmbed: {description:You Failed To Reply In Time. Try Again!} {color:RED}}]      $setServerVar[team25;$message] $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "confirmationsl",
code: '$channelSendMessage[$getServerVar[slotlistchannel];{newEmbed: {author:Scrims Mod:$userAvatar[$clientId]} {title:Esports Slotlist} {description: Slot 1 - $getServerVar[team1]\nSlot 2 - $getServerVar[team2]\nSlot 3 - $getServerVar[team3]\nSlot 4 - $getServerVar[team4]\nSlot 5 -  $getServerVar[team5]\nSlot 6 -  $getServerVar[team6]\nSlot 7 - $getServerVar[team7]\nSlot 8 - $getServerVar[team8]\nSlot 9 - $getServerVar[team9]\nSlot 10 -  $getServerVar[team10]\nSlot 11 - $getServerVar[team11]\nSlot 12 - $getServerVar[team12]\nSlot 13 - $getServerVar[team13]\nSlot 14 - $getServerVar[team14]\nSlot 15 - $getServerVar[team15]\nSlot 16 - $getServerVar[team16]\nSlot 17 - $getServerVar[team17]\nSlot 18 - $getServerVar[team18]\nSlot 19 - $getServerVar[team19]\nSlot 20 - $getServerVar[team20]\nSlot 21 - $getServerVar[team21]\nSlot 22 - $getServerVar[team22]\nSlot 23 -$getServerVar[team23]\nSlot 24 - $getServerVar[team24]\nSlot 25 - $getServerVar[team25]} {color:00FF99} {footer:$serverName Custom Slotlist.:$serverIcon}}]         $description[1;<:tick:963055291719639150> | **Successfully sent the slotlist in $getServerVar[slotlistchannel].**]            $color[1;GREEN]         $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
bot.awaitedCommand({
name: "tourneyname",
code: '$description[1;Are you sure to create a category&channels?]               $footer[1;Type "confirm" to confirm or dont send any message in the next 1m to cancel the process.]          $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;confirm;tnameconfirmation;{newEmbed: {description:You Failed To Provide Custom ID In Time. Try Again!} {color:RED}}]      $setServerVar[tourneyname;$message] $onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**} {footer:Requested by $userTag[$authorID]} {color:RED}}]           $onlyBotPerms[sendmessage;**❌ | I dont have enough perms to execute this command. Permissions missing:** SEND_MESSAGES]                                       $suppressErrors[An error occured while executing this command please report this issue on our support server]'
})
//
bot.awaitedCommand({
name: "tnameconfirmation",
code: ' $createChannel[$guildID;help-desk;Voice;no;$get[categoryID]] $createChannel[$guildID;queries;Text;no;$get[categoryID]] $createChannel[$guildID;confirmed;Text;no;$get[categoryID]] $createChannel[$guildID;register;Text;no;$get[categoryID]] $createChannel[$guildID;updates;Text;no;$get[categoryID]] $createChannel[$guildID;info;Text;no;$get[categoryID]] $let[categoryID;$createChannel[$guildID;$getServerVar[tourneyname];Category;yes]]    $editIn[3s;{newEmbed: {description:<:tick:963055291719639150> **Completed**}{color:GREEN}}]              $description[1;**Please wait...**]   $color[1;GREEN]              $onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**} {footer:Requested by $userTag[$authorID]} {color:RED}}]             $suppressErrors[An error occured while executing this command please report this issue on our support server]  '
})
bot.awaitedCommand({
name: "tourneyedit",
code:'$setServerVar[tourneyname;$message[1]] $editChannel[$findServerChannel[$getServerVar[tourneyname]];$message]            $editIn[3s;{newEmbed: {description:<:tick:963055291719639150> **Completed**\n **Before**: $getServerVar[tourneyname]\nAfter: $message}{color:GREEN}}] $description[1;Processing...] $color[1;YELLOW] $suppressErrors[An Error Occured]'
})
bot.awaitedCommand({
name: "idproletransfer",
code: '$channelSendMessage[$awaitData[log];{newEmbed: {author:$awaitData[guildname]:$serverIcon[$awaitData[guild]]}{description:$userTag[$awaitData[author]] exchanged their idp role with $userTag[$message[1]]}{thumbnail:$serverIcon[$awaitData[guild]]}{footer:Idp Role Transfer System}{timestamp}{color:00FF99}}]                  $editIn[2s;<:Ccheck:980361177668390912> **Done**] $description[1;**Processing**...] $color[1;00FF99] $takeRoles[$awaitData[guild];$awaitData[author];$getServerVar[idprole;$awaitdata[guild]]] $giveRole[$awaitData[guild];$message[1];$getServerVar[idprole;$awaitdata[guild]]]           $onlyIf[$hasRoles[$awaitData[guild];$message[1];$findRole[$awaitData[role];$awaitData[guild]]]==false;<@$authorID>, **The user you mentioned already has role.] $onlyIf[$userExists[$findMember[$message[1];;$awaitData[guild]]]==true;<@$authorID>, **The user you mentioned is not in this server.**] $onlyIf[$message[1]!=$awaitData[author];**:btt_error_dark: | You cant give role to yourself.**]            $suppressErrors[An Error Occured]  '
})


//guild join!
bot.guildJoinCommand({
channel: "973432628130770995",
code: `$title[1;**JOINED $guild**]  $description[1;**GUILD ID - $guildID\nGUILD OWNER - $userTag[$ownerID]\nTOTAL MEMBERS - $membersCount\nSERVER CREATED - $creationDate[$guildID]\nTOTAL SERVERS - $serverCount\n[$createServerInvite[$guildID]]($createServerInvite[$guildID])**] $color[1;2F3136]` 
})
//guild leave
bot.guildLeaveCommand({
channel: "973432770204418128",
code: `i left $guild` 
})

//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

//Command Handler loader

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgRed"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
 
})

//Status

bot.status({
	text: "Powered By @Flank",
	type: "PLAYING",
	status: "online"
})

//Events



//Variables

//Special
bot.variables({
 smsetupchannel: "",
 smmodrole: "",
 smsetup: "0",
 alreadyreg: "0",
 tourneynumber: "0",
 tourneyconfirm: "",
 scrimsregcount: "0",
 tourneyregrole: "",
 regrole: "",
 reguser: "$authorID",
tourneyreguser: "$authorID",
 channelLimit: "0",
 msgcount: "0",
 scrimban: "0",
tourneyban: "0",
  greet_channel: "$mentionedChannels[1]",
  mentioned_channel: "$mentionedChannels[1]",
tourney_mentioned_channel: "$mentionedChannels[1]",
  mention: "0",
	embed_color: "#FAD9B9", 
	leader_role: "805451556081500220", 
	leaderrolecooldown: "0", 
	nicknamecooldown: "0", 
	embColor: "fad9b9",
  tagcheck: "none",
  tc: "0",
  slotlistchannel: "",                       team1: "",
  team2:"",
  team3: "",
  team4: "",
  team5: "",
  team6: "",
  team7: "",
  team8: "",
  team9: "",
  team10: "",
  team11: "",
  team12: "",
  team13: "",
  team14: "",
  team15: "",
  team16: "",
  team17: "",
  team18: "",
  team19: "",
  team20: "",
  team21: "",
  team22: "",
  team23: "",
  team24: "",
  team25: "",
  sureornot: "",
  idpchannel: "",
  customid: "",
  custompass: "",
  custommap: "",
  customtime: "",
  tourneyname: "0",
  
  idproletransfer: "none",
  idproletransferid: "",
  idprole: "",
  idpname: "",
  idplogs: "",
  idpchannelid: "",
  idproletransfer2: "none",
  idproletransferid2: "",
  idprole2: "",
  idpname2: "",
  idplogs2: "",
  idpchannelid2: "",
  tcchannelid: "",
  scrimbanned: "0",
  smsetup: "0",
  smsetupchannelid: "",
})

//Snipe
bot.variables({
    tcconfigid: "0",
tagcheck1: "noset",
tcslots1: "notset",
tctags1: "notset",
tagcheck2: "noset",
tcslots2: "notset",
tctags2: "notset",                tagcheck3: "noset",
tcslots3: "notset",
tctags3: "notset",
tagcheck4: "noset",
tcslots4: "notset",
tctags4: "notset",
tagcheck5: "noset",
tctags5: "notset",
smchannelid: "",
})
//Scrims
bot.variables({
  smslots1: "0",
  smreg1: "",
  over1: "0",
  smconfigid: "0",
  smidp1: "",
  smtags1: "",
  //
    smslots2: "0",
  smreg2: "",
  over2: "0",
  smidp2: "",
  smtags2: "",
  //
  smslots3: "0",
  smreg3: "",
  over3: "0",
  smidp3: "",
  smtags3: "",  
  //
  smslots4: "0",
  smreg4: "",
  over4: "0",
  smidp4: "",
  smtags4: "",  
  //
  smslots5: "0",
  smreg5: "",
  over5: "0",
  smidp5: "",
  smtags5: "",  
})

//Giveaway
bot.variables({
endstamp:"0",
prefix:".",
hoster:"",
prize:"",
joined:"0",
joinedusers:"",
ended:"false"
})

//Houses
bot.variables({
	bravery: "928019690490560572", 
	balance: "928019750087434281", 
	brilliance: "928019789627158539"
})

//Gender
bot.variables({ 
	him_role: "801610025558081567", 
	her_role: "801609422438006794", 
	them_role: "801610167606706186"
})

//Age
bot.variables({
	child_role: "801611316426178601", 
	adult_role: "801611796984889364"
})

//Sexuality
bot.variables({
	straight: "913354898257608735", 
	gay: "913354862429888572", 
	lesbian: "913355131192504351", 
	other: "913355079388659752"
})

//Relationship
bot.variables({
	taken: "913336766365335552", 
	single: "913336861290807348", 
	looking: "913336917347680277"
})

//DM Status
bot.variables({
	dm_open: "801611980971704341", 
	dm_close: "801612315366785034"
})

//Regions
bot.variables({
	africa: "801612947826278411", 
	asia: "801613559955980310", 
	america: "801612657115398174", 
	europe: "801613360575676417"
})

//Zodiac
bot.variables({
	virgo: "819963793558994945",
	taurus: "819963949108822047",
	sagittarius: "819964068874027009",
	pieces: "819964212448722954",
	libra: "819964326445187072",
	leo: "819964427663048754",
	gemini: "819964541521625118",
	capricorn: "819964630268510239",
	cancer: "819964753262673920",
	aquarius: "819964865736474705",
	aries: "819964970556194887",
	scorpio: "819965060998627398"
})

//Traits - Partner
bot.variables({
	naughty: "819326468282253384",
	weeb: "836313257459318785",
	simp: "820768667141668884",
	clumsy: "836315331919216660"
})

//Traits - Bro
bot.variables({
	friendly: "819326259158319135",
	helper: "820767543177773106",
	kawai: "819325778461589544",
	badass: "836313018790838302"
})

//Traits - Bestie
bot.variables({
	dumb: "819326767985721365",
	hype: "836299152769548318",
	photo: "801608903477559357",
	pet: "820769599355879445"
})

//Traits - Confidant
bot.variables({
	toxic: "819326560682115082",
	sleep: "820765348042375189",
	useless: "836313151996690484",
	agressive: "820976244572684298"
})

//Notfications
bot.variables({
	announces: "801618406817136651",
	awareness: "802193961736863834",
	chat_wake: "801891640515887104",
	content_follow: "930149303991820419", 
	event: "801618307387883571",
	giveaway: "801618365231398912",
	welcomer: "801618241046315080",
	poll: "836338487820812368",
	qotd: "836338427578286111"
})

//Colors
bot.variables({
	black:"865346561344143371",
	white:"865348105159311370",
	red:"801612652920438784",
	brown:"801615679761022997",
	orange:"801613602440216617",
	yellow:"801615185096867871",
	green:"805430953958309908",
	blue:"805433136615653416",
	purple:"805435812786470932",
	pink:"883392571471200256",
	oreo: "879818433867436083"
})
keepAlive()
