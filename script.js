
let siswa="";

let level=0;


const mission=[


{

title:"🚀 Misi 1 : Kehadiran",

text:"Bagaimana komitmen kamu terhadap kehadiran kelas XI TKJ?",

options:[

"Saya hadir tepat waktu minimal 90%",

"Saya datang jika ada pelajaran penting",

"Saya sering terlambat"

]

},


{


title:"📚 Misi 2 : Asesmen Sumatif",

text:"Bagaimana sikap kamu terhadap tugas dan proses belajar?",


options:[

"Mengerjakan tugas tepat waktu dan aktif belajar",

"Mengerjakan jika diingatkan",

"Sering menunda tugas"

]

},



{

title:"🎯 Misi 3 : Asesmen Akhir",

text:"Bagaimana persiapan menghadapi ujian akhir?",

options:[

"Belajar bertahap dan memahami materi",

"Belajar hanya saat ujian",

"Tidak membuat persiapan"

]

},


{

title:"🤝 Misi 4 : Perilaku",

text:"Bagaimana sikap profesional siswa TKJ?",

options:[

"Disiplin, menghargai teman dan guru",

"Kadang mengikuti aturan",

"Tidak terlalu peduli aturan"

]

}


];



function mulai(){

siswa=document.getElementById("nama").value;


if(siswa==""){

alert("Isi nama dahulu");

return;

}


document.getElementById("player")
.classList.add("hidden");


document.getElementById("gameArea")
.classList.remove("hidden");


tampilkan();

}



function tampilkan(){


let m=mission[level];


document.getElementById("missionTitle")
.innerHTML=m.title;


document.getElementById("missionText")
.innerHTML=m.text;



let box=document.getElementById("choices");

box.innerHTML="";


m.options.forEach((x)=>{


let btn=document.createElement("button");


btn.className="choice";

btn.innerHTML=x;


btn.onclick=function(){

level++;


if(level<mission.length){

tampilkan();

}

else{

selesai();

}

}


box.appendChild(btn);


});


}



function selesai(){


document.getElementById("gameArea")
.classList.add("hidden");


document.getElementById("result")
.classList.remove("hidden");


document.getElementById("hasil")
.innerHTML=

`saya <b>${siswa}</b> menyatakan siap mengikuti kontrak belajar kelas XI TKJ Semester 1 dengan komitmen:
<br><br>

✅ Kehadiran disiplin<br>
✅ Menyelesaikan tugas dan proses belajar<br>
✅ Mengikuti asesmen akhir dengan tanggung jawab<br>
✅ Menjaga perilaku profesional sebagai siswa TKJ`;

}



function printContract(){

window.print();

}
