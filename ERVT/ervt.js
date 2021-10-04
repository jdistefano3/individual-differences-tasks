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
        stimulus: `<p>In this task, you will try to figure out the meanings of little known words that most people do not know the meaning of. </p>
                   <p> The top word on each screen is printed in <b>CAPITAL LETTERS</b>.  Below it will be five other words.</p>
                   <p> Press the 1, 2, 3, 4, or 5 keys to indicate the ONE word which you think means the same thing, or most nearly the same thing, as the word in caps.</p>
                   <p>If you do not know, you should press 6 for DON'T KNOW.</p>
                   <p>We will start with a practice word
                   <p><b>Press any key to proceed.</b></p>
              <div style='width: 700px;'>
              </div>
        `,
        post_trial_gap: 2000
    }
    
var practice = {
        type: "html-keyboard-response",
        stimulus: `<p><b>COTTONTAIL</b></p>
                  <p>Squirrel</p>
                  <p> Poplar</p>
                  <p>Boa</p>
                  <p> Marshy Plant</p>
                  <p> Rabbit </p>
                   <div style='width: 700px;'>
              </div>
        `,
        choices: ['1', '2', '3', '4', '5', '6'],
        post_trial_gap: 2000
    }

var instructions_2 = {
      type: "html-keyboard-response" ,
      stimulus: `<p> You have just completed the practice.</p>
      <p> There are going to be 24 words in the next set of words. Just to make sure we have enough time, after 3 minutes, we will move you on to the next set even if you are still thinking.</p>
      <p> Do not worry if you ran out of time.  These are tricky words and most people do not get through all of them in the time limit!</p>
      <p><b> Press any key to begin the experiment</b></p>
      `,
      post_trial_gap: 2000
}

var word_lists = [
    { stimulus: "<p><b>MARKETABLE</b></p><p>Partisan</p><p>Jocular</p><p>Marriageable</p><p> Salable</p><p> Essential </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>BOGGY</b></p><p>Afraid</p><p>False</p><p>Marshy</p><p> Dense</p><p> Black </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>GRUESOMENESS</b></p><p>Blackness</p><p>Falseness</p><p>Vindictiveness</p><p>Drunkenness</p><p> Ghastliness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>LOATHING</b></p><p>Diffidence</p><p>Laziness</p><p>Abhorrence</p><p>Cleverness</p><p> Comfort </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>BANTAM</b></p><p>Fowl</p><p>Ridicule</p><p>Cripple</p><p>Vegetable</p><p> Ensign </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>EVOKE</b></p><p>Wake Up</p><p>Surrender</p><p>Reconnoiter</p><p>Transcend</p><p>Call Forth </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>UNOBTRUSIVE</b></p><p>Unintelligent</p><p>Epileptic</p><p>Illogical</p><p>Lineal</p><p> Modest </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>TERRAIN</b></p><p>Ice Cream</p><p>Final Test</p><p>Tractor</p><p>Area of Ground</p><p> Weight </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>CAPRICIOUSNESS</b></p><p>Stubbornness</p><p>Courage</p><p>Whimsicality</p><p>Amazement</p><p> Greediness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>MAELSTROM</b></p><p>Slander</p><p>Whirlpool</p><p>Enmity</p><p>Armor</p><p> Majolica </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>TENTATIVE</b></p><p>Critical</p><p>Conclusive</p><p>Authentic</p><p>Provisional</p><p> Apprehensive </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>PLACATE</b></p><p>Rehabilitate</p><p>Plagiarize</p><p>Depredate</p><p>Apprise</p><p> Conciliate </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>SURCEASE</b></p><p>Enlightenment</p><p>Cessation</p><p>Inattention</p><p>Censor</p><p> Substitution </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>APATHETIC</b></p><p>Wandering</p><p>Impassive</p><p>Hateful</p><p>Prophetic</p><p> Overflowing </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>PATERNOSTER</b></p><p>Paternalism</p><p>Patricide</p><p>Malediction</p><p>Benediction</p><p> Prayer </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>OPALESCENCE</b></p><p>Opulence</p><p>Senescence</p><p>Bankruptcy</p><p>Iriescence</p><p> Assiduity </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>LUSH</b></p><p>Stupid</p><p>Luxurious</p><p>Hazy</p><p>Putrid</p><p> Languishing </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>CURTAILMENT</b></p><p>Expenditure</p><p>Abandonment</p><p>Abridgement</p><p>Improvement</p><p> Forgery </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>PERVERSITY</b></p><p>Adversity</p><p>Perviousness</p><p>Travesty</p><p>Waywardness</p><p> Gentility </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>CALUMNIOUS</b></p><p>Complimentary</p><p>Analogous</p><p>Slanderous</p><p>Tempestuous</p><p> Magnanimous </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>ILLIBERALITY</b></p><p>Bigotry</p><p>Imbecility</p><p>Illegibility</p><p>Cautery</p><p> Immaturity </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>CLABBER</b></p><p>Rejoice</p><p>Gossip</p><p>Curdle</p><p>Crow</p><p> Hobble </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>SEDULOUSNESS</b></p><p>Diligence</p><p>Credulousness</p><p>Seduction</p><p>Perilousness</p><p> Frankness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>SHORTCAKE</b></p><p>Condiment</p><p>Pastry</p><p>Fruit</p><p>Sweetmeat</p><p> Vegetable </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>HARDTACK</b></p><p>Nail</p><p>Textile</p><p>Weapon</p><p>Wood</p><p> Biscuit </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>COMMENDABLE</b></p><p>Pleasureable</p><p>Charitable</p><p>Lucrative</p><p>Proscriptive</p><p> Laudable </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>NONCHALANT</b></p><p>Sarcastic</p><p>Discourteous</p><p>Noble</p><p>Unconcerned</p><p> Unsophisticated </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>COLORATION</b></p><p>Pigmentation</p><p>Alternation</p><p>Configuration</p><p>Prevention</p><p> Taint </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>ARIDITY</b></p><p>Bitterness</p><p>Surface</p><p>Sonority</p><p>Dryness</p><p> Torridity </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>DEMONIACAL</b></p><p>Aloof</p><p>Mythical</p><p>Thoughtful</p><p>Fiendish</p><p> Eccentric </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>HIGHROAD</b></p><p>Mountain Road</p><p>Right of Way</p><p>Main Road</p><p>Roadbed</p><p> Concrete Road </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>BEFOG</b></p><p>Dampen</p><p>Forget</p><p>Whip</p><p>Mystify</p><p> Belittle </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>PLATOON</b></p><p>Tableland</p><p>Bridge of Boats</p><p>Body of Soldiers</p><p>Commonplace Remark</p><p> Frigate </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>DULLARD</b></p><p>Peon</p><p>Duck</p><p>Braggart</p><p>Thief</p><p> Dunce </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>MOMENTOUSLY</b></p><p>Frivolously</p><p>Moderately</p><p>Weightily</p><p>Momentarily</p><p> Modishly </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>CORROBORATORY</b></p><p>Plausible</p><p>Anticipatory</p><p>Confirmatory</p><p>Explanatory</p><p> Esoteric </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>FIGURINE</b></p><p>Metaphor</p><p>Wine</p><p>Poem</p><p>Organ</p><p> Statuette </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>RANCOROUS</b></p><p>Malignant</p><p>Jubilant</p><p>Abashed</p><p>Inglorious</p><p> Careless </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>INVETERACY</b></p><p>Habitualness</p><p>Migration</p><p>Bravery</p><p>Covering</p><p> Hatefulness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>CHOLER</b></p><p>Anger</p><p>Chorister</p><p>Guard</p><p>Saliva</p><p> Refrigerator </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>VACILLATION</b></p><p>Purification</p><p>Wavering</p><p>Expulsion</p><p>Tempting</p><p> Foolishness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>AGGRANDIZEMENT</b></p><p>Theft</p><p>Impeachment</p><p>Derision</p><p>Amazement</p><p> Enlargement </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>EFFULGENCE</b></p><p>Prominence</p><p>Outline</p><p>Change</p><p>Radiance</p><p> Energy </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>APHASIA</b></p><p>Loss of Speech</p><p>Drunkenness</p><p>Anemia</p><p>Loss of Memory</p><p> Rash </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>PANOPLIED</b></p><p>Philosophical</p><p>Dressed in Armor</p><p>Panting</p><p>Frenzied</p><p> Atavistic </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>SACROSANCT</b></p><p>Sacrifical</p><p>Dormant</p><p>Inviolable</p><p>Superficial</p><p> Gullible </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b>PRURIENCE</b></p><p>Modesty</p><p>Sapience</p><p>Provender</p><p>Lust</p><p> Secruity </p><div style='width: 700px;'></div>" }
  ];

var exp_trial = {
  timeline: [{
      type: "html-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['1', '2', '3', '4', '5', '6'],
      trial_duration: 360000
 }],
 timeline_variables: word_lists,
 sample: {type: 'fixed-repetitions', size: 1}
};

var conclusion = {
    type: "html-keyboard-response",
        stimulus: `<p> You are now finished the experiment. Thank you for participating!</p>
                  <p><b> Press any key to finish.</b></p>
                  <div style='width: 700px;'>
                  </div>`,
        post_trial_gap: 2000
    }
    
var fullscreen_trial_exit = {
    type: 'fullscreen',
    fullscreen_mode: false
  }
    
 jsPsych.init({
        timeline: [fullscreen_trial, welcome, instructions_1, practice, instructions_2, exp_trial, conclusion, fullscreen_trial_exit],
        show_progress_bar: true,
        on_finish: function(){jsPsych.data.displayData(); }
});
