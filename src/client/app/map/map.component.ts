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
        

        // Scale : test
        var radiusScale = d3.scaleLinear().range([8, 40]);




        
        // D3를 활용하여 데이터를 바인딩 하는 부분입니다.  ======================================
        d3.tsv("app/map/map.data.tsv", function(error, dataset){
        
            if(error){ console.log("error"); }
            
            //데이터가 정상적으로 들어왔다면 아래 코드를 실행합니다
            if (dataset) {
                dataset.forEach(function (d) {
                    
                    //인명피해
                    d.RESCUE = +d.RESCUE;      // 구조
                    d.DEATH = +d.DEATH;        // 사망
                    d.INJURY = +d.INJURY;      // 부상
                    d.DISAPPER = +d.DISAPPER;  // 실종
                    d.인명피해 = d.DEATH + d.INJURY + d.DISAPPER;  //인명피해 합계 

                    //Maker Radius Scale
                    radiusScale.domain([0, d3.max(dataset, function (datarow) {
                        return datarow.인명피해;
                    })]);
                })
                


                dataset.forEach(function(d){
                    d.lat = +d.LAT; //위도
                    d.lon = +d.LON; //경도
                    
                    var posInfo = "사고 발생위치 :  " + d.lat + ", " + d.lon + "입니다." +  "\n" +  "세부 위치: " + d.POS;
                    
        
        
                    var myIcon = L.icon({
                        iconUrl: "../assets/img/point_redpuple.png", //마커아이콘의 URL
                        iconRetinaUrl: "../assets/img/point_redpuple.png", //마커아이콘의 URL
                        // iconSize: [8, 8],  //마커아이콘의의 크기
                        iconSize: [radiusScale(d.인명피해), radiusScale(d.인명피해)],  //마커아이콘의의 크기
                        // iconAnchor: [27, 12],  //마커아이콘이 놓일 부분                    
                        popupAnchor: [-13, 10] //팝업창의 중심 위치
                    });
                    
        
                    
                    //마커는 'cities'라는 이름의 레이어에 추가한다. 
                    L.marker([d.lat, d.lon], { icon: myIcon, alt: d.lon, opacity:0.8})
                    .bindPopup(posInfo)
                    .addTo(cities); //마커는 'cities'라는 이름의 레이어에 추가한다. 
                    
                    /*
                    //기본 팝업
                    L.marker([d.lat, d.lon])
                        .bindPopup(posInfo)
                        .addTo(cities);
                    */

                }); //forEach end
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
