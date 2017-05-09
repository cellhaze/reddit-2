$(document).ready(function() {
    
    
//    $('button').on('click', function() {
//        
//    var search = $('#search').val();
//    searchReddit(search);
//                   }); 

//var searchReddit = function(subReddit) {
    
    $.get('https://www.reddit.com/r/LucidDreaming.json').done(function(response) {
        console.log(response.data.children);
    
    
//};
    
    response.data.children.forEach(function(i) {
       
        var title = i.data.title;
        var author = i.data.author;
        var post = i.data.selftext;
        
        $('.post-content').append('<div class="blog-content"> <h2>' + title + '</h2> <p><span id="author">' + author + '</span></p> <p id="text">' + post + '</p> </div>')
    });
    
   }); 
    
    $('#video').tubular({videoId: 'wA0p0gTvfcw?t=13s'});
    
});