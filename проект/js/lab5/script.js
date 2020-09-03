document.write("privet");
var Tags;
for (i = 0; i< document.all.length; i++)
{Tags += document.all[i].tagName + "=" +(i+1)+ document.all[i].nodeType +'</br>'
}
document.write(Tags);
//document.all
/*var all = document.all;
//var all = document.getElementsByTagName("*");
var pip = all.length;

console.log(all);
document.write('</br>');
document.write(all);
document.write('</br>');
var index = 0;
for (index=0;index<pip;index++) {
	document.write(all[index]);
	document.write("  ");
	document.write("номер элемента: "+ index);
	document.write('</br>');

}*/
document.write('</br>');
document.write('Вывести все дочерние элементы узла document.body');
document.write('</br>');
var body = document.body.childNodes;
console.log(body);
var blen = body.length;
for (index=0;index<blen;index++) {
	document.write(body[index] + body[index].nodeType);
	document.write("  ");
	document.write("номер элемента: "+ index);
	document.write('</br>');

}
document.write('</br>');
let a = document.all[12].textContent;
console.log(a);
var b = a;
console.log(b);

let span2 = document.getElementsByTagName( "span")[0];
var span3 = document.getElementById(80).innerHTML;
 console.log(span3);
 /*
 let average;
 let sum = 0;
 let table = document.getElementsByTagName( qualifiedName: 'table')[1];
 for(let i=1;i<6;i++)
	 sum +=Number(table.rows[i].cells[2].textContent);
 average = sum/5;*/
 

let tabl = document.getElementsByTagName('table')[0];
let ind;
let summa = 0;
console.log(tabl);
for(ind=3;ind<8;ind++){
	summa += Number(tabl.rows[ind].cells[2].textContent);
	console.log(summa);
        console.log("IND =" + ind+" - "+tabl.rows[ind].cells[2].textContent);
}
var sredn = summa/5;
console.log("sredn - " + sredn);
let add = document.getElementById("sspan");
add.append(" ",sredn);
/*
var mark1 = +document.getElementById(1).innerHTML;
var mark2 = +document.getElementById(2).innerHTML;
var mark3 = +document.getElementById(3).innerHTML;
var mark4 = +document.getElementById(4).innerHTML;
var mark5 = +document.getElementById(5).innerHTML;
console.log(mark1);
console.log(mark2);
console.log(mark3);
console.log(mark4);
console.log(mark5);
var sredn = (mark1+mark2+mark3+mark4+mark5)/5;
console.log(sredn);
document.getElementById('sspan').innerHTML*/
