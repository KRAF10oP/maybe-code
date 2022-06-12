module.exports = [{
name: "tourneyhide",
$if: "v4",
aliases: "hide-tourney",
code: ` $modifyChannelPerms[$guildID;$findServerChannel[$getServerVar[tourneyname]];-viewchannel]       $editIn[3s;{newEmbed: {description:<:tick:963055291719639150> **Completed**}{color:GREEN}}]
$description[1;Please wait...]              $color[1;YELLOW]                            
$onlyIf[$message==$getServerVar[tourneyname];{newEmbed: {description:<:btt_error_dark:956513467626582046> **Please give a valid tourney name**}{color:RED}}]
$onlyIf[$message[1]!=;{newEmbed: {description:**Command**: tourneyhide\n**Usage**\ntourneyhide <tourneyname>\n**Aliases**\nhide-tourney}  {color:RED}}]
$onlyBotPerms[managechannel;**❌ | I don't have enough perms to execute this command. Permissions missing:** \`MANAGE_CHANNELS\`]
$onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**}{color:RED}}] 
$suppressErrors[An error occured]`

}]