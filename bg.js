final_url = "https://www.youtube.com/v/YykjpeuMNEk&loop=1&playlist=YykjpeuMNEk"

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.reload(tab.id);
	var tabUrl = encodeURIComponent(tab.url);
	var tabTitle = encodeURIComponent(tab.title);
	alert(generate_youtube_loop_url(tab))
	chrome.tabs.update(tab.id, {url: generate_youtube_loop_url(tab)});
});

function generate_youtube_loop_url(tab) {
	"https://www.youtube.com/watch?v=OjbQvZfDJXc"
	var videoId = tab.url.split("/watch?v=")[1]
	LOOP_BASE_URL = "https://www.youtube.com/v/"
	return LOOP_BASE_URL + videoId + '&loop=1' + '&playlist=' + videoId + "&autoplay=1"
}
