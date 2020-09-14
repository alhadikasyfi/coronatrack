function submitFunction() {
    const a = document.getElementById("name").value;
    /*note:Survey result akan menampilkan icon sesuai keadaanmu*/

    if (document.getElementById("iya-batuk").checked && document.getElementById("iya-sesak").checked && document.getElementById("iya-panas").checked){
        document.querySelector("#survey-result").innerHTML= "You're Sick " + a ;
        alert('Oh Tidak, Kamu sakit ' + a);
        //mengubah dan menetapkan icon pada survey result
        document.querySelector("#stayhome").setAttribute("src", "Images/hospital-user-solid.svg");
        document.querySelector("#stayhomecap").innerHTML= 'Just Stay on Hospital';
        document.querySelector("#mask").setAttribute("src", "Images/user-md-solid.svg");
        document.querySelector("#maskcap").innerHTML= 'Doctor Will Help You';
        document.querySelector("#handwash").setAttribute("src", "Images/handshake-slash-solid.svg");
        document.querySelector("#handwashcap").innerHTML= "Don't Interact with Other";
    }
    else if (document.getElementById("tidak-batuk").checked && document.getElementById("tidak-sesak").checked && document.getElementById("tidak-panas").checked){
        document.querySelector("#survey-result").innerHTML= "Alhamdulillah, You're Healthy " + a ;
        alert('Alhamdulillah ' + a + ' kamu sehat');
        //mengubah dan menetapkan icon pada survey result
        document.querySelector("#mask").setAttribute("src", "Images/shield-virus-solid.svg");
        document.querySelector("#maskcap").innerHTML= 'Consume Multivitamin';
        document.querySelector("#handwash").setAttribute("src", "Images/hand-sparkles-solid.svg");
        document.querySelector("#handwashcap").innerHTML= "Stay Clean Your Body";
    }
    else {
        document.querySelector("#survey-result").innerHTML= "Stay Healthy " + a ;
        alert('Kamu Kurang Sehat ' + a + ' , sebaiknya kamu ke dokter saja');
        //mengubah dan menetapkan icon pada survey result
        document.querySelector("#stayhome").setAttribute("src", "Images/hospital-user-solid.svg");
        document.querySelector("#stayhomecap").innerHTML= 'Go to The Hospital';
        document.querySelector("#handwash").setAttribute("src", "Images/user-nurse-solid.svg");
        document.querySelector("#handwashcap").innerHTML= "Healthy Consultation";
    }
}
//Membuat event click pada id=button, dan menampilkan halaman survey
document.getElementById('button').addEventListener('click' , function(event) { 
    document.querySelector('.survey-container').style.display = 'flex' ;
    
});
//Membuat event click pada id=button, dan menutup halamanl survey
document.querySelector('.close').addEventListener('click' , function(event) { 
    document.querySelector('.survey-container').style.display = 'none' ;
    
});



