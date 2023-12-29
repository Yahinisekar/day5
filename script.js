
// 2. create your own resume in JSON format
const myResume = {
  personalInfo: {
    name: "Yahini",
    age: 23,
    city: "Trichy",
    email: "yahinisekar@gmail.com",
    phone: 9876543210,
  },
  education: [
    {
      degree: "Bachelor of Science",
      major: "Mathematics",
      university: "Bharathidasan university",
      graduationYear: 2021,
    },
    {
      degree: "Master of Science",
      major: "Mathematics",
      university: "Bharathidasan university",
      graduationYear: 2023,
    },
  ],
  skills:["HTML","CSS","JS"]
};

// 1.For the given JSON iterate overall for loops(for,for..in,for...of,forEach) 

//Using for loop
console.log("Using for loop:")
for(i=0;i<myResume.education.length;i++){
  console.log(`Degree : ${myResume.education[i].degree}, Major : ${myResume.education[i].major}`)
}
console.log("--------------------------------------------");

//Using for...in loop

console.log("Using for...in loop:")
for(let info in myResume){
    console.log(info, myResume[info]);
    
}
console.log("--------------------------------------------");


 // Using for...of loop for arrays

 console.log("Using for...of loop:")

 for (let education of myResume.education) {
   console.log(`Year: ${education.graduationYear}`);
 }
 console.log("--------------------------------------------");

 
 // Using forEach for arrays

 console.log("Using forEach for arrays:");

 myResume.education.forEach((university,index)=>{
    console.log(`${index+1}. Degree : ${university.degree}, University : ${university.university}`)
 })
