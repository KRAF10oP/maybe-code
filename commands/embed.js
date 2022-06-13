module.exports = ({
 name: 'embedcreate',
 aliases: 'embed',
 code: `
$djsEval[
const simplydjs = require('simply-djs')
simplydjs.embedCreate(message, {
embedFoot: 'Made with 💖 by Krypto',
credit: false,
})
]
$onlyPerms[manageserver;<@$authorID>, you dont have manage server perm to create an embed.]
$suppressErrors[An Error Occured]`
}) 
