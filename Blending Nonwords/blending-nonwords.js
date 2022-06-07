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
    stimulus: '<p style="font-size:25px">This is a task called Blending Non-words. You will hear some made-up words one sound at a time.</p>'+
                '<p style="font-size:25px">Your task is to listen carefully, and then put the parts together and say it as one word.</p>'+
                '<p style="font-size:25px">A cross will appear on the screen while the sound is playing.</p>'+
                '<p style="font-size:25px">A red dot will appear when it is your turn to speak. Say the made-up word clearly into the microphone, then press any key to move on.</p>'+
                '<p style="font-size:25px">We will start with some practice items. If you have any questions, please ask the experimenter now.</p>',
    choices: ['CONTINUE'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
}

var practice_stimuli = [
    { stimulus: baspURL },
    { stimulus: ghiteURL },
    { stimulus: heckobiURL },
    { stimulus: jopURL },
    { stimulus: kumaygURL },
    { stimulus: motabeURL }
]; 

var practice = {
    type: "audio-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: jsPsych.NO_KEYS,
    prompt: '<div style="font-size: 60px; ">+</div>',
    trial_ends_after_audio: true,
    response_allowed_while_playing: false
}

var practice_response = {
    type: "html-audio-response",
    stimulus: '<div style="font-size: 25px;">Speak now!</div>',
    allow_playback: true,
    manually_end_recording: true,
    manually_end_recording_key: jsPsych.ALL_KEYS,
    recording_duration: null,
    show_done_button: true
}

var practice_procedure = {
    timeline: [practice, practice_response],
    timeline_variables: [
    { stimulus: baspURL },
    { stimulus: ghiteURL },
    { stimulus: heckobiURL },
    { stimulus: jopURL },
    { stimulus: kumaygURL },
    { stimulus: motabeURL }
    ],
    sample: {
        type: 'without-replacement',
        size: 6 
    }
}

var instruct_2 = {
    type: "html-button-response",
    stimulus: '<p style="font-size:25px">Got it? Now you will complete the rest of the items.</p>'+
            '<p style="font-size:25px">Instead of hearing the instructions before each trial, you will hear a beep.</p>'+
            '<p style="font-size:25px">Remember to speak clearly and not to begin speaking until you see the dot. Press any key to move on.</p>'+
            '<p style="font-size:25px">If you have any questions, please ask the experimenter now.</p>',
    choices: ['CONTINUE'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
}

var test_stimuli = [
    { stimulus: nassURL },
    { stimulus: nemowkURL },
    { stimulus: nysheebokiURL },
    { stimulus: pr_hetURL },
    { stimulus: pr_jadURL },
    { stimulus: pr_koURL },
    { stimulus: pr_landerURL },
    { stimulus: pr_mogURL },
    { stimulus: pr_nimbyURL },
    { stimulus: shawboURL },
    { stimulus: shibURL },
    { stimulus: shyvitchURL },
    { stimulus: snypoghURL },
    { stimulus: suhnypoghURL },
    { stimulus: tastainsURL },
    { stimulus: tebURL },
    { stimulus: tiguURL },
    { stimulus: vopeURL },
    { stimulus: zigoppleURL }
];

var test = {
    type: "audio-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: jsPsych.NO_KEYS,
    prompt: '<div style="font-size: 60px; ">+</div>',
    trial_ends_after_audio: true,
    response_allowed_while_playing: false
}
    
var test_response = { 
    type: "html-audio-response",
    stimulus: '<div style="font-size: 25px; ">Speak now!</div>',
    allow_playback: false,
    manually_end_recording: true,
    manually_end_recording_key: jsPsych.ALL_KEYS,
    recording_duration: null,
    show_done_button: true
}

var test_procedure = {
    timeline: [test, test_response],
    timeline_variables: [
    { stimulus: nassURL },
    { stimulus: nemowkURL },
    { stimulus: nysheebokiURL },
    { stimulus: pr_hetURL },
    { stimulus: pr_jadURL },
    { stimulus: pr_koURL },
    { stimulus: pr_landerURL },
    { stimulus: pr_mogURL },
    { stimulus: pr_nimbyURL },
    { stimulus: shawboURL },
    { stimulus: shibURL },
    { stimulus: shyvitchURL },
    { stimulus: snypoghURL },
    { stimulus: suhnypoghURL },
    { stimulus: tastainsURL },
    { stimulus: tebURL },
    { stimulus: tiguURL },
    { stimulus: vopeURL },
    { stimulus: zigoppleURL }
    ],
    sample: {
        type: 'without-replacement',
        size: 19
    }
}

var conclusion = {
    type: "html-keyboard-response",
        stimulus: `<p> You are now finished the experiment. Thank you for participating!</p>
                  <p><b> Press any key to finish.</b></p>
                  <div style='width: 700px;'>
                  </div>`,
        post_trial_gap: 2000
}
