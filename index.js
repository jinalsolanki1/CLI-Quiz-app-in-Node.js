 const readline = require("readline");
 const r1 = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
 });
 console.log("Think You Are A Fashionista? Let’s See How You Do On Our Fashion Quiz.")
 var uname = "";
 r1.question("Enter Your Name: ", (uName) => {
     uname = uName;
     console.log("Welcome To Fashion Quiz " + uname + "\n");
     clothquiz();
 });
 
 var i = 0;
 var score = 0;
 const que = [
     "\n[Q-1] The jeans that is fitted on the thighs and the gets progressively loose from the knee area is called:",
     "\n[Q-2] The basic shape or outline of a garment is referred to as:",
     "\n[Q-3] The technique of stitching on one fabric on another for embellishment purposes is called:",
     "\n[Q-4] An outfit that comprises of varying shades of the same colour is called:",
     "\n[Q-5] The French for high sewing that often refers to exclusive designer creations is:"
 ];
 const opt = [
     ["Bootcut jeans", "Mom Jeans", "Boyfriend jeans", "Bell Bottom "],
     ["Cut", "Line", "Silhouette ", "Hemline "],
     ["Pittan", "Applique ", "Embossing ", "Engraving "],
     ["Mix & match", "Chromatic", "Monochrome", "Monotonous"],
     ["Haute couture", "prêt-à-porter", "Chic", "High fashion"]
 ];
 
 var clothquiz = () => {
     if (i === 0) {
         console.log(que[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + ") " + opt[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "4") {
                 score += 5;
                 console.log("Well Done :-" + "\tYour Score :- " + score);
                 i += 1;
                 clothquiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + opt[i][3] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 clothquiz();
             }
 
         });
     } else if (i === 1) {
         console.log(que[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + " - " + opt[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "3") {
                 score += 5;
                 console.log("Well Done :-" + "\tYour Score :- " + score);
                 i += 1;
                 clothquiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + opt[i][2] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 clothquiz();
             }
 
         });
     } else if (i === 2) {
         console.log(que[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + " - " + opt[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "2") {
                 score += 5;
                 console.log("Well Done :-" + "\tYour Score :- " + score);
                 i += 1;
                 clothquiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + opt[i][2] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 clothquiz();
             }
 
         });
     } else if (i === 3) {
         console.log(que[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + " - " + opt[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "3") {
                 score += 5;
                 console.log("Well Done :-" + "\tYour Score :- " + score);
                 i += 1;
                 clothquiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + opt[i][0] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 clothquiz();
             }
 
         });
     } else if (i === 4) {
         console.log(que[i]);
         for (var j = 0; j < 4; j++) {
             console.log((j + 1) + " - " + opt[i][j]);
         }
         r1.question("Answer:- ", (ans) => {
             if (ans === "1") {
                 score += 5;
                 console.log("Well Done :-" + "\tYour Score :- " + score);
                 i += 1;
                 clothquiz();
             } else {
                 console.log("Sorry Wrong answer!!" + "\nRight answer is : " + opt[i][0] + "\tYour Score :- " + score);
                 score -= 2;
                 i += 1;
                 clothquiz();
             }
 
         });
     } else {
         console.log("Final Score Of " + uname + ": " + score + "/" + (que.length * 5));
         r1.close();
     }
 }