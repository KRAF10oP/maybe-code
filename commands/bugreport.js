module.exports = [{
name: "bugreport",
$if: "v4",
aliases: ['report'],
code: `   
$description[1;<:tick:963055291719639150> | Successfully submitted your report.]
$color[1;2F3136]
$channelSendMessage[973432895110791239;$usertag Reported, $message]
$cooldown[10s;You are on a cooldown]
$onlyIf[$message!=;**<:btt_error_dark:956513467626582046> | Please specify the bug. Correct usage:** \`$getServerVar[prefix]bugreport <bug>\`]
$suppressErrors[An error occured while executing this command please report this issue on our support server. https://discord.gg/9V5Eb8W8pT]`

}]
