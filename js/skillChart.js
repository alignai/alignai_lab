var data = [{
    values: [37.5, 62.5],
    labels: ['Percent Complete', 'Percent Incomplete'],
    hole: .5,
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('skillProgress', data, layout);  