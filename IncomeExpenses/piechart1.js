// Create the income pie chart
Highcharts.chart("incomePieChart", {
  // Chart configuration for income pie chart
  // ...// Create the income pie chart

  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
    },
    backgroundColor: "rgba(0,0,0,0)", // Set the background color of the chart container to transparent
  },
  title: {
    text: "Income Breakdown",
    style: {
      color: "#1B9C85", // Title text color
      fontSize: "24px", // Title font size
      fontWeight: "bold", // Title font weight
    },
  },
  plotOptions: {
    pie: {
      animation: true, // Disable pie chart animation
      duration: 1000, // Added comma
      innerSize: 100,
      depth: 45,
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "{point.name} ({point.percentage:.1f}%)",
        style: {
          color: "#1B9C85", // Data label text color
          textOutline: "none", // Remove text outline
        },
        connectorWidth: 2,
      },
      borderColor: "#1B9C85", // Border color of the pie slices
      borderWidth: 2, // Border width of the pie slices
      states: {
        hover: {
          brightness: 0.1, // Increase brightness on hover for better visibility
        },
      },
    },
  },
  series: [
    {
      name: "Income Source",
      colorByPoint: true,
      colors: ["#1B9C85", "#134E5E", "#3EACA8", "#156A66"], // Colors for each data point
      data: [
        ["Salary", 60000],
        ["Investments", 15000],
        ["Side Business", 5000],
        ["Other", 3000],
      ],
    },
  ],
  tooltip: {
    useHTML: true,
    headerFormat: "<h1>{point.key}</h1>",
    pointFormat: "<h4>{point.percentage:.1f} {series.name} </h4>",
    backgroundColor: "rgba(0,0,0,0.8)", // Tooltip background color with transparency
    borderColor: "#1B9C85", // Tooltip border color
    borderRadius: 10, // Tooltip border radius
    borderWidth: 2, // Tooltip border width
    style: {
      color: "#1B9C85", // Tooltip text color
    },
  },
});


// Create the expense pie chart
Highcharts.chart('expensePieChart', {
    // Chart configuration for expense pie chart
    // ...
});

// Generate PDF function
/*function generatePDF() {
    const mainDiv = document.getElementById('mainDiv');
    mainDiv.style.width = '800px'; // Example width
    mainDiv.style.height = '600px'; // Example height
    const options = {
        margin: 0.5,
        filename: 'income_vs_expense_report.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
        .from(element)
        .set(options)
        .save();
}*/

// Call generatePDF function when the document is loaded






// Create the expense pie chart
Highcharts.chart('expensePieChart', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        },
        backgroundColor: 'rgba(0,0,0,0)' // Set the background color of the chart container to transparent
    },
    title: {
        text: 'Expense Breakdown',
        style: {
            color: '#1B9C85', // Title text color
            fontSize: '24px', // Title font size
            fontWeight: 'bold' // Title font weight
        }
    },
    plotOptions: {
        pie: {
            animation: true, // Disable pie chart animation
             duration: 1000,
            innerSize: 100,
            depth: 45,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name} ({point.percentage:.1f}%)',
                style: {
                    color: '#1B9C85', // Data label text color
                    textOutline: 'none' // Remove text outline
                },
                connectorWidth: 2
            },
            borderColor: '#1B9C85', // Border color of the pie slices
            borderWidth: 2, // Border width of the pie slices
            states: {
                hover: {
                    brightness: 0.1 // Increase brightness on hover for better visibility
                }
            }
        }
    },
    series: [{
        name: 'Expense Category',
        colorByPoint: true,
        colors: ['#1B9C85', '#134E5E', '#3EACA8', '#156A66', '#449A88', '#2E789F'], // Colors for each data point
        data: [
            ['Housing', 20000],
            ['Utilities', 5000],
            ['Transportation', 7000],
            ['Food', 8000],
            ['Entertainment', 4000],
            ['Other', 3000]
        ]
    }],
    tooltip: {
        useHTML: true,
        headerFormat: '<h1>{point.key}</h1>',
        pointFormat: '<h4>{point.percentage:.1f} {series.name} </h4>',
        backgroundColor: 'rgba(0,0,0,0.8)', // Tooltip background color with transparency
        borderColor: '#1B9C85', // Tooltip border color
        borderRadius: 10, // Tooltip border radius
        borderWidth: 2, // Tooltip border width
        style: {
            color: '#1B9C85' // Tooltip text color
        }
        
    }
    
});


function generatePDF() {
    const element = document.body;
    const options = {
        margin: 0.1,
        filename: 'income_vs_expense_report.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { 
          unit: 'in', 
          format: [13, 11], // Custom letter size: 8.5 inches wide, 11 inches tall
          orientation: 'landscape' // Change orientation to 'landscape'
      }
    };

    html2pdf()
        .from(element)
        .set(options)
        .save();
}
///document.addEventListener('DOMContentLoaded', generatePDF);


// Call generatePDF function when a button is clicked or any other appropriate user action
document.getElementById('generatePDFButton').addEventListener('click', generatePDF);

/******************* */