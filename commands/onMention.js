module.exports = [{
name: "<@$clientID>",
$if: "v4",
nonPrefixed: true,
code: `
$color[1;#2F3136]
$author[1;$userTag[$clientID];$userAvatar[$clientID]]
$description[1;**Hello <@$authorID>, I am <@$clientID> i was made to help esport servers by my commands.
My prefix for this server is \`a!\`

About Me -
I was made by Krypto & Yash**]
$footer[1;Type a!help to see my available commands]
$addButton[1;Invite Me!;5;https://dsc.gg/scrimsmodinv]
$addButton[1;Support Server!;5;https://discord.gg/9V5Eb8W8pT]
$suppressErrors[An error occured while executing this command please report this issue on our support server. https://discord.gg/9V5Eb8W8pT]
`

}]
