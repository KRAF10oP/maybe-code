module.exports = [{
name: "purge",
$if: "v4",
aliases: ['clear'],
code: `$clear[$message[1]]
$description[1;<:tick:963055291719639150> | Sucessfully purged $message[1] messages.]
$color[1;#2F3136]
$deleteIn[3s]
$onlyIf[$noMentionMessage<=500; **You can eliminate 2-500 messages per command**]
$onlyIf[$noMentionMessage>=2;**You can eliminate 2-500 messages per command**]
$onlyIf[$noMentionMessage!=;** Add a number to delete the messages**, **Try:** \`$getServerVar[prefix]purge <number>\`]
$onlyIf[$isNumber[$noMentionMessage]==true;Choose the number of messages to delete! **Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$message[1]!=;**Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyBotPerms[managemessages;**I don't have \`MANAGE_MESSAGES\` permissions to use this command**]
$onlyPerms[managemessages;**You dont have this perm to delete messages:** __**Manage Messages**__]
$suppressErrors[An error occured while executing this command please report this issue on our support server. https://discord.gg/9V5Eb8W8pT] 
`
}]
