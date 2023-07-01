const regex=/Catholic/g;
const str1 = "Nory was a Catholic because her mother was a Catholic, and Norry's mother was a Catholic because her father was a Catholic,her father was a Catholic because his mother was a Catholic,or had been."
document.write(str1);
document.write("<hr/><br/>",str1.replace(regex,"Hindu"));

var regex1=/nory/i;
var output=regex1.exec(str1);
document.write("<br/>",output);
console.log(output);
//test() method
var matchcase=regex1.test(str1);
document.write("<br/>",matchcase);

//Match() method
let txt="WHAT What what!!!"
let result=txt.match(/[What]/g);
document.write("<br/>",result);