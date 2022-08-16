const xLabels = ['MLOps',
'DataOps',
'Product Management',
'Project Management',
'Self Service Analytics']

const biTeam = [4.0, 3.5, 4.0, 3.0, 3.0]

const dsTeam = [2.5, 2.5, 3.0, 1.5, 2.5]

const dstTeam = [5.0, 1.0, 2.0, 3.0, 5.0]

const dwTeam = [4.0, 4.5, 3.5, 3.0, 3.0]

const gTotal = [4.0, 3.0, 3.0, 3.0, 3.0]

var biTeamData = {
    x: xLabels,
    y: biTeam,
    name: 'Business Intelligence',
    type: 'bar'
  };
  var dsTeamData = {
    x: xLabels,
    y: dsTeam,
    name: 'Data Science',
    type: 'bar'
  };
  var dstTeamData = {
    x: xLabels,
    y: dstTeam,
    name: 'Data Stewards',
    type: 'bar'
  };
  var dwTeamData = {
    x: xLabels,
    y: biTeam,
    name: 'Data Warehouse',
    type: 'bar'
  };
  var gTotalData = {
    x: xLabels,
    y: gTotal,
    name: 'Grand Total',
    type: 'bar'
  };
  
  

  var data = [biTeamData, dsTeamData, dstTeamData, dwTeamData, gTotalData];
  
  var layout = {barmode: 'stack'};
  
  Plotly.newPlot('trainingInterest', data, layout);
  