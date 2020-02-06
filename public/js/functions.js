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

getBlog = function (){
  
    // var root = firebase.database().ref().child("CMS/Cause");
    // var cause = {};
    // console.log(cause)
    // root.on("value", snap =>{
    //   cause = snap.val();
    //   console.log(cause.cause_id)
    // //   $(".blog-title").html(cause[cause_id].heading);
    // });
    // console.log("hi blog")
    var rootRef = firebase.database().ref().child("CMS/Cause");
    rootRef.on("child_added", snap => {
        var cause_id = snap.child("cause_id").val();
        console.log(cause_id)

            var ref = firebase.database().ref().child("CMS/Cause").orderByChild("cause_id").equalTo(cause_id);
            var cause = {};
            ref.on("value", snapShot => {
                cause = snapShot.val();
                // $(".owl-stage").append(
                //    " <div class=\"owl-item cloned\">" +
                //     " <div class=\"item\">" +
                //             "<a href=\"causes.html\" class=\"causes text-center\">" +
                //                 "<div class=\"img\" style=\"background-image: url(images/pic-2.jpg);\"></div>" +
                //                 "<h2 class=\"blog-title\">"+cause[cause_id].heading+"</h2>" +
                //             "</a>" +
                //         "</div>" +
                //     "</div>"
                // ); carousel code
                $(".causes-wrapper").append(
                    " <div class=\"col-lg-3\">" +
                            "<a href=\"causes.html\" class=\"causes text-center\">" +
                                "<div class=\"img\" style=\"background-image: url(images/pic-2.jpg);\"></div>" +
                                "<h2 class=\"blog-title\">"+cause[cause_id].heading+"</h2>" +
                            "</a>" +
                    "</div>"
                );
        })
    })
  }