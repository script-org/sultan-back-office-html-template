(function ($, theme) {
	"use strict";

  var gradientLinePlugin = {
    // Called at start of update.
    beforeDatasetUpdate: function(chartInstance) {
      if (chartInstance.options.linearGradientLine) {
        // The context, needed for the creation of the linear gradient.
        var ctx = chartInstance.chart.ctx;
        var width = chartInstance.width;
        var height = chartInstance.height;
        // The first (and, assuming, only) dataset.
        var dataset = chartInstance.data.datasets[0];
        // Create the gradient.
        var gradient = ctx.createLinearGradient(0, 0, width, 0);
        // A kind of red for min.
        gradient.addColorStop(0, theme.color.primary);

        // A kind of blue for max.
        gradient.addColorStop(1, theme.color.success);
        // Assign the gradient to the dataset's border color.
        dataset.borderColor = gradient;
        // Uncomment this for some effects, especially together with commenting the `fill: false` option below.
        // dataset.backgroundColor = gradient;
      }
    }
  };

  Chart.pluginService.register(gradientLinePlugin);

  var getGradient = function(color, height){
    var ctx = $('<canvas/>').get(0).getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, hexToRGB(color, 0.35));
    gradient.addColorStop(1, hexToRGB(color, 0));
    return gradient;
  }

  var getRandomData = function(total) {
    var data = [];
    while (data.length < total) {
      var prev = data.length > 0 ? data[data.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;
      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }
      data.push(Math.round(y*100)/100);
    }

    return data;
  }

  var getLables = function(total, pre){
    var data = [], i=1;
    while (data.length < total) {
      data.push(pre+' '+i);
      i++;
    }
    return data;
  }

  var init = function(){
    $('#chart-line').chartjs(
      {
        type: 'line',
        data: {
            labels: ["First", "Second", "Third", "Fourth", "Fifth"],
            datasets: [
                {
                    label: 'Sales',
                    data: getRandomData(5),
                    borderWidth: 2,
                    borderColor: theme.color.primary,
                    pointBorderWidth: 2,
                    pointRadius: 2,
                    tension: 0.35,
                    fill: ''
                }
            ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                max: 100,
                stepSize: 20
              }
            }]
          }
        }
      }
    );

    $('#chart-bar').chartjs(
      {
        type: 'bar',
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007'],
            datasets: [
                {
                    label: 'Sales',
                    data: getRandomData(7),
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.info, 1),
                    borderColor: theme.color.info,
                    borderWidth: 1
                }
            ]
        },
        options: {
          scales: {
            xAxes: [{
              barPercentage: 0.5,
              categoryPercentage: 0.5,
            }]
          }
        }
      }
    );

    $('#chart-radar').chartjs(
      {
        type: 'radar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            datasets: [
                {
                    label: 'Sales1',
                    data: getRandomData(7),
                    fill: true,
                    lineTension: 0,
                    backgroundColor: hexToRGB(theme.color.primary, 0.4),
                    borderColor: theme.color.primary,
                    borderWidth: 1,
                    borderJoinStyle: 'miter',
                    pointBorderColor: theme.color.primary,
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 2,
                    pointHoverBackgroundColor: theme.color.primary,
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2,
                    pointRadius: 2
                },
                {
                    label: 'Sales2',
                    data: getRandomData(7),
                    backgroundColor: hexToRGB(theme.color.success, 0.4),
                    borderColor: theme.color.success,
                    borderWidth: 1,
                    borderJoinStyle: 'miter',
                    pointBorderColor: theme.color.success,
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 2,
                    pointHoverBackgroundColor: theme.color.success,
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2,
                    pointRadius: 2
                }
            ]
        },
        options: {
          scale:{
            angleLines: {
              color: 'rgba(120,130,140,0.1)',
              lineWidth: 2
            }
          }
        }
      }
    );

    $('#chart-polar').chartjs(
      {
        type: 'polarArea',
        data: {
            labels: ['A', 'B'],
            datasets: [
              {
                  data: [
                      20,
                      5
                  ],
                  borderColor: 'transparent',
                  backgroundColor: [
                      hexToRGB(theme.color.primary, 0.3),
                      theme.color.success
                  ],
                  label: 'Sales'
              }
            ]
        },
        options: {
          startAngle: 0,
          responsive: true,
          legend: {
              position: 'right',
          },
          scale:{
            angleLines: {
              color: 'rgba(120,130,140,0.1)',
              lineWidth: 2
            }
          }
        }
      }
    );

    $('#chart-pie').chartjs(
      {
        type: 'pie',
        data: {
            labels: ['A', 'B'],
            datasets: [
              {
                  data: [
                      20,
                      10
                  ],
                  borderColor: 'transparent',
                  backgroundColor: [
                      theme.color.primary,
                      'rgba(255,255,255,0)'
                  ]
              },
              {
                  data: [
                      20,
                      12
                  ],
                  borderColor: 'transparent',
                  backgroundColor: [
                      hexToRGB(theme.color.primary, 0.6),
                      'rgba(255,255,255,0)'
                  ]
              },
              {
                  data: [
                      20,
                      15
                  ],
                  borderColor: 'transparent',
                  backgroundColor: [
                      hexToRGB(theme.color.primary, 0.4),
                      'rgba(255,255,255,0)'
                  ]
              },
              {
                  data: [
                      2,
                      20
                  ],
                  borderColor: 'transparent',
                  backgroundColor: [
                      hexToRGB(theme.color.primary, 0.2),
                      'rgba(255,255,255,0)'
                  ]
              }
            ]
        },
        options: {
          legend: {
            labels:{
              boxWidth: 12
            }
          },
          cutoutPercentage: 65
        }
      }
    );

    $('#chart-doughnut').chartjs(
      {
        type: 'doughnut',
        data: {
            labels: ['Search engine', 'Social media', 'Direct'],
            datasets: [
              {
                  data: [
                      20,
                      5,
                      75
                  ],
                  borderColor: 'transparent',
                  backgroundColor: [
                      theme.color.primary,
                      hexToRGB(theme.color.primary, 0.6),
                      hexToRGB(theme.color.primary, 0.2)
                  ],
                  label: 'Trafic'
              }
            ]
        },
        options: {
          legend: {
            position: 'left',
            labels:{
              boxWidth: 12
            }
          },
          cutoutPercentage: 85
        }
      }
    );

    $('#chart-bubble').chartjs(
      {
        type: 'bubble',
        data: {
            labels: ['A', 'B'],
            datasets: [
              {
                  data: [
                    {
                        x: 10,
                        y: 20,
                        r: 5
                    },
                    {
                        x: 20,
                        y: 10,
                        r: 8
                    },
                    {
                        x: 30,
                        y: 5,
                        r: 5
                    },
                    {
                        x: 40,
                        y: 40,
                        r: 4
                    },
                    {
                        x: 50,
                        y: 35,
                        r: 10
                    },
                    {
                        x: 60,
                        y: 20,
                        r: 8
                    },
                    {
                        x: 70,
                        y: 30,
                        r: 5
                    },
                    {
                        x: 80,
                        y: 30,
                        r: 5
                    }
                  ],
                  backgroundColor: [
                      theme.color.primary,
                      theme.color.warning,
                      theme.color.info,
                      theme.color.primary,
                      theme.color.success,
                      theme.color.warning,
                      theme.color.primary,
                      theme.color.danger
                  ],
                  label: 'Sales'
              }
            ]
        },
        options: {
        }
      }
    );
    
    $('#chart-line-line').chartjs(
      {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E', 'F'],
            datasets: [
              {
                  label: 'Sales1',
                  type: 'line',
                  data: [18, 5, 4, 10, 2, 5, 20],
                  fill: true,
                  backgroundColor: hexToRGB(theme.color.primary, 0.2),
                  borderColor: hexToRGB(theme.color.primary, 1),
                  borderWidth: 2,
                  borderJoinStyle: 'miter',
                  pointBorderColor: hexToRGB(theme.color.primary, 1),
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 2,
                  pointHoverRadius: 2,
                  pointHoverBackgroundColor: hexToRGB(theme.color.primary, 1),
                  pointHoverBorderColor: '#fff',
                  pointHoverBorderWidth: 1,
                  pointRadius: 3
              },
              {
                  label: 'Sales2',
                  type: 'line',
                  data: [5, 10, 31, 14, 12, 5, 10],
                  fill: false,
                  borderDash: [3, 3],
                  backgroundColor: hexToRGB(theme.color.success, 0.2),
                  borderColor: hexToRGB(theme.color.success, 1),
                  borderWidth: 2,
                  borderJoinStyle: 'miter',
                  pointBorderColor: '#fff',
                  pointBackgroundColor: hexToRGB(theme.color.success, 1),
                  pointBorderWidth: 2,
                  pointHoverRadius: 2,
                  pointHoverBackgroundColor: hexToRGB(theme.color.success, 1),
                  pointHoverBorderColor: '#fff',
                  pointHoverBorderWidth: 1,
                  pointRadius: 3
              }
            ]
        },
        options: {
        }
      }
    );

    $('#chart-line-bar').chartjs(
      {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            datasets: [
              {
                  label: 'Sales1',
                  type: 'line',
                  data: [6, 3, 5, 9, 2, 3, 5],
                  fill: true,
                  backgroundColor: hexToRGB(theme.color.success, 0.2),
                  borderColor: hexToRGB(theme.color.success, 1),
                  borderWidth: 2,
                  borderJoinStyle: 'miter',
                  pointBorderColor: hexToRGB(theme.color.success, 1),
                  pointBackgroundColor: hexToRGB(theme.color.success, 1),
                  pointBorderWidth: 2,
                  pointRadius: 3
              },
              {
                  label: 'Sales2',
                  type: 'bar',
                  data: [15, 30, 25, 14, 12, 5, 10],
                  backgroundColor: hexToRGB(theme.color.primary, 1),
                  borderColor: hexToRGB(theme.color.primary, 1),
                  borderWidth: 2,
                  borderJoinStyle: 'miter',
              }
            ]
        },
        options: {
          scales: {
            xAxes: [{
              barPercentage: 0.5,
              categoryPercentage: 0.5
            }]
          }
        }
      }
    );

    $('#chart-pie-2').chartjs(
      {
        type: 'pie',
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [60, 15, 35],
                    fill: true,
                    backgroundColor: [theme.color.info, theme.color.primary, theme.color.success],
                    borderWidth: 0
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false
              }
            ],
            yAxes:[
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 160,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );

    $('#chart-bubble-2').chartjs(
      {
        type: 'bubble',
        data: {
            labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [
                    {
                        x: 10,
                        y: 20,
                        r: 5
                    },
                    {
                        x: 20,
                        y: 10,
                        r: 8
                    },
                    {
                        x: 30,
                        y: 5,
                        r: 5
                    },
                    {
                        x: 40,
                        y: 40,
                        r: 4
                    },
                    {
                        x: 50,
                        y: 35,
                        r: 10
                    },
                    {
                        x: 60,
                        y: 20,
                        r: 8
                    },
                    {
                        x: 70,
                        y: 30,
                        r: 5
                    },
                    {
                        x: 80,
                        y: 30,
                        r: 5
                    }
                  ],
                  backgroundColor: [
                      theme.color.primary,
                      theme.color.warning,
                      theme.color.info,
                      theme.color.primary,
                      theme.color.success,
                      theme.color.warning,
                      theme.color.primary,
                      theme.color.danger
                  ]
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false
              }
            ],
            yAxes:[
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 50,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );

    $('#chart-doughnut-2').chartjs(
      {
        type: 'doughnut',
        data: {
            labels: ['Cross sell', 'Up sells'],
            datasets: [
              {
                  data: [
                      20,
                      5
                  ],
                  borderColor: 'transparent',
                  backgroundColor: [
                      theme.color.primary,
                      theme.color.warning
                  ],
                  label: 'Sales'
              }
            ]
        },
        options: {
          legend: {
            position: 'right',
            labels:{
              boxWidth: 12
            }
          },
          cutoutPercentage: 70
        }
      }
    );

    $('#chart-doughnut-3').chartjs(
      {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Orange', 'Yellow', 'Blue', 'Green', 'Cyan', 'Teal' ],
            datasets: [
              {
                  data: [60,10,5,10,2,5,3,10],
                  borderColor: 'transparent',
                  backgroundColor: [
                      theme.color.primary,
                      theme.color.success,
                      theme.color.info,
                      theme.color.danger,
                      theme.color.primary,
                      theme.color.warning
                  ],
                  label: 'Trafic'
              }
            ]
        },
        options: {
          legend: {
            display: true,
            position: 'right',
            labels:{
              boxWidth: 12
            }
          },
          cutoutPercentage: 70
        }
      }
    );

    $('#chart-doughnut-4').chartjs(
      {
        type: 'doughnut',
        data: {
            labels: ['Red', 'Orange', 'Yellow', 'Blue', 'Green', 'Cyan', 'Teal', 'Purple' ],
            datasets: [
              {
                  data: [5,60,5,3,2,10,5,10],
                  backgroundColor: [
                      theme.color.primary,
                      theme.color.success,
                      theme.color.info,
                      theme.color.danger,
                      theme.color.primary,
                      theme.color.warning
                  ],
                  label: 'Trafic'
              }
            ]
        },
        options: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              usePointStyle: true
            }
          },
          cutoutPercentage: 70
        }
      }
    );

    $('#chart-bar-2').chartjs(
      {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 35, 25, 40, 60, 30, 105, 45, 65, 30, 70],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.primary, 0.3),
                    hoverBackgroundColor: theme.color.primary,
                    pointRadius: 1,
                    tension: 0,
                    borderColor: 'transparent',
                    borderWidth: 2
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false,
                barPercentage: 0.5,
              }
            ],
            yAxes:[
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 160,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );
  
    $('#chart-bar-3').chartjs(
      {
        type: 'horizontalBar',
        data: {
            labels: ['2011', '2012', '2013', '2014', '2015'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 35, 25, 40, 60],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.success, 0.5),
                    hoverBackgroundColor: theme.color.success,
                    pointRadius: 1,
                    tension: 0,
                    borderColor: 'transparent',
                    borderWidth: 2
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false
              }
            ],
            yAxes:[
              {
                display: false,
                barPercentage: 0.4,
                ticks: {
                  min: 0,
                  max: 160,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );

    $('#chart-line-2').chartjs(
      {
        type: 'line',
        data: {
            labels: ['M', 'T', 'T', 'S', 'F', 'S', 'S'],
            datasets: [
              {
                  label: 'Sales2',
                  data: [15, 8, 20, 14, 35, 15, 20],
                  fill: true,
                  backgroundColor: hexToRGB(theme.color.primary, 0.1),
                  borderColor: theme.color.primary,
                  borderWidth: 2,
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: theme.color.primary,
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 2,
                  pointHoverRadius: 4,
                  pointHoverBackgroundColor: theme.color.primary,
                  pointHoverBorderColor: '#fff',
                  pointHoverBorderWidth: 2,
                  pointRadius: [0,4,0,0,4,0,0],
                  pointHitRadius: 10,
                  spanGaps: false
              }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: true
              }
            ],
            yAxes:[
              {
                display: false
              }
            ]
        },
        legend: {
          display: false
        }
        }
      }
    );
  
    $('#chart-line-3').chartjs(
      {
        type: 'line',
        data: {
            labels: ['M', 'T', 'T', 'S', 'F', 'S', 'S'],
            datasets: [
              {
                  label: 'Sales2',
                  data: [15, 8, 20, 14, 35, 15, 20],
                  fill: true,
                  backgroundColor: hexToRGB(theme.color.primary, 0.1),
                  borderColor: theme.color.primary,
                  borderWidth: 2,
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: theme.color.primary,
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 2,
                  pointHoverRadius: 4,
                  pointHoverBackgroundColor: theme.color.primary,
                  pointHoverBorderColor: '#fff',
                  pointHoverBorderWidth: 2,
                  pointRadius: [0,4,0,0,4,0,0],
                  pointHitRadius: 10,
                  spanGaps: false
              }
            ]
        }
      }
    );

    $('#chart-line-4').chartjs(
      {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 25, 35, 25, 60, 30, 85, 25, 35, 20, 40, 30],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.primary, 0.1),
                    hoverBackgroundColor: theme.color.primary,
                    pointRadius: 3,
                    tension: 0.35,
                    borderColor: theme.color.primary,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    borderWidth: 1
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false,
                barPercentage: 0.5,
              }
            ],
            yAxes:[
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 160,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );

    $('#chart-line-5').chartjs(
      {
        type: 'line',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'This week',
                    data: [3520, 2980, 3200, 5000, 3200, 4800, 4000],
                    fill: true,
                    backgroundColor: [hexToRGB(theme.color.primary, 0.05)],
                    hoverBackgroundColor: theme.color.primary,
                    pointRadius: 5,
                    tension: 0.35,
                    borderColor: theme.color.primary,
                    pointBorderColor: '#fff',
                    pointBackgroundColor: theme.color.primary,
                    borderWidth: 3
                },
                {
                    label: 'Last week',
                    data: [3800, 3280, 4500, 3000, 4200, 3000, 3500],
                    fill: false,
                    borderDash: [5,5],
                    pointRadius: 2,
                    tension: 0.35,
                    borderColor: [hexToRGB(theme.color.primary, 0.2)],
                    pointBorderColor: '#fff',
                    pointBackgroundColor: [hexToRGB(theme.color.primary, 0.2)],
                    borderWidth: 2
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false
              }
            ],
            yAxes:[
              {
                display: true,
                ticks: {
                  min: 2000,
                  max: 7000,
                  stepSize: 1500
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );

    $('#chart-line-6').chartjs(
      {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [36, 35, 45, 25, 60, 30, 85, 25, 35, 29, 32, 30],
                    fill: false,
                    pointRadius: 3,
                    tension: 0.35,
                    borderColor: theme.color.success,
                    pointBorderColor: 'transparent',
                    pointBackgroundColor: 'transparent',
                    borderWidth: 2
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false,
                barPercentage: 0.5,
              }
            ],
            yAxes:[
              {
                display: false
              }
            ]
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
        }
        }
      }
    );

    $('#chart-line-7').chartjs(
      {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 35, 25, 40, 60, 30, 105],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.primary, 0.0),
                    pointRadius: 1,
                    tension: 0,
                    borderColor: theme.color.primary,
                    borderWidth: 1
                },
                {
                    label: 'Dataset',
                    data: [10, 50, 35, 50, 35, 90, 80],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.success, 0.0),
                    pointRadius: 1,
                    tension: 0,
                    borderColor: theme.color.success,
                    borderWidth: 1
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false
              }
            ],
            yAxes:[
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 160,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );

    $('#chart-line-8').chartjs(
      {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [60, 45, 35, 40, 60, 60, 55],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.info, 0.1),
                    pointRadius: 3,
                    pointBackgroundColor: '#fff',
                    tension: 0,
                    borderColor: theme.color.info,
                    borderWidth: 2
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false
              }
            ],
            yAxes:[
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 160,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );
  

    $('#chart-line-9').chartjs(
      {
        type: 'line',
        data: {
            labels: getLables(50, ''),
            datasets: [
                {
                    label: 'Dataset',
                    data: getRandomData(50),
                    fill: true,
                    backgroundColor: getGradient(theme.color.primary, 150),
                    pointRadius: 0,
                    pointBackgroundColor: '#fff',
                    tension: 0,
                    borderColor: theme.color.primary,
                    borderWidth: 1.5
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: false
              }
            ]
          },
          legend:{
            display: false
          }
        }
      }
    );

    $('#chart-line-10').chartjs(
      {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 60, 30, 105, 35, 25, 40],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.primary, 0.0),
                    pointRadius: 1,
                    tension: 0.35,
                    borderColor: theme.color.primary,
                    borderWidth: 1
                },
                {
                    label: 'Dataset',
                    data: [10, 50, 40, 35, 90, 80, 35],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.success, 0.0),
                    pointRadius: 1,
                    tension: 0.35,
                    borderColor: theme.color.success,
                    borderWidth: 1
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: true
              }
            ],
            yAxes:[
              {
                display: true,
                ticks: {
                  min: 0,
                  max: 140,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      }
    );

    $('#chart-line-11').chartjs(
      {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 60, 30, 105, 35, 25, 40],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.primary, 0.9),
                    pointRadius: 0,
                    tension: 0.35,
                    borderColor: theme.color.primary,
                    borderWidth: 1
                },
                {
                    label: 'Dataset',
                    data: [40, 65, 20, 45, 70, 50, 75],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.primary, 0.5),
                    pointRadius: 0,
                    tension: 0.35,
                    borderColor: theme.color.primary,
                    borderWidth: 1
                },
                {
                    label: 'Dataset',
                    data: [50, 70, 40, 35, 90, 80, 35],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.primary, 0.1),
                    pointRadius: 0,
                    tension: 0.35,
                    borderColor: 'transparent',
                    borderWidth: 1
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: true
              }
            ],
            yAxes:[
              {
                display: true,
                ticks: {
                  min: 0,
                  max: 140,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: true
          }
        }
      }
    );

    $('#chart-bar-4').chartjs(
      {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 35, 25, 40, 60, 30, 105],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.primary, 1),
                    pointRadius: 1,
                    tension: 0,
                    borderColor: theme.color.primary,
                    borderWidth: 1
                },
                {
                    label: 'Dataset',
                    data: [10, 50, 35, 50, 35, 90, 80],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.success, 1),
                    pointRadius: 1,
                    tension: 0,
                    borderColor: theme.color.success,
                    borderWidth: 1
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: true,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
              }
            ],
            yAxes:[
              {
                display: true,
                ticks: {
                  min: 0,
                  max: 120,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: true
          }
        }
      }
    );

    $('#chart-bar-5').chartjs(
      {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 35, 25, 40, 60],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.warning, 1),
                    pointRadius: 1,
                    tension: 0,
                    borderColor: theme.color.warning,
                    borderWidth: 1
                },
                {
                    label: 'Dataset',
                    data: [10, 50, 35, 50, 35],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.danger, 1),
                    pointRadius: 1,
                    tension: 0,
                    borderColor: theme.color.danger,
                    borderWidth: 1
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: true,
                stacked: true,
                barPercentage: 0.5,
                categoryPercentage: 0.5
              }
            ],
            yAxes:[
              {
                display: true,
                stacked: true,
                ticks: {
                  min: 0,
                  max: 120,
                  stepSize: 20
                }
              }
            ]
          },
          legend: {
            display: true
          }
        }
      }
    );

    $('#chart-bar-6').chartjs(
      {
        type: 'horizontalBar',
        data: {
            labels: ['March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [30, 35, 45, 40, 105],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.info, 0.9),
                    borderColor: 'transparent',
                },
                {
                    label: 'Dataset',
                    data: [40, 75, 65, 20, 45],
                    fill: true,
                    backgroundColor: hexToRGB(theme.color.info, 0.5),
                    borderColor: 'transparent',
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: true,
                stacked: false
              }
            ],
            yAxes:[
              {
                display: true,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                ticks: {
                  min: 0,
                  max: 160
                }
              }
            ]
          },
          legend: {
            display: true
          }
        }
      }
    );

  $('#chart-bar-7').chartjs(
      {
        type: 'horizontalBar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'Dataset',
                    data: [40, 60, 80, 105, 35],
                    fill: true,
                    backgroundColor: theme.color.success,
                    borderColor: 'transparent',
                },
                {
                    label: 'Dataset',
                    data: [50, 45, 70, 50, 75],
                    fill: true,
                    backgroundColor: theme.color.primary,
                    borderColor: 'transparent',
                }
            ]
        },
        options: {
          scales: {
            xAxes:[
              {
                display: true,
                stacked: false
              }
            ],
            yAxes:[
              {
                display: true,
                barPercentage: 0.5,
                categoryPercentage: 0.5
              }
            ]
          },
          legend: {
            display: true
          }
        }
      }
    );

  }


  // for ajax to init again
  $.fn.chartjs.init = init;

})(jQuery, theme);
