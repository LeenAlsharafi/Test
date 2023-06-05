

var upload = document.getElementById('upload');

function onFile() {
    var me = this,
        file = upload.files[0],
        name = file.name;
        fileName = document.getElementById("fileName")
        area = document.getElementsByClassName("area");
        area[0].classList.add('remove');
        fileName.innerHTML = name + ' uploaded successfully';
        document.getElementById("custom-btn").removeAttribute("hidden");
        
        
}


upload.addEventListener('dragdrop', function (e) {
    onFile();
}, false);

upload.addEventListener('change', function (e) {
    onFile();
}, false);

























function smoothScroll(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top 
    }, 9);
  }









  
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i< reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
