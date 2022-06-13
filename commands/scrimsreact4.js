module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp4]] $setServerVar[smslots4;$sub[$getServerVar[smslots4];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags4];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots4]!=1;{execute:sm5!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags4];] $onlyIf[$getServerVar[over4]!=1;]  $onlyIf[$getServerVar[smreg4]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
