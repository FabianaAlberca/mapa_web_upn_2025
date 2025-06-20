ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-104.429751, -19.069430, -41.543722, 0.217780]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentodelPeru_1 = new ol.format.GeoJSON();
var features_DepartamentodelPeru_1 = format_DepartamentodelPeru_1.readFeatures(json_DepartamentodelPeru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DepartamentodelPeru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentodelPeru_1.addFeatures(features_DepartamentodelPeru_1);
var lyr_DepartamentodelPeru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentodelPeru_1, 
                style: style_DepartamentodelPeru_1,
                popuplayertitle: 'Departamento del Peru',
                interactive: true,
                title: '<img src="styles/legend/DepartamentodelPeru_1.png" /> Departamento del Peru'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentodelPeru_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DepartamentodelPeru_1];
lyr_DepartamentodelPeru_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'Nombre del departamento', 'COUNT': 'numero de distritos del departamento', 'FIRST_IDDP': 'UBIGEO en departameto', 'HECTARES': 'superficie en Ha', 'DEPARTAMENTO': 'DEPARTAMENTO', '1995': '1995', '2000': '2000', '2005': '2005', '2010': '2010', '2015': '2015', '2017': '2017', 'ENLACES': 'Informacion del departamento', 'FOTOS': 'fotos turisticas del departamento', 'VIDEOS': 'video promocionael del departamento', });
lyr_DepartamentodelPeru_1.set('fieldImages', {'fid': 'Hidden', 'NOMBDEP': 'TextEdit', 'COUNT': 'Hidden', 'FIRST_IDDP': 'Hidden', 'HECTARES': 'Hidden', 'DEPARTAMENTO': 'Hidden', '1995': 'Hidden', '2000': 'Hidden', '2005': 'Hidden', '2010': 'Hidden', '2015': 'Hidden', '2017': 'Hidden', 'ENLACES': 'TextEdit', 'FOTOS': 'ExternalResource', 'VIDEOS': 'TextEdit', });
lyr_DepartamentodelPeru_1.set('fieldLabels', {'fid': 'no label', 'NOMBDEP': 'header label - always visible', 'COUNT': 'header label - always visible', 'FIRST_IDDP': 'header label - always visible', 'HECTARES': 'header label - always visible', 'DEPARTAMENTO': 'no label', '1995': 'no label', '2000': 'no label', '2005': 'no label', '2010': 'no label', '2015': 'no label', '2017': 'no label', 'ENLACES': 'header label - always visible', 'FOTOS': 'header label - always visible', 'VIDEOS': 'header label - always visible', });
lyr_DepartamentodelPeru_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});