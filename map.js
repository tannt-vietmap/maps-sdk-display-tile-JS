//display tile layer
var map = new vietmapgl.Map({
  container: "map",
  style:
    "https://maps.vietmap.vn/mt/tm/style.json?apikey=YOUR_API_KEY", // stylesheet location
  center: [106.69799977311857, 10.772520403841128], // starting position [lng, lat]
  zoom: 15,
  pitch: 90, // starting zoom
});
//add marker to map
new vietmapgl.Marker()
  .setLngLat([106.69799977311857, 10.772520403841128])
  .addTo(map);
