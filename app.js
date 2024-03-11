

// var jamiastudent = [
//     {
//         id:101, 
//         details:{
//         Name: "zubair Arif",
//         class:"8th",
//         TlimateQuran:  '55 out of 100',
//         English: '39 out of 100',
//         Math: '40 out of100',
//         Scince: '33 out of100',
//         FezainTejwiid: '45 out of 100',
//         ObtainMarks:212,
//         TotalMarks:500,
//         }
        
//     },
    
//     {
//         id:102, 
//         details:{
//         Name: "Abu Baker",
//         class:"8th",
//         TlimateQuran:  '50 out of 100',
//         English: '33 out of 100',
//         Math: '45 out of100',
//         Scince: '12 out of100',
//         FezainTejwiid: '35 out of 100',
//         ObtainMarks:175,
//         TotalMarks:500,
//         }
//     },
//     {
//         id:103, 
//         details:{
//         Name: "Ali",
//         class:"8th",
//         TlimateQuran:  '50 out of 100',
//         English: '33 out of 100',
//         Math: '45 out of100',
//         Scince: '12 out of100',
//         FezainTejwiid: '35 out of 100',
//         ObtainMarks:175,
//         TotalMarks:500,
//         }
//     },
//     {
//         id:104, 
//         details:{
//         Name: "Raza",
//         class:"8th",
//         TlimateQuran:  '50 out of 100',
//         English: '33 out of 100',
//         Math: '45 out of100',
//         Scince: '12 out of100',
//         FezainTejwiid: '35 out of 100',
//         ObtainMarks:175,
//         TotalMarks:500,
//         }
//     },



// ]

// //     function clickOn(){
// //   var as={
// //     idin:prompt('')
// //     }
  

    
// function show(){
//          var userId=document.getElementById('typinput').innerText
//         }
//         var enter=userId
//         var nameNode=document.getElementById('Name')
//         var classNode=document.getElementById('Class')
//         var tlimatNode=document.getElementById('tlimat')
//         var englishNode=document.getElementById('english')
//         var mathNode=document.getElementById('math')
//         var scinceNode=document.getElementById('scince')
//         var fezainNode=document.getElementById('fezain')
//         var obtainNode=document.getElementById('obtain')
//         var totalNode=document.getElementById('total')
  

// for(var i =0;i<jamiastudent.length;i++){
//     if(jamiastudent[i].id===userId){
    
//     nameNode.innerText=jamiastudent[i].details.Name
//     classNode.innerText=jamiastudent[i].details.class
//     tlimatNode.innerText=jamiastudent[i].details.TlimateQuran
//     englishNode.innerText=jamiastudent[i].details.English
//     mathNode.innerText=jamiastudent[i].details.Math
//     scinceNode.innerText=jamiastudent[i].details.Scince
//     fezainNode.innerText=jamiastudent[i].details.FezainTejwiid
//     obtainNode.innerText=jamiastudent[i].details.ObtainMarks
//     totalNode.innerText=jamiastudent[i].details.TotalMarks

    
// };
// break;
// }






// // var inp =document.getElementById('typinput')


//         //if loop 
// // if(jamiastudent[0].id===userId){
// //     console.log(jamiastudent[0].details);
// // }
// // else if(jamiastudent[1].id===userId){
// // console.log(jamiastudent[1].details);    
// // }
//        //   for loop
//     //    
//     //     var userI=
//     //     console.log(userI);   
//     // }
         





var jamiastudent = [
    {
        id:101, 
        details:{
        Name: "zubair Arif",
        class:"8th",
        TlimateQuran:  '55 out of 100',
        English: '39 out of 100',
        Math: '40 out of100',
        Scince: '33 out of100',
        FezainTejwiid: '45 out of 100',
        ObtainMarks:212,
        TotalMarks:500,
        }
    },
    {
        id:102, 
        details:{
        Name: "Abu Baker",
        class:"8th",
        TlimateQuran:  '50 out of 100',
        English: '33 out of 100',
        Math: '45 out of100',
        Scince: '12 out of100',
        FezainTejwiid: '35 out of 100',
        ObtainMarks:175,
        TotalMarks:500,
        }
    },
    {
        id:103, 
        details:{
        Name: "Ali",
        class:"8th",
        TlimateQuran:  '50 out of 100',
        English: '33 out of 100',
        Math: '45 out of100',
        Scince: '12 out of100',
        FezainTejwiid: '35 out of 100',
        ObtainMarks:175,
        TotalMarks:500,
        }
    },
    {
        id:104, 
        details:{
        Name: "Raza",
        class:"8th",
        TlimateQuran:  '50 out of 100',
        English: '33 out of 100',
        Math: '45 out of100',
        Scince: '12 out of100',
        FezainTejwiid: '35 out of 100',
        ObtainMarks:175,
        TotalMarks:500,
        }
    },
];

var as; // Declare 'as' globally

function show() {
    as = {
        idin: parseInt(prompt('Enter student ID'))
    };

    localStorage.setItem('roll#', JSON.stringify(userId));

    var userId = as.idin;
    var nameNode = document.getElementById('Name');
    var classNode = document.getElementById('Class');
    var tlimatNode = document.getElementById('tlimat');
    var englishNode = document.getElementById('english');
    var mathNode = document.getElementById('math');
    var scinceNode = document.getElementById('scince');
    var fezainNode = document.getElementById('fezain');
    var obtainNode = document.getElementById('obtain');
    var totalNode = document.getElementById('total');

    

    


    for (var i = 0; i < jamiastudent.length; i++) {
        if (jamiastudent[i].id === userId) {
            nameNode.innerText = jamiastudent[i].details.Name;
            classNode.innerText = jamiastudent[i].details.class;
            tlimatNode.innerText = jamiastudent[i].details.TlimateQuran;
            englishNode.innerText = jamiastudent[i].details.English;
            mathNode.innerText = jamiastudent[i].details.Math;
            scinceNode.innerText = jamiastudent[i].details.Scince;
            fezainNode.innerText = jamiastudent[i].details.FezainTejwiid;
            obtainNode.innerText = jamiastudent[i].details.ObtainMarks;
            totalNode.innerText = jamiastudent[i].details.TotalMarks;
            break;
        }
        // else if(jamiastudent[i].id <= userId){
        //     alert('please enter the currect Roll number');
        //     break;
        // }
        
    }
}




// var jamiast=localStorage.getItem('userId');
//     document.write(jamiast);