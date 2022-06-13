module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp5]] $setServerVar[smslots5;$sub[$getServerVar[smslots5];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags5];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots5]!=1;{execute:sm6!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags5];] $onlyIf[$getServerVar[over5]!=1;]  $onlyIf[$getServerVar[smreg5]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
