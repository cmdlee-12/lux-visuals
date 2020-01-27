var about = {}

function indexGetAbout(){
    
    var root = firebase.database().ref().child("CMS/About");
    var about = {};
    root.on("value", snap =>{
        about = snap.val();
        console.log(about);
        
        $("#about-mission").html(about.mission);
        $("#about-vision").html(about.vision);
        $("#about-name-1").html(about.person_1.name);
        $("#about-role-1").html(about.person_1.role);
        $("#about-content-1").html(about.person_1.content);
        $("#about-name-2").html(about.person_2.name);
        $("#about-role-2").html(about.person_2.role);
        $("#about-content-2").html(about.person_2.content);
        $("#about-name-3").html(about.person_3.name);
        $("#about-role-3").html(about.person_3.role);
        $("#about-content-3").html(about.person_3.content);
        $("#about-name-4").html(about.person_4.name);
        $("#about-role-4").html(about.person_4.role);
        $("#about-content-4").html(about.person_4.content);
        $("#about-name-5").html(about.person_5.name);
        $("#about-role-5").html(about.person_5.role);
        $("#about-content-5").html(about.person_5.content);

        
        console.log($("#about-content-5").html());
    });
}