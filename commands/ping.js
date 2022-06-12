module.exports = [{
name: "ping",                           $if: "v4",
code: `$title[1;Ping Information] $description[1;<:reflex_dot:978671694426288148> **Websocket**: $pingms\n<:reflex_dot:978671694426288148> **Database**: $dbPingms]
$color[1;#00FF99]
$suppressErrors[An error occured while executing this command please report this issue on our support server. https://discord.gg/9V5Eb8W8pT] 
`
}]


