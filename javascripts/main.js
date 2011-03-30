// jQuery documents
$(document).ready(function(){

    //onload
    repositories();
    
    tweets();
    
   // $('#fetchrepos').click(function(){
   //   fetchRepos();
   // }) 
});

var tweets = function (username) {
  if (typeof username == "undefined" || username == null) {username = "m_sdg"};
  $.ajax({
    // url:"http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + username,
    url:"m_sdg.json",
    type:"GET",
    dataType: "JSON",
    success: function(dat){
      var data = $.parseJSON(dat);
      // console.log(typeof(data));
      
      var tweets = data[0].text;
      // console.log(tweets); 
      
    }
  });
}

var repositories = function (username) {
  if (typeof username == "undefined" || username == null) { username = "marka2g"};
  $.ajax({
    url: "gitmark.json",
    type: "GET",
    dataType: "JSON",
    success: function(dat){
      var data = $.parseJSON(dat);

        var repos = data.user.repositories;
        // console.log(repos)

        // sort them...
        // function ascendingDate(a,b) {
        //   return a - b;
        // }
        // var 
        // repos.sort(ascendingDate)

        $.each(repos, function(index, item) {
          /*console.log(index,' ',item)*/
          var $repo = $('<div/>', { className:'repo' });
                    
          if ( item.name !== undefined && item.name !== null ) {
            $('<a/>', { href:item.url, html:'<span>' + item.name + '</span>' })
              .appendTo($repo);
          }

          if ( item.has_issues === true ) {
            $repo.addClass('has_issues');
          }

          $repo.appendTo('#repos');
          /*$('body').append($repo);*/

        });
      }
  });
}
