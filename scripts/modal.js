// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("mingzhu_0");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var imgs = document.getElementsByClassName("mingzhu");
console.log(typeof imgs);

for (i=0; i<imgs.length; i++) {
  imgs[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}