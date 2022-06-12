module.exports = [{
name: "TEAM NAME -",
aliases: ['Team Name -', 'Team Name-', 'team name -', 'TEAM NAME-', 'team name-', 'team ', 'Team ', 'TEAM', 'team -', 'team1'],
nonPrefixed: true,
code:'$addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[tctags3];982999843767210026;956514158759776256]]  $onlyIf[$isBot[$mentioned[1;no]]!=true;<@$authorID>, You mentioned a bot which is not acceptable.] $onlyIf[$isBot[$mentioned[2;no]]!=true;<@$authorID>, You mentioned a bot which is not acceptable.]         $onlyIf[$isBot[$mentioned[3;no]]!=true;<@$authorID>, You mentioned a bot which is not acceptable.]            $onlyIf[$isBot[$mentioned[4;no]]!=true;<@$authorID>, You mentioned a bot which is not acceptable.]                           $onlyIf[$getServerVar[tagcheck3]==$channelID;]                         $suppressErrors[An Error Occured]'
}]
