module.exports = [{
name: "info-idproletransfer",
aliases: "info idproletransfer",                    code: '$description[1;**Running IDP Role Transfer Requester Names** <:btt_join:956507122357633045>\n**Name: $getServerVar[idproletransfer]**]               $color[1;GREEN]
$onlyIf[$getServerVar[idproletransfer]==$message[1];<@$authorID>, Please provide a valid name.] $onlyIf[$getServerVar[idproletransfer]!=none;{newEmbed: {description:**This server does not have a running idproletransfer requestor, You Can Create One Using \`setup idproletransfer\` command.**}{color:00FF99}}]     $onlyPerms[manageserver;{newEmbed: {title:ERROR 0069}{field:ACCESS DENIED:**YOU NEED MANAGE_SERVER PERMS TO EXECUTE THIS COMMAND**}{color:RED}}]       $suppressErrors[An error occured]
'
}]