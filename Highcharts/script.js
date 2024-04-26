document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            // type : 'area',
            // type: 'column'
            // type: 'bar'
            // type:'scatter'
             type:'areaspline',
            zoomType: 'xy'
            
        },
        credits:{
            // enabled:false,
            text: 'Harleen',
            href: 'https://google.com'
        },
        tooltip: {
            animation: false,
            border: '#fff',
            backgroundColor: '#333333',
            borderRadius: 20,
        },
        yAxis: {
            title: {
                text: 'Fruits Eaten'
            }
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        series: [
            {
                name: 'Harleen',
                data: [1, 2, -5],
                // negativeColor: 'red',
            },
            {
                name: 'Kaveri',
                data: [2, 10, 8]
            },
            {
                name: 'Anuja',
                data: [1, 6, 13]
            },
            {
                name: 'Shivani',
                data: [2, 15, 4]
            },
            {
                name: 'Vikram',
                data: [3, 3, 6]
            },
        ],
        resposive: {
            rules: [{
                chartOptions: {
                    legend: {enabled:false},
                    yAxis:{
                        title: {text: ''}
                    }
                },
                condition: {
                    maxWidth: 500,
                    callback(){
                        return false;
                    }
                }
        }]
        }
    });
});



const chart = Highcharts.chart('container1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Responsive highchart'
    },
    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Bananas']
    },
    yAxis: {
        title: {
            text: 'Amount'
        }
    },
    series: [{
        name: 'Christmas Eve',
        data: [1, 4, 3]
    }, {
        name: 'Christmas Day before dinner',
        data: [6, 4, 2]
    }, {
        name: 'Christmas Day after dinner',
        data: [8, 4, 3]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                }
            }
        }]
    }
});

document.getElementById('small').addEventListener('click', () => {
    chart.setSize(400, 300);
});

document.getElementById('large').addEventListener('click', () => {
    chart.setSize(600, 300);
});



Highcharts.chart('container3', {
    
    chart: {
        type: 'columnpyramid'
    },
    title: {
        text: 'The 5 highest pyramids in the World'
    },
    colors: ['#C79D6D', '#B5927B', '#CE9B84', '#B7A58C', '#C7A58C'],
    xAxis: {
        crosshair: true,
        labels: {
            style: {
                fontSize: '14px'
            }
        },
        type: 'category'
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Height (m)'
        }
    },
    tooltip: {
        valueSuffix: ' m'
    },
    series: [{
        name: 'Height',
        colorByPoint: true,
        data: [
            ['Pyramid of Khufu', 138.8],
            ['Pyramid of Khafre', 136.4],
            ['Red Pyramid', 104],
            ['Bent Pyramid', 101.1],
            ['Pyramid of the Sun', 75]
        ],
        showInLegend: false
    }]
});


const charts = Highcharts.chart('container4', {
    chart: {
        // type : 'area',
       type: 'column',
    //    type: 'bar',
        // type:'scatter',
       //  type:'areaspline',
       zoomType: 'xy',
       
     },
     credits: {
        enabled: false
     },
      title : {
        text: 'Monthly Average Temperature'   
      },
      xAxis : { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ,'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
      yAxis : {
        title: {
           text: 'Temperature (\xB0C)'
        },
        plotLines: [{
           value: 0,
           width: 1,
           color: '#808080'
        }]
     },
     legend : {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
     },
     series : [
        {
           name: 'Tokyo',
           data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 
              26.5, 23.3, 18.3, 13.9, 9.6]
        }, 
        {
           name: 'New York',
           data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 
              24.1, 20.1, 14.1, 8.6, 2.5]
        }, 
        {
           name: 'Berlin',
           data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 
              17.9, 14.3, 9.0, 3.9, 1.0]
        }, 
        {
           name: 'London',
           data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 
              16.6, 14.2, 10.3, 6.6, 4.8]
        }
     ],
     


});