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
    stimulus: '<p style="font-size:25px">In this experiment, you will listen to and repeat nonsense words.</p>'+
            '<p style="font-size:25px">After you hear each word, wait for a red dot to appear in the center of the screen and then <b>repeat the word as accurately as possible.</b></p>'+
            '<p style="font-size:25px">After you have finished speaking, press any key to start the next trial.</b></p>'+
            '<p style="font-size:25px">Please do not press anything until you have finished speaking.You may take as long as you like on each word.  There is no time limit.</p>'+
            '<p style="font-size:25px">We will start with some practice trials.</p>',
    choices: ['CONTINUE'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
}

var practice_two_syllable_1 = {
    type: "audio-keyboard-response",
    stimulus: breekerURL,
    choices: ['NO_KEYS'],
    prompt: '<div style="font-size: 60px; ">+</div>',
    response_allowed_while_playing: false,
    trial_ends_after_audio: true
}

var practice_two_syllable_2 = {
    type: "audio-keyboard-response",
    stimulus: farnidURL,
    choices: ['NO_KEYS'],
    prompt: '<div style="font-size: 60px; ">+</div>',
    response_allowed_while_playing: false,
    trial_ends_after_audio: true
}

var practice_four_syllable_1 = {
    type: "audio-keyboard-response",
    stimulus: ginstabularURL,
    choices: ['NO_KEYS'],
    prompt: '<div style="font-size: 60px; ">+</div>',
    response_allowed_while_playing: false,
    trial_ends_after_audio: true
}

var practice_four_syllable_2 = {
    type: "audio-keyboard-response",
    stimulus: numenaydisURL,
    choices: ['NO_KEYS'],
    prompt: '<div style="font-size: 60px; ">+</div>',
    response_allowed_while_playing: false,
    trial_ends_after_audio: true
}

var practice_seven_syllable_1 = {
    type: "audio-keyboard-response",
    stimulus: roskorilleevangistineURL,
    choices: ['NO_KEYS'],
    prompt: '<div style="font-size: 60px; ">+</div>',
    response_allowed_while_playing: false,
    trial_ends_after_audio: true
}

var practice_seven_syllable_2 = {
    type: "audio-keyboard-response",
    stimulus: nabbivulackrifeemalURL,
    choices: ['NO_KEYS'],
    prompt: '<div style="font-size: 60px; ">+</div>',
    response_allowed_while_playing: false,
    trial_ends_after_audio: true
}

var practice_response = {
    type: "html-audio-response",
    stimulus: '<div style="font-size: 25px; ">Speak now!</div>',
    allow_playback: true,
    manually_end_recording: true,
    manually_end_recording_key: jsPsych.ALL_KEYS,
    recording_duration: null,
    show_done_button: true
}

var instruct_2 = {
    type: "html-button-response",
    stimulus: '<p style="font-size:25px">OK, do you have the hang of it? Please ask the experimenter if you have any questions.</p>'+
                '<p style="font-size:25px">Do not forget, wait until the red dot appears before you begin speaking, and only press the space bar after you are done speaking.</p>',
    choices: ['CONTINUE'],
    post_trial_gap: 250,
    button_html: '<button class="buttonStyle">%choice%</button>'
}

var practice_2 = {
    timeline: [
    practice_two_syllable_1, practice_response, practice_two_syllable_2, practice_response
]
};

var practice_4 = {
    timeline: [
    practice_four_syllable_1, practice_response, practice_four_syllable_2, practice_response
]
};

var practice_7 = {
    timeline: [
    practice_seven_syllable_1, practice_response, practice_seven_syllable_2, practice_response
]
};

var two_syllable_stimuli = [
    { stimulus: aftyssURL }, 
    { stimulus: breekerURL }, 
    { stimulus: chentokURL },
    { stimulus: dinstegURL },
    { stimulus: drashingURL },
    { stimulus: eblishURL },
    { stimulus: farnidURL }, 
    { stimulus: flacktronURL }, 
    { stimulus: glincherURL },
    { stimulus: heelonURL }, 
    { stimulus: istrumURL }, 
    { stimulus: jombinnURL }, 
    { stimulus: jossfegURL }, 
    { stimulus: kentraidURL }, 
    { stimulus: kimpreeURL },
    { stimulus: leemishURL }, 
    { stimulus: listeekURL }, 
    { stimulus: mullsetURL }, 
    { stimulus: nifferURL },
    { stimulus: onklidURL }, 
    { stimulus: pombrillURL }, 
    { stimulus: pundakURL }, 
    { stimulus: rimbistURL }, 
    { stimulus: roefellURL }, 
    { stimulus: santingURL }, 
    { stimulus: stupwigURL },
    { stimulus: tafferURL }, 
    { stimulus: urvitURL }, 
    { stimulus: vingleURL },
    { stimulus: waydishURL }, 
    { stimulus: yestradURL }, 
    { stimulus: zabbleURL }
];

var four_syllable_stimuli = [
    { stimulus: amberillockURL },
    { stimulus: ardentiffleURL },
    { stimulus: brogeeniventURL },
    { stimulus: constrapiteekURL },
    { stimulus: differaymusURL },
    { stimulus: ensidoriteURL },
    { stimulus: ephinoricURL },
    { stimulus: fiscolumbateURL },
    { stimulus: frovilankusURL },
    { stimulus: ginstabularURL },
    { stimulus: hestomeekillURL },
    { stimulus: inkristavenURL },
    { stimulus: jellantiferURL },
    { stimulus: juntiformalURL },
    { stimulus: kaftogropyURL },
    { stimulus: lyporamicURL },
    { stimulus: nestivakenURL },
    { stimulus: numenaydisURL },
    { stimulus: occlistimateURL },
    { stimulus: pristonkopyURL },
    { stimulus: quaggisindomURL },
    { stimulus: quinorampusURL },
    { stimulus: rusveedinostURL },
    { stimulus: shibbatoryURL },
    { stimulus: spikanthodillURL },
    { stimulus: trempajidalURL },
    { stimulus: uftillamusURL },
    { stimulus: vampontigreeURL },
    { stimulus: vitterashipURL },
    { stimulus: widdestiferURL },
    { stimulus: yitterfeeginURL },
    { stimulus: zitricaymusURL }
];    


var seven_syllable_stimuli = [
    { stimulus: askenidobiskulateURL },
    { stimulus: bentisippelanjevillURL },
    { stimulus: brodastopermaninkleURL },
    { stimulus: chentillodeecretavenURL },
    { stimulus: clerovaydestonkomyURL },
    { stimulus: draybishocksinallobitURL },
    { stimulus: dustimonegrivanterURL },
    { stimulus: elfandrigompredoonisURL },
    { stimulus: faskimaybenoppotrinURL },
    { stimulus: fommigravelontipanURL },
    { stimulus: gistorackidopulinURL },
    { stimulus: hundinoteralityURL },
    { stimulus: infraskovijideenitURL },
    { stimulus: jedabuloskeramicURL },
    { stimulus: jetropindemalityURL },
    { stimulus: kaddenistronomacyURL },
    { stimulus: klistodentriposkularURL },
    { stimulus: loftrajenimplicobusURL },
    { stimulus: meskolonaymendalicURL },
    { stimulus: mulchectrifangenitedURL },
    { stimulus: nabbivulackrifeemalURL },
    { stimulus: oprackenistalomineURL },
    { stimulus: postabulisticationURL },
    { stimulus: quintegridoppomakelURL },
    { stimulus: roskorilleevangistineURL },
    { stimulus: sacronimbenalopyURL },
    { stimulus: spentonymidderoxingURL },
    { stimulus: trovejinapporisticURL },
    { stimulus: umplickerannitizerURL },
    { stimulus: vancidoscoreegamishURL },
    { stimulus: wiscalberijoniperURL },
    { stimulus: zoobenifferaltopineURL }
];    
    
var test_two_syllables = {
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
    allow_playback: true,
    manually_end_recording: true,
    manually_end_recording_key: jsPsych.ALL_KEYS,
    recording_duration: null,
    show_done_button: true
}

var two_syllable_procedure = {
    timeline: [test_two_syllables, test_response],
    timeline_variables: [
    { stimulus: aftyssURL }, 
    { stimulus: breekerURL }, 
    { stimulus: chentokURL },
    { stimulus: dinstegURL },
    { stimulus: drashingURL },
    { stimulus: eblishURL },
    { stimulus: farnidURL }, 
    { stimulus: flacktronURL }, 
    { stimulus: glincherURL },
    { stimulus: heelonURL }, 
    { stimulus: istrumURL }, 
    { stimulus: jombinnURL }, 
    { stimulus: jossfegURL }, 
    { stimulus: kentraidURL }, 
    { stimulus: kimpreeURL },
    { stimulus: leemishURL }, 
    { stimulus: listeekURL }, 
    { stimulus: mullsetURL }, 
    { stimulus: nifferURL },
    { stimulus: onklidURL }, 
    { stimulus: pombrillURL }, 
    { stimulus: pundakURL }, 
    { stimulus: rimbistURL }, 
    { stimulus: roefellURL }, 
    { stimulus: santingURL }, 
    { stimulus: stupwigURL },
    { stimulus: tafferURL }, 
    { stimulus: urvitURL }, 
    { stimulus: vingleURL },
    { stimulus: waydishURL }, 
    { stimulus: yestradURL }, 
    { stimulus: zabbleURL }
    ],
    sample: {
        type: 'without-replacement',
        size: 6
    }
}

var test_four_syllables = {
    type: "audio-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: jsPsych.NO_KEYS,
    prompt: '<div style="font-size: 60px; ">+</div>',
    trial_ends_after_audio: true,
    response_allowed_while_playing: false
}

var four_syllable_procedure = {
    timeline: [test_four_syllables, test_response],
    timeline_variables: [
    { stimulus: amberillockURL },
    { stimulus: ardentiffleURL },
    { stimulus: brogeeniventURL },
    { stimulus: constrapiteekURL },
    { stimulus: differaymusURL },
    { stimulus: ensidoriteURL },
    { stimulus: ephinoricURL },
    { stimulus: fiscolumbateURL },
    { stimulus: frovilankusURL },
    { stimulus: ginstabularURL },
    { stimulus: hestomeekillURL },
    { stimulus: inkristavenURL },
    { stimulus: jellantiferURL },
    { stimulus: juntiformalURL },
    { stimulus: kaftogropyURL },
    { stimulus: lyporamicURL },
    { stimulus: nestivakenURL },
    { stimulus: numenaydisURL },
    { stimulus: occlistimateURL },
    { stimulus: pristonkopyURL },
    { stimulus: quaggisindomURL },
    { stimulus: quinorampusURL },
    { stimulus: rusveedinostURL },
    { stimulus: shibbatoryURL },
    { stimulus: spikanthodillURL },
    { stimulus: trempajidalURL },
    { stimulus: uftillamusURL },
    { stimulus: vampontigreeURL },
    { stimulus: vitterashipURL },
    { stimulus: widdestiferURL },
    { stimulus: yitterfeeginURL },
    { stimulus: zitricaymusURL }
    ],
    sample: {
        type: 'without-replacement',
        size: 6 
    }
}

var test_seven_syllables = {
    type: "audio-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: jsPsych.NO_KEYS,
    prompt: '<div style="font-size: 60px; ">+</div>',
    trial_ends_after_audio: true,
    response_allowed_while_playing: false
    }
    
var seven_syllable_procedure = {
    timeline: [test_seven_syllables, test_response],
    timeline_variables: [
    { stimulus: askenidobiskulateURL },
    { stimulus: bentisippelanjevillURL },
    { stimulus: brodastopermaninkleURL },
    { stimulus: chentillodeecretavenURL },
    { stimulus: clerovaydestonkomyURL },
    { stimulus: draybishocksinallobitURL },
    { stimulus: dustimonegrivanterURL },
    { stimulus: elfandrigompredoonisURL },
    { stimulus: faskimaybenoppotrinURL },
    { stimulus: fommigravelontipanURL },
    { stimulus: gistorackidopulinURL },
    { stimulus: hundinoteralityURL },
    { stimulus: infraskovijideenitURL },
    { stimulus: jedabuloskeramicURL },
    { stimulus: jetropindemalityURL },
    { stimulus: kaddenistronomacyURL },
    { stimulus: klistodentriposkularURL },
    { stimulus: loftrajenimplicobusURL },
    { stimulus: meskolonaymendalicURL },
    { stimulus: mulchectrifangenitedURL },
    { stimulus: nabbivulackrifeemalURL },
    { stimulus: oprackenistalomineURL },
    { stimulus: postabulisticationURL },
    { stimulus: quintegridoppomakelURL },
    { stimulus: roskorilleevangistineURL },
    { stimulus: sacronimbenalopyURL },
    { stimulus: spentonymidderoxingURL },
    { stimulus: trovejinapporisticURL },
    { stimulus: umplickerannitizerURL },
    { stimulus: vancidoscoreegamishURL },
    { stimulus: wiscalberijoniperURL },
    { stimulus: zoobenifferaltopineURL }
    ],
    sample: {
        type: 'without-replacement',
        size: 6 
    }
}
    
var block_1 = {
    timeline: [
    two_syllable_procedure, four_syllable_procedure, seven_syllable_procedure
]
};

var block_2 = {
    timeline: [
    two_syllable_procedure, four_syllable_procedure, seven_syllable_procedure
]
};

var block_3 = {
    timeline: [
    two_syllable_procedure, four_syllable_procedure, seven_syllable_procedure
]
};

var block_4 = {
    timeline: [
    two_syllable_procedure, four_syllable_procedure, seven_syllable_procedure
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
