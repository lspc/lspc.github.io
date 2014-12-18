var github = (function(){
  function escapeHtml(str) {
    return $('<div/>').text(str).html();
  }
  function render(target, repos){
    $(target).attr("href", repos[0].html_url)
  }
  return {
    showRepos: function(options){
      $.ajax({
          url: "https://api.github.com/users/"+options.user+"/repos?sort=pushed&callback=?"
        , dataType: 'jsonp'
        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
        , success: function(data) {
          var repos = [];
          if (!data || !data.data) { return; }
          for (var i = 0; i < data.data.length; i++) {
            if (options.skip_forks && data.data[i].fork) { continue; }
            repos.push(data.data[i]);
          }
          if (options.count) { repos.splice(options.count); }
          render(options.target, repos);
        }
      });
    }
  };
})();

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    github.showRepos({
        user: 'LSPC',
        count: 1,
        skip_forks: true,
        target: '#latest-project'
    });
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
});