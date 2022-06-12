module.exports = [{

name: "botinfo",

$if: "v4",

aliases: ['stats'],

code: `   
$title[1;Flank's Information]                   
$description[1;**__Bot Information__**\n<:reflex_dot:978671694426288148> **Servers**: $serverCount\n<:reflex_dot:978671694426288148> **Users**: $allMembersCount\n<:reflex_dot:978671694426288148> **Channels**: $allChannelsCount\n<:reflex_dot:978671694426288148> **Uptime**: $uptime\n\n**__Ping Information__**\n<:reflex_dot:978671694426288148> **Websocket**: $pingms\n<:reflex_dot:978671694426288148> **Database**: $dbPingms\n\n**__System Information__**\n<:reflex_dot:978671694426288148> **Total Ram**: $maxRam MB\n<:reflex_dot:978671694426288148> **Used Ram**: $ram MB\n<:reflex_dot:978671694426288148> **Free Ram**: $sub[$maxRam;$ram] MB\n\n**__Developer Information__**\n <:reflex_dot:978671694426288148> [Krypto#5707](https://discord.com/users/726326726078103622) & [Evill#6911](https://discord.com/users/784769547982077964)]
$color[1;#00FF99]
$suppressErrors[An error occured while executing this command please report this issue on our support server.]`

}]