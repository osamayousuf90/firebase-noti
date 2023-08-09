import React, { useState } from 'react'
import { Chart } from "react-google-charts";
import CanvasJSReact from '@canvasjs/react-charts';
import { AgChartsReact } from 'ag-charts-react';

export const data = [
    ["Year", "Sales", "Expenses", "Profit", "Example"],
    ["2014", 1000, 400, 200, 50],
    ["2015", 1170, 460, 250, 50],
    ["2016", 660, 1120, 300, 50],
    ["2017", 1030, 540, 350, 50],
    ["2014", 1000, 400, 200, 50],
    ["2015", 1170, 460, 250, 50],
    ["2016", 660, 1120, 300, 50],
    ["2017", 1030, 540, 350, 50],
    ["2014", 1000, 400, 200, 50],
    ["2015", 1170, 460, 250, 50],
    ["2016", 660, 1120, 300, 50],
    ["2017", 1030, 540, 350, 50],
];

export const data3 = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
];

export const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    colors: ['#FED4B4', '#FCAA58', '#C3D1BE', "#FF0000"], // Specify the colors for each bar
    bars: 'vertical',
    isStacked: true,
    vAxis: {
        title: 'Values', // Customize your vAxis title here
        titleTextStyle: {
            fontSize: 14,
        },
        position: 'bottom', // This moves the labels to the bottom
    },
};

export const option3 = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
    colors: ['#ADD39C', '#97BAF3', '#E98B8A'], // Specify the colors for each bar
    bars: 'vertical',
    isStacked: true,
};


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const options2 = {
    theme: "light2",
    title: {
        text: "Comparison of Exchange Rates - 2017"
    },
    subtitles: [{
        text: "GBP & USD to INR"
    }],
    axisY: {
        prefix: "₹"
    },
    toolTip: {
        shared: true
    },
    data: [
        {
            type: "area",
            name: "GBP",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "₹#,##0.##",
            color: "#C6DAFC", // Change the background color for this series
            showInLegend: true,
            dataPoints: [
                { x: new Date("2017- 01- 01"), y: 5.927 },
                { x: new Date("2017- 02- 01"), y: 10.609 },
                { x: new Date("2017- 03- 01"), y: 15.428 },
                { x: new Date("2017- 04- 01"), y: 25.259 },
                { x: new Date("2017- 05- 01"), y: 30.153 },
                { x: new Date("2017- 06- 01"), y: 40.180 },
                { x: new Date("2017- 07- 01"), y: 40.840 },
                { x: new Date("2017- 08- 01"), y: 60.671 },
                { x: new Date("2017- 09- 01"), y: 70.496 },
                { x: new Date("2017- 10- 01"), y: 70.007 },
                { x: new Date("2017- 11- 01"), y: 70.233 },
                { x: new Date("2017- 12- 01"), y: 70.276 }
            ]
        },
        {
            type: "area",
            name: "USD",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "₹#,##0.##",
            color: "#CCADC1",
            dataPoints: [
                { x: new Date("2017- 01- 01"), y: 2.515 },
                { x: new Date("2017- 02- 01"), y: 5.725 },
                { x: new Date("2017- 03- 01"), y: 10.86 },
                { x: new Date("2017- 04- 01"), y: 15.29 },
                { x: new Date("2017- 05- 01"), y: 20.51 },
                { x: new Date("2017- 06- 01"), y: 25.62 },
                { x: new Date("2017- 07- 01"), y: 20.2 },
                { x: new Date("2017- 08- 01"), y: 15.935 },
                { x: new Date("2017- 09- 01"), y: 5.31 },
                { x: new Date("2017- 10- 01"), y: 3.75 },
                { x: new Date("2017- 11- 01"), y: 2.49 },
                { x: new Date("2017- 12- 01"), y: 1.84 }
            ]
        }
    ]
}


const Graphs = () => {
    const [options4, setOptions4] = useState({
        title: {
            text: 'Internet Explorer Market Share',
        },
        subtitle: {
            text: '2009-2019 (aka "good times")',
        },
        data: getData(),
        series: [
            {
                type: 'area',
                xKey: 'year',
                yKey: 'ie',
                yName: 'IE',
                marker: {
                    enabled: true,
                },
                label: {
                    fontWeight: 'bold',
                },
                tooltip: {
                    renderer: (params) => {
                        return {
                            content: `${params.xValue}: ${params.yValue.toFixed(1)}%`,
                        };
                    },
                },
            },
        ],
    });

    function getData() {
        return [
            {
                year: '2009',
                ie: 64.97,
                firefox: 26.85,
                safari: 2.79,
                chrome: 1.37,
            },
            {
                year: '2010',
                ie: 54.39,
                firefox: 31.15,
                safari: 4.22,
                chrome: 5.94,
            },
            {
                year: '2011',
                ie: 44.03,
                firefox: 29.36,
                safari: 5.94,
                chrome: 15.01,
            },
            {
                year: '2012',
                ie: 34.27,
                firefox: 22.69,
                safari: 8.09,
                chrome: 25.99,
            },
            {
                year: '2013',
                ie: 26.55,
                firefox: 18.55,
                safari: 10.66,
                chrome: 31.71,
            },
            {
                year: '2014',
                ie: 17.75,
                firefox: 14.77,
                safari: 12.63,
                chrome: 35.85,
            },
            {
                year: '2015',
                ie: 13.3,
                firefox: 11.82,
                safari: 13.79,
                chrome: 42.27,
            },
            {
                year: '2016',
                ie: 8.94,
                firefox: 8.97,
                safari: 12.9,
                chrome: 47.79,
            },
            {
                year: '2017',
                ie: 4.77,
                firefox: 6.75,
                safari: 14.54,
                chrome: 51.76,
            },
            {
                year: '2018',
                ie: 3.2,
                firefox: 5.66,
                safari: 14.44,
                chrome: 56.31,
            },
            {
                year: '2019',
                ie: 2.7,
                firefox: 4.66,
                safari: 15.23,
                chrome: 61.72,
            },
        ];
    }

    return (
        <div className='gridParent'>
            <div className='gridParent_child'>
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </div>
            <div className='gridParent_child'>
                <CanvasJSChart options={options2}
                /* onRef={ref => this.chart = ref} */
                />
            </div>

            <div className='gridParent_child'>
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={data3}
                    options={option3}
                />
            </div>
            <div style={{ height: "400px" }} className='gridParent_child'>
                <AgChartsReact options={options4} />
            </div>
        </div>
    )
}

export default Graphs