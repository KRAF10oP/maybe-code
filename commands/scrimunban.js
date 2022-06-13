module.exports = [{
name: "scrimunban",
aliases: "scrimsunban",
code: ` $channelSendMessage[$getServerVar[smsetupchannelid];<@$authorID>{newEmbed: {author:$userTag[$mentioned[1]]:$userAvatar[$mentioned[1]]}{description:$userTag[$authorID] unbanned <@$mentioned[1]> from scrims.}{timestamp}{color:00FF99}}]  $setUserVar[scrimbanned;0;$mentioned[1]]             $description[1;<:Ccheck:980361177668390912> | **Successfully unbanned <@$mentioned[1]> from scrims.**] $color[1;00FF99] $onlyIf[$getUserVar[scrimbanned;$mentioned[1];$guildID]==1;<@$authorID>, **This user is already unbanned from scrims.**] $onlyIf[$userExists[$mentioned[1]]==true;<@$authorID>, Mentioned user does not exists.]
$onlyIf[$message[1]!=;{newEmbed: {description:**Command**: scrimunban\n**Description**: Unban a user from registering in scrims.\n**Usage**: scrimunban <@user>\n**Aliases**: scrimsunban\n**Examples**: \`Command has no examples.\`}{color:BLUE}}]
$onlyPerms[manageserver;{newEmbed: {author:$userTag[$authorID]:$userAvatat[$authorID]}{description:**__You Need Manage Server Perm(s) to execute this command.}{color:RED}}]$suppressErrors[An Error Occured]`

}]