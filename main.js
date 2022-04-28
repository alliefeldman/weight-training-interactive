var listOfExercises = {
"initial":{"firstTwo":false, "lastThree":false,"gym":false, "home":false, "Upper Body":false, "Lower Body":false, "Push":false, "Pull":false, "Legs":false},
"Barbell Deadlift":{"firstTwo":true, "lastThree":false,"gym":true, "home":false, "Upper Body":false, "Lower Body":true, "Push":false, "Pull":false, "Legs":true},
"Bench Press":{"firstTwo": true, "lastThree":false,"gym":true, "home": false, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false },
"Back Squat":{"firstTwo": true, "lastThree":false,"gym":true, "home": false, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Machine Lat Pulldown":{"firstTwo": true, "lastThree":false,"gym":true, "home": false, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Dumbbell Bicep Curl":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Romanian Deadlift":{"firstTwo":true, "lastThree":true,"gym":true, "home":true, "Upper Body":false, "Lower Body":true, "Push":false, "Pull":false, "Legs":true},
"Bulgarian Split Squat":{"firstTwo": true, "lastThree":true,"gym":true, "home": true, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Leg Press":{"firstTwo": true, "lastThree":false,"gym":true, "home": false, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Goblet Squat":{"firstTwo": true, "lastThree":true,"gym":true, "home": true, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Barbell Shoulder Press":{"firstTwo": true, "lastThree":true,"gym":true, "home": false, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false },
"Dumbbell Shoulder Press":{"firstTwo": true, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false },
"Lateral Raises":{"firstTwo": false, "lastThree":true,"gym":true, "home": false, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false },
"Hip Abductions":{"firstTwo": false, "lastThree":true,"gym":true, "home": false, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Glute Bridges (opt. banded)":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Hip Thrust":{"firstTwo": true, "lastThree":false,"gym":true, "home": false, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Leg Curl":{"firstTwo": false, "lastThree":true,"gym":true, "home": false, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Leg Extension":{"firstTwo": false, "lastThree":true,"gym":true, "home": false, "Upper Body":false, "Lower Body":true,"Push":false, "Pull":false, "Legs":true},
"Seated Row":{"firstTwo": true, "lastThree":true,"gym":true, "home": false, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Bent Over Row":{"firstTwo": true, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Hammer Curls":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Pushups":{"firstTwo": true, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false },
"Dumbbell Chest Press":{"firstTwo": true, "lastThree":false,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false },
"Single Arm Rows":{"firstTwo": true, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Pull Aparts (resistance band)":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Dumbbell Calf Raises":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":false, "Lower Body":true, "Push":false, "Pull":false, "Legs":true },
"Dumbbell Overhead Tricep Extension":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false },
"Resistance Band Pulldown":{"firstTwo": true, "lastThree":true,"gym":false, "home": true, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Resistance Band Facepull":{"firstTwo": false, "lastThree":true,"gym":false, "home": true, "Upper Body":true, "Lower Body":false, "Push":false, "Pull":true, "Legs":false },
"Skull Crusher":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false }

};

// from https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
function pickRandomExercise(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function scroll_to_id(id){
    let scroll_to_element = document.getElementById(id);
    console.log(id);
    scroll_to_element.scrollIntoView();
}


function addDescription(id) {
    console.log(id);
    let expanded_div = document.getElementById("expanded");
    expanded_div.innerHTML = "";
    console.log(expanded_div.innerHTML);
    let description = document.createElement("p");
    if (id == "strength") {
        description.innerText = "i is strong. i is strong. i is strong. i is strong. i is strong. i is strong. i is strong. i is strong. i is strong. i is strong. i is strong. i is strong.";
    }
    else if (id == "mental") {
        description.innerText = "big brain big brain big brain big brain big brain big brain big brain big brain big brain big brain big brain big brain";
    }
    else if (id == "aesthetics") {
        description.innerText = "glutes and abs yay glutes and abs yay glutes and abs yay glutes and abs yay glutes and abs yay glutes and abs yay glutes and abs yay glutes and abs yay glutes and abs yay.";
    }
    expanded_div.appendChild(description);
}



function selectExperience(element) {
    let id = element.id;

    if (id == "experience_selected") {
        return;
    }
    let currentlySelectedExperience = document.getElementById("experience_selected");
    currentlySelectedExperience.removeAttribute("id");
    element.setAttribute("id", "experience_selected");
}


function selectFrequency(item_class, id) {
    if (item_class == "selected_frequency") {
        return;
    }
    // first, delete class from current selected one
    old_selected_element = document.getElementsByClassName("selected_frequency")[0];
    old_selected_element.classList.remove("selected_frequency");

    // then, add class to correct element
    selected_element = document.getElementById(id);
    selected_element.classList.add("selected_frequency");

}

function scrollTo() {
    
}

function selectEnvironment(element) {
    let id = element.id;
    if (id == "environment_selected") {
        return;
    }
    let currentlySelectedEnvironment = document.getElementById("environment_selected");
    currentlySelectedEnvironment.removeAttribute("id");
    element.setAttribute("id", "environment_selected");
}


var upper_lower_filter;
var push_pull_filter;

function update_upper_lower(className) {
    if (upper_lower_filter == className) {
        upper_lower_filter = null;
    }
    else {
        upper_lower_filter = className;
    }
    console.log(upper_lower_filter);
}

function update_push_pull(className) {
    if (push_pull_list.includes(id)) {
        let index = push_pull_list.indexOf(id);
        push_pull_list.splice(index,1);
    }
    else {
        push_pull_list.push(id);
    }
    console.log(push_pull_list)
}

function selectUpperOrLower(element){
    let id = element.id;
    if (id == "upper_or_lower_selected") {
        element.removeAttribute("id");
    }
    else {
        let currentlySelected = document.getElementById("upper_or_lower_selected");
        if (currentlySelected != null) {
            currentlySelected.removeAttribute("id");
        }
        element.setAttribute("id", "upper_or_lower_selected");
    }

}

function displayExercises() {

}

function createProgram() {
    /// First, gather all values
    // Experience Tab
    let experienceButton = document.getElementById("experience_selected");
    var experience;
    if (experienceButton.innerText == "Minimal (< 3 months)") {
        experience = "minimal";
    }
    else if (experienceButton.innerText == "Moderate (3-12 months)") {
        experience = "moderate";
    }
    else {
        experience = "sufficient";
    }
    // Goals Tab (oh no)
    let strengthSlider = document.getElementById("red").getElementsByClassName("ui-slider-range")[0];
    let strengthGoal = parseInt(strengthSlider.style["width"]);

    let mentalSlider = document.getElementById("green").getElementsByClassName("ui-slider-range")[0];
    let mentalGoal = parseInt(mentalSlider.style["width"]);

    let aestheticsSlider = document.getElementById("blue").getElementsByClassName("ui-slider-range")[0];
    let aestheticsGoal = parseInt(aestheticsSlider.style["width"]);
    // console.log(strengthGoal);
    // console.log(mentalGoal);
    // console.log(aestheticsGoal);

    // find mainGoal to then get frequency
    var mainGoal;
    if ((strengthGoal >= mentalGoal) && (strengthGoal >= aestheticsGoal)) {
        mainGoal = "strength";
    }
    else if ((mentalGoal >= strengthGoal) && (mentalGoal >= aestheticsGoal)) {
        mainGoal = "mental";
    }
    else {
        mainGoal = "aesthetics";
    }
    console.log(mainGoal);

    // finding frequency and split lists
    var frequency;
    var split = [];

    if (experience == "minimal") {
        if (mainGoal == "strength" || mainGoal == "mental") {
            frequency = 3;
            split = ["Full Body", "Full Body", "Full Body"];
        }
        else {
            frequency = 4;
            split = ["Full Body", "Upper Body", "Full Body", "Lower Body"];
        }
    }
    else if (experience == "moderate") {
        if (mainGoal == "strength" || mainGoal == "mental") {
            frequency = 4;
            split = ["Upper Body", "Lower Body", "Upper Body", "Lower Body"];
        }
        else {
            frequency = 5;
            split = ["Upper Body", "Lower Body", "Upper Body", "Lower", "Your Choice"];
        }
    }
    else {
        if (mainGoal == "strength" || mainGoal == "mental") {
            frequency = 5;
            if (mainGoal == "strength") {
                split = ["Push", "Legs", "Pull", "Legs", "Your Choice"];
            }
            else {
                split = ["Push", "Legs", "Pull", "Legs", "Functional"];
            }
        }
        else {
            frequency = 6;
            split = ["Push", "Pull", "Legs", "Push", "Pull", "Legs"];
        }
    }

    // specify environment

    let environment_button = document.getElementById("environment_selected");
    var environment;
    if (environment_button.innerText == "Gym") {
        environment = "gym";
    }
    else {
        environment = "home";
    }
    console.log(environment);



    // create and add <frequency> number of divs
    let results_div = document.getElementById("results");
    results_div.innerHTML = "";
    let results_header = document.createElement("h1");
    results_header.innerText = "Your Program";
    results_div.appendChild(results_header);

    for(let day = 0; day < frequency; day++) {
        let workout = split[day];
        console.log(split);
        let dayDiv = document.createElement("div");
        let dayHeader = document.createElement("h2");
        dayHeader.innerText = `Day ${day+1}/${frequency}: ${split[day]}`;
        dayDiv.appendChild(dayHeader);
        let exercise_list = [];
        for (let exercise = 0; exercise < 5; exercise++) {
            let exercise_name = "initial";
            if (exercise < 2) {
                 while (listOfExercises[exercise_name]["firstTwo"] == false || listOfExercises[exercise_name][workout] == false || listOfExercises[exercise_name][environment] == false || exercise_list.includes(exercise_name)) {
                    exercise_name = pickRandomExercise(listOfExercises);
                }
                exercise_list.push(exercise_name);
            }
            else{
                 while (listOfExercises[exercise_name]["lastThree"] == false || listOfExercises[exercise_name][workout] == false || listOfExercises[exercise_name][environment] == false || exercise_list.includes(exercise_name)) {
                    exercise_name = pickRandomExercise(listOfExercises);
                }
                exercise_list.push(exercise_name);
            }
            let exercise_h4 = document.createElement("h4");
            exercise_h4.innerText = exercise_name;
            dayDiv.appendChild(exercise_h4);
        }
        results_div.appendChild(dayDiv);
    }
}


