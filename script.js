function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  gapi.load('client', initializeClient);
}

function initializeClient() {
  gapi.client.init({
    'apiKey': 'AIzaSyCXVXtfzQbZxJnbZ99O8YQ244mDs4Y7bFk',
    'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    'clientId': '728639896565-b9ms0bmp731b7o3r6j77fj9b7l9g1of4.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/spreadsheets.readonly'
  }).then(() => {
    return gapi.auth2.getAuthInstance().signIn();
  }).then(() => {
    return gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1fsjeGyYwvsPz1M6I3ppuPb5d2Qx7eFdLMIQvJ6tWq90',
      range: 'Sheet1!A1:E20', // Adjust range as needed
    });
  }).then(response => {
    const data = response.result.values;
    console.log(data);
    // Your logic to populate the periodic table with data
  }).catch(error => {
    console.error('Error fetching data from Google Sheets:', error);
  });
}
