module.exports = [{
name: "configreset",
aliases: "resetconfig",
code: `$resetServerVar[smchannelid] $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$getServerVar[smchannelid]]  $editIn[2s;{newEmbed: {description:✅ Done}{color:BLUE}}] $description[1;**Processing...**] $color[1;BLUE] $onlyPerms[manageserver;{newEmbed: {description:**__You Need Manage Server Perm To Execute This Command.}{color:BLUE}}]
$suppressErrors[An Error Occured]`
}]