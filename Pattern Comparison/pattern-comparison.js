var timeline = [];
    
//define welcome message trial
    var welcome = {
      type: "html-keyboard-response",
      stimulus: `<p style="font-size:25px">Welcome to the experiment. Press any key to begin.</p>`
    };
    timeline.push(welcome);

//participant id input
    var participant_id = {
      type: "survey-text",
      questions: [
      {prompt: 'Please enter the participant ID:'}
    ]
};
timeline.push(participant_id);
    
//instructions
//define instructions trial
    var instructions = {
      type: "html-keyboard-response",
      stimulus: `
      <p style="font-size:25px">In this task, you will see 2 patterns on each screen</p>
      <p style="font-size:25px">Your job is to judge whether the two patterns are the <b>same</b><p>
      <p style="font-size:25px">Press the <b>D</b> key if, <b>yes</b>, the patterns <b>ARE</b> exactly the same.</p>
      <p style="font-size:25px">Press the <b>K</b> key if, <b>no</b>, the patterns are <b>NOT</b> exactly the same.</p>
      <p style="font-size:25px">We will show you some examples to get you started.</p>
      <p style="font-size:25px">Press any key to continue</p>
      `,
      post_trial_gap: 2000
    };
    timeline.push(instructions);

//same pattern practice
  var same_practice = {
        type: "image-keyboard-response",
        stimulus: samepracURL,
        choices: ['d' , 'k' ],
        stimulus_width: 1000
  };
  timeline.push(same_practice);
    
//different pattern practice
  var diff_practice = {
        type: "image-keyboard-response" ,
        stimulus: diffpracURL,
        choices: ['d' , 'k' ],
        stimulus_width: 1000
  };
  timeline.push(diff_practice);
    
//instructions before experimental trials
 var instructions_2 = {
      type: "html-keyboard-response",
      stimulus: `
      <p style="font-size:25px">Please keep your fingers on the D and K keys so you can respond quickly. </p>
      <p style="font-size:25px">There will be six groups of trials in this experiment. After 20 seconds the program will automatically advance to the next group of trials.</p>
      <p style="font-size:25px">In each group of trials, the patterns will be more or less complex.</p>
      <p style="font-size:25px">We know that you might make some mistakes--everyone does! But, please try to go as fast as you can while still being accurate.</p>
      <p style="font-size:25px">Press the <b>D</b> key if, <b>yes</b>, the patterns <b>ARE</b> exactly the same.</p>
      <p style="font-size:25px">Press the <b>K</b> key if, <b>no</b>, the patterns are <b>NOT</b> exactly the same.</p>
      <p style="font-size:25px">If you have any questions please ask the experimenter now.</p>
      <p style="font-size:25px">Press any key to continue.</p>
    `,
      post_trial_gap: 2000
    };
    timeline.push(instructions_2);
    
//list out the stimuli used in 3 line experimental trials
    var test_stimuli_3 = [
        { stimulus: three1URL},
       { stimulus: three2URL},
       { stimulus: three3URL},
       { stimulus: three4URL},
       { stimulus: three5URL},
       { stimulus: three6URL},
       { stimulus: three7URL},
       { stimulus: three8URL},
       { stimulus: three9URL},
       { stimulus: three10URL},
       { stimulus: three11URL},
       { stimulus: three12URL},
       { stimulus: three13URL}
    ];

//3 line segment trials
  var exp_3 = {
  timeline: [{
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['D', 'K'],
      stimulus_width: 1000,
      trial_duration: 20000
 }],
 timeline_variables: test_stimuli_3,
 sample: {type: 'fixed-repetitions', size: 1}
};
timeline.push(exp_3);

//instructions for 6 line block
var instructions_3 = {
      type: "html-keyboard-response",
      stimulus: `
      <p style="font-size:25px">In the next period, there will be 6 lines in each pattern.</p>
    <p style="font-size:25px">Press any key to continue.</p>
    `,
      post_trial_gap: 2000
    };
    timeline.push(instructions_3);

//list out the stimuli used in 6 line experimental trials
    var test_stimuli_6 = [
    { stimulus: six1URL},
    { stimulus: six2URL},
    { stimulus: six3URL},
    { stimulus: six4URL},
    { stimulus: six5URL},
    { stimulus: six6URL},
    { stimulus: six7URL},
    { stimulus: six8URL},
    { stimulus: six9URL},
    { stimulus: six10URL},
    { stimulus: six11URL},
    { stimulus: six12URL},
    { stimulus: six13URL},
    { stimulus: six14URL},
    { stimulus: six15URL},
    { stimulus: six16URL},
    { stimulus: six17URL},
    { stimulus: six18URL},
    { stimulus: six19URL},
    { stimulus: six20URL},
    { stimulus: six21URL}
    ];

//6 line segment trials
  var exp_6 = {
  timeline: [{
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['D', 'K'],
      stimulus_width: 1000,
      trial_duration: 20000
 }],
 timeline_variables: test_stimuli_6,
 sample: {type: 'fixed-repetitions', size: 1}
};
timeline.push(exp_6);

//instructions for 9 line blocks
var instructions_4 = {
      type: "html-keyboard-response",
      stimulus: `
      <p style="font-size:25px">In the next period, there will be 9 lines in each pattern.</p>
      <p style="font-size:25px">Press any key to continue.</p>
    `,
      post_trial_gap: 2000
    };
    timeline.push(instructions_4);

//list out the stimuli used in 9 line experimental trials
    var test_stimuli_9 = [
        { stimulus: nine1URL},
        { stimulus: nine2URL},
        { stimulus: nine3URL},
        { stimulus: nine4URL},
        { stimulus: nine5URL},
        { stimulus: nine6URL},
        { stimulus: nine7URL},
        { stimulus: nine8URL},
        { stimulus: nine9URL},
        { stimulus: nine10URL},
        { stimulus: nine11URL},
        { stimulus: nine12URL},
        { stimulus: nine13URL},
        { stimulus: nine14URL},
        { stimulus: nine15URL},
        { stimulus: nine16URL},
        { stimulus: nine17URL},
        { stimulus: nine18URL},
        { stimulus: nine19URL},
        { stimulus: nine20URL},
        { stimulus: nine21URL},
        { stimulus: nine22URL},
        { stimulus: nine23URL},
        { stimulus: nine24URL},
        { stimulus: nine25URL}
    ];
    
//9 line segment trials
  var exp_9 = {
  timeline: [{
      type: "image-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['D', 'K'],
      stimulus_width: 1000,
      trial_duration: 20000
 }],
 timeline_variables: test_stimuli_9,
 sample: {type: 'fixed-repetitions', size: 1}
};
timeline.push(exp_9);

//instructions for 3 line blocks
var instructions_5 = {
      type: "html-keyboard-response",
      stimulus: `
      <p style="font-size:25px">In the next period, there will be 3 lines in each pattern.</p>
    <p style="font-size:25px">Press any key to continue.</p>
    `,
      post_trial_gap: 2000
    };
    timeline.push(instructions_5);

//conclusion page
var conclusion = {
  type: "html-keyboard-response",
  stimulus: `<p style="font-size:25px">You are now finished the experiment. Thank you for participating!</p>
                  <p style="font-size:25px"><b> Press any key to finish.</b></p>`
                  ,
        post_trial_gap: 2000
    };
    timeline.push(conclusion);
