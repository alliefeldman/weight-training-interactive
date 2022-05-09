const listOfExercises = {
"initial": {"firstTwo":false, "lastThree":false,"gym":false, "home":false, "Upper Body":false, "Lower Body":false, "Push":false, "Pull":false, "Legs":false},
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
"Skull Crusher":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":true, "Lower Body":false, "Push":true, "Pull":false, "Legs":false },
"Walking Lunges":{"firstTwo": false, "lastThree":true,"gym":true, "home": false, "Upper Body":false, "Lower Body":true, "Push":false, "Pull":false, "Legs":true },
"Single Leg Glute Bridges":{"firstTwo": false, "lastThree":true,"gym":true, "home": true, "Upper Body":false, "Lower Body":true, "Push":false, "Pull":false, "Legs":true }
};

const exerciseDetails = {
    "base":{"you_will_need":[], "steps":[]},
    "Barbell Deadlift":{"you_will_need":["A barbell rack (supports recommended)", "Barbell", "An equal weight of plates to put on either side", "Barbell clips (optional)"], "steps":[]},
    "Bench Press":{},
    "Back Squat":{},
    "Machine Lat Pulldown":{},
    "Dumbbell Bicep Curl":{},
    "Romanian Deadlift":{},
    "Bulgarian Split Squat":{},
    "Leg Press":{},
    "Goblet Squat":{},
    "Barbell Shoulder Press":{},
    "Dumbbell Shoulder Press":{},
    "Lateral Raises":{},
    "Hip Abductions":{},
    "Glute Bridges": {},
    "Hip Thrust":{},
    "Leg Curl":{},
    "Leg Extension":{},
    "Seated Row":{},
    "Bent Over Row":{},
    "Hammer Curls":{},
    "Pushups":{},
    "Dumbbell Chest Press":{},
    "Single Arm Rows":{},
    "Pull Aparts (resistance band)":{},
    "Dumbbell Calf Raises":{},
    "Dumbbell Overhead Tricep Extension":{},
    "Resistance Band Pulldown":{},
    "Resistance Band Facepull":{},
    "Skull Crusher":{},
    "Walking Lunges":{},
    "Single Leg Glute Bridges":{}
}

// from https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object
function pickRandomExercise(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

var scrollY = 0;
var what_is_strength_training_y;
var goals_y;
var freq_y;
var envir_y;
var selection_y;

function getElemCoordinates() {
    let what_is_strength_training = document.getElementById("what_is_strength_training");
    what_is_strength_training_y = what_is_strength_training.getBoundingClientRect().y;

    let goals = document.getElementById("goals");
    goals_y = goals.getBoundingClientRect().y;

    let freq = document.getElementById("frequency");
    freq_y = freq.getBoundingClientRect().y;

    let envir = document.getElementById("environment");
    envir_y = envir.getBoundingClientRect().y;

    let selection = document.getElementById("exercise_selection");
    selection_y = selection.getBoundingClientRect().y;
}

function scroll() {
    scrollY = window.pageYOffset;
    let indicator_image = document.getElementById("fixed_indicator");
    if (scrollY < (what_is_strength_training_y - 200)) {
        indicator_image.setAttribute("src", "fixed_indicator/5.png");
    }
    else if (scrollY < (goals_y - 150)) {
        indicator_image.setAttribute("src", "fixed_indicator/0.png");
    }
    else if (scrollY < (freq_y - 150)) {
        indicator_image.setAttribute("src", "fixed_indicator/1.png");
    }
    else if (scrollY < (envir_y - 150)) {
        indicator_image.setAttribute("src", "fixed_indicator/2.png");
    }
    else if (scrollY < (selection_y - 150)) {
        indicator_image.setAttribute("src", "fixed_indicator/3.png");
    }
    else {
        indicator_image.setAttribute("src", "fixed_indicator/4.png");
    }
}


function scroll_to_id(id){
    let scroll_to_element = document.getElementById(id);
    scroll_to_element.scrollIntoView();
}


function addDescription(id) {
    let expanded_div = document.getElementById("expanded");
    expanded_div.innerHTML = "";
    let button = document.getElementById(id);
    if (button.classList[0] == "selected_goal") {
        button.classList.remove("selected_goal");
        return;
    }
    try {
        let currentlySelected = document.getElementsByClassName("selected_goal")[0];
        currentlySelected.classList.remove("selected_goal");
    }
    catch {

    }
    button.classList.add("selected_goal");
    let description_div = document.createElement("div");
    let description = document.createElement("p");
    description.setAttribute("id", "description");
    if (id == "strength") {
        description.innerText = "Tristique senectus et netus et. Neque sodales ut etiam sit. Non quam lacus suspendisse faucibus. Nec ullamcorper sit amet risus nullam eget. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Nunc sed augue lacus viverra vitae. Eget mauris pharetra et ultrices neque ornare. \n\n     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada bibendum arcu vitae elementum curabitur. Quis blandit turpis cursus in hac habitasse platea dictumst. Sed augue lacus viverra vitae congue eu consequat ac. Et malesuada fames ac turpis egestas integer eget. Sed adipiscing diam donec adipiscing tristique risus. Vitae congue mauris rhoncus aenean vel elit scelerisque. In massa tempor nec feugiat nisl pretium fusce id. Arcu bibendum at varius vel pharetra. Leo in vitae turpis massa sed elementum. In fermentum posuere urna nec. Lorem donec massa sapien faucibus et.\n\nIn fermentum posuere urna nec tincidunt. Non consectetur a erat nam at lectus. Aliquam eleifend mi in nulla. Ornare massa eget egestas purus viverra. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Volutpat ac tincidunt vitae semper quis. Nulla malesuada pellentesque elit eget gravida cum sociis. Fermentum et sollicitudin ac orci phasellus egestas tellus. At volutpat diam ut venenatis. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Duis at tellus at urna.";
    }
    else if (id == "mental") {
        description.innerText = "Ultricies mi quis hendrerit dolor magna. Imperdiet sed euismod nisi porta lorem mollis. Massa vitae tortor condimentum lacinia quis vel. Vitae purus faucibus ornare suspendisse sed. Volutpat commodo sed egestas egestas fringilla phasellus. Non enim praesent elementum facilisis leo vel fringilla. Massa tempor nec feugiat nisl pretium.Massa enim nec dui nunc. Sit amet massa vitae tortor. Lobortis mattis aliquam faucibus purus in massa tempor. Risus nullam eget felis eget nunc lobortis. Morbi tincidunt ornare massa eget egestas purus viverra. Quisque non tellus orci ac auctor. Non diam phasellus vestibulum lorem sed. Pulvinar sapien et ligula ullamcorper malesuada. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Tempor nec feugiat nisl pretium fusce id velit. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Viverra nibh cras pulvinar mattis nunc. Non nisi est sit amet facilisis magna etiam. Quis risus sed vulputate odio. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Urna cursus eget nunc scelerisque viverra mauris in. Feugiat pretium nibh ipsum consequat. Sit amet est placerat in egestas erat. Consequat id porta nibh venenatis.Aenean euismod elementum. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Lacus vestibulum sed arcu non odio euismod lacinia. Amet consectetur adipiscing elit duis tristique.";
    }
    else if (id == "aesthetics") {
        description.innerText = "Molestie a iaculis at erat pellentesque adipiscing. Accumsan sit amet nulla facilisi morbi. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Magna sit amet purus gravida quis blandit. Sagittis purus sit amet volutpat consequat. Nec dui nunc mattis enim. Fusce id velit ut tortor pretium viverra suspendisse. Urna duis convallis convallis tellus. Enim neque volutpat ac tincidunt vitae semper quis. Dui sapien eget mi proin sed libero. Viverra orci sagittis eu volutpat odio. Pulvinar neque laoreet suspendisse interdum consectetur. Sagittis aliquam malesuada bibendum arcu vitae elementum. Orci ac auctor augue mauris augue neque gravida in fermentum. Volutpat blandit aliquam etiam erat velit scelerisque. Mauris sit amet massa vitae. Egestas congue quisque egestas diam. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Donec ultrices tincidunt arcu non sodales neque. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Quam vulputate dignissim suspendisse in est ante in nibh. Turpis tincidunt id aliquet risus feugiat. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Vitae purus faucibus ornare suspendisse sed. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Enim ut sem viverra aliquet eget sit amet tellus cras. Tempus urna et pharetra pharetra massa. Nibh ipsum consequat nisl vel pretium. Augue neque gravida in fermentum et. Velit aliquet sagittis id consectetur purus ut. Lorem ipsum dolor sit amet consectetur adipiscing elit.";
    }
    description_div.appendChild(description);
    expanded_div.appendChild(description_div);
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
    // then, addd a new text element
    let box = document.getElementById("frequency_description");
    box.innerText = "";
    box.innerText = `${id}: Tristique senectus et netus et. Dolor morbi non arcu risus quis varius quam quisque id. At erat pellentesque adipiscing commodo. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Malesuada nunc vel risus commodo. Neque sodales ut etiam sit. Non quam lacus suspendisse faucibus. Nec ullamcorper sit amet risus nullam eget. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Nunc sed augue .`;

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
        if (upper_lower_filter == "Upper Body") {
            let push_pull_buttons = document.getElementById("push_pull");
            let all_buttons = document.getElementById("exercise_buttons")
            all_buttons.removeChild(push_pull_buttons);
        }
        upper_lower_filter = null;

    }
    else {
        if (upper_lower_filter == "Upper Body" && className == "Lower Body") {
            let push_pull_buttons = document.getElementById("push_pull");
            let all_buttons = document.getElementById("exercise_buttons")
            all_buttons.removeChild(push_pull_buttons);
        }
        upper_lower_filter = className;
        if (className == "Upper Body") {
            display_push_pull_buttons()
        }

    }
}

function update_push_pull(className) {
    if (push_pull_filter == className) {
        push_pull_filter = null;
    }
    else {
        push_pull_filter = className;
    }
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

function selectPushOrPull(element){
    let id = element.id;
    if (id == "push_or_pull_selected") {
        element.removeAttribute("id");

    }
    else {
        let currentlySelected = document.getElementById("push_or_pull_selected");
        if (currentlySelected != null) {
            currentlySelected.removeAttribute("id");
        }
        element.setAttribute("id", "push_or_pull_selected");

    }
}


function display_push_pull_buttons() {
    let all_buttons = document.getElementById("exercise_buttons")

    let buttons_div = document.createElement("div");
    buttons_div.setAttribute("id", "push_pull");

    let pushbutton = document.createElement("button");
    pushbutton.setAttribute("class", "Push");
    pushbutton.setAttribute("onclick", "update_push_pull(this.classList.toString()); selectPushOrPull(this); displayExercises()");

    pushbutton.innerText = "Push";

    let pullbutton = document.createElement("button");
    pullbutton.setAttribute("class", "Pull");
    pullbutton.setAttribute("onclick", "update_push_pull(this.classList.toString()); selectPushOrPull(this); displayExercises()");
    pullbutton.innerText = "Pull";

    buttons_div.appendChild(document.createElement("hr"));
    buttons_div.appendChild(pushbutton);
    buttons_div.appendChild(pullbutton);
    all_buttons.appendChild(buttons_div);
}

function displayExercises() {

    let exercisesDiv = document.getElementById("exercises");
    exercisesDiv.innerHTML = "";
    for (exercise in listOfExercises) {
        let exercise_h4 = document.createElement("h4");
        if (upper_lower_filter == null && exercise != "initial") {
            exercise_h4.innerText = exercise;
        }
        else if (listOfExercises[exercise][upper_lower_filter] == true) {
            if (upper_lower_filter == "Lower Body") {
                exercise_h4.innerText = exercise;
            }
            else {
                if (push_pull_filter == null && exercise != "initial") {
                    exercise_h4.innerText = exercise;
                }
                else if (listOfExercises[exercise][push_pull_filter] == true) {
                    exercise_h4.innerText = exercise;
                }
            }

        }
        exercise_h4.setAttribute("onclick", `showExerciseInfo("${exercise}")`);
        exercisesDiv.appendChild(exercise_h4);
    }


}

function createProgram() {
    /// First, gather all values
    // Experience Tab
    let experienceButton = document.getElementById("experience_selected");
    var experience;
    if (experienceButton.innerText == "Minimal<br>(< 3 months)") {
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



    // create and add <frequency> number of divs
    let results_div = document.getElementById("results");
    results_div.innerHTML = "";
    let results_header = document.createElement("h1");
    results_header.innerText = "Your Program";
    results_div.appendChild(results_header);

    for(let day = 0; day < frequency; day++) {
        let workout = split[day];
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

function showExerciseInfo(exercise) {
    let body = document.body;
    let exerciseInfoClass = document.createElement("div");
    exerciseInfoClass.setAttribute("class", "exercise_info_div");

    console.log(exercise);

    let x = document.createElement("button");
    x.innerText = "X";
    x.setAttribute("onclick", "hideExerciseInfo()");

    let exercise_info_inner = document.createElement("div");
    exercise_info_inner.setAttribute("id", "exercise_info_inner");

    let exercise_heading = document.createElement("h1");
    exercise_heading.innerText = exercise;
    exercise_info_inner.appendChild(exercise_heading);

    let you_will_need_heading = document.createElement("h2");
    you_will_need_heading.innerText = "You will need:";
    exercise_info_inner.appendChild(you_will_need_heading);
    let ul = document.createElement("ul");
    for (var item = 0; item < exerciseDetails[exercise]["you_will_need"].length; item++) {
        let li = document.createElement("li");
        li.innerText = exerciseDetails[exercise]["you_will_need"][item];
        ul.appendChild(li);
    }
    exercise_info_inner.appendChild(ul);

    let steps_heading = document.createElement("h2");
    steps_heading.innerText = "Steps:";
    exercise_info_inner.appendChild(steps_heading);

    let ol = document.createElement("ol");
    for (var item = 0; item < exerciseDetails[exercise]["steps"].length; item++) {
        let li = document.createElement("li");
        li.innerText = exerciseDetails[exercise]["steps"][item];
    }



    exerciseInfoClass.appendChild(x);
    exerciseInfoClass.appendChild(exercise_info_inner);


    body.appendChild(exerciseInfoClass);
}


function hideExerciseInfo() {
    let body = document.body;
    let exerciseInfoClass = document.getElementsByClassName("exercise_info_div")[0];
    body.removeChild(exerciseInfoClass);
}
