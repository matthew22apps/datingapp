let AnswerArray=[]
let UsersandData=[]
let founddealbreaker=0
let sessionmatchid=0
let sessionmatchindex=0
let myuserid=999 //placeholder
let QuestionPointValues=[
    1, //Question 1
    1, //Question 2
    3, //Question 3
    5, //Question 4
    2, //Question 5
    3, //Question 6
    4, //Question 7
    1, //Question 8
    2, //Question 9
    6, //Question 10
    1, //Question 11
    1, //Question 12
    3, //Question 13
    5, //Question 14
    2, //Question 15
    3, //Question 16
    4, //Question 17
    1, //Question 18
    2, //Question 19
    6, //Question 20
    1, //Question 21
    1, //Question 22
    3, //Question 23
    5, //Question 24
    2, //Question 25
    3, //Question 26
    4, //Question 27
    1, //Question 28
    2, //Question 29
    6 //Question 30
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
    }
    console.log(UsersandData)
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
    let gender1=randomizegender()

    ////Now we'll create the user!
    UsersandData.push({
    myid: howmanyuserstemp, //This assigns their "place" in the Array.
    gender: gender1, //Man or Woman
    firstname: randomizefirstname(gender1),
    agenumber: ((Math.floor(Math.random() * (42+1)))+18), //18-60 years
    height: ((Math.floor(Math.random() * (50+1)))+150), //in cm
    Prompts: ["","","","","",""],
    RatingProfileAccuraccy: "",
    RatingFunness: "",
    RatingOverallDate: "",
    Smoking: randomizyesnosometimes(),
    Weed: randomizyesnosometimes(),
    Drugs: randomizyesnosometimes(),
    Drinking: randomizyesnosometimes(),
    Profession: randomizecareer(),
    Religion: randomizereligion(),
    Ethnicity: randomizeethnicity(),
    Children: randomizechildren(),
    Political: randomizepolitics(),
    Vaxstatus: randomizevaxstatus(),
    profilepics: [randomizephoto(gender1),"N/A","N/A","N/A","N/A","N/A"],
    question: [randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer()],
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
    whoiswipedon: [],
    });
    //UsersandData[howmanyuserstemp].agenumber=dataofbirth(UsersandData[howmanyuserstemp].birthmonth,UsersandData[howmanyuserstemp].birthday,UsersandData[howmanyuserstemp].birthyear)
}

/*
function CreateUser(){
    ///FIRST we're going to assign their ID (Place in array) for easier lookup later.
    let howmanyuserstemp=UsersandData.length
    ////Now we'll create the user!
    UsersandData.push({
    myid: howmanyuserstemp, //This assigns their "place" in the Array.
    gender: "Man", //Man or Woman
    firstname: "Matthew",
    lastname: "McGregor",
    birthyear: 1998,
    birthmonth: 07,
    birthday: 29,
    agenumber: 23,
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
    searchChildren: ["Yes"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchPolitical: ["Conservative"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    searchVaxstatus: ["Unvaxxed"], //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
    ///Last thing is who they matched with!!
    whoimatchwith: [],
    whoiswipedon: [],
    });
    UsersandData[howmanyuserstemp].agenumber=dataofbirth(UsersandData[howmanyuserstemp].birthmonth,UsersandData[howmanyuserstemp].birthday,UsersandData[howmanyuserstemp].birthyear)
    CompareUsers(howmanyuserstemp)
    console.log(UsersandData)
}
*/

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

function randomizegender(){ //Returns random answer from 0-3
    var items = ['Man', 'Woman'];
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


    //Search Opposite Gender
    if (UsersandData[userid].gender===UsersandData[matchid].gender){
    foundDealbreaker()
    }

    //Search People I've Already Matched With
    if (UsersandData[userid].whoimatchwith!=undefined){
        for (let i = 0; i < UsersandData[userid].whoimatchwith.length; i++) {
            if (UsersandData[userid].whoimatchwith[i] === matchid){
                foundDealbreaker()
                break
            } 
        }
    }


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

function save(){

    if(localStorage.getItem('data')== null){
        localStorage.setItem('data','[]');
    }
    localStorage.setItem('data',JSON.stringify(UsersandData))
}

function saveuserid(idpass){

    if(localStorage.getItem('userid')== null){
        localStorage.setItem('userid','[]');
    }
    localStorage.setItem('userid',JSON.stringify(idpass))
}

function view(){
    if(localStorage.getItem('data') != null){
        UsersandData = JSON.parse(localStorage.getItem('data'))
    }
    
    if(localStorage.getItem('userid') != null){
        myuserid = JSON.parse(localStorage.getItem('userid'))
    }
    sessionmatchindex=0
    massusers(100)
    CompareUsers(myuserid)
    change2()
    console.log(UsersandData)
    console.log(myuserid)
    save()
}
window.onload = view;

function cleardatabse(){
localStorage.clear('data')
localStorage.clear('userid')
}



/////

//Random Names and Photos

let femaleNames = ["Emily","Hannah","Madison","Ashley","Sarah","Alexis","Samantha","Jessica","Elizabeth","Taylor","Lauren","Alyssa","Kayla","Abigail","Brianna","Olivia","Emma","Megan","Grace","Victoria","Rachel","Anna","Sydney","Destiny","Morgan","Jennifer","Jasmine","Haley","Julia","Kaitlyn","Nicole","Amanda","Katherine","Natalie","Hailey","Alexandra","Savannah","Chloe","Rebecca","Stephanie","Maria","Sophia","Mackenzie","Allison","Isabella","Amber","Mary","Danielle","Gabrielle","Jordan","Brooke","Michelle","Sierra","Katelyn","Andrea","Madeline","Sara","Kimberly","Courtney","Erin","Brittany","Vanessa","Jenna","Jacqueline","Caroline","Faith","Makayla","Bailey","Paige","Shelby","Melissa","Kaylee","Christina","Trinity","Mariah","Caitlin","Autumn","Marissa","Breanna","Angela","Catherine","Zoe","Briana","Jada","Laura","Claire","Alexa","Kelsey","Kathryn","Leslie","Alexandria","Sabrina","Mia","Isabel","Molly","Leah","Katie","Gabriella","Cheyenne","Cassandra","Tiffany","Erica","Lindsey","Kylie","Amy","Diana","Cassidy","Mikayla","Ariana","Margaret","Kelly","Miranda","Maya","Melanie","Audrey","Jade","Gabriela","Caitlyn","Angel","Jillian","Alicia","Jocelyn","Erika","Lily","Heather","Madelyn","Adriana","Arianna","Lillian","Kiara","Riley","Crystal","Mckenzie","Meghan","Skylar","Ana","Britney","Angelica","Kennedy","Chelsea","Daisy","Kristen","Veronica","Isabelle","Summer","Hope","Brittney","Lydia","Hayley","Evelyn","Bethany","Shannon","Michaela","Karen","Jamie","Daniela","Angelina","Kaitlin","Karina","Sophie","Sofia","Diamond","Payton","Cynthia","Alexia","Valerie","Monica","Peyton","Carly","Bianca","Hanna","Brenda","Rebekah","Alejandra","Mya","Avery","Brooklyn","Ashlyn","Lindsay","Ava","Desiree","Alondra","Camryn","Ariel","Naomi","Jordyn","Kendra","Mckenna","Holly","Julie","Kendall","Kara","Jasmin","Selena","Esmeralda","Amaya","Kylee","Maggie","Makenzie","Claudia","Kyra","Cameron","Karla","Kathleen","Abby","Delaney","Amelia","Casey","Serena","Savanna","Aaliyah","Giselle","Mallory","April","Raven","Adrianna","Christine","Kristina","Nina","Asia","Natalia","Valeria","Aubrey","Lauryn","Kate","Patricia","Jazmin","Rachael","Katelynn","Cierra","Alison","Macy","Nancy","Elena","Kyla","Katrina","Jazmine","Joanna","Tara","Gianna","Juliana","Fatima","Allyson","Gracie","Sadie","Guadalupe","Genesis","Yesenia","Julianna","Skyler","Tatiana","Alexus","Alana","Elise","Kirsten","Nadia","Sandra","Dominique","Ruby","Haylee","Jayla","Tori","Cindy","Sidney","Ella","Tessa","Carolina","Camille","Jaqueline","Whitney","Carmen","Vivian","Priscilla","Bridget","Celeste","Kiana","Makenna","Alissa","Madeleine","Miriam","Natasha","Ciara","Cecilia","Mercedes","Kassandra","Reagan","Aliyah","Josephine","Charlotte","Rylee","Shania","Kira","Meredith","Eva","Lisa","Dakota","Hallie","Anne","Rose","Liliana","Kristin","Deanna","Imani","Marisa","Kailey","Annie","Nia","Carolyn","Anastasia","Brenna","Dana","Shayla","Ashlee","Kassidy","Alaina","Rosa","Wendy","Logan","Tabitha","Paola","Callie","Addison","Lucy","Gillian","Clarissa","Destinee","Josie","Esther","Denise","Katlyn","Mariana","Bryanna","Emilee","Georgia","Deja","Kamryn","Ashleigh","Cristina","Baylee","Heaven","Ruth","Raquel","Monique","Teresa","Helen","Krystal","Tiana","Cassie","Kayleigh","Marina","Heidi","Ivy","Ashton","Clara","Meagan","Gina","Linda","Gloria","Jacquelyn","Ellie","Jenny","Renee","Daniella","Lizbeth","Anahi","Virginia","Gisselle","Kaitlynn","Julissa","Cheyanne","Lacey","Haleigh","Marie","Martha","Eleanor","Kierra","Tiara","Talia","Eliza","Kaylie","Mikaela","Harley","Jaden","Hailee","Madalyn","Kasey","Ashlynn","Brandi","Lesly","Elisabeth","Allie","Viviana","Cara","Marisol","India","Tatyana","Litzy","Melody","Jessie","Brandy","Alisha","Hunter","Noelle","Carla","Francesca","Tia","Layla","Krista","Zoey","Carley","Janet","Carissa","Iris","Kaleigh","Tyler","Susan","Tamara","Theresa","Yasmine","Tatum","Sharon","Alice","Yasmin","Tamia","Abbey","Alayna","Kali","Lilly","Bailee","Lesley","Mckayla","Ayanna","Serenity","Karissa","Precious","Jane","Maddison","Jayda","Kelsie","Lexi","Phoebe","Halle","Kiersten","Kiera","Tyra","Annika","Felicity","Taryn","Kaylin","Ellen","Kiley","Jaclyn","Rhiannon","Madisyn","Colleen","Joy","Pamela","Charity","Tania","Fiona","Alyson","Kaila","Annabelle","Emely","Angelique","Alina","Irene","Johanna","Regan","Janelle","Janae","Madyson","Paris","Justine","Chelsey","Sasha","Paulina","Mayra","Zaria","Skye","Cora","Brisa","Emilie","Felicia","Larissa","Macie","Tianna","Aurora","Sage","Lucia","Alma","Chasity","Ann","Deborah","Nichole","Jayden","Alanna","Malia","Carlie","Angie","Nora","Kailee","Sylvia","Carrie","Elaina","Sonia","Genevieve","Kenya","Piper","Marilyn","Amari","Macey","Marlene","Barbara","Tayler","Julianne","Brooklynn","Lorena","Perla","Elisa","Kaley","Leilani","Eden","Miracle","Devin","Aileen","Chyna","Athena","Esperanza","Regina","Adrienne","Shyanne","Luz","Tierra","Cristal","Clare","Eliana","Kelli","Eve","Sydnee","Madelynn","Breana","Melina","Arielle","Justice","Toni","Corinne","Maia","Tess","Abbigail","Ciera","Ebony","Maritza","Lena","Lexie","Isis","Aimee","Leticia","Sydni","Sarai","Halie","Alivia","Destiney","Laurel","Edith","Carina","Fernanda","Amya","Destini","Aspen","Nathalie","Paula","Tanya","Frances","Tina","Christian","Elaine","Shayna","Aniya","Mollie","Ryan","Essence","Simone","Kyleigh","Nikki","Anya","Reyna","Kaylyn","Nicolette","Savanah","Abbie","Montana","Kailyn","Itzel","Leila","Cayla","Stacy","Araceli","Robin","Dulce","Candace","Noemi","Jewel","Aleah","Ally","Mara","Nayeli","Karlee","Keely","Alisa","Micaela","Desirae","Leanna","Antonia","Brynn","Jaelyn","Judith","Raegan","Katelin","Sienna","Celia","Yvette","Juliet","Anika","Emilia","Calista","Carlee","Eileen","Kianna","Thalia","Rylie","Daphne","Kacie","Karli","Rosemary","Ericka","Jadyn","Lyndsey","Micah","Hana","Haylie","Madilyn","Laila","Blanca","Kayley","Katarina","Kellie","Maribel","Sandy","Joselyn","Kaelyn","Madisen","Carson","Kathy","Margarita","Stella","Juliette","Devon","Camila","Bria","Donna","Helena","Lea","Jazlyn","Jazmyn","Skyla","Christy","Katharine","Joyce","Karlie","Lexus","Salma","Alessandra","Delilah","Moriah","Celine","Lizeth","Beatriz","Brianne","Kourtney","Sydnie","Stacey","Mariam","Robyn","Hayden","Janessa","Kenzie","Jalyn","Sheila","Meaghan","Aisha","Jaida","Shawna","Estrella","Marley","Melinda","Ayana","Karly","Devyn","Nataly","Loren","Rosalinda","Brielle","Laney","Lizette","Sally","Tracy","Lilian","Rebeca","Chandler","Jenifer","Valentina","America","Candice","Diane","Abigayle","Susana","Aliya","Casandra","Harmony","Jacey","Alena","Aylin","Carol","Shea","Stephany","Aniyah","Zoie","Jackeline","Alia","Savana","Damaris","Gwendolyn","Violet","Marian","Anita","Jaime","Alexandrea","Jaiden","Kristine","Carli","Dorothy","Gretchen","Janice","Annette","Mariela","Amani","Maura","Bella","Kaylynn","Lila","Armani","Anissa","Aubree","Kelsi","Greta","Kaya","Kayli","Lillie","Willow","Ansley","Catalina","Lia","Maci","Celina","Shyann","Alysa","Jaquelin","Kasandra","Quinn","Cecelia","Mattie","Chaya","Hailie","Haven","Kallie","Maegan","Maeve","Rocio","Yolanda","Christa","Gabriel","Kari","Noelia","Jeanette","Kaylah","Marianna","Nya","Kennedi","Presley","Yadira","Elissa","Nyah","Reilly","Shaina","Alize","Arlene","Amara","Izabella","Lyric","Aiyana","Allyssa","Drew","Rachelle","Adeline","Jacklyn","Jesse","Citlalli","Liana","Giovanna","Princess","Selina","Brook","Elyse","Graciela","Cali","Berenice","Chanel","Iliana","Jolie","Caitlynn","Christiana","Annalise","Cortney","Darlene","Sarina","Dasia","London","Yvonne","Karley","Shaylee","Myah","Amira","Juanita","Kristy","Ryleigh","Dariana","Teagan","Kiarra","Ryann","Yamilet","Alexys","Kacey","Shakira","Sheridan","Baby","Dianna","Lara","Isabela","Reina","Shirley","Jaycee","Silvia","Tatianna","Eryn","Ingrid","Keara","Randi","Reanna","Kalyn","Lisette","Monserrat","Lori","Abril","Ivana","Kaela","Maranda","Parker","Darby","Darian","Jasmyn","Jaylin","Katia","Ayla","Bridgette","Hillary","Kinsey","Yazmin","Caleigh","Elyssa","Rita","Asha","Dayana","Nikita","Chantel","Reese","Stefanie","Nadine","Samara","Unique","Michele","Sonya","Hazel","Patience","Cielo","Mireya","Paloma","Aryanna","Magdalena","Anaya","Dallas","Arely","Joelle","Kaia","Misty","Norma","Taya","Deasia","Trisha","Elsa","Joana","Alysha","Aracely","Bryana","Dawn","Brionna","Alex","Katerina","Ali","Bonnie","Hadley","Martina","Maryam","Jazmyne","Shaniya","Alycia","Dejah","Emmalee","Estefania","Jakayla","Lilliana","Nyasia","Anjali","Daisha","Myra","Amiya","Belen","Jana","Saige","Aja","Annabel","Scarlett","Joanne","Aliza","Ashly","Cydney","Destany","Fabiola","Gia","Keira","Roxanne","Kaci","Abigale","Abagail","Janiya","Odalys","Aria","Daija","Delia","Kameron","Ashtyn","Katy","Lourdes","Raina","Dayna","Emerald","Kirstin","Marlee","Neha","Beatrice","Blair","Kori","Luisa","Annamarie","Breonna","Jena","Leann","Rhianna","Yasmeen","Yessenia","Breanne","Laisha","Mandy","Amina","Jailyn","Jayde","Jill","Katlynn","Kaylan","Antoinette","Kenna","Rayna","Iyana","Keeley","Kenia","Maiya","Melisa","Sky","Adrian","Marlen","Shianne","Alysia","Audra","Jacquelin","Malaysia","Aubrie","Infant","Kaycee","Kendal","Shelbie","Chana","Kalie","Chelsie","Evelin","Janie","Leanne","Ashlie","Dalia","Lana","Suzanne","Ashanti","Juana","Kelley","Marcella","Tristan","Johana","Lacy","Noel","Bryn","Ivette","Jamya","Mikala","Nyla","Yamile","Jailene","Katlin","Keri","Sarahi","Shauna","Tyanna","Noor","Flor","Makena","Miya","Sade","Natalee","Pearl","Corina","Starr","Hayleigh","Niya","Star","Baylie","Beyonce","Carrington","Rochelle","Roxana","Vanesa","Charisma","Santana","Frida","Melany","Octavia","Cameryn","Jasmyne","Keyla","Lilia","Lucero","Madalynn","Jackelyn","Libby","Danica","Halee","Makala","Stevie","Cailey","Charlene","Dania","Denisse","Iyanna","Shana","Tammy","Tayla","Elisha","Kayle","Liberty","Shyla","Dina","Judy","Priscila","Ada","Carleigh","Eunice","Janette","Jaylene","Latavia","Xiomara","Caylee","Constance","Gwyneth","Lexis","Yajaira","Kaytlin","Aryana","Jocelyne","Myranda","Tiffani","Gladys","Kassie","Kaylen","Mykayla","Anabel","Beverly","Blake","Demi","Emani","Justina","Keila","Makaila","Colette","Estefany","Jalynn","Joslyn","Kerry","Marisela","Miah","Anais","Cherish","Destinie","Elle","Jennie","Lacie","Odalis","Stormy","Daria","Halley","Lina","Tabatha","Angeline","Hollie","Jayme","Jaylynn","Maricela","Maxine","Mina","Estefani","Shaelyn","Mckinley","Alaysia","Jessika","Lidia","Maryann","Samira","Shelbi","Betty","Connie","Iman","Mira","Shanice","Susanna","Jaylyn","Kristi","Sariah","Serina","Shae","Taniya","Winter","Mindy","Rhea","Tristen","Danae","Jamia","Natalya","Siena","Areli","Daja","Jodi","Leeann","Rianna","Yulissa","Alyssia","Ciarra","Delanie","Nautica","Tamera","Tionna","Alecia","Astrid","Breann","Journey","Kaiya","Lynn","Zariah","Adilene","Annalisa","Chyanne","Jalen","Kyara","Camilla","Monet","Priya","Akira","Cori","Fallon","Giana","Naya","Shreya","Tanisha","Debra","Irma","Lissette","Lorraine","Magaly","Mahogany","Marcela","Abrianna","Alexi","Amaris","Cailyn","Hali","Joan","Kelsea","Lainey","Viridiana","Chastity","Isabell","Maleah","Tasha","Terra","Beth","Elana","Mariel","Maureen","Shantel","Coral","Grayson","Ivanna","Katheryn","Olga","Addie","Bayleigh","Rowan","Taliyah","Yareli","Betsy","Geneva","Grecia","Kristian","Kya","Leigha","Racheal","Tamya","Yoselin","Alea","Annemarie","Breeanna","Harlee","Marlena","Shay","Zion","Citlali","Colby","Julisa","Simran","Yaritza","Cathryn","Griselda","Jessenia","Lucille","Annabella","Dara","Kala","Madysen","Micayla","Sommer","Haily","Karyme","Lisbeth","Shanna","Brittani","China","Daijah","Danika","Kerri","Keyanna","Monika","Triniti","Cailin","Isela","Kalli","Amalia","Brea","Dajah","Jolene","Kaylea","Mason","Rivka","Yessica","Bobbie","Tyana","Shelly","Billie","Chantal","Jami","Kaytlyn","Nathaly","Pauline","Aidan","Aleena","Danyelle","Jaylen","Katya","Kendyl","Lesli","Mari","Analisa","Kalista","Kayleen","Kortney","Kristyn","Lola","Luna","Brieanna","Corrine","Elsie","Harlie","Cloe","Jackie","Kalee","Leandra","Magali","Shamya","Tatiyana","Zainab","Aliah","Alliyah","Anisa","Elexis","Ireland","Jala","Kylah","Marion","Mercedez","Alyse","Annmarie","Azaria","Gissel","Jacy","Joann","Kiya","Liza","Macayla","Britany","Kristal","Maren","Acacia","Alli","Christen","Deana","Makaela","Makenzi","Tonya","Dahlia","Keyana","Krysta","Nallely","Rosemarie","Emerson","Jaci","Jacie","Jalisa","Joseline","Karsyn","Keisha","Marianne","Maryjane","Phoenix","Terri","Tyasia","Yamileth","Amiyah","Darcy","Galilea","Georgina","Harper","Tasia","Adia","Bree","Ivory","Kierstin","Meadow","Nathalia","Xochitl","Adelaide","Amberly","Calli","Deandra","Desire","Kimberlee","Mackenna","Mallorie","Anisha","Brigid","Franchesca","Janna","Jocelynn","Keanna","Kia","Mae","Makiya","Yahaira","Adamaris","Ania","Ivonne","Janaya","Kai","Karah","Marin","Rosalie","Aleigha","Ashli","Mika","Penelope","Rosario","Aislinn","Amirah","Charlie","Jaelynn","Madelyne","Renae","Aiyanna","Anabelle","Cinthia","Dylan","Eboni","Janeth","Jayna","Kinley","Laken","Lyndsay","Mikaila","Moira","Nikole","Vicky","Amie","Belinda","Cheryl","Chynna","Dora","Jaquelyn","Nakia","Tehya","Treasure","Valencia","Adela","Aliana","Alora","Ashely","Averi","Eleni","Janell","Kalynn","Livia","Mona","Rena","Riya","Sherry","Tionne","Annelise","Brissa","Jania","Jensen","Lora","Lynette","Samaria","Shanya","Ximena","Adrianne","Ainsley","Bobbi","Heidy","Jaidyn","Linnea","Malorie","Melia","Mickayla","Riana","Roxanna","Tiarra","Christie","Domonique","Dymond","Kathrine","Keyonna","Kiah","Kyndall","Leia","Leigh","Maliyah","Montserrat","Sonja","Symone","Allysa","Anyssa","Ariella","Keegan","Natali","Yulisa","Alesha","Demetria","Johnna","Keana","Lynsey","Siera","Tatyanna","Zara","Annaliese","Chiara","Emalee","Giavanna","Kimberley","Amiah","Autum","Briley","Cathy","Christin","Hattie","Jazlynn","Bryce","Chase","Cherokee","Devan","Ilana","Jean","Jesenia","Lela","Lianna","Rubi","Trista","Amaiya","Farrah","Francis","Imari","Kim","Pilar","Selene","Susannah","Alannah","Ananda","Madelin","Madilynn","Nicolle","Rileigh","Sana","Selah","Valery","Alani","Emelia","Hayli","Janay","Jeniffer","Joselin","June","Marla","Michael","Noa","Shira","Ayesha","Dixie","Hanah","Jaycie","Juliann","Maddie","Nelly","Zahra","Edna","Jadah","Jaela","Karolina","Laci","Lanie","Malka","Marguerite","Mercy","Milena","Tyla","Bayley","Callista","Candy","Caylin","Jessi","Julieta","Karleigh","Kyndal","Lizet","Louise","Sanjana","Sheyla","Shivani","Thea","Tracey","Aya","Bernadette","Bethanie","Danna","Daysha","Jayleen","Kaeli","Kaliyah","Karime","Kinsley","Linsey","Lucinda","Maira","Tierney","Angeles","Anjelica","Aysha","Bridgett","Brookelyn","Divya","Ginger","Jamila","Kaili","Klarissa","Meg","Raelynn","Salena","Sequoia","Amia","Ashlin","Dayanara","Isha","Jordin","Kelis","Krysten","Leona","Lexy","Makaylah","Notnamed","Raelyn","Sabina","Sahara","Shekinah","Siobhan","Tiera","Yaquelin","Alanis","Ambria","Anai","Caley","Catrina","Gemma","Jodie","Malika","Marjorie","Sunny","Abriana","Alexcia","Ayleen","Brynne","Dalila","Erykah","Ileana","Jaila","Jessalyn","Kirstyn","Margo","Myia","Mykala","Stacie","Tristin","Analise","Andie","Arden","Averie","Aysia","Brylee","Doris","Janine","Jennah","Keona","Leyla","Shakayla","Taylar","Tea","Verania","Allissa","Arleth","Babygirl","Christianna","Corrina","Holland","Josefina","Julian","Keyara","Rayne","Rayven","Shiann","Stefani","Stefany","Whitley","Annalee","Asya","Charlize","Chassidy","Deisy","Emery","Francisca","Gissell","Kami","Khadijah","Rhonda","Vera","Yazmine","Zaira","Ciana","Ester","Gisel","Gracelyn","Jorden","Kelsy","Mackenzi","Oriana","Reece","Saira","Tanner","Yesica","Anastacia","Briza","Jacinda","Jaliyah","Jaya","Kalia","Kameryn","Kearra","Kerrigan","Lilianna","Nayely","Tricia","Dasha","Emmaline","Izabel","Jaimie","Jaylah","Jazzmine","Keasia","Leena","Malina","Pricilla","Ryanne","Scarlet","Tamar","Abbigale","Adelina","August","Ayah","Flora","Harleigh","Jerrica","Karrington","Kaylene","Keren","Khloe","Kyana","Marielle","Nevaeh","Ryley","Spencer","Valarie","Yuliana","Ariyana","Brooklin","Desiray","Dyamond","Estela","Jayne","Kailah","Kalei","Karis","Laurie","Madelaine","Malinda","Rosie","Salina","Shalyn","Shoshana","Bernice","Chanelle","Dani","Darla","Destanie","Gisell","Heavenly","Joi","Josey","Lyla","Markayla","Davina","Egypt","Elvira","Glenda","Janel","Kelcie","Maricruz","Nadya","Nailah","Sapphire","Saylor","Shiloh","Sunshine","Trina","Winnie","Aida","Amethyst","Anneliese","Cecily","Dionna","Geraldine","Layne","Portia","Taelor","Adele","Alessia","Andria","Carsyn","Cianna","Dynasty","Elayna","Evangeline","Frankie","Gracen","Hayle","Kaileigh","Keyona","Lillianna","Marta","Michell","Nakayla","Raeann","Zakiya","Cami","Gracyn","Jaylee","Malena","Marcia","Mirian","Myla","Teanna","Zhane","Bertha","Dena","Izabelle","Janiyah","Kierstyn","Lupita","Milan","Patrice","Reem","Sarena","Soraya","Suzanna","Therese","Vianey","Wynter","Adina","Angelika","Carter","Catelyn","Desteny","Jessa","Krystina","Lilah","Loretta","Mekayla","Milagros","Nakiya","Petra","Ravyn","Tegan","Tiffanie","Allana","Arabella","Bailie","Charlee","Christal","Iesha","Janiah","Jourdan","Kaelin","Kailynn","Karsen","Margot","Payten","Soleil","Trinitee","Tyesha","Alaysha","Alexius","Alisia","Anayeli","Ani","Audrianna","Elysia","Jocelin","Jovanna","Kacy","Kerstin","Keziah","Kristie","Lilith","Louisa","Magdalene","Mariyah","May","Michaella","Paisley","Rene","Samanta","Shantell","Adison","Citlaly","Deonna","Dolores","Ida","Karson","Katilyn","Litzi","Lynda","Maisie","Merissa","Niyah","Remy","Shaylynn","Shyanna","Alexxis","Arianne","Azucena","Brandie","Celena","Farah","Hilary","Jael","Maile","Mattison","Mekenzie","Shaylyn","Starla","Yael","Yaneli","Abbygail","Breeana","Briona","Janya","Jesica","Kaycie","Kyrsten","Lani","Makyla","Michayla","Monae","Myesha","Ria","Saray","Shaylin","Susie","Tory","Veronika","Alise","Alyvia","Cambria","Charis","Denisha","Evan","Gracey","Jamiya","Joceline","Porsha","Rory","Rosalyn","Stacia","Talya","Torie","Venus","Alix","Aminah","Baleigh","Breauna","Consuelo","Emoni","Evangelina","Genna","Malaya","Olyvia","Zharia","Angelia","Ariah","Aundrea","Brittni","Cloey","Faye","Jadelyn","Jaeda","Jamaya","Luciana","Madelynne","Nechama","Rikki","Rilee","Sayra","Shanelle","Sloane","Tala","Zaire","Araya","Carlene","Chyenne","Dayanna","Deirdre","Dominque","Elianna","Emmy","Hilda","Honesty","Jaslyn","Jazzmin","Jordon","Kalea","Karena","Mykenzie","Nydia","Rheanna","Shaye","Alexsandra","Amyah","Angelita","Becky","Gabriele","Hadassah","Haileigh","Kalina","Kora","Mckenzi","Mildred","Millie","Sawyer","Sela","Selma","Stormie","Verenice","Viktoria","Vivianna","Yara","Abbigayle","Alba","Anamaria","Baileigh","Brynna","Caylie","Fayth","Giulia","Jennyfer","Jerica","Jewell","Joey","Katalina","Kaytlynn","Kyanna","Kyrah","Lili","Naudia","Nour","Rian","Shamari","Tytiana","Addyson","Asiah","Corrin","Elliana","Elora","Emme","Faigy","Indya","Kandace","Macee","Myka","Neida","Siara","Alexzandria","Arlette","Dezirae","Halli","Kimora","Lane","Madaline","Mila","Pooja","Ramona","Trinidy","Aditi","Alaya","Arriana","Aubry","Brigitte","Brinley","Chantelle","Clarisa","Holli","Ines","Kaira","Kera","Kyler","Lilli","Mandi","Marah","Matilda","Mirella","Nada","Shaniyah","Ajah","Alanah","Becca","Chandra","Chole","Chrystal","Cienna","Elexus","Elicia","Estephanie","Giuliana","Jamesha","Kaelynn","Karmen","Keiara","Khalia","Kyah","Lois","Tanaya","Adara","Ailyn","Ariadna","Arionna","Baily","Breasia","Cheyann","Debbie","Denae","Jeanne","Kristiana","Lucie","Mabel","Rashel","Sierrah","Sloan","Sofie","Tressa","Xena","Abrielle","Belle","Breona","Gisela","Jaedyn","Kay","Keturah","Leeanna","Lindy","Morgen","Promise","Rae","Rebecka","Rosalia","Sheyenne","Siani","Angelena","Aryn","Bianka","Charley","Deena","Elia","Jazzlyn","Kady","Kamille","Karin","Quincy","Ragan","Shawnee","Sterling","Taina","Anabella","Ashlynne","Brianda","Destani","Fatoumata","Jaimee","Jonae","Kaniya","Karoline","Landry","Latasha","Liz","Magnolia","Maryssa","Michala","Peri","Racquel","Rebeka","Shaila","Suzette","Tahlia","Traci","Amal","Capri","Catarina","Codi","Destine","Devorah","Dezarae","Ivey","Jackelin","Janai","Josette","Kandice","Kimberlyn","Mackayla","Mai","Margaux","Micaiah","Nijah","Raylene","Sammantha","Taja","Zulema","Abygail","Aleisha","Aleya","Allegra","Aniah","Braelyn","Brookelynn","Clarice","Corey","Fatimah","Jacquelynn","Jalissa","Jimena","Kamaria","Kiarah","Leana","Leslye","Mahala","Melodie","Montanna","Raine","Sahar","Tyonna","Yanira","Arika","Ariyanna","Briauna","Bronwyn","Danasia","Elvia","Fantasia","Gizelle","Inez","Joni","Lorna","Makiah","Mykaela","Noelani","Rachell","Samia","Shelley","Teri","Violeta","Abbi","Abigael","Agnes","Althea","Ashia","Casie","Charli","Charmaine","Cinthya","Dejanae","Echo","Ember","Gabriell","Gena","Gwen","Kalani","Karisma","Karyn","Khadija","Lakayla","Latoya","Maricarmen","Nellie","Paxton","Peighton","Sedona","Tamika","Yenifer","Zipporah","Adria","Alexsis","Aminata","Ananya","Cassady","Citlally","Cyan","Divine","Eman","Emiley","Eryka","Estella","Eugenia","Francine","Geena","Jody","Larisa","Lee","Marykate","Moesha","Najah","Nisha","Rania","Rayanna","Renata","Tana","Aleksandra","Aline","Amaria","Ami","Anja","Arin","Azia","Brittanie","Carlyn","Chante","Cheyanna","Cleo","Dianne","Emili","Evie","Gema","Jakia","Jamilet","Jannet","Jenae","Jenessa","Kaily","Kamari","Kayce","Keonna","Kilee","Latrice","Maisy","Manuela","Melani","Nohemi","Nova","Nylah","Pricila","Raeanne","Remi","Roberta","Sheena","Taliah","Timia","Yisel","Zaida","Angelic","Britni","Cassondra","Channing","Corinna","Desirea","Dinah","Ilene","Janasia","Jordynn","Kasie","Keiana","Kenley","Kyli","Lakeisha","Laniya","Markia","Mattea","Meranda","Miyah","Nubia","Rana","Richelle","Shaniah","Shealyn","Tais","Tristyn","Yarely","Yatzari","Alexander","Alexzandra","Anahy","Annastasia","Aubrianna","Avalon","Chloee","Cordelia","Darien","Diamonique","Dorian","Jacee","Jailine","Kamya","Kelsee","Lilibeth","Myasia","Nikayla","Noah","Shawn","Tavia","Tytianna","Alesia","Ashlea","Asma","Bayli","Briseida","Charissa","Connor","Daniel","Danya","Debora","Erynn","Estelle","Holley","Indira","Janiece","Jaymee","Jeana","Joely","Kelci","Lluvia","Lorelei","Mecca","Michal","Mitzy","Passion","Shamia","Staci","Tamiya","Thais","Tracie","Yoana","Ajanae","Avianna","Blessing","Cadence","Camden","Chasidy","Crista","Destanee","Deysi","Elly","Jailynn","Jaymie","Jeannette","Kaylei","Keaira","Kitana","Kristan","Lakota","Mariya","Ricki","Sneha","Tajah","Yamilex","Aerial","Aislynn","Analicia","Briannah","Cera","Cosette","Elina","Gwenyth","Katelynne","Keirsten","Kennedie","Kenzi","Kiyana","Kloe","Lamya","Lisset","Magen","Maite","Malea","Maliah","Quiana","Shianna","Sylvie","Vannessa","Wanda","Yanet","Andi","Anessa","Annah","Annamaria","Aubriana","Audrie","Azalea","Blythe","Breyana","Cambrie","Danisha","Elisia","Florence","Josselyn","Jurnee","Kaitlynne","Karizma","Kathia","Kayden","Kodi","Mackenzy","Mirna","Naja","Niamh","Niki","Noemy","Raeanna","Rebekka","Seanna","Shanaya","Sonali","Storm","Tanna","Tate","Veda","Vivica","Vivien","Zoya","Amayah","Briann","Bryonna","Caterina","Chassity","Deidra","Eloise","Elva","Jacob","Jovana","Kennady","Khayla","Kyrstin","Lacee","Lashay","Latisha","Micheala","Michela","Morghan","Myriam","Queen","Rain","Raya","Shanell","Shani","Soledad","Alasia","Aurelia","Brittnee","Camry","Chyann","Dafne","Dasani","Destyni","Haile","Kaelee","Kalena","Kamila","Kati","Korina","Krystin","Mikah","Mikaylah","Neely","Nigeria","Nyesha","Page","Priyanka","Torrie","Alayah","Azariah","Blakely","Brienna","Britnee","Brittny","Calla","Chelsy","Dezaray","Emilly","Emmaleigh","Evelynn","Imelda","Jaeden","Jamiah","Jayci","Jeannie","Jenelle","Jeri","Joie","Joycelyn","Kallista","Karisa","Kaydee","Keagan","Kiran","Kiyah","Leighann","Mackenzee","Madisson","Malaika","Maryanne","Mitzi","Nichelle","Paiton","Rebekkah","Taniyah","Tarah","Tylar","Aiden","Alyna","Cady","Carmela","Carolynn","Cathleen","Cidney","Danelle","Emi","Emmeline","Felisha","Grayce","Isobel","Iyonna","Joscelyn","Julieann","Kadie","Kailin","Karma","Kenadee","Kendell","Lakia","Lakin","Leora","Loryn","Love","Mariella","Maycee","Mckenzy","Norah","Odessa","Peggy","Samatha","Shalynn","Shante","Sindy","Skylynn","Willa","Adreanna","Alexie","Alijah","Alyah","Ambar","Briahna","Caprice","Cayley","Daisey","Dalilah","Dayla","Deziree","Jaylan","Jianna","Jose","Kassi","Kathryne","Keirra","Kionna","Kolby","Kyndra","Lakyn","Malak","Mariama","Marlie","Rainey","Rina","Sabine","Samone","Samya","Shamiya","Sincere","Uma","Yanely","Zahria","Afton","Alaura","Aleyah","Anusha","Breyanna","Cailee","Cody","Corin","Daeja","Elli","Ellison","Gisele","Idalis","Jakiya","Janelly","Jazmen","Jenica","Joshua","Joslynn","Kateri","Kieran","Kyley","Lanae","Maha","Maryah","Naila","Nanci","Nicola","Nisa","Ofelia","Schuyler","Sinai","Torri","Zoee","Zykeria","Alexyss","Alianna","Alona","Alonna","Collette","Dajanae","Dakotah","Daysi","Dharma","Emmie","Gitty","Indigo","Italia","Jakyra","Janea","Jenesis","Jolee","Kailani","Kalen","Kaliah","Kalysta","Kasia","Kathlyn","Keily","Kyle","Lorin","Makenzy","Makiyah","Michel","Paityn","Penny","Semaj","Sera","Shannen","Tamra","Tayah","Taylore","Tykeria","Aide","Akilah","Alysse","Ambrosia","Anaiya","Anthony","Ariadne","Austin","Chenoa","Daesha","Derricka","Emory","Gianni","Haili","Idalia","Jaelin","Jaileen","Janee","Jazlin","Kacee","Kailie","Keandra","Keilani","Kylea","Laine","Mckinzie","Megha","Myriah","Rhyan","Rochel","Rosanna","Salome","Shaelynn","Shakyra","Tanvi","Tapanga","Vianca","Zakiyah","Zia","Aleia","Armoni","Audriana","Carlin","Carsen","Ceara","Chaney","Chesney","Darci","Elida","Francheska","Haylea","Jabria","Jaclynn","Jahaira","Jamison","Jeanine","Jeanna","Johannah","Kalin","Kamiya","Kassidi","Katherin","Kaysha","Krislyn","Kymberly","Magan","Marbella","Marwa","Minerva","Nala","River","Seirra","Stefania","Stephani","Toby","Aishwarya","Allena","Allisa","Amaia","Anay","Arica","Arieanna","Aviana","Baila","Blaire","Brigette","Caila","Carrigan","Chelsi","Christopher","Clair","Corrie","Courtnie","Delana","Ema","Glory","Jacelyn","Jordana","Kamia","Katiana","Keianna","Kelby","Laiza","Lilyana","Mahalia","Mallori","Mayah","Molli","Naima","Nola","Raylee","Rayonna","Roslyn","Sean","Shasta","Sirena","Takayla","Takia","Taleah","Tanasia","Tera","Thelma","Vivienne","Adelyn","Alexas","Andreana","Andriana","Aries","Aura","Cayleigh","Courteney","Dennise","Desarae","Diavian","Elinor","Emeline","Ilse","Jalia","Jonathan","Justyce","Kania","Karely","Katera","Kiani","Kiona","Kirby","Kyia","Lakendra","Maja","Meghana","Naomy","Ramya","Reegan","Rosalba","Shyan","Tanesha","Tiyana","Xenia","Yuri","Zarria","Alaa","Aleesha","Amariah","Amil","Anakaren","Angelle","Arrianna","Ashlan","Augusta","Avigail","Brayden","Brynlee","Campbell","Carmella","Cassey","Cassidi","Deandrea","Gladis","Haydee","Hiba","Jalah","Justin","Kareena","Karol","Kenedy","Marygrace","Maryn","Mica","Mykia","Nailea","Payge","Roselyn","Rylan","Safa","Shakeria","Vy","Adelle","Adyson","Alexes","Alizabeth","Amyia","Annabell","Arian","Ariane","Ariela","Briseyda","Carisa","Chanell","Chava","Daryn","Davida","Deidre","Dyani","Esha","Jaide","Julieanna","Kambria","Karishma","Katana","Kellyn","Kyrie","Mackinzie","Marcy","Mariann","Marli","Marlyn","Merari","Mikenzie","Naiya","Nana","Orianna","Remington","Sabryna","Shaela","Sherri","Simona","Sol","Talitha","Thania","Yailin","Zayra","Aine","Akayla","Alyza","Amoni","Analiese","Arizona","Ashlei","Ashten","Avani","Azure","Bracha","Brina","Caeley","Caren","Cari","Deavion","Delicia","Eleana","Ellery","Emeli","Erinn","Hallee","Jazzmyn","Jules","Kamilah","Karlyn","Kavya","Laysha","Lilyann","Mairead","Mataya","Meera","Meggan","Miriah","Nalani","Nicoletta","Ocean","Raechel","Ryanna","Samiyah","Serene","Shakiya","Sianna","Sole","Stephania","Syeda","Teonna","Tiona","Xitlali","Zeinab","Adamari","Andra","Andrew","Anijah","Areanna","Ashtin","Audry","Brooklynne","Calysta","Catharine","Cheyenna","Cristian","Daejah","Dannielle","Danyel","Della","Erianna","Falon","Fatou","Faythe","Greer","Jacalyn","Jessy","Kaeleigh","Kalissa","Kayana","Keaton","Keelie","Keilah","Kimber","Korie","Lamia","Lenora","Lizett","Londyn","Marielena","Marleigh","Nadira","Niah","Raychel","Rosio","Shai","Shakia","Sheryl","Shruti","Sumer","Tailor","Venessa","Viola","Ysabel","Zaniya","Addisyn","Adriane","Ameera","Anette","Ayonna","Brittnie","Cate","Celest","Cydnee","David","Denice","Eloisa","Emonie","Graci","Guinevere","Jori","Jubilee","Kaleah","Karrie","Keiry","Kersten","Klara","Latonya","Lexia","Lisbet","Lyndsie","Matthew","Melannie","Mimi","Monserrath","Nyia","Parris","Paulette","Raena","Samiya","Stephenie","Stormi","Takara","Taniah","Taylin","Theodora","Ursula","Vada","Vienna","Zakia","Zena","Aleyna","Andreanna","Anny","Anyah","Arial","Aubri","Brittaney","Caelyn","Chloie","Dacia","Darianna","Deondra","Diandra","Hadiya","Jamilah","Janely","Janey","Joselyne","Keeli","Keiona","Kezia","Kindra","Laina","Latia","Lessly","Mansi","Maris","Melony","Mikenna","Millicent","Morganne","Nadiyah","Nereida","Nidhi","Nidia","Nyjah","Radhika","Risa","Sable","Sailor","Scout","Shaindy","Solana","Talyn","Tyeisha","Vania","Zuri","Amairani","Anasia","Ashante","Ashlen","Audree","Brandon","Brennan","Caryn","Daelyn","Deserae","Destynee","Deyanira","Emelyn","Emileigh","Eriana","Eternity","Fannie","Heba","Infinity","Iran","Jacquline","Jamaria","Journee","Kaitlan","Karyssa","Kenisha","Khaliah","Kiandra","Kierston","Kylia","Laiken","Laurin","Leela","Lizabeth","Lizbet","Maeghan","Mahnoor","Makia","Marybeth","Meleah","Meriah","Milana","Myracle","Nadiya","Perri","Rosetta","Seana","Shakera","Sunni","Sydne","Symphony","Tamira","Taytum","Vicki","Zaina","Zayda","Ameerah","Annalyse","Apryl","Ariona","Arissa","Arlyn","Aspyn","Ayden","Brett","Brie","Britta","Briyana","Cassi","Catlyn","Corie","Corryn","Courtnee","Danni","Daysia","Delani","Emmalyn","Faviola","Gianella","Gretta","Huda","Iyanla","Jonna","Josalyn","Joshlyn","Kamri","Katey","Kelcey","Kenadi","Kensley","Keosha","Kinzie","Krishna","Krystle","Lakenya","Layna","Lejla","Leonela","Lindsy","Maiah","Makaya","Marrisa","Marsha","Medina","Mei","Millenia","Nija","Nyssa","Rosalina","Sabria","Samaya","Shamaria","Somer","Tajanae","Teah","Teya","Topanga","Unknown","Zada","Aerin","Amairany","Amna","Anaiah","Arion","Arleen","Briyanna","Bryanne","Carolann","Chayla","Daniele","Dayja","Dayonna","Denali","Deven","Devina","Dymon","Eleanore","Elisheva","Hala","Honor","Iqra","Isadora","Jacinta","Jakira","James","Jamiyah","Jayline","Jesslyn","Jonelle","Karalyn","Karenna","Kathya","Kayci","Keelin","Kieara","Kirra","Koryn","Lilyanna","Madigan","Makeda","Malky","Mamie","Marcelina","Margie","Mariajose","Marika","Marlaina","Marquita","Maryelizabeth","Matea","Miesha","Nakiyah","Phyllis","Rivky","Sabra","Shadae","Suzannah","Taija","Takira","Tamaya","Tayana","Tirzah","Tommi","Vianney","Xochilt","Alexxus","Amberlee","Amberlynn","Anela","Antonette","Carah","Carey","Carolyne","Cheyene","Cristy","Damia","Dionne","Edie","Ekaterina","Emalie","Ina","Jacklynn","Jaleah","Jalyssa","Jayce","Jesseca","Jessyca","Josephina","Kasi","Kennadi","Keylee","Kiaya","Kiyanna","Laryssa","Latasia","Leilah","Liset","Madolyn","Makaylee","Mariely","Marrissa","Mazie","Mccall","Meghann","Nayelli","Nicholas","Oksana","Pyper"]

let malenames = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem", "Arthur", "Artur", "Arturo", "Arun", "Arunas", "Arved", "Arya", "Aryan", "Aryankhan", "Aryian", "Aryn", "Asa", "Asfhan", "Ash", "Ashlee-jay", "Ashley", "Ashton", "Ashton-Lloyd", "Ashtyn", "Ashwin", "Asif", "Asim", "Aslam", "Asrar", "Ata", "Atal", "Atapattu", "Ateeq", "Athol", "Athon", "Athos-Carlos", "Atli", "Atom", "Attila", "Aulay", "Aun", "Austen", "Austin", "Avani", "Averon", "Avi", "Avinash", "Avraham", "Awais", "Awwal", "Axel", "Ayaan", "Ayan", "Aydan", "Ayden", "Aydin", "Aydon", "Ayman", "Ayomide", "Ayren", "Ayrton", "Aytug", "Ayub", "Ayyub", "Azaan", "Azedine", "Azeem", "Azim", "Aziz", "Azlan", "Azzam", "Azzedine", "Babatunmise", "Babur", "Bader", "Badr", "Badsha", "Bailee", "Bailey", "Bailie", "Bailley", "Baillie", "Baley", "Balian", "Banan", "Barath", "Barkley", "Barney", "Baron", "Barrie", "Barry", "Bartlomiej", "Bartosz", "Basher", "Basile", "Baxter", "Baye", "Bayley", "Beau", "Beinn", "Bekim", "Believe", "Ben", "Bendeguz", "Benedict", "Benjamin", "Benjamyn", "Benji", "Benn", "Bennett", "Benny", "Benoit", "Bentley", "Berkay", "Bernard", "Bertie", "Bevin", "Bezalel", "Bhaaldeen", "Bharath", "Bilal", "Bill", "Billy", "Binod", "Bjorn", "Blaike", "Blaine", "Blair", "Blaire", "Blake", "Blazej", "Blazey", "Blessing", "Blue", "Blyth", "Bo", "Boab", "Bob", "Bobby", "Bobby-Lee", "Bodhan", "Boedyn", "Bogdan", "Bohbi", "Bony", "Bowen", "Bowie", "Boyd", "Bracken", "Brad", "Bradan", "Braden", "Bradley", "Bradlie", "Bradly", "Brady", "Bradyn", "Braeden", "Braiden", "Brajan", "Brandan", "Branden", "Brandon", "Brandonlee", "Brandon-Lee", "Brandyn", "Brannan", "Brayden", "Braydon", "Braydyn", "Breandan", "Brehme", "Brendan", "Brendon", "Brendyn", "Breogan", "Bret", "Brett", "Briaddon", "Brian", "Brodi", "Brodie", "Brody", "Brogan", "Broghan", "Brooke", "Brooklin", "Brooklyn", "Bruce", "Bruin", "Bruno", "Brunon", "Bryan", "Bryce", "Bryden", "Brydon", "Brydon-Craig", "Bryn", "Brynmor", "Bryson", "Buddy", "Bully", "Burak", "Burhan", "Butali", "Butchi", "Byron", "Cabhan", "Cadan", "Cade", "Caden", "Cadon", "Cadyn", "Caedan", "Caedyn", "Cael", "Caelan", "Caelen", "Caethan", "Cahl", "Cahlum", "Cai", "Caidan", "Caiden", "Caiden-Paul", "Caidyn", "Caie", "Cailaen", "Cailean", "Caileb-John", "Cailin", "Cain", "Caine", "Cairn", "Cal", "Calan", "Calder", "Cale", "Calean", "Caleb", "Calen", "Caley", "Calib", "Calin", "Callahan", "Callan", "Callan-Adam", "Calley", "Callie", "Callin", "Callum", "Callun", "Callyn", "Calum", "Calum-James", "Calvin", "Cambell", "Camerin", "Cameron", "Campbel", "Campbell", "Camron", "Caolain", "Caolan", "Carl", "Carlo", "Carlos", "Carrich", "Carrick", "Carson", "Carter", "Carwyn", "Casey", "Casper", "Cassy", "Cathal", "Cator", "Cavan", "Cayden", "Cayden-Robert", "Cayden-Tiamo", "Ceejay", "Ceilan", "Ceiran", "Ceirin", "Ceiron", "Cejay", "Celik", "Cephas", "Cesar", "Cesare", "Chad", "Chaitanya", "Chang-Ha", "Charles", "Charley", "Charlie", "Charly", "Chase", "Che", "Chester", "Chevy", "Chi", "Chibudom", "Chidera", "Chimsom", "Chin", "Chintu", "Chiqal", "Chiron", "Chris", "Chris-Daniel", "Chrismedi", "Christian", "Christie", "Christoph", "Christopher", "Christopher-Lee", "Christy", "Chu", "Chukwuemeka", "Cian", "Ciann", "Ciar", "Ciaran", "Ciarian", "Cieran", "Cillian", "Cillin", "Cinar", "CJ", "C-Jay", "Clark", "Clarke", "Clayton", "Clement", "Clifford", "Clyde", "Cobain", "Coban", "Coben", "Cobi", "Cobie", "Coby", "Codey", "Codi", "Codie", "Cody", "Cody-Lee", "Coel", "Cohan", "Cohen", "Colby", "Cole", "Colin", "Coll", "Colm", "Colt", "Colton", "Colum", "Colvin", "Comghan", "Conal", "Conall", "Conan", "Conar", "Conghaile", "Conlan", "Conley", "Conli", "Conlin", "Conlly", "Conlon", "Conlyn", "Connal", "Connall", "Connan", "Connar", "Connel", "Connell", "Conner", "Connolly", "Connor", "Connor-David", "Conor", "Conrad", "Cooper", "Copeland", "Coray", "Corben", "Corbin", "Corey", "Corey-James", "Corey-Jay", "Cori", "Corie", "Corin", "Cormac", "Cormack", "Cormak", "Corran", "Corrie", "Cory", "Cosmo", "Coupar", "Craig", "Craig-James", "Crawford", "Creag", "Crispin", "Cristian", "Crombie", "Cruiz", "Cruz", "Cuillin", "Cullen", "Cullin", "Curtis", "Cyrus", "Daanyaal", "Daegan", "Daegyu", "Dafydd", "Dagon", "Dailey", "Daimhin", "Daithi", "Dakota", "Daksh", "Dale", "Dalong", "Dalton", "Damian", "Damien", "Damon", "Dan", "Danar", "Dane", "Danial", "Daniel", "Daniele", "Daniel-James", "Daniels", "Daniil", "Danish", "Daniyal", "Danniel", "Danny", "Dante", "Danyal", "Danyil", "Danys", "Daood", "Dara", "Darach", "Daragh", "Darcy", "D'arcy", "Dareh", "Daren", "Darien", "Darius", "Darl", "Darn", "Darrach", "Darragh", "Darrel", "Darrell", "Darren", "Darrie", "Darrius", "Darroch", "Darryl", "Darryn", "Darwyn", "Daryl", "Daryn", "Daud", "Daumantas", "Davi", "David", "David-Jay", "David-Lee", "Davie", "Davis", "Davy", "Dawid", "Dawson", "Dawud", "Dayem", "Daymian", "Deacon", "Deagan", "Dean", "Deano", "Decklan", "Declain", "Declan", "Declyan", "Declyn", "Dedeniseoluwa", "Deecan", "Deegan", "Deelan", "Deklain-Jaimes", "Del", "Demetrius", "Denis", "Deniss", "Dennan", "Dennin", "Dennis", "Denny", "Dennys", "Denon", "Denton", "Denver", "Denzel", "Deon", "Derek", "Derick", "Derin", "Dermot", "Derren", "Derrie", "Derrin", "Derron", "Derry", "Derryn", "Deryn", "Deshawn", "Desmond", "Dev", "Devan", "Devin", "Devlin", "Devlyn", "Devon", "Devrin", "Devyn", "Dex", "Dexter", "Dhani", "Dharam", "Dhavid", "Dhyia", "Diarmaid", "Diarmid", "Diarmuid", "Didier", "Diego", "Diesel", "Diesil", "Digby", "Dilan", "Dilano", "Dillan", "Dillon", "Dilraj", "Dimitri", "Dinaras", "Dion", "Dissanayake", "Dmitri", "Doire", "Dolan", "Domanic", "Domenico", "Domhnall", "Dominic", "Dominick", "Dominik", "Donald", "Donnacha", "Donnie", "Dorian", "Dougal", "Douglas", "Dougray", "Drakeo", "Dre", "Dregan", "Drew", "Dugald", "Duncan", "Duriel", "Dustin", "Dylan", "Dylan-Jack", "Dylan-James", "Dylan-John", "Dylan-Patrick", "Dylin", "Dyllan", "Dyllan-James", "Dyllon", "Eadie", "Eagann", "Eamon", "Eamonn", "Eason", "Eassan", "Easton", "Ebow", "Ed", "Eddie", "Eden", "Ediomi", "Edison", "Eduardo", "Eduards", "Edward", "Edwin", "Edwyn", "Eesa", "Efan", "Efe", "Ege", "Ehsan", "Ehsen", "Eiddon", "Eidhan", "Eihli", "Eimantas", "Eisa", "Eli", "Elias", "Elijah", "Eliot", "Elisau", "Eljay", "Eljon", "Elliot", "Elliott", "Ellis", "Ellisandro", "Elshan", "Elvin", "Elyan", "Emanuel", "Emerson", "Emil", "Emile", "Emir", "Emlyn", "Emmanuel", "Emmet", "Eng", "Eniola", "Enis", "Ennis", "Enrico", "Enrique", "Enzo", "Eoghain", "Eoghan", "Eoin", "Eonan", "Erdehan", "Eren", "Erencem", "Eric", "Ericlee", "Erik", "Eriz", "Ernie-Jacks", "Eroni", "Eryk", "Eshan", "Essa", "Esteban", "Ethan", "Etienne", "Etinosa", "Euan", "Eugene", "Evan", "Evann", "Ewan", "Ewen", "Ewing", "Exodi", "Ezekiel", "Ezra", "Fabian", "Fahad", "Faheem", "Faisal", "Faizaan", "Famara", "Fares", "Farhaan", "Farhan", "Farren", "Farzad", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Faysal", "Fearghus", "Feden", "Felix", "Fergal", "Fergie", "Fergus", "Ferre", "Fezaan", "Fiachra", "Fikret", "Filip", "Filippo", "Finan", "Findlay", "Findlay-James", "Findlie", "Finlay", "Finley", "Finn", "Finnan", "Finnean", "Finnen", "Finnlay", "Finnley", "Fintan", "Fionn", "Firaaz", "Fletcher", "Flint", "Florin", "Flyn", "Flynn", "Fodeba", "Folarinwa", "Forbes", "Forgan", "Forrest", "Fox", "Francesco", "Francis", "Francisco", "Franciszek", "Franco", "Frank", "Frankie", "Franklin", "Franko", "Fraser", "Frazer", "Fred", "Freddie", "Frederick", "Fruin", "Fyfe", "Fyn", "Fynlay", "Fynn", "Gabriel", "Gallagher", "Gareth", "Garren", "Garrett", "Garry", "Gary", "Gavin", "Gavin-Lee", "Gene", "Geoff", "Geoffrey", "Geomer", "Geordan", "Geordie", "George", "Georgia", "Georgy", "Gerard", "Ghyll", "Giacomo", "Gian", "Giancarlo", "Gianluca", "Gianmarco", "Gideon", "Gil", "Gio", "Girijan", "Girius", "Gjan", "Glascott", "Glen", "Glenn", "Gordon", "Grady", "Graeme", "Graham", "Grahame", "Grant", "Grayson", "Greg", "Gregor", "Gregory", "Greig", "Griffin", "Griffyn", "Grzegorz", "Guang", "Guerin", "Guillaume", "Gurardass", "Gurdeep", "Gursees", "Gurthar", "Gurveer", "Gurwinder", "Gus", "Gustav", "Guthrie", "Guy", "Gytis", "Habeeb", "Hadji", "Hadyn", "Hagun", "Haiden", "Haider", "Hamad", "Hamid", "Hamish", "Hamza", "Hamzah", "Han", "Hansen", "Hao", "Hareem", "Hari", "Harikrishna", "Haris", "Harish", "Harjeevan", "Harjyot", "Harlee", "Harleigh", "Harley", "Harman", "Harnek", "Harold", "Haroon", "Harper", "Harri", "Harrington", "Harris", "Harrison", "Harry", "Harvey", "Harvie", "Harvinder", "Hasan", "Haseeb", "Hashem", "Hashim", "Hassan", "Hassanali", "Hately", "Havila", "Hayden", "Haydn", "Haydon", "Haydyn", "Hcen", "Hector", "Heddle", "Heidar", "Heini", "Hendri", "Henri", "Henry", "Herbert", "Heyden", "Hiro", "Hirvaansh", "Hishaam", "Hogan", "Honey", "Hong", "Hope", "Hopkin", "Hosea", "Howard", "Howie", "Hristomir", "Hubert", "Hugh", "Hugo", "Humza", "Hunter", "Husnain", "Hussain", "Hussan", "Hussnain", "Hussnan", "Hyden", "I", "Iagan", "Iain", "Ian", "Ibraheem", "Ibrahim", "Idahosa", "Idrees", "Idris", "Iestyn", "Ieuan", "Igor", "Ihtisham", "Ijay", "Ikechukwu", "Ikemsinachukwu", "Ilyaas", "Ilyas", "Iman", "Immanuel", "Inan", "Indy", "Ines", "Innes", "Ioannis", "Ireayomide", "Ireoluwa", "Irvin", "Irvine", "Isa", "Isaa", "Isaac", "Isaiah", "Isak", "Isher", "Ishwar", "Isimeli", "Isira", "Ismaeel", "Ismail", "Israel", "Issiaka", "Ivan", "Ivar", "Izaak", "J", "Jaay", "Jac", "Jace", "Jack", "Jacki", "Jackie", "Jack-James", "Jackson", "Jacky", "Jacob", "Jacques", "Jad", "Jaden", "Jadon", "Jadyn", "Jae", "Jagat", "Jago", "Jaheim", "Jahid", "Jahy", "Jai", "Jaida", "Jaiden", "Jaidyn", "Jaii", "Jaime", "Jai-Rajaram", "Jaise", "Jak", "Jake", "Jakey", "Jakob", "Jaksyn", "Jakub", "Jamaal", "Jamal", "Jameel", "Jameil", "James", "James-Paul", "Jamey", "Jamie", "Jan", "Jaosha", "Jardine", "Jared", "Jarell", "Jarl", "Jarno", "Jarred", "Jarvi", "Jasey-Jay", "Jasim", "Jaskaran", "Jason", "Jasper", "Jaxon", "Jaxson", "Jay", "Jaydan", "Jayden", "Jayden-James", "Jayden-Lee", "Jayden-Paul", "Jayden-Thomas", "Jaydn", "Jaydon", "Jaydyn", "Jayhan", "Jay-Jay", "Jayke", "Jaymie", "Jayse", "Jayson", "Jaz", "Jazeb", "Jazib", "Jazz", "Jean", "Jean-Lewis", "Jean-Pierre", "Jebadiah", "Jed", "Jedd", "Jedidiah", "Jeemie", "Jeevan", "Jeffrey", "Jensen", "Jenson", "Jensyn", "Jeremy", "Jerome", "Jeronimo", "Jerrick", "Jerry", "Jesse", "Jesuseun", "Jeswin", "Jevan", "Jeyun", "Jez", "Jia", "Jian", "Jiao", "Jimmy", "Jincheng", "JJ", "Joaquin", "Joash", "Jock", "Jody", "Joe", "Joeddy", "Joel", "Joey", "Joey-Jack", "Johann", "Johannes", "Johansson", "John", "Johnathan", "Johndean", "Johnjay", "John-Michael", "Johnnie", "Johnny", "Johnpaul", "John-Paul", "John-Scott", "Johnson", "Jole", "Jomuel", "Jon", "Jonah", "Jonatan", "Jonathan", "Jonathon", "Jonny", "Jonothan", "Jon-Paul", "Jonson", "Joojo", "Jordan", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Joris", "Jorryn", "Josan", "Josef", "Joseph", "Josese", "Josh", "Joshiah", "Joshua", "Josiah", "Joss", "Jostelle", "Joynul", "Juan", "Jubin", "Judah", "Jude", "Jules", "Julian", "Julien", "Jun", "Junior", "Jura", "Justan", "Justin", "Justinas", "Kaan", "Kabeer", "Kabir", "Kacey", "Kacper", "Kade", "Kaden", "Kadin", "Kadyn", "Kaeden", "Kael", "Kaelan", "Kaelin", "Kaelum", "Kai", "Kaid", "Kaidan", "Kaiden", "Kaidinn", "Kaidyn", "Kaileb", "Kailin", "Kain", "Kaine", "Kainin", "Kainui", "Kairn", "Kaison", "Kaiwen", "Kajally", "Kajetan", "Kalani", "Kale", "Kaleb", "Kaleem", "Kal-el", "Kalen", "Kalin", "Kallan", "Kallin", "Kalum", "Kalvin", "Kalvyn", "Kameron", "Kames", "Kamil", "Kamran", "Kamron", "Kane", "Karam", "Karamvir", "Karandeep", "Kareem", "Karim", "Karimas", "Karl", "Karol", "Karson", "Karsyn", "Karthikeya", "Kasey", "Kash", "Kashif", "Kasim", "Kasper", "Kasra", "Kavin", "Kayam", "Kaydan", "Kayden", "Kaydin", "Kaydn", "Kaydyn", "Kaydyne", "Kayleb", "Kaylem", "Kaylum", "Kayne", "Kaywan", "Kealan", "Kealon", "Kean", "Keane", "Kearney", "Keatin", "Keaton", "Keavan", "Keayn", "Kedrick", "Keegan", "Keelan", "Keelin", "Keeman", "Keenan", "Keenan-Lee", "Keeton", "Kehinde", "Keigan", "Keilan", "Keir", "Keiran", "Keiren", "Keiron", "Keiryn", "Keison", "Keith", "Keivlin", "Kelam", "Kelan", "Kellan", "Kellen", "Kelso", "Kelum", "Kelvan", "Kelvin", "Ken", "Kenan", "Kendall", "Kendyn", "Kenlin", "Kenneth", "Kensey", "Kenton", "Kenyon", "Kenzeigh", "Kenzi", "Kenzie", "Kenzo", "Kenzy", "Keo", "Ker", "Kern", "Kerr", "Kevan", "Kevin", "Kevyn", "Kez", "Khai", "Khalan", "Khaleel", "Khaya", "Khevien", "Khizar", "Khizer", "Kia", "Kian", "Kian-James", "Kiaran", "Kiarash", "Kie", "Kiefer", "Kiegan", "Kienan", "Kier", "Kieran", "Kieran-Scott", "Kieren", "Kierin", "Kiern", "Kieron", "Kieryn", "Kile", "Killian", "Kimi", "Kingston", "Kinneil", "Kinnon", "Kinsey", "Kiran", "Kirk", "Kirwin", "Kit", "Kiya", "Kiyonari", "Kjae", "Klein", "Klevis", "Kobe", "Kobi", "Koby", "Koddi", "Koden", "Kodi", "Kodie", "Kody", "Kofi", "Kogan", "Kohen", "Kole", "Konan", "Konar", "Konnor", "Konrad", "Koray", "Korben", "Korbyn", "Korey", "Kori", "Korrin", "Kory", "Koushik", "Kris", "Krish", "Krishan", "Kriss", "Kristian", "Kristin", "Kristofer", "Kristoffer", "Kristopher", "Kruz", "Krzysiek", "Krzysztof", "Ksawery", "Ksawier", "Kuba", "Kurt", "Kurtis", "Kurtis-Jae", "Kyaan", "Kyan", "Kyde", "Kyden", "Kye", "Kyel", "Kyhran", "Kyie", "Kylan", "Kylar", "Kyle", "Kyle-Derek", "Kylian", "Kym", "Kynan", "Kyral", "Kyran", "Kyren", "Kyrillos", "Kyro", "Kyron", "Kyrran", "Lachlainn", "Lachlan", "Lachlann", "Lael", "Lagan", "Laird", "Laison", "Lakshya", "Lance", "Lancelot", "Landon", "Lang", "Lasse", "Latif", "Lauchlan", "Lauchlin", "Laughlan", "Lauren", "Laurence", "Laurie", "Lawlyn", "Lawrence", "Lawrie", "Lawson", "Layne", "Layton", "Lee", "Leigh", "Leigham", "Leighton", "Leilan", "Leiten", "Leithen", "Leland", "Lenin", "Lennan", "Lennen", "Lennex", "Lennon", "Lennox", "Lenny", "Leno", "Lenon", "Lenyn", "Leo", "Leon", "Leonard", "Leonardas", "Leonardo", "Lepeng", "Leroy", "Leven", "Levi", "Levon", "Levy", "Lewie", "Lewin", "Lewis", "Lex", "Leydon", "Leyland", "Leylann", "Leyton", "Liall", "Liam", "Liam-Stephen", "Limo", "Lincoln", "Lincoln-John", "Lincon", "Linden", "Linton", "Lionel", "Lisandro", "Litrell", "Liyonela-Elam", "LLeyton", "Lliam", "Lloyd", "Lloyde", "Loche", "Lochlan", "Lochlann", "Lochlan-Oliver", "Lock", "Lockey", "Logan", "Logann", "Logan-Rhys", "Loghan", "Lokesh", "Loki", "Lomond", "Lorcan", "Lorenz", "Lorenzo", "Lorne", "Loudon", "Loui", "Louie", "Louis", "Loukas", "Lovell", "Luc", "Luca", "Lucais", "Lucas", "Lucca", "Lucian", "Luciano", "Lucien", "Lucus", "Luic", "Luis", "Luk", "Luka", "Lukas", "Lukasz", "Luke", "Lukmaan", "Luqman", "Lyall", "Lyle", "Lyndsay", "Lysander", "Maanav", "Maaz", "Mac", "Macallum", "Macaulay", "Macauley", "Macaully", "Machlan", "Maciej", "Mack", "Mackenzie", "Mackenzy", "Mackie", "Macsen", "Macy", "Madaki", "Maddison", "Maddox", "Madison", "Madison-Jake", "Madox", "Mael", "Magnus", "Mahan", "Mahdi", "Mahmoud", "Maias", "Maison", "Maisum", "Maitlind", "Majid", "Makensie", "Makenzie", "Makin", "Maksim", "Maksymilian", "Malachai", "Malachi", "Malachy", "Malakai", "Malakhy", "Malcolm", "Malik", "Malikye", "Malo", "Ma'moon", "Manas", "Maneet", "Manmohan", "Manolo", "Manson", "Mantej", "Manuel", "Manus", "Marc", "Marc-Anthony", "Marcel", "Marcello", "Marcin", "Marco", "Marcos", "Marcous", "Marcquis", "Marcus", "Mario", "Marios", "Marius", "Mark", "Marko", "Markus", "Marley", "Marlin", "Marlon", "Maros", "Marshall", "Martin", "Marty", "Martyn", "Marvellous", "Marvin", "Marwan", "Maryk", "Marzuq", "Mashhood", "Mason", "Mason-Jay", "Masood", "Masson", "Matas", "Matej", "Mateusz", "Mathew", "Mathias", "Mathu", "Mathuyan", "Mati", "Matt", "Matteo", "Matthew", "Matthew-William", "Matthias", "Max", "Maxim", "Maximilian", "Maximillian", "Maximus", "Maxwell", "Maxx", "Mayeul", "Mayson", "Mazin", "Mcbride", "McCaulley", "McKade", "McKauley", "McKay", "McKenzie", "McLay", "Meftah", "Mehmet", "Mehraz", "Meko", "Melville", "Meshach", "Meyzhward", "Micah", "Michael", "Michael-Alexander", "Michael-James", "Michal", "Michat", "Micheal", "Michee", "Mickey", "Miguel", "Mika", "Mikael", "Mikee", "Mikey", "Mikhail", "Mikolaj", "Miles", "Millar", "Miller", "Milo", "Milos", "Milosz", "Mir", "Mirza", "Mitch", "Mitchel", "Mitchell", "Moad", "Moayd", "Mobeen", "Modoulamin", "Modu", "Mohamad", "Mohamed", "Mohammad", "Mohammad-Bilal", "Mohammed", "Mohanad", "Mohd", "Momin", "Momooreoluwa", "Montague", "Montgomery", "Monty", "Moore", "Moosa", "Moray", "Morgan", "Morgyn", "Morris", "Morton", "Moshy", "Motade", "Moyes", "Msughter", "Mueez", "Muhamadjavad", "Muhammad", "Muhammed", "Muhsin", "Muir", "Munachi", "Muneeb", "Mungo", "Munir", "Munmair", "Munro", "Murdo", "Murray", "Murrough", "Murry", "Musa", "Musse", "Mustafa", "Mustapha", "Muzammil", "Muzzammil", "Mykie", "Myles", "Mylo", "Nabeel", "Nadeem", "Nader", "Nagib", "Naif", "Nairn", "Narvic", "Nash", "Nasser", "Nassir", "Natan", "Nate", "Nathan", "Nathanael", "Nathanial", "Nathaniel", "Nathan-Rae", "Nawfal", "Nayan", "Neco", "Neil", "Nelson", "Neo", "Neshawn", "Nevan", "Nevin", "Ngonidzashe", "Nial", "Niall", "Nicholas", "Nick", "Nickhill", "Nicki", "Nickson", "Nicky", "Nico", "Nicodemus", "Nicol", "Nicolae", "Nicolas", "Nidhish", "Nihaal", "Nihal", "Nikash", "Nikhil", "Niki", "Nikita", "Nikodem", "Nikolai", "Nikos", "Nilav", "Niraj", "Niro", "Niven", "Noah", "Noel", "Nolan", "Noor", "Norman", "Norrie", "Nuada", "Nyah", "Oakley", "Oban", "Obieluem", "Obosa", "Odhran", "Odin", "Odynn", "Ogheneochuko", "Ogheneruno", "Ohran", "Oilibhear", "Oisin", "Ojima-Ojo", "Okeoghene", "Olaf", "Ola-Oluwa", "Olaoluwapolorimi", "Ole", "Olie", "Oliver", "Olivier", "Oliwier", "Ollie", "Olurotimi", "Oluwadamilare", "Oluwadamiloju", "Oluwafemi", "Oluwafikunayomi", "Oluwalayomi", "Oluwatobiloba", "Oluwatoni", "Omar", "Omri", "Oran", "Orin", "Orlando", "Orley", "Orran", "Orrick", "Orrin", "Orson", "Oryn", "Oscar", "Osesenagha", "Oskar", "Ossian", "Oswald", "Otto", "Owain", "Owais", "Owen", "Owyn", "Oz", "Ozzy", "Pablo", "Pacey", "Padraig", "Paolo", "Pardeepraj", "Parkash", "Parker", "Pascoe", "Pasquale", "Patrick", "Patrick-John", "Patrikas", "Patryk", "Paul", "Pavit", "Pawel", "Pawlo", "Pearce", "Pearse", "Pearsen", "Pedram", "Pedro", "Peirce", "Peiyan", "Pele", "Peni", "Peregrine", "Peter", "Phani", "Philip", "Philippos", "Phinehas", "Phoenix", "Phoevos", "Pierce", "Pierre-Antoine", "Pieter", "Pietro", "Piotr", "Porter", "Prabhjoit", "Prabodhan", "Praise", "Pranav", "Pravin", "Precious", "Prentice", "Presley", "Preston", "Preston-Jay", "Prinay", "Prince", "Prithvi", "Promise", "Puneetpaul", "Pushkar", "Qasim", "Qirui", "Quinlan", "Quinn", "Radmiras", "Raees", "Raegan", "Rafael", "Rafal", "Rafferty", "Rafi", "Raheem", "Rahil", "Rahim", "Rahman", "Raith", "Raithin", "Raja", "Rajab-Ali", "Rajan", "Ralfs", "Ralph", "Ramanas", "Ramit", "Ramone", "Ramsay", "Ramsey", "Rana", "Ranolph", "Raphael", "Rasmus", "Rasul", "Raul", "Raunaq", "Ravin", "Ray", "Rayaan", "Rayan", "Rayane", "Rayden", "Rayhan", "Raymond", "Rayne", "Rayyan", "Raza", "Reace", "Reagan", "Reean", "Reece", "Reed", "Reegan", "Rees", "Reese", "Reeve", "Regan", "Regean", "Reggie", "Rehaan", "Rehan", "Reice", "Reid", "Reigan", "Reilly", "Reily", "Reis", "Reiss", "Remigiusz", "Remo", "Remy", "Ren", "Renars", "Reng", "Rennie", "Reno", "Reo", "Reuben", "Rexford", "Reynold", "Rhein", "Rheo", "Rhett", "Rheyden", "Rhian", "Rhoan", "Rholmark", "Rhoridh", "Rhuairidh", "Rhuan", "Rhuaridh", "Rhudi", "Rhy", "Rhyan", "Rhyley", "Rhyon", "Rhys", "Rhys-Bernard", "Rhyse", "Riach", "Rian", "Ricards", "Riccardo", "Ricco", "Rice", "Richard", "Richey", "Richie", "Ricky", "Rico", "Ridley", "Ridwan", "Rihab", "Rihan", "Rihards", "Rihonn", "Rikki", "Riley", "Rio", "Rioden", "Rishi", "Ritchie", "Rivan", "Riyadh", "Riyaj", "Roan", "Roark", "Roary", "Rob", "Robbi", "Robbie", "Robbie-lee", "Robby", "Robert", "Robert-Gordon", "Robertjohn", "Robi", "Robin", "Rocco", "Roddy", "Roderick", "Rodrigo", "Roen", "Rogan", "Roger", "Rohaan", "Rohan", "Rohin", "Rohit", "Rokas", "Roman", "Ronald", "Ronan", "Ronan-Benedict", "Ronin", "Ronnie", "Rooke", "Roray", "Rori", "Rorie", "Rory", "Roshan", "Ross", "Ross-Andrew", "Rossi", "Rowan", "Rowen", "Roy", "Ruadhan", "Ruaidhri", "Ruairi", "Ruairidh", "Ruan", "Ruaraidh", "Ruari", "Ruaridh", "Ruben", "Rubhan", "Rubin", "Rubyn", "Rudi", "Rudy", "Rufus", "Rui", "Ruo", "Rupert", "Ruslan", "Russel", "Russell", "Ryaan", "Ryan", "Ryan-Lee", "Ryden", "Ryder", "Ryese", "Ryhs", "Rylan", "Rylay", "Rylee", "Ryleigh", "Ryley", "Rylie", "Ryo", "Ryszard", "Saad", "Sabeen", "Sachkirat", "Saffi", "Saghun", "Sahaib", "Sahbian", "Sahil", "Saif", "Saifaddine", "Saim", "Sajid", "Sajjad", "Salahudin", "Salman", "Salter", "Salvador", "Sam", "Saman", "Samar", "Samarjit", "Samatar", "Sambrid", "Sameer", "Sami", "Samir", "Sami-Ullah", "Samual", "Samuel", "Samuela", "Samy", "Sanaullah", "Sandro", "Sandy", "Sanfur", "Sanjay", "Santiago", "Santino", "Satveer", "Saul", "Saunders", "Savin", "Sayad", "Sayeed", "Sayf", "Scot", "Scott", "Scott-Alexander", "Seaan", "Seamas", "Seamus", "Sean", "Seane", "Sean-James", "Sean-Paul", "Sean-Ray", "Seb", "Sebastian", "Sebastien", "Selasi", "Seonaidh", "Sephiroth", "Sergei", "Sergio", "Seth", "Sethu", "Seumas", "Shaarvin", "Shadow", "Shae", "Shahmir", "Shai", "Shane", "Shannon", "Sharland", "Sharoz", "Shaughn", "Shaun", "Shaunpaul", "Shaun-Paul", "Shaun-Thomas", "Shaurya", "Shaw", "Shawn", "Shawnpaul", "Shay", "Shayaan", "Shayan", "Shaye", "Shayne", "Shazil", "Shea", "Sheafan", "Sheigh", "Shenuk", "Sher", "Shergo", "Sheriff", "Sherwyn", "Shiloh", "Shiraz", "Shreeram", "Shreyas", "Shyam", "Siddhant", "Siddharth", "Sidharth", "Sidney", "Siergiej", "Silas", "Simon", "Sinai", "Skye", "Sofian", "Sohaib", "Sohail", "Soham", "Sohan", "Sol", "Solomon", "Sonneey", "Sonni", "Sonny", "Sorley", "Soul", "Spencer", "Spondon", "Stanislaw", "Stanley", "Stefan", "Stefano", "Stefin", "Stephen", "Stephenjunior", "Steve", "Steven", "Steven-lee", "Stevie", "Stewart", "Stewarty", "Strachan", "Struan", "Stuart", "Su", "Subhaan", "Sudais", "Suheyb", "Suilven", "Sukhi", "Sukhpal", "Sukhvir", "Sulayman", "Sullivan", "Sultan", "Sung", "Sunny", "Suraj", "Surien", "Sweyn", "Syed", "Sylvain", "Symon", "Szymon", "Tadd", "Taddy", "Tadhg", "Taegan", "Taegen", "Tai", "Tait", "Taiwo", "Talha", "Taliesin", "Talon", "Talorcan", "Tamar", "Tamiem", "Tammam", "Tanay", "Tane", "Tanner", "Tanvir", "Tanzeel", "Taonga", "Tarik", "Tariq-Jay", "Tate", "Taylan", "Taylar", "Tayler", "Taylor", "Taylor-Jay", "Taylor-Lee", "Tayo", "Tayyab", "Tayye", "Tayyib", "Teagan", "Tee", "Teejay", "Tee-jay", "Tegan", "Teighen", "Teiyib", "Te-Jay", "Temba", "Teo", "Teodor", "Teos", "Terry", "Teydren", "Theo", "Theodore", "Thiago", "Thierry", "Thom", "Thomas", "Thomas-Jay", "Thomson", "Thorben", "Thorfinn", "Thrinei", "Thumbiko", "Tiago", "Tian", "Tiarnan", "Tibet", "Tieran", "Tiernan", "Timothy", "Timucin", "Tiree", "Tisloh", "Titi", "Titus", "Tiylar", "TJ", "Tjay", "T-Jay", "Tobey", "Tobi", "Tobias", "Tobie", "Toby", "Todd", "Tokinaga", "Toluwalase", "Tom", "Tomas", "Tomasz", "Tommi-Lee", "Tommy", "Tomson", "Tony", "Torin", "Torquil", "Torran", "Torrin", "Torsten", "Trafford", "Trai", "Travis", "Tre", "Trent", "Trey", "Tristain", "Tristan", "Troy", "Tubagus", "Turki", "Turner", "Ty", "Ty-Alexander", "Tye", "Tyelor", "Tylar", "Tyler", "Tyler-James", "Tyler-Jay", "Tyllor", "Tylor", "Tymom", "Tymon", "Tymoteusz", "Tyra", "Tyree", "Tyrnan", "Tyrone", "Tyson", "Ubaid", "Ubayd", "Uchenna", "Uilleam", "Umair", "Umar", "Umer", "Umut", "Urban", "Uri", "Usman", "Uzair", "Uzayr", "Valen", "Valentin", "Valentino", "Valery", "Valo", "Vasyl", "Vedantsinh", "Veeran", "Victor", "Victory", "Vinay", "Vince", "Vincent", "Vincenzo", "Vinh", "Vinnie", "Vithujan", "Vladimir", "Vladislav", "Vrishin", "Vuyolwethu", "Wabuya", "Wai", "Walid", "Wallace", "Walter", "Waqaas", "Warkhas", "Warren", "Warrick", "Wasif", "Wayde", "Wayne", "Wei", "Wen", "Wesley", "Wesley-Scott", "Wiktor", "Wilkie", "Will", "William", "William-John", "Willum", "Wilson", "Windsor", "Wojciech", "Woyenbrakemi", "Wyatt", "Wylie", "Wynn", "Xabier", "Xander", "Xavier", "Xiao", "Xida", "Xin", "Xue", "Yadgor", "Yago", "Yahya", "Yakup", "Yang", "Yanick", "Yann", "Yannick", "Yaseen", "Yasin", "Yasir", "Yassin", "Yoji", "Yong", "Yoolgeun", "Yorgos", "Youcef", "Yousif", "Youssef", "Yu", "Yuanyu", "Yuri", "Yusef", "Yusuf", "Yves", "Zaaine", "Zaak", "Zac", "Zach", "Zachariah", "Zacharias", "Zacharie", "Zacharius", "Zachariya", "Zachary", "Zachary-Marc", "Zachery", "Zack", "Zackary", "Zaid", "Zain", "Zaine", "Zaineddine", "Zainedin", "Zak", "Zakaria", "Zakariya", "Zakary", "Zaki", "Zakir", "Zakk", "Zamaar", "Zander", "Zane", "Zarran", "Zayd", "Zayn", "Zayne", "Ze", "Zechariah", "Zeek", "Zeeshan", "Zeid", "Zein", "Zen", "Zendel", "Zenith", "Zennon", "Zeph", "Zerah", "Zhen", "Zhi", "Zhong", "Zhuo", "Zi", "Zidane", "Zijie", "Zinedine", "Zion", "Zishan", "Ziya", "Ziyaan", "Zohaib", "Zohair", "Zoubaeir", "Zubair", "Zubayr", "Zuriel"]


let boyimages = []
for (let i = 0; i < 20; i++) { //goes 0-19
    boyimages.push("ProfilePhotos/Men/" + i + ".jpg")
}

let girlimages = []
for (let i = 0; i < 20; i++) { //goes 0-19
    girlimages.push("ProfilePhotos/Women/" + i + ".jpg")
}

function randomizephoto(gender){ //Returns random answer from 0-3
    if (gender==="Man"){
        photoid=(Math.floor(Math.random() * 20))
        return (boyimages[photoid])
    }
    if (gender==="Woman"){
        photoid=(Math.floor(Math.random() * 20))
        return (girlimages[photoid])
    }
}

function randomizefirstname(gender){ //Returns random answer from 0-3
    if (gender==="Man"){
        var items = malenames;
        return(items[Math.floor(Math.random() * items.length)])
    }
    if (gender==="Woman"){
        var items = femaleNames;
        return(items[Math.floor(Math.random() * items.length)])
    }
}



////// Below this line adds people from form directly to the JS array!
    const thebutton=document.getElementById('submitbutton')
    function buttonclickstart(){
        document.getElementById("submitbutton").onclick = null;
        var inputgender = document.getElementById('gender').value;
        var inputfname = document.getElementById('fname').value;
        var inputage = document.getElementById('age').value;
        var inputheight = document.getElementById('height').value;
        var inputProfession = document.getElementById('Profession').value;
        var inputreligion = document.getElementById('religion').value;
        var inputEthnicity = document.getElementById('Ethnicity').value;
        var inputKids = document.getElementById('Kids').value;
        var inputPolitical = document.getElementById('Political').value;
        var inputVaccinated = document.getElementById('Vaccinated').value;
        var inputsmoking = document.getElementById('smoking').value;
        var inputweed = document.getElementById('weed').value;
        var inputdrugs = document.getElementById('drugs').value;
        var inputdrinking = document.getElementById('drinking').value;
        var inputminage = document.getElementById('minage').value;
        var inputmaxage = document.getElementById('maxage').value;
        var inputminheight = document.getElementById('minheight').value;
        var inputmaxheight = document.getElementById('maxheight').value;
        ////
        var inputsmoking1 = document.getElementById('smoking1').checked;
        var inputsmoking2 = document.getElementById('smoking2').checked;
        var inputsmoking3 = document.getElementById('smoking3').checked;
        let smokingarray=[]
        let weedarray=[]
        let drugsarray=[]
        let drinkingarray=[]
        let professionsarray=[]
        let religionsarray=[]
        let ethnicityarray=[]
        let kidarray=[]
        let politicalarray=[]
        let vaxarray=[]
        if (inputsmoking1 = true){
            smokingarray.push("Yes")
        }
        if (inputsmoking2 = true){
            smokingarray.push("No")
        }
        if (inputsmoking3 = true){
            smokingarray.push("Sometimes")
        }
        var inputweed1 = document.getElementById('weed1').checked;
        var inputweed2 = document.getElementById('weed2').checked;
        var inputweed3 = document.getElementById('weed3').checked;
        if (inputweed1 = true){
            weedarray.push("Yes")
        }
        if (inputweed2 = true){
            weedarray.push("No")
        }
        if (inputweed3 = true){
            weedarray.push("Sometimes")
        }
        var inputdrugs1 = document.getElementById('drugs1').checked;
        var inputdrugs2 = document.getElementById('drugs2').checked;
        var inputdrugs3 = document.getElementById('drugs3').checked;
        if (inputdrugs1 = true){
            drugsarray.push("Yes")
        }
        if (inputdrugs2 = true){
            drugsarray.push("No")
        }
        if (inputdrugs3 = true){
            drugsarray.push("Sometimes")
        }
        var inputdrinking1 = document.getElementById('drinking1').checked;
        var inputdrinking2 = document.getElementById('drinking2').checked;
        var inputdrinking3 = document.getElementById('drinking3').checked;
        if (inputdrinking1 = true){
            drinkingarray.push("Yes")
        }
        if (inputdrinking2 = true){
            drinkingarray.push("No")
        }
        if (inputdrinking3 = true){
            drinkingarray.push("Sometimes")
        }
        var inputprofession1 = document.getElementById('profession1').checked;
        var inputprofession2 = document.getElementById('profession2').checked;
        var inputprofession3 = document.getElementById('profession3').checked;
        if (inputprofession1 = true){
            professionsarray.push("Entrepreneur")
        }
        if (inputprofession2 = true){
            professionsarray.push("Corporate Worker")
        }
        if (inputprofession3 = true){
            professionsarray.push("Employee")
        }
        var inputreligion3 = document.getElementById('religion4').checked;
        var inputreligion1 = document.getElementById('religion1').checked;
        var inputreligion2 = document.getElementById('religion2').checked;
        var inputreligion3 = document.getElementById('religion3').checked;
        if (inputreligion4 = true){
            religionsarray.push("None")
        }
        if (inputreligion1 = true){
            religionsarray.push("Christian")
        }
        if (inputreligion2 = true){
            religionsarray.push("Athiest")
        }
        if (inputreligion3 = true){
            religionsarray.push("Spiritual")
        }
        var inputethnicity1 = document.getElementById('ethnicity1').checked;
        var inputethnicity2 = document.getElementById('ethnicity2').checked;
        var inputethnicity3 = document.getElementById('ethnicity3').checked;
        if (inputethnicity1 = true){
            ethnicityarray.push("Black")
        }
        if (inputethnicity2 = true){
            ethnicityarray.push("White")
        }
        if (inputethnicity3 = true){
            ethnicityarray.push("Asian")
        }
        var inputkids1 = document.getElementById('kids1').checked;
        var inputkids2 = document.getElementById('kids2').checked;
        var inputkids3 = document.getElementById('kids3').checked;
        if (inputkids1 = true){
            kidarray.push("Have Kids")
        }
        if (inputkids2 = true){
            kidarray.push("Do Not Want Kids")
        }
        if (inputkids3 = true){
            kidarray.push("Want Kids Eventually")
        }
        var inputpolitical1 = document.getElementById('political1').checked;
        var inputpolitical2 = document.getElementById('political2').checked;
        var inputpolitical3 = document.getElementById('political3').checked;
        if (inputpolitical1 = true){
            politicalarray.push("Conservative")
        }
        if (inputpolitical2 = true){
            politicalarray.push("Liberal")
        }
        if (inputpolitical3 = true){
            politicalarray.push("Do Not Care")
        }
        var inputvaccinated1 = document.getElementById('vaccinated1').checked;
        var inputvaccinated2 = document.getElementById('vaccinated2').checked;
        if (inputvaccinated1 = true){
            vaxarray.push("Vaccinated")
        }
        if (inputvaccinated2 = true){
            vaxarray.push("Unvaxxed")
        }


        ///FIRST we're going to assign their ID (Place in array) for easier lookup later.
        let howmanyuserstemp=UsersandData.length

        ////Now we'll create the user!
        UsersandData.push({
        myid: howmanyuserstemp, //This assigns their "place" in the Array.
        gender: inputgender, //Man or Woman
        firstname: inputfname,
        agenumber: inputage, //18-60 years
        height: inputheight, //in cm
        Prompts: ["","","","","",""],
        RatingProfileAccuraccy: "",
        RatingFunness: "",
        RatingOverallDate: "",
        Smoking: inputsmoking,
        Weed: inputweed,
        Drugs: inputdrugs,
        Drinking: inputdrinking,
        Profession: inputProfession,
        Religion: inputreligion,
        Ethnicity: inputEthnicity,
        Children: inputKids,
        Political: inputPolitical,
        Vaxstatus: inputVaccinated,
        profilepics: [randomizephoto(inputgender),"N/A","N/A","N/A","N/A","N/A"],
        question: [randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer(),randomizeanswer()],
        ////EVERYTHING Above this line is for editing THEIR info.
        //Everything BELOW this line is for "search settings"
        searchagerange: [inputminage,inputmaxage], //min, max - 0,999 means "All"
        searchheight: [inputminheight,inputmaxheight], //in cm - 0,999 means "All"
        searchlocation: 50, //50km radius
        searchwillingtotravel: ["Globally"], //Sort of like "Dealbreaker"... Can select "Only Within 50km radius", "Within State/Province", //"Within Country", "Globally"
        searchSmoking: smokingarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchWeed: weedarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchDrugs: drugsarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchDrinking: drinkingarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchProfession: professionsarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchReligion: religionsarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchEthnicity: ethnicityarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchChildren: kidarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchPolitical: politicalarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        searchVaxstatus: vaxarray, //If blank, it means "doesn't matter", otherwise whatever is listed is ONLY what shows up.
        ///Last thing is who they matched with!!
        whoimatchwith: [],
        whoiswipedon: [],
        });
        massusers(99)
        for (let m10 = 0; m10 < 9; m10++) {
            massusers(100)
            save()
        }
        CompareUsers(howmanyuserstemp)
        console.log(UsersandData)
        save()
        saveuserid(howmanyuserstemp)
        // similar behavior as an HTTP redirect
        if (window.location === "https://matthew22apps.github.io/datingapp/CreateUser"){
        window.location.replace("https://matthew22apps.github.io/datingapp/");}
        else{window.location.replace("/index.html");}
        //UsersandData[howmanyuserstemp].agenumber=dataofbirth(UsersandData[howmanyuserstemp].birthmonth,UsersandData[howmanyuserstemp].birthday,UsersandData[howmanyuserstemp].birthyear)
}



function change2(){
    var image = document.getElementById('MainIm')
    image.src = currentmatchphoto();

    document.getElementById('fnameage').innerHTML = (UsersandData[sessionmatchid].firstname + ", " + UsersandData[sessionmatchid].agenumber);

    let tempA= UsersandData[myuserid].whoimatchwith[sessionmatchindex]
    document.getElementById('compatibilityratio').innerHTML = ((Math.round(tempA[2]*100)) + "%");

    document.getElementById('topinfoagegendercompatibilitytext1').innerHTML = (UsersandData[sessionmatchid].agenumber + " | " + UsersandData[sessionmatchid].gender + " | " + (Math.round(tempA[2]*100)) + "% Compatible");

    document.getElementById('work1').innerHTML = (UsersandData[sessionmatchid].Profession)

    document.getElementById('eth1').innerHTML = (UsersandData[sessionmatchid].Ethnicity)

    document.getElementById('rel1').innerHTML = (UsersandData[sessionmatchid].Religion)

    document.getElementById('kid1').innerHTML = (UsersandData[sessionmatchid].Children)

    document.getElementById('pol1').innerHTML = (UsersandData[sessionmatchid].Political)

    document.getElementById('vax1').innerHTML = (UsersandData[sessionmatchid].Vaxstatus)

    let tempB=""
    let tempC=""
    let tempD=""
    let tempE=""

    if (UsersandData[sessionmatchid].Smoking === "Yes"){tempB = 'Yes I Smoke'}
    if (UsersandData[sessionmatchid].Smoking === "No"){tempB = 'No Smoking'}
    if (UsersandData[sessionmatchid].Smoking === "Sometimes"){tempB = 'Sometimes Smoke'}

    document.getElementById('smok1').innerHTML = (tempB)

    if (UsersandData[sessionmatchid].Weed === "Yes"){tempC = 'Yes I Do Weed'}
    if (UsersandData[sessionmatchid].Weed === "No"){tempC = 'No Weed'}
    if (UsersandData[sessionmatchid].Weed === "Sometimes"){tempC = 'Sometimes Weed'}

    document.getElementById('weed1').innerHTML = (tempC)

    if (UsersandData[sessionmatchid].Drugs === "Yes"){tempD = 'Yes I Do Drugs'}
    if (UsersandData[sessionmatchid].Drugs === "No"){tempD = 'No Drugs'}
    if (UsersandData[sessionmatchid].Drugs === "Sometimes"){tempD = 'Sometimes Drugs'}

    document.getElementById('drug1').innerHTML = (tempD)

    if (UsersandData[sessionmatchid].Drinking === "Yes"){tempE = 'Yes I Drink'}
    if (UsersandData[sessionmatchid].Drinking === "No"){tempE = 'No Drinking'}
    if (UsersandData[sessionmatchid].Drinking === "Sometimes"){tempE = 'Sometimes Drinking'}

    document.getElementById('drunk1').innerHTML = (tempE)
    
}

/* - Doesn't do anything anymore.
function haveiswipedonthem(tempmatchid){
    for (let s1 = 0; s1 < UsersandData[myuserid].whoiswipedon.length; s1++) {
        if (tempmatchid = UsersandData[myuserid].whoiswipedon[sessionmatchindex]){
            sessionmatchindex=sessionmatchindex+1
            change2()
        }
    }
}
*/

const swipebutton=document.getElementById('interestedbutt')
const rejectbutton=document.getElementById('notinterestedbutt')
if (swipebutton!==null){
swipebutton.addEventListener('click', function () {swipe()})}
if (rejectbutton!==null){
rejectbutton.addEventListener('click', function () {swipe()})}

function swipe(){
    UsersandData[myuserid].whoiswipedon.push(sessionmatchid)
    sessionmatchindex=sessionmatchindex+1
    change2()
    window.scrollTo(0, 0);
}

function currentmatchphoto(){
    let tempthing = UsersandData[myuserid].whoimatchwith[sessionmatchindex] //This changes
    sessionmatchid=tempthing[0] //This stays as "Zero" to get the ID of my match
    checkgender()
    return(UsersandData[sessionmatchid].profilepics[0]) //this stays as Zero... (Cause only 1 pic rn)
}

function checkgender(){
    if (UsersandData[myuserid].gender===UsersandData[sessionmatchid].gender){
        UsersandData[myuserid].whoiswipedon.push(sessionmatchid)
        sessionmatchindex=sessionmatchindex+1
        let tempthing2 = UsersandData[myuserid].whoimatchwith[sessionmatchindex]
        sessionmatchid=tempthing2[0]
        console.log("Avoided S.S.")
        checkgender()
    }
}


//Remember!!
//function cleardatabse(){
    //localStorage.clear('data')
//}

