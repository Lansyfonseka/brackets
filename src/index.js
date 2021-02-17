module.exports = function check(str, bracketsConfig) {
    let rules = new RegExp(bracketsConfig.map(e => {
        console.log(typeof(e[0] - 1));
        if (e[0].search(/1|2|3|4|5|6|7|8|9/) != -1) return (e[0] + e[1])
        else
            return '\\' + e[0] + '\\' + e[1];
    }).join('|'));
    for (let i = str.length; i > 0; i--) {
        str = str.replace(rules, '');
    }
    return str == '' ? true : false;
}