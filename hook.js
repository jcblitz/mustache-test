// create the element:

function loadScript(url, callback)
{
// adding the script tag to the head as suggested before
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = url;

// then bind the event to the callback function 
// there are several events for cross browser compatibility
script.onreadystatechange = callback;
script.onload = callback;

// fire the loading
head.appendChild(script);
}

var $e = $('<div id="yourelement"></div>');
$('body').append($e);
$e.css({ position: 'absolute', top: '10px', right: '10px', width: '200px', height: '90px', backgroundColor: 'red' });

loadScript("http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", function(){});
$(document).ready(function(){
                $.ajax({
                    url: 'http://izze.asmallorange.com/~blitzste/mustache/demo.html',
                    dataType: 'jsonp',
                    success: function(text){
						$('#yourelement').html(text);
                    }
                });
            });