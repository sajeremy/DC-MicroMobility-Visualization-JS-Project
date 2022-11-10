# NYC Shared Micromobility Visualization JavaScript-Project

### Abstract:
The primary purpose of the visualization will be to provide users with information on the number of bicycles/e-scooters used in different areas of NYC. A heatmap can be generated based on the frequency of bikes in nyc neighborhoods and overlayed with an interactive map of NYC. The goal would be to allow a user to to see a high level heatmap of bikes in NYC as well as zoom into particular areas of interest and see changes in patterns over time.  

### Functionality & MVPS
With this tool users will be able to:
- Fetch data from Micromobility Service API (e.g. Citi Bike, NYC Bicycle Counts, etc.)
- View map of nyc with count of bicycle/e-scooter usage indicated through the presence of markers or heat map
- View additional information (e.g. ) of hub-spots for bicycles/e-scooters by clicking on selected ares of nyc map
- Provide toggle to visualization of past data

In addition, this project will include:
- A production README
- A description of the data collected, instructions for generating visualizations and interpreting results 


### Wireframe
![Wireframe Image](./Wireframe.png)


### Technologies:
1. **Micromobility Service:**
   - Option 1: NYC Open Data Information on bike counts through Socrata
     - https://data.cityofnewyork.us/Transportation/Bicycle-Counts/uczf-rk3c
     - https://dev.socrata.com/foundry/data.cityofnewyork.us/uczf-rk3c
   - Option 2: Citi Bike Share real-time system data through GBFS Feed 
     - https://ride.citibikenyc.com/system-data
   - Option 3: Shared Mobility API's (bikes, e-scooters, etc.)
     - https://sharedmobility.github.io
2. **Map Visualization API:**
   - Option 1: D3js (map)
     - https://github.com/d3/d3/wiki 
   - Option 2: Google Maps API
     - https://developers.google.com/maps/documentation/javascript/heatmaplayer
3. **Webpack**

