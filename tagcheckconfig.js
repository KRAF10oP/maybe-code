module.exports = [
  {
name: "tagcheckconfig",
aliases: "tcconfig",
code: `$setServerVar[tcchannelid;$channelID] $setServerVar[tcconfigid;$get[config]] $let[config;$apiMessage[$channelID;;{newEmbed: {description:[Tagcheck Config 1](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck Channel**
<#$getServerVar[tagcheck1]>
2️⃣ **Number Of Tags**
$getServerVar[tctags1]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:➡️:2:tc2_$authorID:no} {button:1️⃣:2:tcone_$authorID:no}{button:2️⃣:2:tctwo_$authorID:no} {button:Save:success:tcsave_$authorID:no}{button:Save & Start:success:tcstartandsave_$authorID:no}};;;;;yes]] $onlyIf[$getServerVar[tcconfigid]==0;{newEmbed: {description:**Tag Check Config is already running somewhere make sure to save it before running another config.**\n\n**Can’t Find Config Message**❓\nUse \`tagcheckresetconfig\` **command.**}{color:00FF99}}] $suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] $onlyPerms[manageserver;<@$authorID>, **You need manage server perms to use tagcheck config.**]                                  `
},
{
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;tagcheck1;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Mention the channel where you want me to start tagcheck.}{color:GREEN}}] 

 $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tcone;] 
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] 

`
},
{
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;tctags1;{newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter Tags (Min: 1, Max:4)}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tctwo;]    $suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
},

  {
type: "interaction",
prototype: "button",
code: `$resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tcsave;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
{
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[tagcheck1];{newEmbed: {title:Tagcheck is now open!}{description:📣 $getServerVar[tctags1] mentions required!}{color:BLUE}}]  $resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done, Started Tagcheck In <#$getServerVar[tagcheck1]>**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tcstartandsave;]   
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**]`
  },
  {
 type: "interaction",
 prototype: "button",
 code: `$interactionUpdate[;{newEmbed: {description:[Tagcheck Config 2](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck2]>
2️⃣ **Number Of Tags**
$getServerVar[tctags2]} {footer:React with emojis to setup}{color:GREEN}};{actionRow: {button:➡️:2:tc3_$authorID:no}{button:1️⃣:2:2tcone_$authorID:no}{button:2️⃣:2:2tctwo_$authorID:no} {button:Save:success:2tcsave_$authorID:no}{button:Save & Start:success:2tcstartandsave_$authorID:no}}]  $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tc2;]      $suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
    
  },
  {
    type: "interaction",
    prototype: "button",
    code: `$awaitMessages[$channelID;$authorID;1m;everything;tagcheck2;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Mention a channel in which you want me to start the tagcheck.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==2tcone;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
  {
  type: "interaction",
  prototype: "button",
  code: `$awaitMessages[$channelID;$authorID;1m;everything;tctags2;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]                $interactionReply[;{newEmbed: {description:Enter Tags (Min: 1, Max: 4)}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==2tctwo;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
  {
type: "interaction",
prototype: "button",
code: `$resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==2tcsave;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
  {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[tagcheck2];{newEmbed: {title:Tagcheck is now open!}{description:📣 $getServerVar[tctags2] mentions required!}{color:BLUE}}]  $resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done, Started Tagcheck In <#$getServerVar[tagcheck2]>**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==2tcstartandsave;]   
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
      {
    type: "interaction",
    prototype: "button",
    code: `$awaitMessages[$channelID;$authorID;1m;everything;tagcheck3;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Mention a channel in which you want me to start the tagcheck.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==3tcone;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
      {
  type: "interaction",
  prototype: "button",
  code: `$awaitMessages[$channelID;$authorID;1m;everything;tctags3;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]                $interactionReply[;{newEmbed: {description:Enter Tags (Min: 1, Max: 4)}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==3tctwo;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
      {
type: "interaction",
prototype: "button",
code: `$resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==3tcsave;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
      {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[tagcheck3];{newEmbed: {title:Tagcheck is now open!}{description:📣 $getServerVar[tctags3] mentions required!}{color:BLUE}}]  $resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done, Started Tagcheck In <#$getServerVar[tagcheck3]>**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==3tcstartandsave;]   
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
      {
 type: "interaction",
 prototype: "button",
 code: `$interactionUpdate[;{newEmbed: {description:[Tagcheck Config 3](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck3]>
2️⃣ **Number Of Tags**
$getServerVar[tctags3]} {footer:React with emojis to setup}{color:GREEN}};{actionRow: {button:➡️:2:tc4_$authorID:no}{button:1️⃣:2:3tcone_$authorID:no}{button:2️⃣:2:3tctwo_$authorID:no} {button:Save:success:3tcsave_$authorID:no}{button:Save & Start:success:3tcstartandsave_$authorID:no}}]  $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tc3;]      $suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
    
  },
         {
    type: "interaction",
    prototype: "button",
    code: `$awaitMessages[$channelID;$authorID;1m;everything;tagcheck4;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Mention a channel in which you want me to start the tagcheck.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==4tcone;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
          {
  type: "interaction",
  prototype: "button",
  code: `$awaitMessages[$channelID;$authorID;1m;everything;tctags4;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]                $interactionReply[;{newEmbed: {description:Enter Tags (Min: 1, Max: 4)}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==4tctwo;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
          {
type: "interaction",
prototype: "button",
code: `$resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==4tcsave;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
          {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[tagcheck4];{newEmbed: {title:Tagcheck is now open!}{description:📣 $getServerVar[tctags4] mentions required!}{color:BLUE}}]  $resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done, Started Tagcheck In <#$getServerVar[tagcheck4]>**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==4tcstartandsave;]   
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
          {
 type: "interaction",
 prototype: "button",
 code: `$interactionUpdate[;{newEmbed: {description:[Tagcheck Config 4](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck4]>
2️⃣ **Number Of Tags**
$getServerVar[tctags4]} {footer:React with emojis to setup}{color:GREEN}};{actionRow: {button:➡️:2:tc5_$authorID:no}{button:1️⃣:2:4tcone_$authorID:no}{button:2️⃣:2:4tctwo_$authorID:no} {button:Save:success:4tcsave_$authorID:no}{button:Save & Start:success:4tcstartandsave_$authorID:no}}]  $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tc4;]      $suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
    
  },
             {
    type: "interaction",
    prototype: "button",
    code: `$awaitMessages[$channelID;$authorID;1m;everything;tagcheck5;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Mention a channel in which you want me to start the tagcheck.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==5tcone;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
              {
  type: "interaction",
  prototype: "button",
  code: `$awaitMessages[$channelID;$authorID;1m;everything;tctags5;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]                $interactionReply[;{newEmbed: {description:Enter Tags (Min: 1, Max: 4)}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==5tctwo;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
          {
type: "interaction",
prototype: "button",
code: `$resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==5tcsave;]
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
         {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[tagcheck5];{newEmbed: {title:Tagcheck is now open!}{description:📣 $getServerVar[tctags5] mentions required!}{color:BLUE}}]  $resetServerVar[tcconfigid] $deleteMessage[$getServerVar[tcconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done, Started Tagcheck In <#$getServerVar[tagcheck5]>**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==5tcstartandsave;]   
$suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
  },
              {
 type: "interaction",
 prototype: "button",
 code: `$interactionUpdate[;{newEmbed: {description:[Tagcheck Config 5](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Tagcheck channel**
<#$getServerVar[tagcheck5]>
2️⃣ **Number Of Tags**
$getServerVar[tctags5]} {footer:React with emojis to setup}{color:GREEN}};{actionRow: {button:1️⃣:2:5tcone_$authorID:no}{button:2️⃣:2:5tctwo_$authorID:no} {button:Save:success:5tcsave_$authorID:no}{button:Save & Start:success:5tcstartandsave_$authorID:no}}]  $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tc5;]      $suppressErrors[**An Error Occured Or This Tagcheck was reseted.**] `
    
  },
]