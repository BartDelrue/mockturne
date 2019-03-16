import { Component, OnInit } from '@angular/core';
import { MuseumpasService } from '../../services/museumpas.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-museumpas-matcher',
    templateUrl: './museumpas-matcher.component.html',
    styleUrls: ['./museumpas-matcher.component.scss']
})
export class MuseumpasMatcherComponent implements OnInit {

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
        })).subscribe(data => console.table(data));
    }

}
