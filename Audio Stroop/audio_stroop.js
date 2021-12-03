var timeline = [];

// preload images to be shown in experiment
    var preload = {
      type: 'preload',
      images: ['img/BLUE_blue.png', 'img/BLUE_green.png' , 'img/BLUE_orange.png' , 'img/BLUE_purple.png' , 'img/fox.png', 'img/BLUE_red.png' , 'img/BLUE_yellow.png', 'img/GREEN_blue.png', 'img/GREEN_green.png', 'img/GREEN_orange.png', 'img/GREEN_purple.png', 'img/GREEN_red.png', 'img/GREEN_yellow.png', 'img/ORANGE_purple.png','img/ORANGE_blue.png', 'img/ORANGE_green.png', 'img/ORANGE_orange.png', 'img/ORANGE_red.png', 'img/ORANGE_yellow.png', 'img/PURPLE_purple.png', 'img/PURPLE_blue.png', 'img/PURPLE_green.png', 'img/PURPLE_orange.png', 'img/PURPLE_red.png', 'img/PURPLE_yellow.png', 'img/RED_purple.png', 'img/RED_blue.png', 'img/RED_green.png', 'img/RED_orange.png', 'img/RED_red.png', 'img/RED_yellow.png', 'img/YELLOW_blue.png', 'img/YELLOW_green.png', 'img/YELLOW_orange.png', 'img/YELLOW_purple.png', 'img/YELLOW_red.png', 'img/YELLOW_yellow.png']
    }
    timeline.push(preload);

// welcome page
    var welcome = {
        type: "html-keyboard-response" ,
        stimulus: "Welcome to the experiment. Press any key to begin."
    };
    timeline.push(welcome);

// participant id input
    var participant_id = {
      type: "survey-text",
      questions: [
      {prompt: 'Please enter the participant ID:'}
    ]
};
timeline.push(participant_id);

// general instructions for the experiment and button press instructions
    var instructions = {
        type: "html-keyboard-response" ,
        stimulus: `
            <p>In this experiment, you will see color names (red, green, blue, yellow, purple, and orange) in different print colors. You need to respond to the print color. For example, if you see: </p><p style="color:red;">GREEN</p> 
            <p>You need to respond to the <b>print color (red)</b>, and press the associated button ("r"). The other buttons used in the experiment are "g", "b" ,"y", "o" , and "p" for green, blue, yellow, orange and purple.</p>
            <p>Here are some more examples:</p><p style="color:blue;">YELLOW: press "b" key</p><p style="color:green;">RED: press "g" key</p><p style="color:yellow;">BLUE: press "y" key</p><p style="color:red;">RED: press "r" key</p><p style="color:orange;">ORANGE: press "o" key</p><p style="color:purple;">PURPLE: press "P" key</p>
             <div style='width: 700px;'>
              </div>
            <p>Press any key to proceed.</p>
        `,
        post_trial_gap: 2000
    };
    timeline.push(instructions);

// instructions about voice recording
    var instructions = {
        type: "html-keyboard-response" ,
        stimulus: `<p>Along with pressing a button, you will need to record your voice response.</p>For example, if you see <p style="color:blue;"><b>YELLOW</b></p><p>Say: "Blue"</p><p>On each trial, your browser will ask permission to use your microphone. Press "allow" and start talking</p>
             <div style='width: 700px;'>
              </div>
            <p>Press any key to proceed.</p>
        `,
        post_trial_gap: 2000
    };
    timeline.push(instructions);

// instructions for audio test
    var instructions = {
        type: "html-keyboard-response" ,
        stimulus: `<p>On the next page, we are going to test your audio. Please say the name of the animal that appears on the screen 5 times. Play your recorded audio and make sure it sounds okay.</p>
         <div style='width: 700px;'>
              </div>
            <p>Press any key to begin.</p>
        `,
        post_trial_gap: 2000
    };
    timeline.push(instructions);

// audio test set-up
    var audio_test = {
        type:'image-audio-response',
        stimulus: 'img/fox.png',
        wait_for_mic_approval: false,
        allow_playback: true,
        stimulus_width: 300,
        recording_indicator_type: 2
    }
    timeline.push(audio_test);

// instructions for experimental trials
    var instructions = {
        type: "html-keyboard-response",
        stimulus: `<p>Now you will proceed to the actual experiment.</p><p>Reminder: You need to respond to the <b>print color (red)</b>, and press the associated button ("r"). The other buttons used in the experiment are "g", "b" ,"y", "o" , and "p" for green, blue, yellow, orange and purple.</p>
            <div style='width: 700px;'>
              </div>
            <p>Press any key to begin.</p>
        `,
        post_trial_gap: 2000
    };

    timeline.push(instructions);

// establish experimental stimuli and their correct responses
    var test_stimuli = [
        { stimulus: "img/BLUE_blue.png", correct_response: 'b'},
        { stimulus: "img/BLUE_green.png" , correct_response: 'b'},
        { stimulus: "img/BLUE_orange.png" , correct_response: 'b'},
        { stimulus: "img/BLUE_purple.png" , correct_response: 'b'},
        { stimulus: "img/BLUE_red.png" , correct_response: 'b'},
        { stimulus: "img/BLUE_yellow.png", correct_response: 'b'},
        { stimulus: "img/GREEN_blue.png", correct_response: 'g'},
        { stimulus: "img/GREEN_green.png", correct_response: 'g'},
        { stimulus: "img/GREEN_orange.png", correct_response: 'g'},
        { stimulus: "img/GREEN_purple.png", correct_response: 'g'},
        { stimulus: "img/GREEN_red.png", correct_response: 'g'},
        { stimulus: "img/GREEN_yellow.png", correct_response: 'g'},
        { stimulus: "img/ORANGE_purple.png", correct_response: 'o'},
        { stimulus: "img/ORANGE_blue.png", correct_response: 'o'}, 
        { stimulus: "img/ORANGE_green.png", correct_response: 'o'},
        { stimulus: "img/ORANGE_orange.png", correct_response: 'o'},
        { stimulus: "img/ORANGE_red.png", correct_response: 'o'},
        { stimulus: "img/ORANGE_yellow.png", correct_response: 'o'},
        { stimulus: "img/PURPLE_purple.png", correct_response: 'p'},
        { stimulus: "img/PURPLE_blue.png", correct_response: 'p'},
        { stimulus: "img/PURPLE_green.png", correct_response: 'p'},
        { stimulus: "img/PURPLE_orange.png", correct_response: 'p'},
        { stimulus: "img/PURPLE_red.png", correct_response: 'p'},
        { stimulus: "img/PURPLE_yellow.png", correct_response: 'p'},
        { stimulus: "img/RED_purple.png", correct_response: 'r'},
        { stimulus: "img/RED_blue.png", correct_response: 'r'},
        { stimulus: "img/RED_green.png", correct_response: 'r'},
        { stimulus: "img/RED_orange.png", correct_response: 'r'},
        { stimulus: "img/RED_red.png", correct_response: 'r'},
        { stimulus: "img/RED_yellow.png", correct_response: 'r'},
        { stimulus: "img/YELLOW_blue.png", correct_response: 'y'},
        { stimulus: "img/YELLOW_green.png", correct_response: 'y'},
        { stimulus: "img/YELLOW_orange.png", correct_response: 'y'},
        { stimulus: "img/YELLOW_purple.png", correct_response: 'y'},
        { stimulus: "img/YELLOW_red.png", correct_response: 'y'},
        { stimulus: "img/YELLOW_yellow.png", correct_response: 'y'}
    ];

// fixation cross and randomization of trials
    var fixation = {
        type: 'html-keyboard-response' ,
        stimulus: '<div style="font-size: 60px; ">+</div>' ,
        choices: jsPsych.NO_KEYS, 
        trial_duration: function(){
            return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
        },
        data: {
            task: 'fixation'
        }
    }
    
// experimental trials set up 
    var test = {
        type: "image-audio-response" , 
        stimulus: jsPsych.timelineVariable('stimulus') ,
        allow_playback: false,
        manually_end_recording: true,
        manually_end_recording_key: ['j'],
        wait_for_mic_approval: true,
        response_ends_trial: true,
        stimulus_width: 1000,
        recording_indicator_type: 2,
    }

// order of experimental trials
    var test_procedure = {
        timeline: [fixation, test] ,
        timeline_variables: test_stimuli ,
        randomize_order: true,
        reptitions: 2
    }
    timeline.push(test_procedure);

// initate experiment
    jsPsych.init({
        timeline: timeline,
        on_finish: function(){
            jsPsych.data.displayData();
        }
    });
