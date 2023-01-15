# DC Shared Micromobility Visualization

### Motivation

Cities often have the presence of companies that provide shared micromobility (bikes, scooters, etc.) services
which provide users with an app to locate and rent their respective assets. A slight inconvenience for users
though is having to navigate through multiple apps if they want to locate bikes or scooters near them irrespective of the company they use. This webpage consolidates API information on one map to allow the users to select the best option for them utilizing Washington, DC and 3 companies (Bird, Helbiz, Capital Bikeshare) as a case study demonstration.

### Layout

![Layout Image](./dist/imgs/Commented-Map.png)

### Technologies, Libraries, APIs

- **[Washington DC Dockless API](https://ddot.dc.gov/page/dockless-api)** to fetch live data of bicycles and e-scooters in Washington, D.C.
- **Express.js** utilized for fetching bird API
- **Leaflet Library** to style map and create interactive zoom features and clustering
- **Webpack** to bundle source JavaScript code
- **npm** to manage project dependecies
- **Sass** for styling web page

### Functionality

- Fetch data from 3 MicroMobility services comapnies (Bird, Helbiz, Capital Bikeshare) through the DC Dockless API
- View and scroll map of DC with count of bicycles and e-scooters indicated
- Learn information of current location based on latest fetch and charge data for Bird scooters

### Hightlight - Error handling for Bird Scooter API

Two separate API's are utilized for fetching bird scooter data. As illustrated in the script below, there is a primary API to fetch data that, if unsuccessful, will trigger a fetch to an alternative API with a json response following GBFS standards. If the second API fetch fails to retrieve data, an alert message will be provided to the user and html elements will be reset to previous state via DOM manipulation.

```javascript
//Error handling utilizing backup API in case first does not fetch data
try {
  const authResponse = await fetch(`/auth`);
  const accessToken = await authResponse.json();

  birdResponse = await fetch(`/bird?auth=${encodeURIComponent(accessToken)}`);
  birdData = await birdResponse.json();

  birdScooterArr = birdData.birds;
} catch {
  birdAPI = false;
  birdResponse = await fetch(`/cors?url=${encodeURIComponent(url)}`);

  try {
    birdData = await birdResponse.json();
    birdScooterArr = birdData.data.bikes;
  } catch {
    loadingModal.style.display = "none";
    document.getElementById("birdFilter").className = "noFilter";
    alert(
      "Apologies, experiencing difficulties fetching data.  Please try again later."
    );
    return null;
  }
}
```
