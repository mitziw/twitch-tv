$(document).ready(function() {
    var channels = ["froggen","llamachomp","twitch", "voyboy","nl_kripp", "freecodecamp", "lirik", "dreamhackcs", "c9sneaky","storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

  for (var i = 0; i < channels.length; i++) {
    var count = 0;
    var chan = channels[i];
   $.getJSON("https://api.twitch.tv/kraken/streams/" + chan + "?callback=?", function(json) {
     if (json["stream"] !== null) {
       	var bdiv = document.getElementById('stream');
       var str1 = "";
    str1 = '<div class="row"><div class="col-md-7"><a href="'+json["videos"][0].url+'"><img class="img-responsive" src="'+ json["stream"].preview["medium"] +'" alt="Streaming"></a></div> <div class="col-md-5"><h3> LIVE: ' + json["stream"].game + '</h3><h4>'+ json["stream"].channel["display_name"] +' </h4><p></p><a class="btn btn-primary" href="' + json["stream"].channel["_links"].self + '">Watch NOW! <span class="glyphicon glyphicon-chevron-right"></span></a></div></div><!-- /.row --><hr>';
 bdiv.innerHTML += str1;
    } else {
       ++count;
 //       //boohoo
     }
    }); //streaming?
    $.getJSON("https://api.twitch.tv/kraken/channels/" + chan + "/videos?callback=?", function(json) {
      if (json["videos"].length !== 0) {
       	var bmdiv = document.getElementById('video');
        var str = "";
    str = '<div class="row"><div class="col-md-7"><a href="'+json["videos"][0].url+'"><img class="img-responsive" src="'+ json["videos"][0].preview+'" alt="Recorded"></a></div> <div class="col-md-5"><h3>' + json["videos"][0].title+'</h3><h4>'+ json["videos"][0].channel["display_name"] +' </h4><p>'+ json["videos"][0].description+'</p><a class="btn btn-primary" href="' + json["videos"][0].url +'">View Video <span class="glyphicon glyphicon-chevron-right"></span></a></div></div><!-- /.row --><hr>';
 bmdiv.innerHTML += str;
      }

    }); //videos? 

  } // for loop


  $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
}); // document ready