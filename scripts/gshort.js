$.ready(function(){
	$('#auth').click(function(){
		var userToken = $(this).text();
		$.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ "longUrl": "hello" }),
            url: "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBefmtDT1cu2ypVQv-2mkF3Ux2icREUu5E",
            success: function(data) {
                //do something with the shortened url json data
                var returnToken = data.id.replace('http://goo.gl/', '');
                if(returnToken === userToken) {
                	window.location = 'frozenluo.github.io/success.html';
                }else {
                	console.log('expected token:' + returnToken + '; instead get:' + userToken);
                }
            }
        });
	});
});