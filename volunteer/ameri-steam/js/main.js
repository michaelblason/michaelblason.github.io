$(document).ready(function(){


    // Hero Video Button
    var video = $(".hero__video").get(0);
    var video_btn = $(".hero__video-btn")

    video_btn.click(function(){
        if (video.paused)
        {
            video.play();
            $("#hero-video-play").addClass("invisible");
            $("#hero-video-pause").removeClass("invisible");
        }
        else
        {
            video.pause();
            $("#hero-video-pause").addClass("invisible");
            $("#hero-video-play").removeClass("invisible");
        }
    });



  });