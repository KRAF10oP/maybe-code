module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp3]] $setServerVar[smslots3;$sub[$getServerVar[smslots3];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags3];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots3]!=1;{execute:sm4!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags3];] $onlyIf[$getServerVar[over3]!=1;]  $onlyIf[$getServerVar[smreg3]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
