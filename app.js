/* 
--------------------------------------------------
  Apex Chart options settings
------------------------------------------------
*/
window.Apex = {
    chart: {
      foreColor: '#ccc',
      redrawOnWindowResize: true,
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: 1
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      theme: 'dark'
    },
    grid: {
      borderColor: "#535A6C",
      xaxis: {
        lines: {
          show: true
        }
      }
    }
  };



  const salesRateOptions = {
    chart: {
      id: 'sales-rate',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.2,
      }
    },
    series: [{
      data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
    }],
    stroke: {
      curve: 'smooth'
    },
    grid: {
      padding: {
        top: 20,
        bottom: 10,
        left: 110
      }
    },
    markers: {
      size: 0
    },
    colors: ['#fff'],
    tooltip: {
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return '';
          }
        }
      }
    }
  }

  
  
  const bestSellingOptions = {
    chart: {
      height: 100,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
     },
     sparkline: {
       enabled: true
     },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
      }
    },
    stroke: {
      curve: 'smooth',
    },
    //colors: ["#3F51B5", '#2196F3'],
    series: [{
        name: "Music",
        data: [1, 15, 26, 20, 33, 27]
      },
      {
        name: "Photos",
        data: [3, 33, 21, 42, 19, 32]
      },
      {
        name: "Files",
        data: [0, 39, 52, 11, 29, 43]
      }
    ],
    markers: {
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 9
      }
    },
    grid: {
      show: true,
      padding: {
        bottom: 0
      }
    },
    labels: ['01/15/2023', '01/16/2023', '01/17/2023', '01/18/2023', '01/19/2023', '01/20/2023'],
    xaxis: {
      tooltip: {
        enabled: false
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      /* offsetY: -20 */
    }
  }
  


  const monthlyRateOptions = {
    chart: {
      type: 'radialBar',
      height: 100,
      toolbar: {
        show: false
     },
     sparkline: {
       enabled: true
     }
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: true,
        hollow: {
          margin: 5,
          size: '48%',
          background: 'transparent',
  
        },
        track: {
          show: false,
        },
        startAngle: -180,
        endAngle: 180
  
      },
    },
    stroke: {
      lineCap: 'round'
    },
    series: [71, 63, 77],
    labels: ['June', 'May', 'April'],
    legend: {
      show: true,
      floating: true,
      position: 'right',
      offsetX: -30,
      offsetY: 10
    },
  }
  
 
  


    
  const salesRevenueOptions = {
    chart: {
      height: 300,
      type: 'bar',
      stacked: true,
    },
    plotOptions: {
      bar: {
        columnWidth: 5,
        horizontal: false,
        borderRadius:4,
      },
    },
    series: [{
      name: 'Ticket A',
      data: [14, 25, 21, 17, 12, 13, 11, 19]
    }, {
      name: 'Ticket B',
      data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
      name: 'Ticket C',
      data: [11, 17, 15, 15, 21, 14, 15, 13]
    }],
    xaxis: {
      categories: ['2023 Q1', '2023 Q2', '2023 Q3', '2023 Q4', '2024 Q1', '2024 Q2', '2024 Q3', '2024 Q4'],
    },
    fill: {
      opacity: 1
    },
  
  }
  



  
  const incomeRateOptions = {
    chart: {
      height:100,
      type: 'area',
      stacked: false,
     sparkline: {
       enabled: true
     }
    },
    stroke: {
      curve: 'smooth'
    },
    series: [{
        name: "Music",
        data: [11, 15, 26, 20, 33, 27]
      },
      {
        name: "Photos",
        data: [32, 33, 21, 42, 19, 32]
      },
      {
        name: "Files",
        data: [20, 39, 52, 11, 29, 43]
      }
    ],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2'],
    },
    tooltip: {
      followCursor: true
    },
    fill: {
      opacity: 1,
    },
  }
  
//Rendering charts
new ApexCharts(document.querySelector("#sales-rate-1"), salesRateOptions).render();
new ApexCharts(document.querySelector("#sales-rate-2"), salesRateOptions).render();
new ApexCharts(document.querySelector('#best-selling-1'), bestSellingOptions).render();
new ApexCharts(document.querySelector('#best-selling-2'), {...bestSellingOptions,chart:{...bestSellingOptions.chart,height:300}}).render();
new ApexCharts(document.querySelector('#monthly-rate'), monthlyRateOptions).render();
new ApexCharts(document.querySelector("#sales-revenue"),salesRevenueOptions).render();
new ApexCharts(document.querySelector("#income-rate"),incomeRateOptions).render();
















/* 
 ------------------------------------------------
   Reviews Data
 ------------------------------------------------
*/

function getCurrentDate() {
    const t = new Date();
    const date = ('0' + t.getDate()).slice(-2);
    const month = ('0' + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    return `${date}/${month}/${year}`;
}
const reviews = [
    {
        id:1,
        name:"Emmanuel Eze",
        email:"emmy@gmail.com",
        date:getCurrentDate(),
        title:"Excellent services",
        rating:4,
    },
    {
        id:2,
        name:"James",
        email:"james@gmail.com",
        date:getCurrentDate(),
        title:"Best to get",
        rating:3,
    },
    {
        id:3,
        name:"Oluoma Patience",
        email:"oluoma.patience@gmail.com",
        date:getCurrentDate(),
        title:"Great and good to use",
        rating:5,
    },
    {
        id:4,
        name:"Daniel Kasi",
        email:"kasi@gmail.com",
        date:getCurrentDate(),
        title:"Awesome",
        rating:5,
    },
    {
        id:5,
        name:"Chisom Onuh",
        email:"chisomonuuh@gmail.com",
        date:getCurrentDate(),
        title:"Excellent",
        rating:5,
    },
    {
        id:6,
        name:"Ndu Mark",
        email:"ndumark@gmail.com",
        date:getCurrentDate(),
        title:"Wonderful customer care",
        rating:5,
    },
]

reviews.forEach(data =>{
    document.querySelector(".feedback__table tbody")
    .insertAdjacentHTML("beforeend", `
    <tr>
        <td class="number minimize">${data.id}</td>
        <td title="${data.name}">${data.name}</td>
        <td title="${data.email}">${data.email}</td>
        <td class="date minimize">${data.date}</td>
        <td class="minimize">${data.title}</td>
        <td>
          <div class="star__container">
            ${data.rating}
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
        </td>
        <td class="more"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></td>
    </tr>
    `)
})