import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccidentService{
    getData() {
        return  Observable.of ([
            {
                name: '2014년',
                accidents: [{
                    weather: "양호",
                    name: '테스트1',
                    death: 100
                }]   
            },
            {
                name: '2014년 테스트1',
                accidents: [{
                    weather: "태풍주의보",
                    name: '테스트2',
                    death: 10
                }]   
            }
        ]);  
    }
}

