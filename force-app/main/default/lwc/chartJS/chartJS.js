import { api, LightningElement } from 'lwc';
import chartjs from '@salesforce/resourceUrl/charts'
import { loadScript } from 'lightning/platformResourceLoader'
export default class Charts extends LightningElement {
    isChartJsInitialized
    chart

    @api type
    @api chartHeading
    @api chartDatas
    @api chartLables
    renderedCallback() {
        if (this.isChartJsInitialized) {
            return;
        }
        loadScript(this, chartjs + '/chartJs/Chart.js').then(() => {
            console.log('chart load Successfully');
            this.isChartJsInitialized = true
            this.loadCharts()
        }).catch(error => {
            console.error(error)
        })
    }

    loadCharts() {
        window.Chart.platform.disableCSSInjection = true

        const canvas = document.createElement('canvas')
        this.template.querySelector('div.chart').appendChild(canvas)
        const ctx = canvas.getContext('2d')
        this.chart = new window.Chart(ctx, this.config())
    }
    config() {
        return {
            type: this.type,
            data: {
                labels: this.chartLables ? this.chartLables : [],
                datasets: [{
                    label: this.chartHeading,
                    data: [this.chartDatas[0], this.chartDatas[1], this.chartDatas[2], this.chartDatas[3], this.chartDatas[4], this.chartDatas[5], this.chartDatas[6], this.chartDatas[7], this.chartDatas[8]],
                    backgroundColor: [
                        'red',
                        'orange',
                        'yellow', 
                        'green',
                        'cyan',
                        'blue',
                        'purple',
                        'magenta',
                        'lime'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                scales:{
                    y:{
                        beginAtZero: true
                    }
                }
            }
        }
    }

}