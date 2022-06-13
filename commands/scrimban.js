module.exports = [{
name: "scrimban",
aliases: "scrimsban",
code: `
$channelSendMessage[$getServerVar[smsetupchannelid];<@$authorID> {newEmbed: {author:$userTag[$mentioned[1]]:$userAvatar[$mentioned[1]]}{description:$userTag[$authorID] banned <@$mentioned[1]> from scrims.}{timestamp}{color:00FF99}}] $setUserVar[scrimbanned;1;$mentioned[1]]      $description[1;<:Ccheck:980361177668390912> | **Successfully banned <@$mentioned[1]> from scrims.**] $color[1;00FF99] $onlyIf[$getUserVar[scrimbanned;$mentioned[1];$guildID]==0;<@$authorID>, **This user is already banned from scrims.**] $onlyIf[$userExists[$mentioned[1]]==true;<@$authorID>, Mentioned user does not exists.]
$onlyIf[$message[1]!=;{newEmbed: {description:**Command**: scrimban\n**Description**: Ban a user from registering in scrims.\n**Usage**: scrimban <@user>\n**Aliases**: scrimsban\n**Examples**: \`Command has no examples.\`}{color:BLUE}}]
$onlyIf[$getServerVar[smsetup]==1;<@$authorID>, This server is not setuped. Use \`setup\` first.]
$onlyPerms[manageserver;{newEmbed: {author:$userTag[$authorID]:$userAvatat[$authorID]}{description:**__You Need Manage Server Perm(s) to execute this command.}{color:RED}}$suppressErrors[An Error Occured]`

}]