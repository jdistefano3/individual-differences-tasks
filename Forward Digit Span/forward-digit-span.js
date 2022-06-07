var timeline = [];

//Function to give the option for a local save of the data
var localSave;

function saveData() {
	if(localSave == 1) {
		var identifier = 'FDS_'+Math.round(new Date().getTime()/1000)+'.csv';
		jsPsych.data.get().localSave('csv',identifier);
		alert("You may now close this tab.");
	} else {
		alert("You may now close this tab.");
		}
	};

//Final screen
var save_data = {
	type: 'html-button-response',
	stimulus: '<p>This concludes the task. Would you like to save the data?</p>',
	choices: ['No','Yes'],
	on_finish: function(data){
		localSave = jsPsych.data.get().last(1).values()[0].response;
	}
};

//Push components to experiment timeline
timeline.push(fds_adaptive); //from bds_adaptive.js
timeline.push(save_data); //final screen asking about data
