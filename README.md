Plotter APP:
------------
Data Visualization web app implemented in react it's mainly consists of :

		1 - Draggable buisness data categories "measures and dimensions " provided from the following API : GET "https://plotter-task.herokuapp.com/columns".
		2 - Data selection bars, one for measures and one for dimensions and each bar can take the respective data type dimension can only be dropped in dimension bar and so on.
		3 - when the user drag and drop dimensions and measures the data is sent to POST   "https://plotter-task.herokuapp.com/data" to get the detailed buisness data which needs to be plotted.
		4 - plotter which is a graph showing the measure vs dimension with an intersective points that shows more data in toolip when the user hover on these points.
		
	
	Technologies:
	-------------
			
			1 - React JS.
			2 - useContext Hook was used for global context handling.
			3 - React bootstrap for prestyled components.
			4 - chart js library used for generating the needed graphs.
			5 - react-drag-drop-container used for dragging and dropping elements.
			
	Project structure :
	-------------------
			Components :
			------------
			1 - NavBar: contains the top Navbar for the plotter APP.
			2 - DataColumn: contains the left side column and render each draggable ColumnDataElement which is fetched from  GET "https://plotter-task.herokuapp.com/columns". API.
			3 - ColumnDataElement : contains each individual measure or dimension inside the left column.
			4 - DataSelectionBars: two droppable bars each on for dimension and one for measures along with the delete buttons for each bar.
			5 - Plotter: the component that is resposnbile for rendering the chart JS line graph.	
			Actions :
			------------
			1 - columnActions: resposible for data requesting and sending with the provided API.
	how to run :
	------------
			1 - inside plotter-app directory run npm install and then npm start and the project will run on localhost 3000.
			2 - make sure you install the following :
				- install node from : https://nodejs.org/en/download/
	 			- install npm from : https://www.npmjs.com/get-npm
