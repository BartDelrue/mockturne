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

  public mpData: any;
  public userData: {};

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
    });
  }

  onSubmit() {
    this.userData = this.mpData[this.form.value.mpas] || {};
  }
}
