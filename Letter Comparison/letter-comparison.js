/* create timeline */
    var timeline = [];
    
/* define welcome message trial */
    var welcome = {
      type: "html-keyboard-response",
      stimulus: `<p style="font-size:25px">Welcome to the experiment. Press any key to begin.</p>`
    };
    timeline.push(welcome);
    
  timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});

    var participant_id = {
      type: "survey-text",
      questions: [
      {prompt: 'Please enter the participant ID:'}
    ]
};
timeline.push(participant_id);
    
/*instructions*/
/* define instructions trial */
    var instructions = {
      type: "html-keyboard-response",
      stimulus: `
        <p style="font-size:25px">In this experiment, you will see 2 sets of letters on each screen.</p>
        <p style="font-size:25px">Your job is to judge whether the two sets are the <b>same</b>.</p>
        <p style="font-size:25px">Press the <b>D</b> key if, yes, the sets <b>ARE</b> exactly the same.</p>
        <p style="font-size:25px">Press the <b>K</b> key if, no, the sets are <b>NOT</b> exactly the same.</p>
        <p style="font-size:25px">We'll show you some examples to get you started.</p>
        <p style="font-size:25px">Press any key to begin.</p>
      `,
      post_trial_gap: 2000
    };
    timeline.push(instructions);

    
/*practice SAME */
    var same_trial = {
      type: 'html-keyboard-response',
      stimulus: '<p style="font-size:40px"><b>BHQ BHQ</b></p>',
      choices: ['D', 'S'],
    };
    
/*practice DIFFERENT */
    var diff_trial = {
      type: 'html-keyboard-response', 
      stimulus: '<p style="font-size:40px"><b>CVN CRN</b></p>',
      choices: ['D', 'S'],
    };
    timeline.push(same_trial, diff_trial);
    
/*instructions after practice but before test trials*/
    var test_instructions = {
      type: "html-keyboard-response",
      stimulus:`
      <p style="font-size:25px"> There will be six groups of trials in this experiment.</p>  
      <p style="font-size:25px"> After X seconds, the program will automatically advance to the next group of trials</p>
      <p style="font-size:25px"> even if you hadn''t responded to the final trial in the previous set yet.</p>
      <p style="font-size:25px"> In each group of trials, there will be a different number of letters per set.</p>
      <p style="font-size:25px"> We know that you might make some mistakes--everyone does! </p> 
      <p style="font-size:25px"> But, please try to go as fast as you can while still being accurate. </p>
      <p style="font-size:25px"> If you have any questions, please ask the experimenter now.</p>
      <p style="font-size:25px"> Press any key to begin the experiment. </p>
          `,
      post_trial_gap: 2000
    };
    timeline.push(test_instructions)
    
//experiment trials
    var exp_trial = {
       type: "html-keyboard-response",
       stimulus: generateRandomStimulus,
      choices: ['D', 'S'],
    }; 
    //indicate number of trials
    var number_of_trials = 5
    for (let i=0; i < number_of_trials; i++){
      timeline.push(exp_trial);
    }
     
timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});
/* start the experiment */
    jsPsych.init({
      timeline: timeline, 
      on_finish: function() {
        jsPsych.data.displayData();
      }
    });
    
    
function generateRandomStimulus(){
  //create the alphabet and put it in an Array
      var alphabet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      var letters= jsPsych.randomization.sampleWithReplacement(alphabet, 3);
      var stim1 = letters.join('');
 
  if (jsPsych.randomization.sampleWithReplacement([0,1],1) == 1) {
      
      //picks random location in letter array to change
      var element_location = jsPsych.randomization.sampleWithReplacement([0,1,2],1)
      
      //Splice in a random letter from the alphabet
      //the splice function changes the original variable.  
      //if you try to make it == something it will make a new array with inserted elements
      letters.splice(element_location, 1, jsPsych.randomization.sampleWithReplacement(alphabet, 1));
      var stim2 = letters.join('');
      
      //concatenate the two words to make a DIFFERENT stimulus
      var display_stim = '<p style="font-size:40px;"><b>' + stim1+'  '+stim2 + '</b></p>';
      console.log(stim2);
    
  } else { 
      //concatenate two words to make a SAME stimulus
      var display_stim = '<p style="font-size:40px;"><b>' + stim1+'  '+stim1 + '</b></p>';
  }
  
  return display_stim;
}
