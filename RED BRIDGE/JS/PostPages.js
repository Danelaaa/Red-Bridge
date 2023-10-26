let FullScreenButton = document.querySelector(".fs-icon");
let PostPage1Img = document.querySelector(".post-page-img")

PostPage1Img.addEventListener('mouseover', function(){
 FullScreenButton.style.display = "block";
});
FullScreenButton.addEventListener('mouseover', function(){
    FullScreenButton.style.display = "block";
   });
PostPage1Img.addEventListener('mouseout', function(){
    FullScreenButton.style.display = "none";
   });
FullScreenButton.addEventListener('click', function(){
    if(PostPage1Img.requestFullscreen)
    {
       PostPage1Img.requestFullscreen();
    }
  });
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("exit")[0];
        var span2 = document.getElementsByClassName("copy-link")[0];
        var LinkInput = document.getElementsByClassName("copied");
        btn.onclick = function() {
            modal.style.display = "flex";
        }
       span.onclick = function() {
           modal.style.display = "none";
       }
       span2.onclick = function() {
        LinkInput.select();
        LinkInput.setSelectionRange(0, 99999)
        document.execCommand("copy");
       }
       window.onclick = function(event) {
       if (event.target == modal) {
          modal.style.display = "none";
         }
      }
