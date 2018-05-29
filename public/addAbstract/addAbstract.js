class createAbstract {
    constructor(abzt, expl, id) {
        //check if abzt and expl are lists of the same length == length
        this.abzt = abzt;
        this.expl = expl;
        this.id = id;
        //add getter and setter functions
    }
}
class fullAbstract {
    constructor(name, abstracts, length) {
        //check if abzt and expl are lists of the same length == length
        this.name = name;
        this.abstracts = abstracts;
        this.length = length;
        //add getter and setter functions
    }
}


function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);
    //inserting new rows
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    //creating text boxes to go into the ce;;s
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello World!");
    x.setAttribute("id", "Abz");

    x2 = document.createElement("INPUT");
    x2.setAttribute("type", "text");
    x2.setAttribute("value", "Hello World!");
    x2.setAttribute("id", "work")

    //add text boxes to rows
    cell1.appendChild(x);
    cell2.appendChild(x2);
}


function submitAbstract() {

    var config = {
        apiKey: "AIzaSyB2AHxMq3E-C3B7tqPsp4b-tBhPntNb0s0",
        authDomain: "abstractplusplus.firebaseapp.com",
        databaseURL: "https://abstractplusplus.firebaseio.com",
        projectId: "abstractplusplus",
        storageBucket: "abstractplusplus.appspot.com",
        messagingSenderId: "330124492735"
    };
    firebase.initializeApp(config);


    var table = document.getElementById("myTable");
    //  var size = table.rows.length;
    var pleaseOGod = document.querySelectorAll('#work');
    var pleaseOYamen = document.querySelectorAll('#Abz');

    var size = pleaseOGod.length;
    const dbRefUsers = firebase.database().ref().child('Abstracts');

    //creates new users that get added to the database

    var abzt;
    var expl;
    var abstractd = [];

    for (var i = 0; i < size; i++) {

        console.log(pleaseOGod.item(i).value);
        abzt = pleaseOGod.item(i).value;
        expl = pleaseOYamen.item(i).value;

        var abstract = new createAbstract(abzt, expl, i);
        console.log(abstract.abzt);
        abstractd.push(abstract);

        //console.log(table.rows[i].cells[0].value);
        //table.rows[i].cells[1].child.value = "fuck this shit"

        //console.log(pleaseOGod.value);
    }
    console.log(abstractd[0].abzt);
    var fllAbstract = new fullAbstract("fuck you gagan the complete edition", abstractd, abstractd.length)

    var myJson = JSON.stringify(fllAbstract);
    //var myobj = JSON.parse(myJson);

    //console.log(myobj);
    //console.log(myobj.abzt);
    //console.log(myobj.abzt[0]);
    //console.log(myJson);
    dbRefUsers.update({
        "fuckYouGagan4": {
            abstractObject: "" + myJson
        },

    });

}