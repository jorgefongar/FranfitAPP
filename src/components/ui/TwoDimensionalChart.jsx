import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function TwoDimensionalChart() {
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // Aquí puedes inicializar tu gráfico
    const ctx = document.getElementById('myChart');
    if (chartInstance) {
      chartInstance.destroy(); // Destruye el gráfico anterior si existe
    }
    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
        }]
      },
    });
    setChartInstance(newChartInstance);

    // Devuelve una función de limpieza en useEffect para eliminar el gráfico si es necesario
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default TwoDimensionalChart;
