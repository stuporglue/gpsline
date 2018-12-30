const map = L.map('map',{}).fitWorld();


// L.drawLocal.draw.toolbar.actions.text = 'X'; // Cancel
// L.drawLocal.draw.toolbar.finish.text = '💾';  // Save
// L.drawLocal.draw.toolbar.undo.text = '↩'; // Undo
// 
// L.drawLocal.edit.toolbar.actions.save.text = '💾';  // Save
// L.drawLocal.edit.toolbar.actions.cancel.text = 'X'; // Cancel
// L.drawLocal.edit.toolbar.actions.clearAll.text = '💥'; // Cancel

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

// L.control.locate({
// 	// layer: editableLayers,
// 	circleStyle: {
// 		fillColor: '#e7f309',
// 		color: '#e7f309'
// 	},
// 	icon: 'dashicons-location-alt',
// 	circlePadding: [25,25],
// 	locateOptions: {
// 		enableHighAccuracy: true
// 	}
// }).addTo(map);



var options = {
	edit: {
		featureGroup: editableLayers, //REQUIRED!!
		remove: true 
	}
};

var drawControl = new L.Control.Draw(options);
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (e) {
	var type = e.layerType,
		layer = e.layer;
	editableLayers.addLayer(layer);
});

