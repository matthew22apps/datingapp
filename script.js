let AnswerArray=[]
let UsersandData=[]
let founddealbreaker=0
let QuestionPointValues=[
    1, //Question 1
    1, //Question 2
    3, //Question 3
    5, //Question 4
    2, //Question 5
    3, //Question 6
    4, //Question 7
    1 //Question 8
]
let QuestionsToAsk=[
    "This Is A String", //Question 1
    "This Is A String", //Question 2
    "This Is A String", //Question 3
    "This Is A String", //Question 4
    "This Is A String", //Question 5
    "This Is A String", //Question 6
    "This Is A String", //Question 7
    "This Is A String" //Question 8
]

function massusers(count1){
    for (let un = 0; un < count1; un++) {
        CreateUserRandomizer()
    }
    for (let uid = 0; uid < count1; uid++) {
        CompareUsers(uid)
        console.log(UsersandData[uid].whoimatchwith)
    }
}

function CreateUserRandomizer(){
    ///FIRST we're going to assign their ID (Place in array) for easier lookup later.
    let howmanyuserstemp=UsersandData.length
    let heightsearch=0
    let heightsearch2=999
    let agesearch = (Math.floor(Math.random() * (50 - 18 + 1) + 18))
    let agesearch2 = (agesearch+10)
    if ((Math.floor(Math.random() * 2))===0){
        heightsearch = (Math.floor(Math.random() * (180 - 150 + 1) + 150))
        heightsearch2 = (heightsearch+20)
    }else{
        heightsearch=0
        heightsearch2=999
    }

    ////Now we'll create the user!
    UsersandData.push({
    myid: howmanyuserstemp, //This assigns their "place" in the Array.
    firstname: "Carly",
    lastname: "McGregor",
    birthyear: 1998,
    birthmonth: 07,
    birthday: 29,
    agenumber: ((Math.floor(Math.random() * (42+1)))+18), //18-60 years
    agetext: "18 Years Old",
    height: ((Math.floor(Math.random() * (50+1)))+150), //in cm
    location: "Vancouver, Canada",
    Longditude: 145.33,
    Latitude: 442.35,
    Prompts: ["","","","","",""],
    RatingProfileAccuraccy: "",
    RatingFunness: "",
    RatingOverallDate: "",
    SocialFBIGLI: [],
    Smoking: randomizyesnosometimes(),
    Weed: randomizyesnosometimes(),
    Drugs: randomizyesnosometimes(),
    Drinking: randomizyesnosometimes(),
    Profession: randomizecareer(),
    Position: "CEO at 22apps",
    Religion: randomizereligion(),
    Ethnicity: randomizeethnicity(),
    Children: randomizechildren(),
    Political: randomizepolitics(),
    Vaxstatus: randomizevaxstatus(),
    profilepics: ["https://22apps.jpeg","N/A","N/A","N/A","N/A","N/A"],
    question: [randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer()],
    ////EVERYTHING Above this line is for editing THEIR info.
    //Everything BELOW this line is for "search settings"
    searchagerange: [agesearch,agesearch2], //min, max - 0,999 means "All"
    searchheight: [heightsearch,heightsearch2], //in cm - 0,999 means "All"
    searchlocation: 50, //50km radius
    searchwillingtotravel: ["Globally"], //Sort of like "Dealbreaker"... Can select "Only Within 50km radius", "Within State/Province", //"Within Country", "Globally"
    searchSmoking: searchrandomizyesnosometimes(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchWeed: searchrandomizyesnosometimes(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchDrugs: searchrandomizyesnosometimes(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchDrinking: searchrandomizyesnosometimes(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchProfession: searchrandomizecareer(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchReligion: searchrandomizereligion(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchEthnicity: searchrandomizeethnicity(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchChildren: searchrandomizechildren(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchPolitical: searchrandomizepolitics(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchVaxstatus: searchrandomizevaxstatus(), //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    ///Last thing is who they matched with!!
    whoimatchwith: [],
    });
    //UsersandData[howmanyuserstemp].agenumber=dataofbirth(UsersandData[howmanyuserstemp].birthmonth,UsersandData[howmanyuserstemp].birthday,UsersandData[howmanyuserstemp].birthyear)
}


function CreateUser(){
    ///FIRST we're going to assign their ID (Place in array) for easier lookup later.
    let howmanyuserstemp=UsersandData.length
    ////Now we'll create the user!
    UsersandData.push({
    myid: howmanyuserstemp, //This assigns their "place" in the Array.
    firstname: "Carly",
    lastname: "McGregor",
    birthyear: 1998,
    birthmonth: 07,
    birthday: 29,
    agenumber: 18,
    agetext: "18 Years Old",
    height: 130, //in cm
    location: "Vancouver, Canada",
    Longditude: 145.33,
    Latitude: 442.35,
    Prompts: ["","","","","",""],
    RatingProfileAccuraccy: "",
    RatingFunness: "",
    RatingOverallDate: "",
    SocialFBIGLI: [],
    Smoking: "No",
    Weed: "No",
    Drugs: "No",
    Drinking: "No",
    Profession: "Entrepreneur",
    Position: "CEO at 22apps",
    Religion: "Christian",
    Ethnicity: "White",
    Children: "None - But want one day!",
    Political: "Conservative",
    Vaxstatus: "Unvaxxed",
    profilepics: ["https://22apps.jpeg","N/A","N/A","N/A","N/A","N/A"],
    question: [randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer()],
    ////EVERYTHING Above this line is for editing THEIR info.
    //Everything BELOW this line is for "search settings"
    searchagerange: [15,44], //min, max - 0,999 means "All"
    searchheight: [0,999], //in cm - 0,999 means "All"
    searchlocation: 50, //50km radius
    searchwillingtotravel: ["Globally"], //Sort of like "Dealbreaker"... Can select "Only Within 50km radius", "Within State/Province", //"Within Country", "Globally"
    searchSmoking: ["Yes","No","Somtimes"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchWeed: ["Yes","No","Somtimes"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchDrugs: ["Yes","No","Somtimes"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchDrinking: ["Yes","No","Somtimes"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchProfession: ["Entrepreneur", "Freelancer"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchReligion: ["Christian","Athiest"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchEthnicity: ["White"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchChildren: [], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchPolitical: ["Conservative"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchVaxstatus: ["Unvaxxed"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    ///Last thing is who they matched with!!
    whoimatchwith: [],
    });
    UsersandData[howmanyuserstemp].agenumber=dataofbirth(UsersandData[howmanyuserstemp].birthmonth,UsersandData[howmanyuserstemp].birthday,UsersandData[howmanyuserstemp].birthyear)
}

function AddAnswer(QuestionNumber,AnswerNumber){ //This function updates the associated answer on a contact-record. Requires BOTH Question # + Choice # in Multiple Choice
    UsersandData[0].question[QuestionNumber-1]=(AnswerNumber)
}

function randomizeanswer(){ //Returns random answer from 0-3
    return(Math.floor(Math.random() * 4))
}

function randomizyesnosometimes(){ //Returns random answer from 0-3
    var items = ['Yes', 'No', 'Sometimes'];
    return(items[Math.floor(Math.random() * items.length)])
}

function searchrandomizyesnosometimes(){ //Returns random answer from 0-3
    let yesnosometimestemp=[]
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Yes")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("No")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Sometimes")
    }
    if (yesnosometimestemp.length===0){
        yesnosometimestemp.push("Yes","No","Sometimes")
    }
    return(yesnosometimestemp)
}

function randomizecareer(){ //Returns random answer from 0-3
    var items = ['Entrepreneur', 'Corporate Worker', 'Employee'];
    return(items[Math.floor(Math.random() * items.length)])
}


function searchrandomizecareer(){ //Returns random answer from 0-3
    let yesnosometimestemp=[]
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Entrepreneur")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Corporate Worker")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Employee")
    }
    if (yesnosometimestemp.length===0){
        yesnosometimestemp.push("Entrepreneur","Corporate Worker","Employee")
    }
    return(yesnosometimestemp)
}

function randomizereligion(){ //Returns random answer from 0-3
    var items = ['None', 'Christian', 'Athiest', 'Spiritual'];
    return(items[Math.floor(Math.random() * items.length)])
}

function searchrandomizereligion(){ //Returns random answer from 0-3
    let yesnosometimestemp=[]
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("None")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Christian")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Athiest")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Spiritual")
    }
    if (yesnosometimestemp.length===0){
        yesnosometimestemp.push("None","Christian","Athiest","Spiritual")
    }
    return(yesnosometimestemp)
}

function randomizevaxstatus(){ //Returns random answer from 0-3
    var items = ['Vaccinated', 'Unvaxxed'];
    return(items[Math.floor(Math.random() * items.length)])
}

function searchrandomizevaxstatus(){ //Returns random answer from 0-3
    let yesnosometimestemp=[]
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Vaccinated")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Unvaxxed")
    }
    if (yesnosometimestemp.length===0){
        yesnosometimestemp.push("Vaccinated","Unvaxxed")
    }
    return(yesnosometimestemp)
}

function randomizepolitics(){ //Returns random answer from 0-3
    var items = ['Conservative', 'Liberal', 'Do Not Care'];
    return(items[Math.floor(Math.random() * items.length)])
}

function searchrandomizepolitics(){ //Returns random answer from 0-3
    let yesnosometimestemp=[]
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Conservative")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Liberal")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Do Not Care")
    }
    if (yesnosometimestemp.length===0){
        yesnosometimestemp.push("Conservative","Liberal","Do Not Care")
    }
    return(yesnosometimestemp)
}

function randomizeethnicity(){ //Returns random answer from 0-3
    var items = ['Black', 'White', 'Asian'];
    return(items[Math.floor(Math.random() * items.length)])
}

function searchrandomizeethnicity(){ //Returns random answer from 0-3
    let yesnosometimestemp=[]
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Black")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("White")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Asian")
    }
    if (yesnosometimestemp.length===0){
        yesnosometimestemp.push("Black","White","Asian")
    }
    return(yesnosometimestemp)
}

function randomizechildren(){ //Returns random answer from 0-3
    var items = ['Have Kids', 'Do Not Want Kids', 'Want Kids Eventually'];
    return(items[Math.floor(Math.random() * items.length)])
}

function searchrandomizechildren(){ //Returns random answer from 0-3
    let yesnosometimestemp=[]
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Have Kids")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Do Not Want Kids")
    }
    if ((Math.floor(Math.random() * 2))===0){
        yesnosometimestemp.push("Want Kids Eventually")
    }
    if (yesnosometimestemp.length===0){
        yesnosometimestemp.push("Have Kids","Do Not Want Kids","Want Kids Eventually")
    }
    return(yesnosometimestemp)
}

function CompareUsers(userid){ //Ideally we want to check against the ENTIRE database WHILE keeping quality good (So eliminating options along the way...)
    //To start, we will simply "FORCE IT" and mass-check everyone (it may take a bit to load...)
    let pointstemp=[]
    for (let usercounttemp = 0; usercounttemp < UsersandData.length; usercounttemp++) {
        pointstemp.push({
        question: [],
        sum: 0,
        idlocator: usercounttemp,
        })
    }
    for (let i = 0; i < UsersandData[userid].question.length; i++) { //Keep looping until we've gone through ALL questions (i)
        for (let i2 = 0; i2 < UsersandData.length; i2++) { //Keep looping until we've gone through ALL users (i2)
            if (i2!==userid){ //Ensures we're not running for ourself
                if ((UsersandData[userid].question[i]===undefined) || (UsersandData[i2].question[i]===undefined)){
                    pointstemp[i2].question[i]=0
                }
                else{
                    if(UsersandData[userid].question[i]===UsersandData[i2].question[i]){ //If you have the SAME answer for the SAME question, then...
                        if(checkfordealbreaker(userid,i2)==="false"){
                            pointstemp[i2].question[i]=QuestionPointValues[i]
                        }else{pointstemp[i2].question[i]=0}
                    }else{pointstemp[i2].question[i]=0}
                }
            }else{pointstemp[i2].question[i]=0}
        }
    }
    let mostpoints = []
    for (let i3 = 0; i3 < pointstemp.length; i3++) { //For everyone added in PointsTemp...
        for (let i4 = 0; i4 < pointstemp[i3].question.length; i4++) { //For ALL questions asked...
            pointstemp[i3].sum += pointstemp[i3].question[i4];
        }
        mostpoints.push([i3,pointstemp[i3].sum,CompatibilityRatio(pointstemp[i3].sum,UsersandData[userid].question.length)])
    }
    mostpoints.sort(sortFunction);
    UsersandData[userid].whoimatchwith=mostpoints
}

function sortFunction(a, b) {
if (a[1] === b[1]) {
    return 0;
}
else {
    return (a[1] < b[1]) ? 1 : -1;
}
}

function CompatibilityRatio(pointsum,numberofquestions){
    let totalquestionpoints = 0
    for (let qi = 0; qi < numberofquestions; qi++) {
        totalquestionpoints = (QuestionPointValues[qi] + totalquestionpoints)
    }
    return(pointsum/totalquestionpoints)
}

function checkfordealbreaker(userid,matchid){ //Ensures No Dealbreakers
    //Search Age Range
        if (
        UsersandData[userid].searchagerange[0] <= UsersandData[matchid].agenumber && 
        UsersandData[userid].searchagerange[1] >= UsersandData[matchid].agenumber &&
        UsersandData[matchid].searchagerange[0] <= UsersandData[userid].agenumber &&
        UsersandData[matchid].searchagerange[1] >= UsersandData[userid].agenumber
        ){
        }else{foundDealbreaker()}

    //Search Height
        if (
        UsersandData[userid].searchheight[0] <= UsersandData[matchid].height && 
        UsersandData[userid].searchheight[1] >= UsersandData[matchid].height &&
        UsersandData[matchid].searchheight[0] <= UsersandData[userid].height &&
        UsersandData[matchid].searchheight[1] >= UsersandData[userid].height
        ){
        }else{foundDealbreaker()}

    //*******SHOULD HAVE DEALBREAKER ON DISTANCE SOMEHOW...! (And willingness to travel!)

    //Search Smoking
    if (UsersandData[userid].searchSmoking!=undefined){
        for (let i = 0; i < UsersandData[userid].searchSmoking.length; i++) {
            if (UsersandData[userid].searchSmoking[i] === UsersandData[matchid].Smoking){
                let matchfoundA = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchSmoking!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchSmoking.length; i++) {
            if (UsersandData[matchid].searchSmoking[i] === UsersandData[userid].Smoking){
                let matchfoundB = true
                break
            }
        }
    }
    if ((matchfoundA = true) && (matchfoundB = true)){
    } else{foundDealbreaker()}

    //Search Weed
    if (UsersandData[userid].searchWeed!=undefined){
        for (let i = 0; i < UsersandData[userid].searchWeed.length; i++) {
            if (UsersandData[userid].searchWeed[i] === UsersandData[matchid].Weed){
                let matchfoundC = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchWeed!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchWeed.length; i++) {
            if (UsersandData[matchid].searchWeed[i] === UsersandData[userid].Weed){
                let matchfoundD = true
                break
            }
        }
    }
    if ((matchfoundC = true) && (matchfoundD = true)){
    } else{foundDealbreaker()}      
    
    //Search Drinking
    if (UsersandData[userid].searchDrinking!=undefined){
        for (let i = 0; i < UsersandData[userid].searchDrinking.length; i++) {
            if (UsersandData[userid].searchDrinking[i] === UsersandData[matchid].Drinking){
                let matchfoundE = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchDrinking!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchDrinking.length; i++) {
            if (UsersandData[matchid].searchDrinking[i] === UsersandData[userid].Drinking){
                let matchfoundF = true
                break
            }
        }
    }
    if ((matchfoundE = true) && (matchfoundF = true)){
    } else{foundDealbreaker()} 
    
    
    //Search Drugs
    if (UsersandData[userid].searchDrugs!=undefined){
        for (let i = 0; i < UsersandData[userid].searchDrugs.length; i++) {
            if (UsersandData[userid].searchDrugs[i] === UsersandData[matchid].Drugs){
                let matchfoundG = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchDrugs!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchDrugs.length; i++) {
            if (UsersandData[matchid].searchDrugs[i] === UsersandData[userid].Drugs){
                let matchfoundH = true
                break
            }
        }
    }
    if ((matchfoundG = true) && (matchfoundH = true)){
    } else{foundDealbreaker()} 


    //Search Profession
    if (UsersandData[userid].searchProfession!=undefined){
        for (let i = 0; i < UsersandData[userid].searchProfession.length; i++) {
            if (UsersandData[userid].searchProfession[i] === UsersandData[matchid].Profession){
                let matchfoundI = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchProfession!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchProfession.length; i++) {
            if (UsersandData[matchid].searchProfession[i] === UsersandData[userid].Profession){
                let matchfoundJ = true
                break
            }
        }
    }
    if ((matchfoundI = true) && (matchfoundJ = true)){
    } else{foundDealbreaker()}

    //Search Religion
    if (UsersandData[userid].searchReligion!=undefined){
        for (let i = 0; i < UsersandData[userid].searchReligion.length; i++) {
            if (UsersandData[userid].searchReligion[i] === UsersandData[matchid].Religion){
                let matchfoundK = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchReligion!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchReligion.length; i++) {
            if (UsersandData[matchid].searchReligion[i] === UsersandData[userid].Religion){
                let matchfoundL = true
                break
            }
        }
    }
    if ((matchfoundK = true) && (matchfoundL = true)){
    } else{foundDealbreaker()}      
    
    //Search Ethnicity
    if (UsersandData[userid].searchEthnicity!=undefined){
        for (let i = 0; i < UsersandData[userid].searchEthnicity.length; i++) {
            if (UsersandData[userid].searchEthnicity[i] === UsersandData[matchid].Ethnicity){
                let matchfoundM = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchEthnicity!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchEthnicity.length; i++) {
            if (UsersandData[matchid].searchEthnicity[i] === UsersandData[userid].Ethnicity){
                let matchfoundN = true
                break
            }
        }
    }
    if ((matchfoundM = true) && (matchfoundN = true)){
    } else{foundDealbreaker()} 
    
    
    //Search Children
    if (UsersandData[userid].searchChildren!=undefined){
        for (let i = 0; i < UsersandData[userid].searchChildren.length; i++) {
            if (UsersandData[userid].searchChildren[i] === UsersandData[matchid].Children){
                let matchfoundO = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchChildren!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchChildren.length; i++) {
            if (UsersandData[matchid].searchChildren[i] === UsersandData[userid].Children){
                let matchfoundP = true
                break
            }
        }
    }
    if ((matchfoundO = true) && (matchfoundP = true)){
    } else{foundDealbreaker()} 


    //Search Political
    if (UsersandData[userid].searchPolitical!=undefined){
        for (let i = 0; i < UsersandData[userid].searchPolitical.length; i++) {
            if (UsersandData[userid].searchPolitical[i] === UsersandData[matchid].Political){
                let matchfoundQ = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchPolitical!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchPolitical.length; i++) {
            if (UsersandData[matchid].searchPolitical[i] === UsersandData[userid].Political){
                let matchfoundR = true
                break
            }
        }
    }
    if ((matchfoundQ = true) && (matchfoundR = true)){
    } else{foundDealbreaker()} 


    //Search Vaxstatus
    if (UsersandData[userid].searchVaxstatus!=undefined){
        for (let i = 0; i < UsersandData[userid].searchVaxstatus.length; i++) {
            if (UsersandData[userid].searchVaxstatus[i] === UsersandData[matchid].Vaxstatus){
                let matchfoundS = true
                break
            } 
        }
    }
    if (UsersandData[matchid].searchVaxstatus!=undefined){
        for (let i = 0; i < UsersandData[matchid].searchVaxstatus.length; i++) {
            if (UsersandData[matchid].searchVaxstatus[i] === UsersandData[userid].Vaxstatus){
                let matchfoundT = true
                break
            }
        }
    }
    if ((matchfoundS = true) && (matchfoundT = true)){
    } else{foundDealbreaker()}
    
    if (founddealbreaker===1){
        founddealbreaker=0
        return("true")
    } else {return ("false")}
    
}

function foundDealbreaker(){
    founddealbreaker=1
}


function dataofbirth(m1,d1,y1){
var dob = new Date(m1+"/"+d1+"/"+y1);  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);   
//extract year from date      
var year = age_dt.getUTCFullYear();       
//now calculate the age of the user  
var age = Math.abs(year - 1970);          
return(age)
}