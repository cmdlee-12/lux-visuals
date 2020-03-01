var about = {}

getHome = function (){
    var root = firebase.database().ref().child("CMS/Home");
    var home = {};
    root.on("value", snap =>{
        home = snap.val();

        $("#home-first__heading-title").html(home.firstSection.firstSection_Heading);
        $(".home-first__btn-name").html("<a href=\""+home.firstSection.firstSection_button_link+"\" class=\"btn btn-black py-3 px-4\">"+home.firstSection.firstSection_button+"</a>");
        $(".home-first__video-link").html("<a href="+home.firstSection.firstSection_video+" target=\"_blank\" class=\"popup-vimeo\"><span class=\"icon\"><i class=\"ion-ios-play\"></i></span> <span class=\"play\">Play video</span></a>");
        

        $("#home-second__first-heading").html(home.secondSection.secondSection_First_Heading);
        $("#home-second__first-content").html(home.secondSection.secondSection_First_Content);
        $("#home-second__second-heading").html(home.secondSection.secondSection_Second_Heading);
        $("#home-second__second-content").html(home.secondSection.secondSection_Second_Content);
    
        $("#home-second__first-btn").html("<a href="+home.secondSection.secondSection_First_Btn_link+" class=\"btn btn-primary py-3 px-4\">"+home.secondSection.secondSection_First_Btn+"</a>");
        $("#home-second__second-btn").html("<a href="+home.secondSection.secondSection_Second_Btn_link+" class=\"btn btn-black py-3 px-4\">"+home.secondSection.secondSection_Second_Btn+"</a>");
    
        $("#first-heading").html(home.thirdSection.thirdSection_First_Heading);
        $("#first-content").html(home.thirdSection.thirdSection_First_Content);
        $("#second-heading").html(home.thirdSection.thirdSection_Second_Heading);
        $("#second-content").html(home.thirdSection.thirdSection_Second_Content);
        $("#third-heading").html(home.thirdSection.thirdSection_Third_Heading);
        $("#third-content").html(home.thirdSection.thirdSection_Third_Content);
        $("#fourth-heading").html(home.thirdSection.thirdSection_Fourth_Heading);
        $("#fourth-content").html(home.thirdSection.thirdSection_Fourth_Content);
    });
}

function indexGetAbout(){
    
    var root = firebase.database().ref().child("CMS/About");
    var about = {};
    root.on("value", snap =>{
        about = snap.val();
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

        $(".about-heading").html(about.first_section.heading);
        $(".about-sub_heading").html(about.first_section.sub_heading);
        $(".about-content").html(about.first_section.content);

        $(".owl-carousel").trigger('refresh.owl.carousel');
        var txt1 = `
            <div class="testimony-wrap pb-4">
                <div class="text">
                    <p class="mb-4">`+ about.person_1.content +`</p>
                    </div>
                    <div class="d-flex">
                        <div class="pos ml-3">
                            <p class="name" id="about-name-1">`+ about.person_1.name +`</p>
                            <span class="position" id="about-role-1">`+ about.person_1.role +`</span>
                        </div>
                    <div class="user-img">
                    </div>
                </div>
            </div> `;

        var txt2 =` <div class="testimony-wrap pb-4">
                <div class="text">
                    <p class="mb-4">`+ about.person_4.content +`</p>
                    </div>
                    <div class="d-flex">
                        <div class="pos ml-3">
                            <p class="name" id="about-name-1">`+ about.person_4.name +`</p>
                            <span class="position" id="about-role-1">`+ about.person_4.role +`</span>
                        </div>
                    <div class="user-img">
                    </div>
                </div>
            </div>`;

        var txt3 = ` <div class="testimony-wrap pb-4">
                <div class="text">
                    <p class="mb-4">`+ about.person_3.content +`</p>
                    </div>
                    <div class="d-flex">
                        <div class="pos ml-3">
                            <p class="name" id="about-name-1">`+ about.person_3.name +`</p>
                            <span class="position" id="about-role-1">`+ about.person_3.role +`</span>
                        </div>
                    <div class="user-img">
                    </div>
                </div>
            </div>`;

        var txt4 = `<div class="testimony-wrap pb-4">
                <div class="text">
                    <p class="mb-4">`+ about.person_5.content +`</p>
                    </div>
                    <div class="d-flex">
                        <div class="pos ml-3">
                            <p class="name" id="about-name-1">`+ about.person_5.name +`</p>
                            <span class="position" id="about-role-1">`+ about.person_5.role +`</span>
                        </div>
                    <div class="user-img">
                    </div>
                </div>
            </div>`;
    
        var txt5 = `<div class="testimony-wrap pb-4">
                <div class="text">
                    <p class="mb-4">`+ about.person_2.content +`</p>
                    </div>
                    <div class="d-flex">
                        <div class="pos ml-3">
                            <p class="name" id="about-name-1">`+ about.person_2.name +`</p>
                            <span class="position" id="about-role-1">`+ about.person_2.role +`</span>
                        </div>
                    <div class="user-img">
                    </div>
                </div>
            </div>`
            ;
        $('.owl-carousel').owlCarousel('add', txt1).owlCarousel('update');
        $('.owl-carousel').owlCarousel('add', txt2).owlCarousel('update');
        $('.owl-carousel').owlCarousel('add', txt3).owlCarousel('update');
        $('.owl-carousel').owlCarousel('add', txt4).owlCarousel('update');
        $('.owl-carousel').owlCarousel('add', txt5).owlCarousel('update');
    });
}

getCauses = function (){
    var rootRef = firebase.database().ref().child("CMS/Cause");
    rootRef.on("child_added", snap => {
        
        var cause_id = snap.child("cause_id").val();
        var cause = {};
        cause = snap.val();
        $(".causes-wrapper").append(
            "<div class=\"col-lg-4\">" +
                "<div class=\"causes causes-2 text-center pb-4 px-md-4\">" +
                    "<div class=\"img\" style=\"background-image: url(images/pic-2.jpg);\"></div>" +
                    "<h2 class=\"causes-heading\"><a href='"+cause.link+"'>"+cause.heading+"</a></h2>"+
                    "<p class=\"causes-content\">"+cause.content+"</p>"+
                "</div>" +
            "</div>"
        );
    })
}

getContact = function (){
    var root = firebase.database().ref().child("CMS/Contact");
    var contact = {};
    root.on("value", snap =>{
        contact = snap.val();
        
        $(".address").html(contact.address);
        $(".contact-num").html("<a href=tel:"+contact.contact_number+">"+contact.contact_number+"</a>");
        $(".email").html("<a href=mailto:"+contact.email+">"+contact.email+"</a>");
        $(".website").html("<a target='_blank' href="+contact.website+">"+contact.website+"</a>");
    });
}

getHome = function (){
    var root = firebase.database().ref().child("CMS/Home");
    var home = {};
    root.on("value", snap =>{
        home = snap.val();

        $("#home-first__heading-title").html(home.firstSection.firstSection_Heading);
        $(".home-first__btn-name").html("<a href=\""+home.firstSection.firstSection_button_link+"\" class=\"btn btn-black py-3 px-4\">"+home.firstSection.firstSection_button+"</a>");
        $(".home-first__video-link").html("<a href="+home.firstSection.firstSection_video+" target=\"_blank\" class=\"popup-vimeo\"><span class=\"icon\"><i class=\"ion-ios-play\"></i></span> <span class=\"play\">Play video</span></a>");
        

        $("#home-second__first-heading").html(home.secondSection.secondSection_First_Heading);
        $("#home-second__first-content").html(home.secondSection.secondSection_First_Content);
        $("#home-second__second-heading").html(home.secondSection.secondSection_Second_Heading);
        $("#home-second__second-content").html(home.secondSection.secondSection_Second_Content);
    
        $("#home-second__first-btn").html("<a href="+home.secondSection.secondSection_First_Btn_link+" class=\"btn btn-primary py-3 px-4\">"+home.secondSection.secondSection_First_Btn+"</a>");
        $("#home-second__second-btn").html("<a href="+home.secondSection.secondSection_Second_Btn_link+" class=\"btn btn-black py-3 px-4\">"+home.secondSection.secondSection_Second_Btn+"</a>");
    
        $("#first-heading").html(home.thirdSection.thirdSection_First_Heading);
        $("#first-content").html(home.thirdSection.thirdSection_First_Content);
        $("#second-heading").html(home.thirdSection.thirdSection_Second_Heading);
        $("#second-content").html(home.thirdSection.thirdSection_Second_Content);
        $("#third-heading").html(home.thirdSection.thirdSection_Third_Heading);
        $("#third-content").html(home.thirdSection.thirdSection_Third_Content);
        $("#fourth-heading").html(home.thirdSection.thirdSection_Fourth_Heading);
        $("#fourth-content").html(home.thirdSection.thirdSection_Fourth_Content);
    });
}

getCausesPage = function (){
    var rootRef = firebase.database().ref().child("CMS/Cause");
    rootRef.on("child_added", snap => {
        
        var cause_id = snap.child("cause_id").val();
        var cause = {};
        cause = snap.val();
        $(".causes-wrapper-page").append(
            "<div class=\"col-lg-4\">" +
                "<div class=\"causes causes-2 text-center pb-4 px-md-4\">" +
                    "<div class=\"img\" style=\"background-image: url(images/pic-2.jpg);\"></div>" +
                    "<h2 class=\"causes-heading\"><a href='"+cause.link+"'>"+cause.heading+"</a></h2>"+
                    "<p class=\"causes-content\">"+cause.content+"</p>"+
                "</div>" +
            "</div>"
        );
    })
}

getBlogs = function(){
    var rootRef = firebase.database().ref().child("Blogs");
    rootRef.on("child_added", snap => {
        
        var cause_id = snap.child("cause_id").val();
        var cause = {};
        cause = snap.val();
        $(".blogs-wrapper").append(
            '<div class="col-md-12">' +
                '<div class="blog-entry align-self-stretch d-md-flex">' +
                    `<a href="#" class="block-20" style="background-image: url('images/blog-2.jpg');">` +
                    '</a>' +
                    '<div class="text d-block pl-md-4">' +
                    '    <div class="meta mb-3">' +
                    '        <div><a href="#"> ' + cause.date_posted + '</a></div>' +
                    '        <div><a href="#">Contributor</a></div>' +
                    '        <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>' +
                    '    </div>' +
                    '    <h3 class="heading"><a href="#">"' + cause.heading + '"</a></h3>' +
                    '    <p>' + cause.content + '</p>' +
                    '    <p><a href="' + cause.link + '"' +
                    '       class="btn btn-primary py-2 px-3">Read more</a></p>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );
    })
}


function getMonthName(month){
    switch(month){
        case 1 : return 'January';
        case 2 : return 'February';
        case 3 : return 'March';
        case 4 : return 'April';
        case 5 : return 'May';
        case 6 : return 'June';
        case 7 : return 'July';
        case 8 : return 'August';
        case 9 : return 'September';
        case 10 : return 'October';
        case 11 : return 'November';
        case 12 : return 'December';
        default : return '';
    }
}

sendEmail = function(){
    var templateParams = {
        name: $("#name").val(),
        email: $("#email").val(),
        subject : $("#subject").val(),
        message : $("#message").val(),
    };

    var service_id = 'gmail';
    var template_id = 'template_YspRBVhF';

    emailjs.send(service_id, template_id, templateParams)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
            Swal.fire(
            'Good job!',
            'Message sent successfully!',
            'success'
            );
        }, function(error) {
        console.log('FAILED...', error);
        });
}
$(document).ready(function(){
    $("#form-contact-send").submit(function(e){
        e.preventDefault();
        var root = firebase.database().ref().child("Messages");
        var key = root.push().key;

        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = (today.getHours() > 9 ? today.getHours() : ("0" + today.getHours()) ) + ":" + (today.getMinutes() > 9 ? today.getMinutes() : ("0" + today.getMinutes())) + ":" + (today.getSeconds() > 9 ? today.getSeconds() : ("0" + today.getSeconds()));
        var dateTime = date+' '+time;
        root.child(key).child("id").set(key);
        root.child(key).child("name").set(name);
        root.child(key).child("email").set(email);
        root.child(key).child("subject").set(subject);
        root.child(key).child("message").set(message);
        root.child(key).child("date_posted").set(dateTime);
        root.child(key).child("is_active").set('yes');
        console.log('sending email');
        sendEmail();
        $("#name").val("");
        $("#email").val("");
        $("#subject").val("");
        $("#message").val("");
    });

    $(".my-rating-4").starRating({
        totalStars: 5,
        starShape: 'rounded',
        starSize: 40,
        emptyColor: 'lightgray',
        hoverColor: '#FEB72B',
        activeColor: 'yellow',
        useGradient: false,
        callback: function(currentRating, $el){
          console.log(currentRating);
          
            var root = firebase.database().ref().child("Ratings");
            var key = root.push().key;

            var rate = currentRating; 
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = (today.getHours() > 9 ? today.getHours() : ("0" + today.getHours()) ) + ":" + (today.getMinutes() > 9 ? today.getMinutes() : ("0" + today.getMinutes())) + ":" + (today.getSeconds() > 9 ? today.getSeconds() : ("0" + today.getSeconds()));
            var dateTime = date+' '+time;
            root.child(key).child("id").set(key);
            root.child(key).child("rate").set(rate); 
            root.child(key).child("created_at").set(dateTime);
            root.child(key).child("is_active").set('yes');
            
            Swal.fire(
                'Good job!',
                'You successfully rate the video!',
                'success'
            );
        }
    });
});