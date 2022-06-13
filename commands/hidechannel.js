module.exports = [{
name: "hide",
code: `$modifyChannelPerms[$guildID;$channelID;-viewchannel] <:emoji_104:982999843767210026> | <#$channelID> is now hidden from the \`@everyone\` role. $onlyBotPerms[managechannel;{newEmbed:{description:<:btt_EC_error:956514158759776256> | **$userTag[$authorID]** Bot Requires Manage Channel permission(s) to run this command.}{color:2F3136}}]     $onlyPerms[managechannel;<@$authorID>, **YOU DONT HAVE MANAGE CHANNEL PERMS TO EXECUTE THIS COMMAND**] $suppressErrors[An Error Occured]`

}]