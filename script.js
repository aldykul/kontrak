/* ==========================================
   TKJ ACADEMY
   KONTRAK BELAJAR XI TKJ
========================================== */


/* ==========================================
   VARIABLE DATA
========================================== */


let student = {

    nama:"",
    kelas:"XI TKJ",

    attendance:"",
    sumatif:"",
    akhir:"",

    learningStyle:"",
    media:"",

    behavior:[]

};



let currentMission = 0;



let assessmentVote = {

    "20-40-40":0,
    "15-50-35":0,
    "20-50-30":0

};





/* ==========================================
   DATA MISI
========================================== */


const missions=[


{

title:"🚀 Misi 1 : Kehadiran",

description:

"Bagaimana komitmen kamu terhadap kehadiran selama pembelajaran TKJ?",


options:[

"Hadir tepat waktu minimal 90%",

"Kadang terlambat tetapi tetap mengikuti pembelajaran",

"Sering tidak hadir"

]


},



{

title:"📚 Misi 2 : Asesmen Sumatif",

description:

"Bagaimana sikap kamu terhadap tugas, proyek, dan proses belajar?",


options:[

"Mengerjakan tugas tepat waktu dan aktif dalam proses",

"Mengerjakan jika sudah diingatkan",

"Sering menunda tugas"

]


},




{

title:"🎯 Misi 3 : Asesmen Akhir",

description:

"Bagaimana persiapan kamu menghadapi asesmen akhir?",


options:[

"Belajar bertahap memahami konsep",

"Belajar ketika mendekati ujian",

"Tidak melakukan persiapan"

]


},




{

title:"🤝 Misi 4 : Perilaku",

description:

"Bagaimana sikap seorang siswa TKJ profesional?",


options:[

"Disiplin, bertanggung jawab, menghargai orang lain",

"Mengikuti aturan jika diperlukan",

"Kurang peduli aturan"

]


}


];





/* ==========================================
   START GAME
========================================== */


function startGame(){


let nama =
document.getElementById("namaSiswa").value;



if(nama.trim()==""){


alert(
"Silakan masukkan nama terlebih dahulu"
);


return;


}



student.nama=nama;



document
.getElementById("identity")
.classList.add("hidden");



document
.getElementById("gameSection")
.classList.remove("hidden");



showMission();



}





/* ==========================================
   MENAMPILKAN MISI
========================================== */


function showMission(){



let mission =
missions[currentMission];



document
.getElementById("missionTitle")
.innerHTML=
mission.title;



document
.getElementById("missionDescription")
.innerHTML=
mission.description;



let optionBox =
document.getElementById("missionOption");



optionBox.innerHTML="";



mission.options.forEach(
(option,index)=>{


let button =
document.createElement("button");



button.innerHTML=
option;



button.onclick=function(){


saveMission(index);



};



optionBox.appendChild(button);



});


}





/* ==========================================
   SIMPAN JAWABAN MISI
========================================== */


function saveMission(answer){



if(currentMission==0){

student.attendance=
missions[0].options[answer];

}


if(currentMission==1){

student.sumatif=
missions[1].options[answer];

}



if(currentMission==2){

student.akhir=
missions[2].options[answer];

}



currentMission++;



if(currentMission < missions.length){


showMission();


}

else{


document
.getElementById("gameSection")
.classList.add("hidden");



document
.getElementById("assessmentSection")
.classList.remove("hidden");


}



}






/* ==========================================
   VOTE BOBOT NILAI
========================================== */


function voteAssessment(value){



assessmentVote[value]++;



let result =
value.split("-");



student.nilai = {


kehadiran:
result[0]+"%",


sumatif:
result[1]+"%",


akhir:
result[2]+"%"


};



alert(
"Vote berhasil disimpan"
);



document
.getElementById("assessmentSection")
.classList.add("hidden");



document
.getElementById("learningSection")
.classList.remove("hidden");


}







/* ==========================================
   DIAGNOSTIK GAYA BELAJAR
========================================== */


function chooseLearning(style){


student.learningStyle=style;



document
.getElementById("learningSection")
.classList.add("hidden");



document
.getElementById("mediaSection")
.classList.remove("hidden");



}






/* ==========================================
   MEDIA PEMBELAJARAN
========================================== */


function chooseMedia(media){



student.media=media;



document
.getElementById("mediaSection")
.classList.add("hidden");



document
.getElementById("behaviorSection")
.classList.remove("hidden");



}







/* ==========================================
   GENERATE KONTRAK
========================================== */


function generateContract(){



let checklist =
document.querySelectorAll(
"#behaviorSection input[type='checkbox']:checked"
);



student.behavior=[];



checklist.forEach(
(item)=>{


student.behavior.push(item.value);


});




if(student.behavior.length==0){


alert(
"Pilih minimal satu komitmen"
);


return;


}



saveData();



showContract();



}








/* ==========================================
   SIMPAN DATA
========================================== */


function saveData(){



localStorage.setItem(

"KontrakTKJ",

JSON.stringify(student)

);


}








/* ==========================================
   HASIL KONTRAK
========================================== */


function showContract(){



document
.getElementById("behaviorSection")
.classList.add("hidden");



document
.getElementById("resultSection")
.classList.remove("hidden");





let behaviorText="";



student.behavior.forEach(
(item)=>{


behaviorText +=
"✔ "+item+
"<br>";


});






document
.getElementById("contractResult")
.innerHTML=



`
<h3>Identitas</h3>

Nama:
<b>${student.nama}</b>

<br>

Kelas:
<b>${student.kelas}</b>


<hr>


<h3>Kesepakatan Penilaian</h3>


Kehadiran:
${student.nilai.kehadiran}

<br>

Asesmen Sumatif:
${student.nilai.sumatif}


<br>

Asesmen Akhir:
${student.nilai.akhir}



<hr>


<h3>Diagnostik Pembelajaran</h3>


Gaya Belajar:

<b>${student.learningStyle}</b>


<br>


Media Favorit:

<b>${student.media}</b>



<hr>


<h3>Komitmen Siswa</h3>


${behaviorText}



<br><br>


Saya menyatakan siap mengikuti pembelajaran
kelas XI TKJ Semester 1.



`;


}







/* ==========================================
   PRINT
========================================== */


function printContract(){


window.print();


}






/* ==========================================
   LOAD DATA JIKA ADA
========================================== */


window.onload=function(){


let saved =
localStorage.getItem(
"KontrakTKJ"
);



if(saved){


console.log(
"Data sebelumnya:",
JSON.parse(saved)

);


}


};
