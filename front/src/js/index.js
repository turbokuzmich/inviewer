import 'styles/index.scss';
import Chart from 'chart.js';

$(() => {
    const $pieChart = $('.js-pie-chart');

    $pieChart.each((_, elem) => {
        const ctx = elem.getContext('2d');

        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
                datasets: [
                    {
                        label: 'Population (millions)',
                        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
                        data: [2478, 5267, 734, 784, 433]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            }
        });
    });
});
