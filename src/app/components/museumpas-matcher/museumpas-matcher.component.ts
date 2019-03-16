import { Component, OnInit } from '@angular/core';
import { MuseumpasService } from '../../services/museumpas.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-museumpas-matcher',
    templateUrl: './museumpas-matcher.component.html',
    styleUrls: ['./museumpas-matcher.component.scss']
})
export class MuseumpasMatcherComponent implements OnInit {
    data: any;

    constructor(private museumpasService: MuseumpasService) {
    }
    
    ngOnInit() {
        this.museumpasService.onDataReady$.pipe(map(data => {
            data = data.reduce((acc, current) => {
                if (!acc[current.passholder_id_hackaton]) {
                    acc[current.passholder_id_hackaton] = []
                }
                acc[current.passholder_id_hackaton].push(current);
                return acc;
            }, {});
            return data
        })).subscribe(data => { 
            this.data = data;
            console.log(data[4]);
            
            var mijnId:number = 4; 
            var num:number = 1; 
            var score:number = 0; 
            var besteScore:number = 0;
            var matchID = -1;
            
            let mijnMuseums: string[];
            mijnMuseums = [];
            for (let entry of data[mijnId]) {
                console.log(entry); 
                mijnMuseums.push(entry.museumnaam_nl);
            }
            console.log(this.data[4].museumnaam_nl);

            console.log("a");
            while(num<5000) {
                score = 0;
                if(data[num] != null){
                    for (let entry of data[num]) {
                        if(mijnMuseums.indexOf(entry.museumnaam_nl)) {
                            score++;
                        }
                        if(besteScore<score) {
                            besteScore=score;
                            var matchID = num;
                        }
                    }
                    
                }
                
                num++;
            }
            console.log(matchID);

            
        });

    }
    


}
