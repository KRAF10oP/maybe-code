module.exports = [{
name: "TEAM NAME -",
aliases: ['Team Name -', 'Team Name-', 'team name -', 'TEAM NAME-', 'team name-', 'team ', 'Team ', 'TEAM', 'team -', 'team1'],
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp1]] $setServerVar[smslots1;$sub[$getServerVar[smslots1];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags1];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots1]!=1;{execute:sm2!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags1];] $onlyIf[$getServerVar[over1]!=1;]  $onlyIf[$getServerVar[smreg1]==$channelID;] $suppressErrors[An Error Occured]'
}]
