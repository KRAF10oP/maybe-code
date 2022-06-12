module.exports = [
  {
    name: "setup idproletransfer",        
    aliases: "setupidproletransfer",
    code: `
 $setServerVar[idpchannelid;$channelID] $setServerVar[idpname;$message[3]]
 $setServerVar[idplogs;$mentionedChannels[1]]  $setServerVar[idprole;$mentionedRoles[1]] $setServerVar[idproletransfer;1]        
$setServerVar[idproletransferid;$get[irt]]           $let[irt;$apiMessage[$channelID;;{newEmbed: {author:Idp Role Transfer System:}{description:**__TO TRANSFER YOUR IDP ROLE TO A USER CLICK ON THE BUTTON ABOVE.__**}{thumbnail:$serverIcon}{color:00FF99}};{actionRow:{button:🚀 Transfer Role:3:idptransferrole:no}};;;;;yes]]   
$onlyIf[$getServerVar[idproletransfer]==none;<@$authorID>, Maximum Limit Reached.]        
$onlyIf[$rolePosition[$highestRole[$clientID;$guildID]]<$rolePosition[$mentionedRoles[1]];<@$authorID>, **This role is higher than me on role position**.]                        $onlyIf[$channelExists[$mentionedChannels[1]]==true;<@$authorID>, **The channel you mentioned does not exists.**]        $onlyIf[$roleExists[$mentionedRoles[1];$guildID]==true;<@$authorID>, **The role you mentioned is not in this server.**] $onlyIf[$message[3]!=;<@$authorID>, You Need To Give Some Name!]
 $onlyIf[$message[2]!=;{newEmbed:<@$authorID>{description:**Command**: setup idproletransfer\n**Usage**: setup idproletransfer <role> <logs channel> <some name>\n**Aliases**: setupidproletransfer}{color:RED}}]                                                 $onlyIf[$message[1]!=;{newEmbed:<@$authorID>{description:**Command**: setup idproletransfer\n**Usage**: setup idproletransfer <role> <logs channel> <some name>\n**Aliases**: setupidproletransfer}{color:RED}}]
    $onlyIf[$getServerVar[idproletransfer]==none;<@$authorID>, **This server already has a idp role transferer.**]
    
    $onlyPerms[admin;<@$authorID>, You Dont Have Admin Perms] $onlyBotPerms[manageroles;<@$authorID>, **I dont have manage_roles perm to execute this command.]      $suppressErrors[An Error Occured] 
    $suppressErrors[An Error Occured]
    `
  }, 
  {
    name: "idptransferrole",
    type: "interaction",
    prototype: "button",
    code: `
$sendDm[{newEmbed: {description:**Please Send User Id Of The User You Want To Give Role**}{footer:Example of user id - 726326726078103622}{color:00FF99}};$interactionData[author.id]] 
$awaitMessages[;$interactionData[author.id];30s;everything;idproletransfer;{newEmbed: {description:You Failed To Provide User Id In Time. Try Again!} {color:FF0000}};
{
"guild": "$guildID",                         "role": "$getServerVar[idprole]",
"author": "$interactionData[author.id]",
"log": "$getServerVar[idplogs]",
"guildname": "$guild"
};$interactionData[author.id]]

    
$interactionReply[;{newEmbed: {description:Check Dmes! (Make Sure Your Dmes Are Open.)}{color:00FF99}};;;;yes] $onlyIf[$hasRoles[$guildID;$interactionData[author.id];$getServerVar[idprole]]==true;<@$interactionData[author.id]>, **You Don't have idp role.**{delete:3s}]                 $suppressErrors[An Error Occured]
$onlyIf[$isUserDmEnabled[$interactionData[author.id]]==true;<@$interactionData[author.id]>, **Your Dmes Are Not Enabled! Try Again after enabling.** {delete:2s}]  
    
    
    `
  }, 

]