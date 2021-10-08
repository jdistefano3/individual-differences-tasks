var timeline = [];
 
    var fullscreen_trial = {
    type: 'fullscreen',
    fullscreen_mode: true
  } 
 
var welcome = {
        type: "html-keyboard-response" ,
        stimulus: "Welcome to the experiment. Press any key to begin."
    };
    timeline.push(welcome);
  
var instructions_1 = {
        type: "html-keyboard-response" ,
        stimulus: `
              <p> You will see words presented on the screen one at a time. </p>
              <p> Read each word into your computer's microphone and press any key to move on to the next word. </p>
              <p> There will probably be a few words that you have never seen before. In this case, please just say your best guess. If you guess more than once, make sure your preferred answer is the last thing you say before advancing. </p> 
              <p> Please check that the volume on the computer monitor is turned all the way down.</p>
              <p> If you have any questions, please ask the experimenter. </p>
              <p><b>Press any key to proceed.</b></p>
              <div style='width: 700px;'>
              </div>
        `,
          post_trial_gap: 2000
    }
    
    var instructions_2 = {
        type: "html-keyboard-response" ,
        stimulus: `<p>On the next page, we are going to test your audio. Please say the name of the animal that appears on the screen 5 times. Play your recorded audio and make sure it sounds okay.</p>
         <div style='width: 700px;'>
              </div>
            <p><b>Press any key to begin.</b></p>
        `,
        post_trial_gap: 2000
    }

    var audio_test = {
        type:'image-audio-response',
        stimulus: 'img/fox.png',
        wait_for_mic_approval: false,
        allow_playback: true,
        stimulus_width: 300,
        recording_indicator_type: 2
    }
    
   var instructions_3 = {
        type: "html-keyboard-response",
        stimulus: `<p> Now you will proceed to the actual experiment.</p>
                  <p><b> Press any key to begin. </b></p>
                  <div style='width: 700px;'>
                  </div>`,
        post_trial_gap: 2000
    }
    
  var conclusion = {
        type: "html-keyboard-response",
        stimulus: `<p> You are now finished the experiment. Thank you for participating!</p>
                  <p><b> Press any key to finish.</b></p>
                  <div style='width: 700px;'>
                  </div>`,
        post_trial_gap: 2000
    }

  var words = [
    { stimulus: "<h1 style='font-size:200%;'>Debris</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Aisle</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Reign</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Depot</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Similie</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Lingerie</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Recipe</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Gouge</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Heir</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Subtle</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Catacomb</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Bouquet</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Gauge</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Colonel</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Subpoena</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Placebo</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Procreate</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Psalm</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Banal</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Rarefy</h1>" },
    { stimulus:  "<h1 style='font-size:200%;'>Gist</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Corps</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Hors d'oeuvre</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Sieve</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Hiatus</h1>" },
    { stimulus: "<h1 style='font-size:200%;'>Gauche</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Zealot</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Paradigm</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Façade</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Cellist</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Indict</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Détente</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Impugn</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Capon</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Radix</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Aeon</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Epitome</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Equivocal</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Reify</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Indices</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Assignate</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Topiary</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Caveat</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Superfluous</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Leviathan</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Prelate</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Quadruped</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Sidereal</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Abstemious</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Beatify</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Gaoled</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Demesne</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Syncope</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Ennui</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Drachm</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Cidevant</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Epergne</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Vivace</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Talipes</h1>" }, 
    { stimulus: "<h1 style='font-size:200%;'>Synedoche</h1>" }
  ];

var exp_trial = {
    timeline: [{
      type: 'html-audio-response_modified',
      stimulus: jsPsych.timelineVariable('stimulus'),
      allow_playback: false,
      manually_end_recording_key: ['space'],
      stimulus_duration: 180000,
      wait_for_mic_approval: true,
      prompt: 'If you finish early, press the spacebar to continue.'
    }],
 timeline_variables: words,
 sample: {type: 'fixed-repetitions', size: 1}
};

  var fullscreen_trial_exit = {
    type: 'fullscreen',
    fullscreen_mode: false
  }
    
 jsPsych.init({
        timeline: [fullscreen_trial, welcome, instructions_1, instructions_2, audio_test, instructions_3, exp_trial, fullscreen_trial_exit],
        show_progress_bar: true,
        on_finish: function(){jsPsych.data.displayData(); }
});
