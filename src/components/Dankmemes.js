import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const Dankmemes = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  // don't really need these two lines
  // const [employeeSalary, setEmployeeSalary] = useState([]);
  // const [employeeAge, setEmployeeAge] = useState([]);

  useEffect(() => {
    let empSal = [];
    let empAge = [];
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => {
        console.log('res: \n', res)
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary))
          empAge.push(parseInt(dataObj.employee_age))
        }
        setChartData({
          labels: empAge.sort((a, b) => a - b),
          datasets: [
            {
              label: 'levels of thiccness',
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
              // tension: 0.5,
            },
          ],
        });
      })
      .catch(err => {
        console.log('err: \n', err)
      })
      // console.log('empSal: \n', empSal, '\n', 'empAge: \n', empAge)
  }, [])

  return(
    <div className="App">
      <div>
        <Line data={chartData} />
      </div>
    </div>
  )
};

export default Dankmemes