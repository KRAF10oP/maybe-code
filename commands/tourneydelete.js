module.exports = [{
name: "tourneydelete",
$if: "v4",
aliases: "tourney-delete",
code: `$setServerVar[tourneyname;0] 
  $editIn[3s;{newEmbed: {description:<:tick:963055291719639150> **Completed** [Note- This command only resets the value and do not deletes the channels you have to delete channels manually.]}{color:GREEN}}]
$description[1;Please wait...]              $color[1;YELLOW]                            
$onlyIf[$message==$getServerVar[tourneyname];{newEmbed: {description::btt_error_dark: **Please give a valid tourney name**}{color:RED}}]
$onlyIf[$message[1]!=;{newEmbed: {description:**Command**: tourneydelete\n**Usage**\ntourneydelete <tourneyname>\n**Aliases**\ntourney-delete}  {color:RED}}]
$onlyBotPerms[managechannel;**❌ | I don't have enough perms to execute this command. Permissions missing:** \`MANAGE_CHANNELS\`]
$onlyPerms[admin;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED ADMIN PERMS TO EXECUTE THIS COMMAND**}{color:RED}}] 
$suppressErrors[An error occured]
`

}]