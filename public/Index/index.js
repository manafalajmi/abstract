(function() {

    var config = {
        apiKey: "AIzaSyB2AHxMq3E-C3B7tqPsp4b-tBhPntNb0s0",
        authDomain: "abstractplusplus.firebaseapp.com",
        databaseURL: "https://abstractplusplus.firebaseio.com",
        projectId: "abstractplusplus",
        storageBucket: "abstractplusplus.appspot.com",
        messagingSenderId: "330124492735"
    };
    firebase.initializeApp(config);

    const preObject = document.getElementById("object");

    const dbRefObject = firebase.database().ref().child('object');

    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 1);
    });

    const dbRefUsers = firebase.database().ref().child('users');
    //creates new users that get added to the database
    dbRefUsers.set({
        alanisawesome: {
            date_of_birth: "June 23, 1912",
            full_name: "Alan Turing"
        },
        gracehop: {
            date_of_birth: "December 9, 1906",
            full_name: "Grace Hopper"
        }
    });
}());