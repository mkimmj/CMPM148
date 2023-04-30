
function setup(){
    grammar = tracery.createGrammar(spellbook);
    var trace = app.grammar.createTrace();
    console.log(trace);
}




premise_data = {
"origin":["[myPlace:#area##areafollowup#]#setPronouns##opener#"],

"opener":["#myPlace# Police Report <br> Case Number: #n##n##n##n##n##n#                                      Date: [Ddate:#date#]#Ddate# <br><br> Incident: At #time# #ap# on #Ddate#, #witnessF# [lastname:#witnessL#]#lastname# reported a homicide #nearby# the local #myPlace# Park [myfeature:#feature#]#myfeature#.  The body was identified at the scene as the local tarot card reader affectionately referred to as, Lady at the Park <br><br> Detail of Event: <br> While out walking #heroTheir# dog #title# #lastname# wanted to stop by the #myfeature# for a short break. it was there #heroThey# noticed #mood# squabbling nearby. The sound was drawing a lot of attention and by the time #heroThey# got to the scene, Lady at the Park was already on the ground with only a pigeon over her dead body. "],

"n":["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],

"date":["12/06/87", "05/08/24", "30/04/99", "27/02/38", "25/09/45", "14/03/17", "04/11/72"],

"time":["1:07", "3:27", "5:39", "2:48", "5:19", "6:01", "7:11", "8:57", "10:00", "12:09"],

"ap":["AM","PM"],

"witnessF":["George", "Brian", "Ying", "Chancy", "Beto", "Eujin", "Robin", "Yumi", "Egbert", "Colonel"],

"witnessL":["Chang", "Mitchel", "Samson", "Brian", "Garcia", "Park", "Yu", "Dylan", "Smith"],

"nearby":["beyond", "far away", "ahead", "behind", "over"],

"feature":["trashcan", "fountain", "statue", "flag pole", "bike path", "bike rack", "soccer field", "tables", "bathrooms", "ice cream truck", "tarot table", "gate"],

"title":["Mr.", "Mrs.", "Ms", "Miss", "Sir", "Madame", "Lord", "Lady"],

"setPronouns": ["[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]","[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]","[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"],

"mood":["loud", "obnoxious", "angry", "pumped", "excited", "belligerent", "ear-piercing"],

"area":["Baltimore", "New York", "Wisconsin", "Georgia", "Seoul", "Tasmania", "New South Wales", "Huashan", "San Toni"],

"areafollowup":[" County", " City", " District"]
}
