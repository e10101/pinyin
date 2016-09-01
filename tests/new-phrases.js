
var pinyin = require("../lib/index");

var hans = [
    "查看",
    "查岗",
    "查核",
    "查账"
];

hans.forEach(function(han) {
    console.log(han, pinyin(han, { heteronym: true, segment: true }));
});
