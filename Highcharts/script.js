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
