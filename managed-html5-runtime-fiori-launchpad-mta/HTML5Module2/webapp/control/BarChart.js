sap.ui.define([
	"sap/ui/core/Control",
	"chart.js"
], function (Control, Chart) {
	"use strict"

	return Control.extend("com.sap.demo.control.BarChart", {

		metadata: {
			properties: {
				data: { type: "object" }
			}
		},

		exit: function () {
			if (this._chart) {
				this._chart.destroy()
			}
		},

		onBeforeRendering: function () {
			if (this._chart) {
				this._chart.destroy()
			}
		},

		onAfterRendering: function () {
			//render the chart
			this._chart = new Chart(this.getDomRef(), {
				type: 'bar',
				data: {
				  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				  datasets: [{
					label: '# of Votes',
					data:  [12, 19, 3, 5, 2, 3],
					borderWidth: 1
				  }]
				},
				options: {
				  scales: {
					y: {
					  beginAtZero: true
					}
				  }
				}
			  })
			// console.log(this._chart)
			// console.log(this)
		},

		renderer: {
			apiVersion: 2,
			render: function (oRm, oControl) {
				oRm.openStart("canvas", oControl)
				oRm.style("height", "500px")
				oRm.openEnd()
				oRm.close("canvas")
			}
		}

	})

})