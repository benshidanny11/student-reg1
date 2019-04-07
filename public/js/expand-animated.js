var coll1 = document.getElementById("collapsible1");
var coll2=document.getElementById("collapsible2");

  coll1.addEventListener("click", function() {
    this.classList.toggle("active");
    var content1 = document.getElementById("stud-coll");
    
    if (content1.style.maxHeight){
      content1.style.maxHeight = null;
      document.getElementById("img1").src="../assets/images/img-expand.png";
    } else {
      content1.style.maxHeight = content1.scrollHeight + "px";
      document.getElementById("img1").src="../assets/images/img-collupse.png";
    } 
  });

  coll2.addEventListener("click", function() {
    this.classList.toggle("active");
    var content2 = document.getElementById("user-coll");
    
    if (content2.style.maxHeight){
      content2.style.maxHeight = null;
      document.getElementById("img2").src="../assets/images/img-expand.png";
    } else {
      content2.style.maxHeight = content2.scrollHeight + "px";
      document.getElementById("img2").src="../assets/images/img-collupse.png";
    } 
  });
