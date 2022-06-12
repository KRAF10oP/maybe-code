module.exports = [{
name: "tagcheckresetconfig",
aliases: "tcresetconfig",
code: `$resetServerVar[tcchannelid] $resetServerVar[tcconfigid]
$deleteMessage[$getServerVar[tcconfigid];$getServerVar[tcchannelid]] $editIn[2s;{newEmbed: {description:✅ Done}{color:BLUE}}] $description[1;**Processing...**] $color[1;BLUE] $onlyPerms[manageserver;{newEmbed: {description:**__You Need Manage Server Perm To Execute This Command.}{color:BLUE}}]
$suppressErrors[An Error Occured]`
}]