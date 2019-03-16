import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MuseumpasService } from './services/museumpas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public data: any;
  public mpData: any;
  public userData: {};
  public matches: any;

  form: FormGroup;

  constructor(private museumpasService: MuseumpasService, private  fb: FormBuilder) {}

  ngOnInit() {
    
    this.form = this.fb.group({
      mpas: [null, Validators.required]
    })
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
      this.mpData = data
      this.data = data;
        console.log(data[4]);
        
        var mijnId:number = 4; 
        var num:number = 1; 
        var score:number = 0; 
        var besteScore:number = 0;
        var matchIDfirst = -1;
        var matchIDsecond = -1;
        var matchIDthird = -1;

        this.matches.push()
        let mijnMuseums: string[];
        mijnMuseums = [];
        for (let entry of data[mijnId]) {
            mijnMuseums.push(entry.museumnaam_nl);
        }

        while(num<5000) {
            score = 0;
            if(data[num] != null){
                for (let entry of data[num]) {
                    if(mijnMuseums.indexOf(entry.museumnaam_nl)) {
                        score++;
                    }
                    if(besteScore<score) {
                        besteScore=score;
                        var matchIDfirst = num;
                    }
                }
                
            }
            
            num++;
        }

        this.matches.push({id: matchIDfirst, code: '9000'});
        console.log(matchIDfirst);
    });
  }

  onSubmit() {
    this.userData = this.mpData[this.form.value.mpas] || {};
  }
}
