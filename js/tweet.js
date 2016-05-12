
jQuery(function($){
	$("#recent-tweet").tweet({
		avatar_size: 32,
		count: 2,
		fetch: 20,
		filter: function(t){ return ! /^(RT )?@\w+/.test(t.tweet_raw_text); },
		username: "UMichQuidditch",
		template: "<div style='clear:both'></div>{text} <br/><span class='time'>{time}</span><br/><br/>"
	});
	
});
