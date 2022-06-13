module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp2]] $setServerVar[smslots2;$sub[$getServerVar[smslots2];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags2];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots2]!=1;{execute:sm3!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags2];] $onlyIf[$getServerVar[over2]!=1;]  $onlyIf[$getServerVar[smreg2]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
