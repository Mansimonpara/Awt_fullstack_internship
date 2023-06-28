
document.write("<br/>"+Number("3.14787859"));
document.write("<br/>"+Number(""));
document.write("<br/>"+Number(""));
document.write("<br/>"+Number("99 gh88"));
document.write("<hr/>");

let numfixed=3.14;
document.write("<br/>"+numfixed.toFixed());
document.write("<br/>"+numfixed.toFixed(2));
document.write("<br/>"+numfixed.toFixed(4));
document.write("<br/>"+numfixed.toFixed(6));
document.write("<hr/>");


let numexp=3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>"+numexp.toExponential(6));
document.write("<hr/>");

let numprec=3.14;
document.write("<br/>"+numprec.toPrecision(1));
document.write("<br/>"+numprec.toPrecision(2));
document.write("<br/>"+numprec.toPrecision(4));
document.write("<br/>"+numprec.toPrecision(6));
document.write("<hr/>");


document.write("<br/>"+Number(true));
document.write("<br/>"+Number(false));
document.write("<br/>"+Number("11"));
document.write("<br/>"+Number("11"));
document.write("<br/>"+Number("11 "));
document.write("<br/>"+Number("11 "));
document.write("<br/>"+Number("11.33"));
document.write("<br/>"+Number("11,33"));
document.write("<br/>"+Number("11 33"));
document.write("<br/>"+Number("ABC"));
document.write("<br/>"+Number(new Date("1978-01-01")));
document.write("<hr/>");


document.write("<br/>"+Number.MAX_VALUE);
document.write("<br/>"+Number.MIN_VALUE);
document.write("<br/>"+Number.POSITIVE_INFINITY);
document.write("<br/>"+Number.NEGATIVE_INFINITY);
document.write("<hr/>");

document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt("yrar is : 10"));
document.write("<hr/>");


document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10 20 30"));
document.write("<br/>"+parseFloat("yrar is : 10"));
document.write("<hr/>");

document.write("<br/>"+new Date());
document.write("<br/>"+new Date("1970-01-01"));
document.write("<br/>"+new Date(2018, 11, 24, 10, 33, 30, 0));
document.write("<br/>"+new Date("October 13,2014 11:13:00"));
document.write("<hr/>");

var d = new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.tUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());
document.write("<hr/>");

document.write("<br/>"+d.getTime());
document.write("<br/>"+d.getDate());
document.write("<br/>"+d.getDay());
document.write("<br/>"+d.getFullYear());
document.write("<br/>"+d.getHours());
document.write("<br/>"+d.getMonth());
document.write("<hr/>");











