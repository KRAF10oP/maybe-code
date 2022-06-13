module.exports = [{
name: "",
nonPrefixed: true,
code:'$addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[tctags2];982999843767210026;956514158759776256]]  $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;]                           $onlyIf[$getServerVar[tagcheck2]==$channelID;]                         $suppressErrors[An Error Occured]'
}]
