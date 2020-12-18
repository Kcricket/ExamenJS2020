var ejercicio1 = function(s,e) {for(var a=[],d=new Date(s);d<=e;d.setDate(d.getDate()+1)){ a.push(new Date(d));}return a;};

var daylist = ejercicio1(new Date("2018-05-01"),new Date("2018-07-01"));
daylist.map((v)=>v.toISOString().slice(0,10)).join("")
/*
Output:
    "2018-05-01
    2018-05-02
    2018-05-03
    ...
    2018-06-30
    2018-07-01"
*/
