var data = [{
    values: [37.5, 42.5, 20.0],
    labels: ['Automation', 'Deployment', 'Documentation'],
    hole: .7,
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('skillCaps', data, layout);  