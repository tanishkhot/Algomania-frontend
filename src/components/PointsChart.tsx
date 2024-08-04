"use client";

import React, { useEffect, useRef } from 'react';
import Chart, { ChartType, ChartData, ChartOptions, Plugin } from 'chart.js/auto';

interface QuestionChartProps {
  easy: number;
  medium: number;
  hard: number;
  potd: number;
  staff: number;
  weekly: number;
  biweekly: number; 
}

const QuestionChart: React.FC<QuestionChartProps> = ({ easy, medium, hard, potd, staff, weekly, biweekly }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'doughnut', number[], string> | null>(null);

  const calculateTotal = (easy: number, medium: number, hard: number, potd: number, staff: number, weekly: number, biweekly: number) => {
    return easy * 1 + medium * 2 + hard * 3 + potd * 4 + staff * 5 + weekly * 15 + biweekly * 25;
  };

  const centerTextPlugin: Plugin<'doughnut'> = {
    id: 'centerTextPlugin',
    afterDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.save();

      // Calculate font size and set style
      const fontSize = (height / 30).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'white';

      // Recalculate totalPoints here
      const easyData = chart.data.datasets[0].data[0] ?? 0;
      const mediumData = chart.data.datasets[0].data[1] ?? 0;
      const hardData = chart.data.datasets[0].data[2] ?? 0;
      const potdData = chart.data.datasets[0].data[3] ?? 0;
      const staffData = chart.data.datasets[0].data[4] ?? 0;
      const weeklyData = chart.data.datasets[0].data[5] ?? 0;
      const biweeklyData = chart.data.datasets[0].data[6] ?? 0;

      const totalPoints = calculateTotal(easyData, mediumData, hardData, potdData, staffData, weeklyData, biweeklyData);
      const text = totalPoints.toString();
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = (height / 2) + 48; // Shift text down by 48 pixels

      ctx.fillText(text, textX, textY);
      ctx.restore();
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart<'doughnut', number[], string>(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Easy', 'Medium', 'Hard', 'POTD', 'Staff', 'Weekly', 'Biweekly'],
          datasets: [
            {
              data: [easy, medium, hard, potd, staff, weekly, biweekly],
              backgroundColor: ['grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey'],
              hoverBackgroundColor: ['grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey'],
              borderWidth: 1 ,
              circumference: 180,
              rotation: 270,
            },
          ],
        },
        options: {
          cutout: '85%', // Adjust cutout size for a more compact look
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              enabled: true,
            },
            legend: {
              display: false,
            },
            centerTextPlugin: {} // Ensure plugin is registered
          },
        },
        plugins: [centerTextPlugin],
      });
    }

    return () => {
      chartInstance.current?.destroy();
    };
  }, [easy, medium, hard, potd, staff, weekly, biweekly]);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.data.datasets[0].data = [easy, medium, hard, potd, staff, weekly, biweekly];
      chartInstance.current.data.datasets[0].backgroundColor = [
        easy > 0 ? 'green' : 'grey',
        medium > 0 ? 'orange' : 'grey',
        hard > 0 ? 'red' : 'grey',
        potd > 0 ? 'blue' : 'grey',
        staff > 0 ? 'purple' : 'grey',
        weekly > 0 ? 'yellow' : 'grey',
        biweekly > 0 ? 'pink' : 'grey',
      ];
      chartInstance.current.data.datasets[0].hoverBackgroundColor = [
        easy > 0 ? 'green' : 'grey',
        medium > 0 ? 'orange' : 'grey',
        hard > 0 ? 'red' : 'grey',
        potd > 0 ? 'blue' : 'grey',
        staff > 0 ? 'purple' : 'grey',
        weekly > 0 ? 'yellow' : 'grey',
        biweekly > 0 ? 'pink' : 'grey',
      ];
      chartInstance.current.update();
    }
  }, [easy, medium, hard, potd, staff, weekly, biweekly]);

  return (
    <div style={{ width: '300px', height: '150px' }}> {/* Adjust width and height as needed */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default QuestionChart;
