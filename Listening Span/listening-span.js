var timeline = []; 
    
var participant_id = {
      type: "survey-text",
      questions: [
      {prompt: 'Please enter the participant ID:'}
    ]
}

var welcome = {
        type: "html-keyboard-response" ,
        stimulus: '<p style="font-size:25px">Welcome to the experiment. Press any key to begin.</p>'
    }

var instruct_1 = {
    type: "html-button-response",
    stimulus: '<p style="font-size:25px"><b>Listening Task</b></p><p style="font-size:25px">In this task, you will try to memorize letters you hear while you also listen to sentences.</p>' +
              '<p style="font-size:25px">In the next few minutes, you will have some practice to get you familiar with how the task works.</p>' +
              '<p style="font-size:25px">We will begin by practicing the letter part of the task.</p>',
    choices: ['CONTINUE'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
}

var instruct_2 = {
    type: "html-button-response",
    stimulus: '<p style="font-size:25px">For this practice set, you will listen to letters spoken aloud. Try to remember each letter in the order presented.</p>' +
              '<p style="font-size:25px">After 2-3 letters have been played, you will see a response screen.</p>' +
              '<p style="font-size:25px">Your job is to report the letters you heard <b>in order</b>. If you do not remember a particular letter, you will have the option to leave it blank.</p>',
    choices: ['CONTINUE'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
}

var instruct_3 = {
    type: "html-button-response",
    stimulus: '<p style="font-size:25px">Remember, it is very important to get the letters in the same order as you hear them.</p>' +
              '<p style="font-size:25px">When you are ready, you may begin the letter practice.</p>',
    choices: ['BEGIN PRACTICE'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
}

var letter_prac_1 = {
    type: 'audio-keyboard-response',
    stimulus: mURL,
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000,
    response_ends_trial: true
}

var letter_prac_recall = { 
    type: 'html-button-response',
    stimulus: '<p> Which letter did you just hear?</p>',
    choices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P','Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}

var instruct_4 = {
    type: 'html-button-response',
    stimulus: '<p>Now you will practice doing the sentence listening part of the experiment.</p>' +
              'A sentence will starting playing, similar to the previous letter practice. This time, they will be sentences such as: <b><p>I like to run in the park.</p></b>' +
              '<p>As soon as you hear the sentence, you should listen to it and determine if it makes sense or not.' +
              '<p>When you have heard the sentence and determined whether it makes sense or not, you will click on the screen using the mouse.</p>',
    choices: ['CONTINUE'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
} 

var sentence_prac = {
    type: 'audio-keyboard-response',
    stimulus: catURL,
    choices: ['T', 'F'],
    prompt: "<p>Is this sentence true or false?</p>"+
    "<p> Press T for True</p>"+
    "<p> Press F for False</p>",
    response_ends_trial: true
}

var instruct_5 = {
  type: 'html-button-response',
  stimulus: '<p>Now you will practice doing both parts of the experiment at the same time.</p>'+
            '<p>In the next practice set, you will be given one sentence to listen to. Once you make your decision about the sentence, a letter being read aloud will play. Try and remember the letter.</p>'+
            '<p>In the previous section where you only listened to the sentences, the computer computed your average time to make your decision about the sentence.</p> <p>If you take significantly longer than your average time, the computer will automatically move you onto the next letter part, <b>thus skipping the True or False part and will count that problem as a sentence error.</b></p>'+
            '<p><b>Therefore it is VERY important to make sure you complete the questions as quickly and as accurately as possible.</b> Just as before, once you have read the sentence, you will click on the screen using the mouse.</p>',
  choices: ['CONTINUE'],
  button_html: '<button class="buttonStyle">%choice%</button>'
}

var instruct_6 = {
  type: 'html-button-response',
  stimulus: '<p>After the letter stops playing, another sentence will start playing, and then another letter.</p>' +
            '<p>At the end of each set of letters and sentences, you will recall the letters to the best of your ability.<b> Remember, try your best to get the letters in the correct order.</b></p>'+
            '<p>It is important to work QUICKLY and ACCURATELY on the sentences.<b> Make sure you know whether the sentence makes sense or not before clicking the mouse to advance to the next screen.</b></p>',
  choices: ['CONTINUE'],
  button_html: '<button class="buttonStyle">%choice%</button>'
}

var sentence_prac_2 = {
    type: 'audio-keyboard-response',
    stimulus: carrotURL,
    choices: ['T', 'F'],
    prompt: "<p>Is this sentence true or false?</p>"+
    "<p> Press T for True</p>"+
    "<p> Press F for False</p>",
    response_ends_trial: true
}

var letter_prac_2 = {
    type: 'audio-keyboard-response',
    stimulus: jURL,
    trial_duration: 1000,
    choices: jsPsych.NOKEYS
}

var sentence_prac_3 = {
    type: 'audio-keyboard-response',
    stimulus: yellowURL,
    choices: ['T', 'F'],
    prompt: "<p>Is this sentence true or false?</p>"+
    "<p> Press T for True</p>"+
    "<p> Press F for False</p>",
    response_ends_trial: true
}

var letter_prac_3 = {
    type: 'audio-keyboard-response',
    stimulus: fURL,
    trial_duration: 1000,
    choices: jsPsych.NOKEYS
}

var recordClick = function(elm) {
        response.push(($(elm).text())) //push the letter to the array
        document.getElementById("echoed_txt").innerHTML = response.join(" ");
    }

//function to clear the response array
var clearResponse = function() {
        response.pop(); //this will remove the most recent response
        document.getElementById("echoed_txt").innerHTML = response.join(" ");
    }

//function to clear the response array
var blankResponse = function() {
        response.push('_'); //push the blank to the array
        document.getElementById("echoed_txt").innerHTML = response.join(" ");
    }

var response_grid = 
'<div class = numbox>' +
'<p>Please recall the letters you heard to the best of your ability. If you do not remember a particular letter, use the SKIP button.<br><b>(When you are ready to lock in your answer, press ENTER)</b></p>' +
'<button id = button_1 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>A</div></div></button>' +
'<button id = button_2 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>B</div></div></button>' +
'<button id = button_3 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>C</div></div></button>' +
'<button id = button_4 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>D</div></div></button>' +
'<button id = button_5 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>E</div></div></button>' +
'<button id = button_6 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>F</div></div></button>' +
'<button id = button_7 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>G</div></div></button>' +
'<button id = button_8 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>H</div></div></button>' +
'<button id = button_9 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>I</div></div></button>' +
'<button id = button_10 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>J</div></div></button>' +
'<button id = button_11 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>K</div></div></button>' +
'<button id = button_12 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>L</div></div></button>' +
'<button id = button_13 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>M</div></div></button>' +
'<button id = button_14 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>N</div></div></button>' +
'<button id = button_15 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>O</div></div></button>' +
'<button id = button_16 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>P</div></div></button>' +
'<button id = button_17 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>Q</div></div></button>' +
'<button id = button_18 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>R</div></div></button>' +
'<button id = button_19 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>S</div></div></button>' +
'<button id = button_20 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>T</div></div></button>' +
'<button id = button_21 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>U</div></div></button>' +
'<button id = button_22 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>V</div></div></button>' +
'<button id = button_23 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>W</div></div></button>' +
'<button id = button_24 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>X</div></div></button>' +
'<button id = button_25 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>Y</div></div></button>' +
'<button id = button_26 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>Z</div></div></button>' +
'<button class = clear_button id = "ClearButton" onclick = "clearResponse()">BACKSPACE</button>'+
'<button class = blank_button id = "BlankButton" onclick = "blankResponse()">SKIP</button>'+
'<p><u><b>Current Answer:</b></u></p><div id=echoed_txt style="font-size: 30px; color:blue;"><b></b></div></div>'

var rspan_recall = {
    type: 'html-keyboard-response',
    stimulus: response_grid,
    choices: ['26', 'Enter']
} 

var instruct_7 = {
    type: "html-button-response",
    stimulus: "<p>That is the end of practice.</p>" +
              "<p>The real trials will look just like the practice trials you just completed.</br>First, you will hear a sentence, then a letter to remember.</p>" +
              "<p>When the recall screen appears, report the letters in the order presented. If you forget a letter, remember to use the BLANK button to move to the next letter.</p>" +
              "<p>Some of the sets will have more sentences and letters than others.</br>It is important that you do your best on both the sentence problems and the letter recall parts of the experiment.</p>" +
              "<p>Remember for the sentences you must work as QUICKLY and ACCURATELY as possible.</br>Remember to keep your sentence accuracy at 85% or above.</p>" +
              "<p><b>Do NOT use any external aid (e.g., paper and pencil, word processor) to write down the letters.</b></br>This task is meant to be challenging.</p>" +
              "<p>Click the button to begin.</p>",
    choices: ['BEGIN'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
}

var fixation = {
        type: 'html-keyboard-response' ,
        stimulus: '<div style="font-size: 60px; ">+</div>' ,
        choices: jsPsych.NO_KEYS,
        trial_duration: 1000
}
    
var letter_stimuli = [
    { stimulus: aURL},
    { stimulus: bURL},
    { stimulus: cURL},
    { stimulus: dURL},
    { stimulus: eURL},
    { stimulus: fURL},
    { stimulus: gURL},
    { stimulus: hURL},
    { stimulus: IURL},
    { stimulus: jURL},
    { stimulus: kURL},
    { stimulus: lURL},
    { stimulus: mURL},
    { stimulus: nURL},
    { stimulus: oURL},
    { stimulus: pURL},
    { stimulus: qURL},
    { stimulus: rURL},
    { stimulus: sURL},
    { stimulus: tURL},
    { stimulus: uURL},
    { stimulus: vURL},
    { stimulus: wURL},
    { stimulus: xURL},
    { stimulus: yURL},
    { stimulus: zURL}
];

var sentence_stimuli = [
    { stimulus: airplaneURL},
    { stimulus: appleURL},
    { stimulus: auntURL},
    { stimulus: basementURL},
    { stimulus: carrotURL},
    { stimulus: catURL},
    { stimulus: caveURL},
    { stimulus: ceilingURL},
    { stimulus: chairURL},
    { stimulus: cloudURL},
    { stimulus: coalURL}, 
    { stimulus: cricketURL},
    { stimulus: dayURL},
    { stimulus: decadeURL},
    { stimulus: dentistURL},
    { stimulus: dogURL},
    { stimulus: dollarURL},
    { stimulus: elephantURL},
    { stimulus: eyeURL},
    { stimulus: fingerURL},
    { stimulus: footballURL},
    { stimulus: goldURL},
    { stimulus: governerURL},
    { stimulus: gunURL},
    { stimulus: handURL},
    { stimulus: hatURL},
    { stimulus: hawkURL},
    { stimulus: heartURL},
    { stimulus: hillURL},
    { stimulus: hockeyURL},
    { stimulus: hydrogenURL},
    { stimulus: jailURL},
    { stimulus: knifeURL},
    { stimulus: lakeURL},
    { stimulus: lettuceURL},
    { stimulus: linenURL},
    { stimulus: mouseURL},
    { stimulus: neckURL},
    { stimulus: newspaperURL},
    { stimulus: novelURL},
    { stimulus: nurseURL},
    { stimulus: oakURL},
    { stimulus: oilURL},
    { stimulus: organURL},
    { stimulus: peachURL},
    { stimulus: potURL},
    { stimulus: potatoURL},
    { stimulus: redURL},
    { stimulus: rifleURL},
    { stimulus: ringURL},
    { stimulus: roofURL},
    { stimulus: rubyURL},
    { stimulus: sawURL},
    { stimulus: scarfURL},
    { stimulus: sharkURL},
    { stimulus: sisterURL},
    { stimulus: skilletURL},
    { stimulus: snowURL},
    { stimulus: sofaURL},
    { stimulus: sonURL},
    { stimulus: spiceURL},
    { stimulus: spiderURL},
    { stimulus: strawberryURL},
    { stimulus: tentURL},
    { stimulus: tieURL},
    { stimulus: tinURL},
    { stimulus: vanillaURL},
    { stimulus: verbURL},
    { stimulus: violinURL},
    { stimulus: volcanoURL},
    { stimulus: waterURL},
    { stimulus: yardURL},
    { stimulus: yellowURL},
    { stimulus: zebraURL}
];
    
var main_letters = {
    timeline: [{
    type: 'audio-keyboard-response',
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000, 
    trial_ends_after_audio: true
 }],
 timeline_variables: letter_stimuli,
 sample: {type: 'without-replacement', size: 1}
};
    
var main_sentences = {
    timeline: [{
    type: 'audio-keyboard-response',
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['T', 'F'],
    prompt: "<p>Is this sentence true or false?</p>"+
    "<p> Press T for True</p>"+
    "<p> Press F for False</p>",
    response_ends_trial: true
   }],
    timeline_variables: sentence_stimuli,
    sample: {type: 'without-replacement', size: 1}
};
        
var lspan_run_1 = {
	timeline: [
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation
]
};

var lspan_run_2 = {
    timeline: [
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation
]
};

var lspan_run_3 = {
    timeline: [
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation
]
};

var lspan_run_4 = {
    timeline: [
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation
]
};

var lspan_run_5 = {
    timeline: [
    main_letters, fixation, main_sentences, fixation, 
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation,
    main_letters, fixation, main_sentences, fixation
]
};

var conclusion = {
    type: "html-keyboard-response",
        stimulus: `<p> You are now finished the experiment. Thank you for participating!</p>
                  <p><b> Press any key to finish.</b></p>
                  <div style='width: 700px;'>
                  </div>`,
        post_trial_gap: 2000
    }
