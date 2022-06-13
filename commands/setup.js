module.exports = [
  {
name: "setup",
aliases: "scrimssetup",
code: `$addButton[1;Cancel;4;setupcancel_$authorID;no;] $addButton[1;Confirm;3;setupconfirm_$authorID;no;] $description[1;Are you sure to create a \`flank-prime-logs\` named channel?] $color[1;00FF99] $onlyBotPerms[managechannel;<@$authorID>, I am missing manage channel perms to execute this command.] $onlyIf[$getServerVar[smsetup]==0;<@$authorID>, This server already has a logs channel in <#$getServerVar[smsetupchannelid]>.] $onlyPerms[manageserver;<@$authorID>, You dont have manage server perms to execute this command.]
$suppressErrors[An Error Occured]
`
},
  {
type: "interaction",
prototype: "button",
code: `$modifyChannelPerms[$guildID;$getServerVar[smsetupchannelid];-viewchannel] $channelSendMessage[$get[setupchannel];This channel will be used for sending logs, Dont delete this channel or bot’s commands will not work.] $setServerVar[smsetupchannelid;$get[setupchannel]] $let[setupchannel;$createChannel[$guildID;flank-prime-logs;Text;yes]]
$setServerVar[smsetup;1] $interactionUpdate[;{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:**<:Ccheck:980361177668390912> Setup completed all important logs will be sent there! Make sure dont delete the channel else bot’s command will not work.**}{color:2F3136}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setupconfirm;] $suppressErrors[An Error Occured]`
  },  {
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[~~Cancelled~~] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==setupcancel;] $suppressErrors[An Error Occured]`
  }
]