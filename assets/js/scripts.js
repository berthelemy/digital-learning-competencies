var imageURL = '';


$(document).ready(function() {
  var slider = $('.assessmentSlider').bxSlider({
    touchEnabled: false,
    pager: true,
    pagerType: 'short',
    controls: false,
    mode: 'vertical',
    adaptiveHeight: true
  });


$("input[type='radio']").on('change', function() {
  //$('input[type=radio]').click(function () {

        //var rID = $(this).prop("id");

        //$(this).prop('checked', true);
        //console.log(rID, $(this).prop('checked'));
        slider.goToNextSlide();
        return false;
    });

$("button#previous").on('click', function() {
  slider.goToPrevSlide();
  return false;
});

$("button#next").on('click', function() {
  slider.goToNextSlide();
  return false;
});

$("button#start").on('click', function() {
  slider.goToSlide(0);
  return false;
});


  $('#competencies').DataTable({
    "paging": false,
    "ordering": false,
    "info": false,
    "searching": false,
    "responsive": true
  });
  // SmartWizard initialize
  $('#smartwizard').smartWizard({
    selected: 0, // Initial selected step, 0 = first step
    theme: 'dots', // theme for the wizard, related css need to include for other than default theme
    justified: true, // Nav menu justification. true/false
    autoAdjustHeight: true, // Automatically adjust content height
    cycleSteps: false, // Allows to cycle the navigation of steps
    backButtonSupport: true, // Enable the back button support
    enableURLhash: true, // Enable selection of the step based on url hash
    transition: {
      animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
      speed: '400', // Transion animation speed
      easing: '' // Transition animation easing. Not supported without a jQuery easing plugin
    },
    toolbarSettings: {
      toolbarPosition: 'both', // none, top, bottom, both
      toolbarButtonPosition: 'center', // left, right, center
      showNextButton: true, // show/hide a Next button
      showPreviousButton: true, // show/hide a Previous button
      toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
    },
    anchorSettings: {
      anchorClickable: true, // Enable/Disable anchor navigation
      enableAllAnchors: true, // Activates all anchors clickable all times
      markDoneStep: false, // Add done css
      markAllPreviousStepsAsDone: false, // When a step selected by url hash, all previous steps are marked done
      removeDoneStepOnNavigateBack: false, // While navigate back done step after active step will be cleared
      enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
    },
    keyboardSettings: {
      keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
      keyLeft: [37], // Left key code
      keyRight: [39] // Right key code
    },
    lang: { // Language variables for button
      next: 'Next',
      previous: 'Previous'
    },
    disabledSteps: [], // Array Steps disabled
    errorSteps: [], // Highlight step with errors
    hiddenSteps: [] // Hidden steps
  });

  //
  // Show Chart
  //

    $('button#showSummary').click(function(){
    //$("div#assessmentSlider").submit(function(){
    //event.preventDefault();
    //console.log('Y');
    formData = $('div#assessmentSlider :input').serializeArray(); // put form data into array
    //console.log(formData);

    var compGroups = []; // Setup array to hold competence names and total scores

    $(formData).each(function(i, field) { //iterate through the formdata
      var compItemID = field.name;
      var compID = compItemID.substr(0, compItemID.indexOf('_')); // find the compID by parsing before the _

      // console.log(compID);

      compGroups.push(compID); // Create an array of all the competency groups by adding each one in turn
    });

    compGroupsUnique = [...new Set(compGroups)]; // Create list of unique competency groups

    //console.log(compGroupsUnique);
    var compGroupScores = []; // Create an array to hold the unique names and their scores
    //console.log(compGroupScores);

    $(compGroupsUnique).each(function(a, name) {
      compGroupScores.push({
        group: name,
        score: 0,
        count: 0
      }); // initialise array of groups and scores

    });
    //console.log(compGroupScores); // Works OK



    var compItemID = "";
    var compItemScore = 0;
    var labels = []; // initialise arrays for chart
    var scores = [];


    $(formData).each(function(i, field) { // go through each form item
      //console.log(field);
      compItemID = field.name;
      compItemScore = field.value;

      $(compGroupScores).each(function(j, scoreItem) { // go through the unique competency groups
        // console.log(scoreItem.group, scoreItem.score);
        //console.log(compItemID,compItemScore);
        var compID = compItemID.substr(0, compItemID.indexOf('_')); // get ready to make a comparison with the unique competency groups

        if (compID == scoreItem.group) { // check to see if we can add to the list of unique groups

          var aggScore = compGroupScores[j].score; // Temporary variable

          aggScore = parseFloat(aggScore) + parseFloat(compItemScore); // Create the new aggregate score for this group

          compGroupScores[j].score = aggScore; // Put the aggregate score back into the group
          compGroupScores[j].count++; // Increment count of items in this group
        }
      });
    }); // end of loop through formData


    //console.log(compGroupScores);
    $(compGroupScores).each(function(n, value) { // set up data for chart
      //console.log(value.group, value.score);
      labels.push(value.group);
      scores.push(value.score / value.count);

    });
    console.log(compGroupScores);

    radar(labels, scores);





  }); // end of on click radio button function



}); // end of Document.ready function

//
// Radar chart
//
function radar(labels, scores) {
  var ctx = document.getElementById('radarChart').getContext('2d');
  Chart.defaults.global.defaultFontSize = 14;
  var chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        data: scores
      }],
    },
    options: {
      title: {
        display: true,
        text: 'Competency summary chart'
      },
      animation: {
        onComplete: function(animation) {
          document.querySelector('a#downloadChart').setAttribute('href', this.toBase64Image());

        }
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      },
      scale: {
        ticks: {
          max: 3,
          min: 0,
          stepSize: 1
        }
      }
    }
  });



}
