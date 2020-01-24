var authLogin = function () {
  $('.btn-login').click(function (e) {
    e.preventDefault();
    var user_email = $('#userEmail').val();
    var user_password = $('#userPassword').val();
    if (user_email == "" || user_password == "") {
      Swal.fire({
        type: 'error',
        title: "Missing info",
        text: "Fill up the required fields"
      })
    } else {
      var rootRef = firebase.database().ref().child("Users");
      rootRef.orderByChild("userEmail").equalTo(user_email).once("value", function (snapshot) {
        // if data exists
        if (snapshot.exists()) {
          snapshot.forEach(function (childSnapshot) {
            var password = childSnapshot.val().userPassword;
            var useremail = childSnapshot.val().userEmail;
            var username = childSnapshot.val().userFirstName + " " + childSnapshot.val().userLastName;
            var userID = childSnapshot.val().userID;
            var userRole = childSnapshot.val().userRole;
            if (user_email !== useremail || user_password !== password) {
              Swal.fire({
                type: 'error',
                title: "Email or Password",
                text: "Invalid email or password"
              })
            } else {
              localStorage.setItem("site_username", username);
              localStorage.setItem("site_email", useremail);
              localStorage.setItem("site_userID", userID);
              localStorage.setItem("site_userPW", password);
              localStorage.setItem("site_role", userRole);
              
              window.location = "dashboard/user/index.html";
            }
          });
        } else {
          Swal.fire({
            type: 'error',
            title: "Email Verification",
            text: "Email doesn't exist"
          })
        }
      });
    }
  })
}
var logoutUser = function(){
  $(".logoutUser").click(function(){  
    localStorage.removeItem("site_username");
    localStorage.removeItem("site_email");
    localStorage.removeItem("site_userID");
    localStorage.removeItem("site_userPW");
    localStorage.removeItem("site_role");

    window.location = "../../index.html";
  })
}
//register module
var addUser = function () {
  $('.btn-add-user').click(function () {

    var user_fname = $('#userFname').val();
    var user_lname = $('#userLname').val();
    var user_email = $('#userEmail').val();
    var user_pw = $('#userPassword').val();

    if (user_fname != "" && user_lname != "" && user_email != "" && user_pw != "") {
      var regex = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      if (regex.test(user_email)) {
        var rootRef = firebase.database().ref().child("Users");
        rootRef.orderByChild("userEmail").equalTo(user_email).once("value", function (snapshot) {
          // if data exists
          if (snapshot.exists()) {
            Swal.fire({
              type: 'error',
              title: "Email Verification",
              text: "Email already exists."
            })
          } else {
            var root = firebase.database().ref().child("Users");
            var key = root.push().key;
    
            root.child(key).child("userID").set(key);
            root.child(key).child("userFirstName").set(user_fname);
            root.child(key).child("userLastName").set(user_lname);
            root.child(key).child("userEmail").set(user_email);
            root.child(key).child("userPassword").set(user_pw);
            root.child(key).child("userRole").set("User");
            Swal.fire(
              'Good job!',
              'You added a new user!',
              'success'
            )
            $('#userFname').val("");
            $('#userLname').val("");
            $('#userEmail').val("");
            $('#userPassword').val("");
          }
        });
      } else {
        Swal.fire({
          type: 'error',
          title: "Invalid Email",
          text: "Please enter a valid email"
        })
      }
    } else {
      Swal.fire({
        type: 'error',
        title: "Missing info",
        text: "Fill up the required fields"
      })
    }
  })
}
//set select option on the add report
var setBarangays = function (){
  var barangays = {
    "Bagong Ilog"	:	"Bagong Ilog",
    "Bagong Katipunan"	:	"Bagong Katipunan",
    "Bambang"	:	"Bambang",
    "Buting"	:	"Buting",
    "Caniogan"	:	"Caniogan",
    "Dela Paz"	:	"Dela Paz",
    "Kalawaan"	:	"Kalawaan",
    "Kapasigan"	:	"Kapasigan",
    "Kapitolyo"	:	"Kapitolyo",
    "Malinao"	:	"Malinao",
    "Manggahan"	:	"Manggahan",
    "Maybunga"	:	"Maybunga",
    "Oranbo"	:	"Oranbo",
    "Palatiw"	:	"Palatiw",
    "Pinagbuhatan"	:	"Pinagbuhatan",
    "Pineda"	:	"Pineda",
    "Rosario"	:	"Rosario",
    "Sagad"	:	"Sagad",
    "San Antonio"	:	"San Antonio",
    "San Miguel"	:	"San Miguel",
    "Sta. Lucia"	:	"Sta. Lucia",
    "Santolan"	:	"Santolan",
    "San Joaquin"	:	"San Joaquin",
    "San Jose"	:	"San Jose",
    "San Nicolas"	:	"San Nicolas",
    "Sta. Cruz"	:	"Sta. Cruz",
    "Sta. Rosa"	:	"Sta. Rosa",
    "Sto. Tomas"	:	"Sto. Tomas",
    "Sumilang"	:	"Sumilang",
    "Ugong"	:	"Ugong"
  }
  var select = document.getElementById("barangay");
  for(index in barangays) {
      select.options[select.options.length] = new Option(barangays[index], index);
  }
}
var setStreets = function (){
  var streets = {
    "#8 Jenny's Avenue Ext."	:	"#8 Jenny's Avenue Ext.",
    "10 M.San Buenaventura"	:	"10 M.San Buenaventura",
    "11 Pioneer"	:	"11 Pioneer",
    "14 V. Pozon Street"	:	"14 V. Pozon Street",
    "15 Escriva Drive"	:	"15 Escriva Drive",
    "195 Teachers Village"	:	"195 Teachers Village",
    "199 F.Legaspi"	:	"199 F.Legaspi",
    "1st"	:	"1st",
    "220 M.H. del Pilar Street"	:	"220 M.H. del Pilar Street",
    "2nd"	:	"2nd",
    "3rd"	:	"3rd",
    "A Esguerra"	:	"A Esguerra",
    "A. Luna Street"	:	"A. Luna Street",
    "A. Mabini Street"	:	"A. Mabini Street",
    "A. Sandoval Avenue"	:	"A. Sandoval Avenue",
    "A. Victorino"	:	"A. Victorino",
    "A.B Cruz"	:	"A.B Cruz",
    "A.Flores"	:	"A.Flores",
    "ADB Avenue"	:	"ADB Avenue",
    "Aguho"	:	"Aguho",
    "Airtime Anywhere Incorporated"	:	"Airtime Anywhere Incorporated",
    "Alcalde Jose"	:	"Alcalde Jose",
    "Alfonso"	:	"Alfonso",
    "Amang Rodriguez Avenue"	:	"Amang Rodriguez Avenue",
    "Amber Drive"	:	"Amber Drive",
    "Amethyst Street"	:	"Amethyst Street",
    "Angeles"	:	"Angeles",
    "AutoCamp Access Road"	:	"AutoCamp Access Road",
    "Bagong Ilog"	:	"Bagong Ilog",
    "Bambang"	:	"Bambang",
    "Barangay Dela Paz"	:	"Barangay Dela Paz",
    "Bernal Street"	:	"Bernal Street",
    "Bonifacio Ave"	:	"Bonifacio Ave",
    "Brgy. Dela Paz"	:	"Brgy. Dela Paz",
    "Brixton"	:	"Brixton",
    "Buting"	:	"Buting",
    "C. Raymundo Avenue"	:	"C. Raymundo Avenue",
    "Caniogan"	:	"Caniogan",
    "Capt. Henry P. Javier"	:	"Capt. Henry P. Javier",
    "Carlos J.Caparas"	:	"Carlos J.Caparas",
    "Caruncho Avenue"	:	"Caruncho Avenue",
    "Caruncho Road"	:	"Caruncho Road",
    "Celery Drive"	:	"Celery Drive",
    "Christian Route"	:	"Christian Route",
    "Coconut"	:	"Coconut",
    "Col. P. Licsi Street"	:	"Col. P. Licsi Street",
    "Concepcion Street"	:	"Concepcion Street",
    "De Castro Avenue"	:	"De Castro Avenue",
    "De Castro"	:	"De Castro",
    "Dela Paz"	:	"Dela Paz",
    "Delie"	:	"Delie",
    "Don M. Melendres"	:	"Don M. Melendres",
    "Doña Julia Vargas Avenue, Ortigas Home Depot"	:	"Doña Julia Vargas Avenue, Ortigas Home Depot",
    "Doña Julia Vargas Avenue"	:	"Doña Julia Vargas Avenue",
    "Dr Sixto Antonio Avenue"	:	"Dr Sixto Antonio Avenue",
    "Dr. Pilapil Street"	:	"Dr. Pilapil Street",
    "Dr. Sixto Antonio Avenue"	:	"Dr. Sixto Antonio Avenue",
    "E Amang Rodriguez Avenue"	:	"E Amang Rodriguez Avenue",
    "E Mendoza"	:	"E Mendoza",
    "E. Amang Rodriguez Avenue"	:	"E. Amang Rodriguez Avenue",
    "E. Concepcion Street"	:	"E. Concepcion Street",
    "E. Mendoza"	:	"E. Mendoza",
    "E.Abello"	:	"E.Abello",
    "East Bank Road"	:	"East Bank Road",
    "East Capitol Dr"	:	"East Capitol Dr",
    "Elizco Road"	:	"Elizco Road",
    "Emerald Avenue"	:	"Emerald Avenue",
    "Emerald Drive"	:	"Emerald Drive",
    "Emerald to Garnet Passage"	:	"Emerald to Garnet Passage",
    "Eulogio Rodriguez Jr Avenue"	:	"Eulogio Rodriguez Jr Avenue",
    "Eulogio Rodriguez Jr. Avenue"	:	"Eulogio Rodriguez Jr. Avenue",
    "Eusebio"	:	"Eusebio",
    "Evangelista Avenue"	:	"Evangelista Avenue",
    "Evangelista St."	:	"Evangelista St.",
    "Evangelista Street"	:	"Evangelista Street",
    "Everlasting Street"	:	"Everlasting Street",
    "Exchange Road"	:	"Exchange Road",
    "F Andres"	:	"F Andres",
    "F Manalo"	:	"F Manalo",
    "F. Concepcion"	:	"F. Concepcion",
    "F. Cruz"	:	"F. Cruz",
    "F. M. Zablan Road"	:	"F. M. Zablan Road",
    "F. Manalo"	:	"F. Manalo",
    "F. Pasco Avenue"	:	"F. Pasco Avenue",
    "F.Banag"	:	"F.Banag",
    "Francisco Legaspi"	:	"Francisco Legaspi",
    "Frontera Drive, Frontera Verde"	:	"Frontera Drive, Frontera Verde",
    "Frontera Drive"	:	"Frontera Drive",
    "G. Coching"	:	"G. Coching",
    "G. S. Sulit Road"	:	"G. S. Sulit Road",
    "Gardner Street"	:	"Gardner Street",
    "Garnet Road"	:	"Garnet Road",
    "Gen. Capinpin"	:	"Gen. Capinpin",
    "Gen. Roxas"	:	"Gen. Roxas",
    "Gen.Araneta"	:	"Gen.Araneta",
    "Gen.Delgado"	:	"Gen.Delgado",
    "Gen.Lim"	:	"Gen.Lim",
    "Gen.Lukban"	:	"Gen.Lukban",
    "Gen.Malvar"	:	"Gen.Malvar",
    "Glorietta"	:	"Glorietta",
    "Gold Loop"	:	"Gold Loop",
    "Gomez Street"	:	"Gomez Street",
    "Green Meadows Avenue"	:	"Green Meadows Avenue",
    "Hillcrest Drive"	:	"Hillcrest Drive",
    "Hon. Benito Soliven Ave"	:	"Hon. Benito Soliven Ave",
    "I. Borja Street"	:	"I. Borja Street",
    "Industria"	:	"Industria",
    "J.B. Miguel"	:	"J.B. Miguel",
    "Jade Drive"	:	"Jade Drive",
    "Jose C.Cruz"	:	"Jose C.Cruz",
    "Jose Feliciano"	:	"Jose Feliciano",
    "Julia Vargas Bridge"	:	"Julia Vargas Bridge",
    "Kaginhawaan"	:	"Kaginhawaan",
    "Kalawaan"	:	"Kalawaan",
    "Kalawakan"	:	"Kalawakan",
    "Kalinangan Street"	:	"Kalinangan Street",
    "Kaparangan"	:	"Kaparangan",
    "Kapasigan"	:	"Kapasigan",
    "Kapayapaan"	:	"Kapayapaan",
    "Kapitolyo"	:	"Kapitolyo",
    "La Paz"	:	"La Paz",
    "Lanusa Avenue"	:	"Lanusa Avenue",
    "Lanuza Avenue"	:	"Lanuza Avenue",
    "Las Fiestas, Frontera Verde"	:	"Las Fiestas, Frontera Verde",
    "Las Tiendas"	:	"Las Tiendas",
    "Ligaya MMDA Footbridge"	:	"Ligaya MMDA Footbridge",
    "London"	:	"London",
    "Lourdes"	:	"Lourdes",
    "M. Concepcion Avenue"	:	"M. Concepcion Avenue",
    "M. D. Camacho Road"	:	"M. D. Camacho Road",
    "M. de Leon"	:	"M. de Leon",
    "M. Suarez Avenue"	:	"M. Suarez Avenue",
    "M.H. del Pilar Street"	:	"M.H. del Pilar Street",
    "Magsaysay"	:	"Magsaysay",
    "Malinao"	:	"Malinao",
    "Manggahan"	:	"Manggahan",
    "Marcos Highway"	:	"Marcos Highway",
    "Market Avenue"	:	"Market Avenue",
    "Maybunga"	:	"Maybunga",
    "Medical City Bus Stop"	:	"Medical City Bus Stop",
    "Meralco Avenue Flyover"	:	"Meralco Avenue Flyover",
    "Meralco Avenue"	:	"Meralco Avenue",
    "Meralco Street"	:	"Meralco Street",
    "Meralco"	:	"Meralco",
    "Mercedes Avenue"	:	"Mercedes Avenue",
    "Miguel Melendes Sr"	:	"Miguel Melendes Sr",
    "Molave"	:	"Molave",
    "Monaco Street"	:	"Monaco Street",
    "Narra"	:	"Narra",
    "Nipa"	:	"Nipa",
    "Oakwood"	:	"Oakwood",
    "Octagon"	:	"Octagon",
    "Oliva"	:	"Oliva",
    "Onyx Road"	:	"Onyx Road",
    "Opal Road"	:	"Opal Road",
    "Oranbo Drive"	:	"Oranbo Drive",
    "Oranbo"	:	"Oranbo",
    "Ortigas Avenue Extension"	:	"Ortigas Avenue Extension",
    "Ortigas Avenue"	:	"Ortigas Avenue",
    "Overpass"	:	"Overpass",
    "P. Burgos"	:	"P. Burgos",
    "P. Gomez Street"	:	"P. Gomez Street",
    "P. Tuazon"	:	"P. Tuazon",
    "P.Visitacion"	:	"P.Visitacion",
    "Padre Lupo"	:	"Padre Lupo",
    "Pag-asa Street"	:	"Pag-asa Street",
    "Palatiw"	:	"Palatiw",
    "Palmdale Heights Sandoval Avenue"	:	"Palmdale Heights Sandoval Avenue",
    "Palmdale Heights"	:	"Palmdale Heights",
    "Parsley Lane Ext."	:	"Parsley Lane Ext.",
    "Pasig Blvd"	:	"Pasig Blvd",
    "Pasig Boulevard Extension"	:	"Pasig Boulevard Extension",
    "Pasig Boulevard"	:	"Pasig Boulevard",
    "Pasig City, Philippines"	:	"Pasig City, Philippines",
    "Pearl Drive"	:	"Pearl Drive",
    "Pearl"	:	"Pearl",
    "Petchay"	:	"Petchay",
    "Physics St."	:	"Physics St.",
    "Pinagbuhatan"	:	"Pinagbuhatan",
    "Pineda"	:	"Pineda",
    "Pres. Aguinaldo"	:	"Pres. Aguinaldo",
    "Pres. Quezon"	:	"Pres. Quezon",
    "Rev. Dumandan"	:	"Rev. Dumandan",
    "Riverside Dr"	:	"Riverside Dr",
    "Road E, Frontera Verde"	:	"Road E, Frontera Verde",
    "Robinson Galleria, Ortigas Avenue"	:	"Robinson Galleria, Ortigas Avenue",
    "Rosario"	:	"Rosario",
    "Rosemary Avenue"	:	"Rosemary Avenue",
    "Royal Palm"	:	"Royal Palm",
    "RSG Shortcut"	:	"RSG Shortcut",
    "Ruby Road"	:	"Ruby Road",
    "S Santos"	:	"S Santos",
    "Sagad"	:	"Sagad",
    "San Agustin"	:	"San Agustin",
    "San Antonio"	:	"San Antonio",
    "San Ignacio"	:	"San Ignacio",
    "San Jose"	:	"San Jose",
    "San Juaquin"	:	"San Juaquin",
    "San Miguel Avenue"	:	"San Miguel Avenue",
    "San Miguel"	:	"San Miguel",
    "San Nicolas"	:	"San Nicolas",
    "San Pablo"	:	"San Pablo",
    "San Rafael Street"	:	"San Rafael Street",
    "Santa Lucia"	:	"Santa Lucia",
    "Santo Tomas"	:	"Santo Tomas",
    "Santolan"	:	"Santolan",
    "Sapphire Rd"	:	"Sapphire Rd",
    "Sapphire Road"	:	"Sapphire Road",
    "Service Road"	:	"Service Road",
    "Sgt.G.Santos"	:	"Sgt.G.Santos",
    "Sgt.L.Pasua"	:	"Sgt.L.Pasua",
    "Shaw Boulevard"	:	"Shaw Boulevard",
    "South Drive"	:	"South Drive",
    "Sta Rosa"	:	"Sta Rosa",
    "Sta Teresita"	:	"Sta Teresita",
    "Sta. Lucia"	:	"Sta. Lucia",
    "Sta. Maria Phase IV"	:	"Sta. Maria Phase IV",
    "Sta. Rosa de Lima"	:	"Sta. Rosa de Lima",
    "Stella Maris Avenue"	:	"Stella Maris Avenue",
    "Stella Maris"	:	"Stella Maris",
    "Sto. Niño"	:	"Sto. Niño",
    "Sto. Tomas"	:	"Sto. Tomas",
    "Temple Drive"	:	"Temple Drive",
    "Topaz Road"	:	"Topaz Road",
    "Topaz Road"	:	"Topaz Road",
    "Tramo"	:	"Tramo",
    "U-Turn Slot"	:	"U-Turn Slot",
    "Ugong"	:	"Ugong",
    "United Street"	:	"United Street",
    "Urbano Velasco Avenue"	:	"Urbano Velasco Avenue",
    "Victoriano Baltazar"	:	"Victoriano Baltazar",
    "W Capitol Drive"	:	"W Capitol Drive",
    "West Bank Road"	:	"West Bank Road",
    "West Capitol Dr"	:	"West Capitol Dr"
  }
  var select = document.getElementById("street");
  for(index in streets) {
      select.options[select.options.length] = new Option(streets[index], index);
  }
}
//add report
var addReport = function (){
  $(".btn-submit-report").click(function(){

    var typeOfReport = $("#typeOfReport").val();
    var street = $("#street").val();
    var barangay = $("#barangay").val();
    var city = "Pasig City";
    var date = $("#date").val();
    var time = $("#time").val();
    var description = $("#descriptionOfReport").val();
    var storageUserID = localStorage.getItem("site_userID");
    var storageUserRole = localStorage.getItem("site_role");
    var userID = $("#user").val();
    if(typeOfReport != "" && street != "" && barangay != "" && date != "" && time != "" && description != ""){
      var root = firebase.database().ref().child("Reports");
      var key = root.push().key;
      console.log(userID)
      console.log(storageUserID)
      console.log(storageUserRole)
        if(storageUserRole == "User"){
          root.child(key).child("id").set(key);
          root.child(key).child("userID").set(storageUserID);
          root.child(key).child("TypeOfReport").set(typeOfReport);
          root.child(key).child("street").set(street);
          root.child(key).child("barangay").set(barangay);
          root.child(key).child("city").set(city);
          root.child(key).child("date").set(date);
          root.child(key).child("time").set(time);
          root.child(key).child("description").set(description);
          root.child(key).child("status").set("Unconfirmed");
        }else{
          root.child(key).child("id").set(key);
          root.child(key).child("userID").set(userID);
          root.child(key).child("TypeOfReport").set(typeOfReport);
          root.child(key).child("street").set(street);
          root.child(key).child("barangay").set(barangay);
          root.child(key).child("city").set(city);
          root.child(key).child("date").set(date);
          root.child(key).child("time").set(time);
          root.child(key).child("description").set(description);
          root.child(key).child("status").set("Unconfirmed");
        }

        Swal.fire(
          'Good job!',
          'You added a new report!',
          'success'
        )
        $("#date").val("");
        $("#time").val("");
        $("#descriptionOfReport").val("");

    }else{
      Swal.fire({
        type: 'error',
        title: "Missing info",
        text: "Fill up the required fields"
      })
    }
  })
}
// view reports per user
var viewReports = function(){
  var storageUserID = localStorage.getItem("site_userID");
  var storageUserRole = localStorage.getItem("site_role");
  //view reports for users
  if(storageUserRole == 'User'){
    var table = $('#reportTable').DataTable();
    var rootRef = firebase.database().ref().child("Reports").orderByChild("userID").equalTo(storageUserID);
    rootRef.on("child_added", snap => {
      var userID = snap.child("userID").val();
      var ref = firebase.database().ref().child("Users").orderByChild("userID").equalTo(userID);
      ref.on("child_added", snapShot => {

        var dataSet = [snapShot.child("userFirstName").val()+ " "+ snapShot.child("userLastName").val(), snap.child("TypeOfReport").val(), snap.child("street").val(), snap.child("barangay").val(), 
        snap.child("date").val(),snap.child("time").val(), snap.child("description").val(), snap.child("status").val(),
        "<button type=\"button\" class=\"btn btn-danger\" id=\"cancel-"+snap.child("id").val()+"\"><i class=\"fas fa-minus-circle\"></i></button>"];
        table.rows.add([dataSet]).draw();
  
        //cancel appointment
        $("#cancel-"+snap.child("id").val()).click(function (){
          Swal.fire({
            title: 'Are you sure you want to cancel your appointment?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Proceed'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Cancelled!',
                'Your appointment has been cancelled.',
                'success'
              )
              let report = firebase.database().ref("Reports/" + snap.child("id").val());
              report.remove();
            }
          })
        })
      });
    });
  }else{
    var table = $('#reportTable').DataTable();
    var rootRef = firebase.database().ref().child("Reports");
    rootRef.on("child_added", snap => {
        var userID = snap.child("userID").val();
        var ref = firebase.database().ref().child("Users").orderByChild("userID").equalTo(userID);
        ref.on("child_added", snapShot => {

          var dataSet = [snapShot.child("userFirstName").val()+ " "+ snapShot.child("userLastName").val(), snap.child("TypeOfReport").val(), snap.child("street").val(), snap.child("barangay").val(), 
          snap.child("date").val(),snap.child("time").val(), snap.child("description").val(),snap.child("status").val(),
          "<button type=\"button\" class=\"btn btn-warning mr-2\" id=\"edit-"+snap.child("id").val()+"\"><i class=\"fas fa-edit\"></i></button>"+
          "<button type=\"button\" class=\"btn btn-danger\" id=\"cancel-"+snap.child("id").val()+"\"><i class=\"fas fa-minus-circle\"></i></button>"];
          table.rows.add([dataSet]).draw();

          //change status
          $("#edit-"+snap.child("id").val()).click(function (){
            Swal.fire({
              title: 'Confirm appointment?',
              text: "Check all details before confirming it!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then((result) => {
              if (result.value) {
                console.log(result.value)
                Swal.fire(
                  'Confirmed!',
                  snapShot.child("userFirstName").val()+ " "+ snapShot.child("userLastName").val()+'s ' +'appointment has been confirmed.',
                  'success'
                )
                var reportID = snap.child("id").val();
                var rootRef = firebase.database().ref().child("Reports").child(reportID);
                console.log(reportID)
                rootRef.child("status").set("Confirmed");
              }
            })
          })
        
          //cancel appointment
          $("#cancel-"+snap.child("id").val()).click(function (){
            Swal.fire({
              title: 'Are you sure you want to cancel your appointment?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Proceed'
            }).then((result) => {
              if (result.value) {
                console.log(result.value)
                Swal.fire(
                  'Cancelled!',
                  'Your appointment has been cancelled.',
                  'success'
                )
                let report = firebase.database().ref("Reports/" + snap.child("id").val());
                report.remove();
              }
            })
          })
        });
    });
  }
}


// view reports per user
var viewAppointment = function(){
  var storageUserID = localStorage.getItem("site_userID");
  var storageUserRole = localStorage.getItem("site_role");

  if(storageUserRole == "User"){
    //appointment table
    var table = $('#appointmentTable').DataTable();
    var rootRef = firebase.database().ref().child("Reports").orderByChild("userID").equalTo(storageUserID);
    rootRef.on("child_added", snap => {
      var userID = snap.child("userID").val();
      var ref = firebase.database().ref().child("Users").orderByChild("userID").equalTo(userID);
      ref.on("child_added", snapShot => {
        if(snap.child("status").val() == "Confirmed"){
          var dataSet = [snapShot.child("userFirstName").val()+ " "+ snapShot.child("userLastName").val(), snap.child("TypeOfReport").val(), snap.child("street").val(), snap.child("barangay").val(), 
          snap.child("city").val(), snap.child("date").val(),snap.child("time").val(), snap.child("description").val(), 
          snap.child("status").val()];
          table.rows.add([dataSet]).draw();
        }
      });
    });
  }else{
    //appointment table
    var table = $('#appointmentTable').DataTable();
    var rootRef = firebase.database().ref().child("Reports");
    rootRef.on("child_added", snap => {
      var userID = snap.child("userID").val();
      var ref = firebase.database().ref().child("Users").orderByChild("userID").equalTo(userID);
      ref.on("child_added", snapShot => {
        if(snap.child("status").val() == "Confirmed"){
          var dataSet = [snapShot.child("userFirstName").val()+ " "+ snapShot.child("userLastName").val(), snap.child("TypeOfReport").val(), snap.child("street").val(), snap.child("barangay").val(), 
          snap.child("city").val(), snap.child("date").val(),snap.child("time").val(), snap.child("description").val(), 
          snap.child("status").val()];
          table.rows.add([dataSet]).draw();
        }
      });
    });
  }

}

var showUserSelect = function(){
  var rootRef = firebase.database().ref().child("Users");
  rootRef.on("child_added", snap => {
      $("#user").append("<option value='"+snap.child("userID").val()+"'>"+snap.child("userFirstName").val()+" "+snap.child("userLastName").val()+"</option>");
  });
}

var viewUsers = function(){
  var table = $('#userTable').DataTable();
  var rootRef = firebase.database().ref().child("Users");
  rootRef.on("child_added", snap => {
    var dataSet = [snap.child("userID").val(),snap.child("userFirstName").val()+ " "+ snap.child("userLastName").val(),
    snap.child("userEmail").val()];
      table.rows.add([dataSet]).draw();
  });
}

var checkReport = function(){
  // var storageUserRole = localStorage.getItem("site_role");

  // var rootRef = firebase.database().ref().child("Reports");
  // rootRef.once('value', function(snapshot) {
  //   if (snapshot.exists() && storageUserRole == "Admin") {
  //     Swal.fire(snapshot.child("TypeOfReport").val());
  //   }
  // });
}

var sendEmail = function(){
  const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yourgmailaccount@gmail.com',
        pass: 'yourgmailaccpassword'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'Your Account Name <yourgmailaccount@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'I\'M A PICKLE!!!', // email subject
            html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
                <br />
                <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});

}