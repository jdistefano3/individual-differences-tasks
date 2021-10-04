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
    { stimulus: "Debris" },
    { stimulus: "Aisle" },
    { stimulus: "Reign" },
    { stimulus: "Depot" },
    { stimulus: "Similie" },
    { stimulus: "Lingerie" },
    { stimulus: "Recipe" },
    { stimulus: "Gouge" },
    { stimulus: "Heir" },
    { stimulus: "Subtle" },
    { stimulus: "Catacomb" },
    { stimulus: "Bouquet" },
    { stimulus: "Gauge" },
    { stimulus: "Colonel" },
    { stimulus: "Subpoena" },
    { stimulus: "Placebo" },
    { stimulus: "Procreate" },
    { stimulus: "Psalm" },
    { stimulus: "Banal" },
    { stimulus: "Rarefy" },
    { stimulus:  "Gist" },
    { stimulus: "Corps" },
    { stimulus: "Hors d'oeuvre" },
    { stimulus: "Sieve" },
    { stimulus: "Hiatus" },
    { stimulus: "Gauche" }, 
    { stimulus: "Zealot" }, 
    { stimulus: "Paradigm" }, 
    { stimulus: "Façade" }, 
    { stimulus: "Cellist" }, 
    { stimulus: "Indict" }, 
    { stimulus: "Détente" }, 
    { stimulus: "Impugn" }, 
    { stimulus: "Capon" }, 
    { stimulus: "Radix" }, 
    { stimulus: "Aeon" }, 
    { stimulus: "Epitome" }, 
    { stimulus: "Equivocal" }, 
    { stimulus: "Reify" }, 
    { stimulus: "Indices" }, 
    { stimulus: "Assignate" }, 
    { stimulus: "Topiary" }, 
    { stimulus: "Caveat" }, 
    { stimulus: "Superfluous" }, 
    { stimulus: "Leviathan" }, 
    { stimulus: "Prelate" }, 
    { stimulus: "Quadruped" }, 
    { stimulus: "Sidereal" }, 
    { stimulus: "Abstemious" }, 
    { stimulus: "Beatify" }, 
    { stimulus: "Gaoled" }, 
    { stimulus: "Demesne" }, 
    { stimulus: "Syncope" }, 
    { stimulus: "Ennui" }, 
    { stimulus: "Drachm" }, 
    { stimulus: "Cidevant" }, 
    { stimulus: "Epergne" }, 
    { stimulus: "Vivace" }, 
    { stimulus: "Talipes" }, 
    { stimulus: "Synedoche" }
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
        timeline: [fullscreen_trial, welcome, instructions_1, instructions_2, audio_test, instructions_3, exp_trial, conclusion, fullscreen_trial_exit],
        show_progress_bar: true,
        on_finish: function(){jsPsych.data.displayData(); }
});
