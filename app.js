function displayPosition(a, b, c) {
    this.name = a;
    this.career = b;
    this.description = c;
}

var x = new displayPosition("Name : OLIVER DIXON", "Career : Full Stack Developer", "Description:I CrossFit")

console.log(x.name)
console.log(x.career)
console.log(x.description)

var myInterests = [' ', ' ', 'My Interests', '*CrossFit', '*Theologizing and Philosophizing', '*Childless Traveling', '*Finding Random Restaurants']

for (var i = 0; i < myInterests.length; i++) {
    console.log(myInterests[i])
}

var myExperience = [" ", " ", "My Previous Experience", "*Taught High School Mathematics for 7 years", "*Tutored Mathematics for 4 years", "*Coached CrossFit for 5 years in English and Arabic", " ", " "]

for (var i = 0; i < myExperience.length; i++) {
    console.log(myExperience[i])
}

function displaySkill(skill, y) {
    if (y === 0) {
        console.log("!BAM" + skill)
    } else {
        console.log(skill)
    }
}

displaySkill('My Skills', 1)
displaySkill('*Arabic', 0)
displaySkill('*Walking on Hands', 0)
displaySkill('*CrossFit', 1)
displaySkill('*Afrikaans', 1)
displaySkill('*Travel internationally with 3 kids under 4', 1)
