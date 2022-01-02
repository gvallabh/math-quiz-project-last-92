function addUser(){
    MATH1_name=document.getElementById("MATH1_name").value;
    MATH2_name=document.getElementById("MATH2_name").value;

    localStorage.setItem("MATH1_name",MATH1_name);
    localStorage.setItem("MATH2_name",MATH2_name);

    window.location="index2.html";
}