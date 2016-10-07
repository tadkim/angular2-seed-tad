import { Component } from '@angular/core';


@Component({
    selector: 'map-marine',
    template: `
     <div id="map">{{title}}</div>
    `,
    styles: [`
        #map{
            height:600px;
            background-color:yellow;
        }
    `]
})

export class MapComponent{
    title: string;
    modelObject: any;
    
    ngOnInit() {
        console.log("MapComponent");
        this.title = "this is marine maps";

        
        var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
        
        
        var cities = new L.LayerGroup(); // 기본 레이어그룹을 생성합니다.
        
        // D3를 활용하여 데이터를 바인딩 하는 부분입니다.  ======================================
        d3.tsv("app/map/map.data.tsv", function(error, dataset){
        
            if(error){ console.log("error"); }
            
            //데이터가 정상적으로 들어왔다면 아래 코드를 실행합니다
            if(dataset){
                    
                dataset.forEach(function(d){
                    d.lat = +d.LAT; //위도
                    d.lon = +d.LON; //경도
                    
                    let posInfo = "사고 발생위치 :  " + d.lat + ", " + d.lon + "입니다." +  "\n" +  "세부 위치: " + d.POS;
                    
                    
                    L.marker([d.lat, d.lon])
                        .bindPopup(posInfo)
                        .addTo(cities);
                });
            }
        
        }); //d3.tsv end
        // var overlays = { "Cities" : cities };
        // cities.addTo(map);
        
        
        
        
        var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
            streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr}),
            dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark',   attribution: mbAttr});
        
        var map = L.map('map', {
            center: [37.6, 127.0],
            setView: [37.6, 127.0],
            zoom: 7,
            layers: [dark, cities]
        });
        
        var baseLayers = {
            "Grayscale": grayscale,
            "Streets": streets,
            "Dark": dark
        };
        
        var overlays = {
            "Cities": cities
        };
        
        L.control.layers(baseLayers, overlays).addTo(map);
        
    }
}
