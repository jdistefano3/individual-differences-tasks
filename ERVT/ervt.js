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
        stimulus: `<p><b><h1 style="font-size:250%;">COTTONTAIL</h1></b></p>
                  <p align="justify">1. Squirrel</p>
                  <p align="justify">2. Poplar</p>
                  <p align="justify">3. Boa</p>
                  <p align="justify">4. Marshy Plant</p>
                  <p align="justify">5. Rabbit </p>
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
    { stimulus: "<p><b><h1 style='font-size:250%;'>MARKETABLE</h1></b></p><p align='justify'>1. Partisan</p><p align='justify'>2. Jocular</p><p align='justify'> 3. Marriageable</p><p align='justify'>4. Salable</p><p align='justify'> 5. Essential </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>BOGGY</h1></b></p><p align='justify'>1. Afraid</p><p align='justify'>2. False</p><p align='justify'>3. Marshy</p><p align='justify'>4. Dense</p><p align='justify'>5. Black </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>GRUESOMENESS</h1></b></p><p align='justify'>1. Blackness</p><p align='justify'>2. Falseness</p><p align='justify'>3. Vindictiveness</p><p align='justify'>4. Drunkenness</p><p align='justify'>5. Ghastliness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>LOATHING</h1></b></p><p align='justify'>1. Diffidence</p><p align='justify'>2. Laziness</p><p align='justify'>3. Abhorrence</p><p align='justify'>4. Cleverness</p><p align='justify'>5. Comfort </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>BANTAM</h1></b></p><p align='justify'>1. Fowl</p><p align='justify'>2. Ridicule</p><p align='justify'>3. Cripple</p><p align='justify'>4. Vegetable</p><p align='justify'>5. Ensign </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>EVOKE</h1></b></p><p align='justify'>1. Wake Up</p><p align='justify'>2. Surrender</p><p align='justify'>3. Reconnoiter</p><p align='justify'>4. ranscend</p><p align='justify'>5. Call Forth </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>UNOBTRUSIVE</h1></b></p><p align='justify'>1. Unintelligent</p><p align='justify'>2. Epileptic</p><p align='justify'>3. Illogical</p><p align='justify'>4. Lineal</p><p align='justify'>5. Modest </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>TERRAIN</h1></b></p><p align='justify'>1. Ice Cream</p><p align='justify'>2. Final Test</p><p align='justify'>3. Tractor</p><p align='justify'>4. Area of Ground</p><p align='justify'> 5. Weight </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>CAPRICIOUSNESS</h1></b></p><p align='justify'>1. Stubbornness</p><p align='justify'>2. Courage</p><p align='justify'>3. Whimsicality</p><p align='justify'>4. Amazement</p><p align='justify'> 5. Greediness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>MAELSTROM</h1></b></p><p align='justify'>1. Slander</p><p align='justify'>2. Whirlpool</p><p align='justify'>3. Enmity</p><p align='justify'>4. Armor</p><p align='justify'>5. Majolica </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>TENTATIVE</h1></b></p><p align='justify'>1. Critical</p><p align='justify'>2. Conclusive</p><p align='justify'>3. Authentic</p><p align='justify'>4. Provisional</p><p align='justify'> 5. Apprehensive </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>PLACATE</h1></b></p><p align='justify'>1. Rehabilitate</p><p align='justify'>2. Plagiarize</p><p align='justify'>3. Depredate</p><p align='justify'>4. Apprise</p><p align='justify'>5. Conciliate </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>SURCEASE</h1></b></p><p align='justify'>1. Enlightenment</p><p align='justify'>2. Cessation</p><p align='justify'>3. Inattention</p><p align='justify'>4. Censor</p><p align='justify'>5. Substitution </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>APATHETIC</h1></b></p><p align='justify'>1. Wandering</p><p align='justify'>2. Impassive</p><p align='justify'>3. Hateful</p><p align='justify'>4. Prophetic</p><p align='justify'> 5. Overflowing </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>PATERNOSTER</h1></b></p><p align='justify'>1. Paternalism</p><p align='justify'>2. Patricide</p><p align='justify'>3. Malediction</p><p align='justify'>4. Benediction</p><p align='justify'> 5. Prayer </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>OPALESCENCE</h1></b></p><p align='justify'>1. Opulence</p><p align='justify'>2. Senescence</p><p align='justify'>3. Bankruptcy</p><p align='justify'>4. Iriescence</p><p align='justify'> 5. Assiduity </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>LUSH</h1></b></p><p align='justify'>1. Stupid</p><p align='justify'>2. Luxurious</p><p align='justify'>3. Hazy</p><p align='justify'>4. Putrid</p><p align='justify'> 5.Languishing </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>CURTAILMENT</h1></b></p><p align='justify'>1. Expenditure</p><p align='justify'>2. Abandonment</p><p align='justify'>3. Abridgement</p><p align='justify'>4. Improvement</p><p align='justify'> 5. Forgery </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>PERVERSITY</h1></b></p><p align='justify'>1. Adversity</p><p align='justify'>2. Perviousness</p><p align='justify'>3. Travesty</p><p align='justify'>4. Waywardness</p><p align='justify'> 5. Gentility </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>CALUMNIOUS</h1></b></p><p align='justify'>1. Complimentary</p><p align='justify'>2. Analogous</p><p align='justify'>3. Slanderous</p><p align='justify'>4. Tempestuous</p><p align='justify'> 5. Magnanimous </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>ILLIBERALITY</h1></b></p><p align='justify'>1. Bigotry</p><p align='justify'>2. Imbecility</p><p align='justify'>3. Illegibility</p><p align='justify'>4. Cautery</p><p align='justify'> 5. Immaturity </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>CLABBER</h1></b></p><p align='justify'>1. Rejoice</p><p align='justify'>2. Gossip</p><p align='justify'>3. Curdle</p><p align='justify'>4. Crow</p><p align='justify'> 5. Hobble </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>SEDULOUSNESS</h1></b></p><p align='justify'>1. Diligence</p><p align='justify'>2. Credulousness</p><p align='justify'>3. Seduction</p><p align='justify'>4. erilousness</p><p align='justify'> 5. Frankness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>SHORTCAKE</h1></b></p><p align='justify'>1. Condiment</p><p align='justify'>2. Pastry</p><p align='justify'>3. Fruit</p><p align='justify'>4. Sweetmeat</p><p align='justify'> 5. Vegetable </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>HARDTACK</h1></b></p><p align='justify'>1. Nail</p><p align='justify'>2. Textile</p><p align='justify'>3. Weapon</p><p align='justify'>4. Wood</p><p align='justify'> 5. Biscuit </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>COMMENDABLE</h1></b></p><p align='justify'>1. Pleasureable</p><p align='justify'>2. Charitable</p><p align='justify'>3. Lucrative</p><p align='justify'>4. Proscriptive</p><p align='justify'> 5. Laudable </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>NONCHALANT</h1></b></p><p align='justify'>1. Sarcastic</p><p align='justify'>2. Discourteous</p><p align='justify'>3. Noble</p><p align='justify'>4. Unconcerned</p><p align='justify'> 5. Unsophisticated </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>COLORATION</h1></b></p><p align='justify'>1. Pigmentation</p><p align='justify'>2. Alternation</p><p align='justify'>3. Configuration</p><p align='justify'>4. Prevention</p><p align='justify'> 5. Taint </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>ARIDITY</h1></b></p><p align='justify'>1. Bitterness</p><p align='justify'>2. Surface</p><p align='justify'>3. Sonority</p><p align='justify'>4. Dryness</p><p align='justify'> 5. Torridity </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>DEMONIACAL</h1></b></p><p align='justify'>1. Aloof</p><p align='justify'>2. Mythical</p><p align='justify'>3. Thoughtful</p><p align='justify'>4. Fiendish</p><p align='justify'> 5. Eccentric </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>HIGHROAD</h1></b></p><p align='justify'>1. Mountain Road</p><p align='justify'>2. Right of Way</p><p align='justify'>3. Main Road</p><p align='justify'>4. Roadbed</p><p align='justify'> 5. Concrete Road </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>BEFOG</h1></b></p><p align='justify'>1. Dampen</p><p align='justify'>2. Forget</p><p align='justify'>3. Whip</p><p align='justify'>4. Mystify</p><p align='justify'> 5. Belittle </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>PLATOON</h1></b></p><p align='justify'>1. Tableland</p><p align='justify'>2. Bridge of Boats</p><p align='justify'>3. Body of Soldiers</p><p align='justify'>4. Commonplace Remark</p><p align='justify'> 5. Frigate </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>DULLARD</h1></b></p><p align='justify'>1. Peon</p><p align='justify'>2. Duck</p><p align='justify'>3. Braggart</p><p align='justify'>4. Thief</p><p align='justify'> 5. Dunce </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>MOMENTOUSLY</h1></b></p><p align='justify'>1. Frivolously</p><p align='justify'>2. Moderately</p><p align='justify'>3. Weightily</p><p align='justify'>4. Momentarily</p><p align='justify'> 5. Modishly </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>CORROBORATORY</h1></b></p><p align='justify'>1. Plausible</p><p align='justify'>2. Anticipatory</p><p align='justify'>3. Confirmatory</p><p align='justify'>4. Explanatory</p><p align='justify'> 5. Esoteric </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>FIGURINE</h1></b></p><p align='justify'>1. Metaphor</p><p align='justify'>2. Wine</p><p align='justify'>3. Poem</p><p align='justify'>4. Organ</p><p align='justify'> 5. Statuette </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>RANCOROUS</h1></b></p><p align='justify'>1. Malignant</p><p align='justify'>2. Jubilant</p><p align='justify'>3. Abashed</p><p align='justify'>4. Inglorious</p><p align='justify'> 5. Careless </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>INVETERACY</h1></b></p><p align='justify'>1. Habitualness</p><p align='justify'>2. Migration</p><p align='justify'>3. Bravery</p><p align='justify'>4. Covering</p><p align='justify'> 5. Hatefulness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>CHOLER</h1></b></p><p align='justify'>1. Anger</p><p align='justify'>2. Chorister</p><p align='justify'>3. Guard</p><p align='justify'>4. Saliva</p><p align='justify'> 5. Refrigerator </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>VACILLATION</h1></b></p><p align='justify'>1. Purification</p><p align='justify'>2. Wavering</p><p align='justify'>3. Expulsion</p><p align='justify'>4. Tempting</p><p align='justify'> 5. Foolishness </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>AGGRANDIZEMENT</h1></b></p><p align='justify'>1. Theft</p><p align='justify'>2. Impeachment</p><p align='justify'>3. Derision</p><p align='justify'>4. Amazement</p><p align='justify'> 5. Enlargement </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>EFFULGENCE</h1></b></p><p align='justify'>1. Prominence</p><p align='justify'>2. Outline</p><p align='justify'>3. Change</p><p align='justify'>4. Radiance</p><p align='justify'> 5. Energy </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>APHASIA</h1></b></p><p align='justify'>1. Loss of Speech</p><p align='justify'>2. Drunkenness</p><p align='justify'>3. Anemia</p><p align='justify'>4. Loss of Memory</p><p align='justify'> 5. Rash </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>PANOPLIED</h1></b></p><p align='justify'>1. Philosophical</p><p align='justify'>2. Dressed in Armor</p><p align='justify'>3. Panting</p><p align='justify'>4. Frenzied</p><p align='justify'> 5. Atavistic </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>SACROSANCT</h1></b></p><p align='justify'>1. Sacrifical</p><p align='justify'>2. Dormant</p><p align='justify'>3. Inviolable</p><p align='justify'>4. Superficial</p><p align='justify'> 5. Gullible </p><div style='width: 700px;'></div>" },
    { stimulus: "<p><b><h1 style='font-size:250%;'>PRURIENCE</h1></b></p><p align='justify'>1. Modesty</p><p align='justify'>2. Sapience</p><p align='justify'>3. Provender</p><p align='justify'>4. Lust</p><p align='justify'> 5. Secruity </p><div style='width: 700px;'></div>" }
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
