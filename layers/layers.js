var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_utmboundary_1 = new ol.format.GeoJSON();
var features_utmboundary_1 = format_utmboundary_1.readFeatures(json_utmboundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_utmboundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_utmboundary_1.addFeatures(features_utmboundary_1);
var lyr_utmboundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_utmboundary_1, 
                style: style_utmboundary_1,
                popuplayertitle: "utm boundary",
                interactive: true,
                title: '<img src="styles/legend/utmboundary_1.png" /> utm boundary'
            });
var lyr_hillshade2_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "hillshade 2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/hillshade2_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11507675.789533, 149585.918363, 11579009.403981, 201481.872985]
                            })
                        });
var format_Channel_3 = new ol.format.GeoJSON();
var features_Channel_3 = format_Channel_3.readFeatures(json_Channel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Channel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Channel_3.addFeatures(features_Channel_3);
var lyr_Channel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Channel_3, 
                style: style_Channel_3,
                popuplayertitle: "Channel",
                interactive: true,
                title: '<img src="styles/legend/Channel_3.png" /> Channel'
            });
var format_UTM_4 = new ol.format.GeoJSON();
var features_UTM_4 = format_UTM_4.readFeatures(json_UTM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_4.addFeatures(features_UTM_4);
var lyr_UTM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UTM_4, 
                style: style_UTM_4,
                popuplayertitle: "UTM",
                interactive: true,
                title: '<img src="styles/legend/UTM_4.png" /> UTM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_utmboundary_1.setVisible(true);lyr_hillshade2_2.setVisible(true);lyr_Channel_3.setVisible(true);lyr_UTM_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_utmboundary_1,lyr_hillshade2_2,lyr_Channel_3,lyr_UTM_4];
lyr_utmboundary_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Channel_3.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_UTM_4.set('fieldAliases', {'id': 'id', });
lyr_utmboundary_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Channel_3.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_UTM_4.set('fieldImages', {'id': 'TextEdit', });
lyr_utmboundary_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Channel_3.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_UTM_4.set('fieldLabels', {'id': 'no label', });
lyr_UTM_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});