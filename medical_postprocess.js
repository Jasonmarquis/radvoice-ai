const corrections = {

    // Spine

    "decrease lumbar lordosis":
    "Decreased lumbar lordosis",

    "decreased lumbar":
    "Decreased lumbar lordosis",


    "straightening lumbar lordosis":
    "Straightening of the normal lumbar lordosis",


    "disc space narrowing":
    "disc space narrowing",


    "disc bulge":
    "disc bulging",


    "bone spur":
    "osteophyte",



    // Brain

    "old infarct":
    "chronic infarction",

    "old stroke":
    "chronic infarction",

    "brain softening":
    "encephalomalacia",


    "small vessel ischemic change":
    "chronic microvascular ischemic changes",



    // Chest

    "ground glass opacity":
    "ground-glass opacity",

    "lung nodule":
    "pulmonary nodule",


    "fluid around lung":
    "pleural effusion",



    // Abdomen

    "fatty liver":
    "hepatic steatosis",

    "liver cyst":
    "hepatic cyst",

    "kidney cyst":
    "renal cyst",

    "swollen lymph node":
    "lymphadenopathy"

};



function medicalCorrection(text){


let result =
text.toLowerCase();



for(
let key in corrections
){


result =
result.replace(
new RegExp(key,"gi"),
corrections[key]
);


}


// 문장 첫 글자 대문자

result =
result.charAt(0).toUpperCase()
+
result.slice(1);



return result + ".";


}




export {
medicalCorrection
};
