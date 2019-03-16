import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MuseumpasService {

    onDataReady$: Subject<any> = new Subject<any>();

    constructor(private http: HttpClient) {
        this.init();
    }

    init() {
        let data = [];

        const getdata = (offset, limit) => {
            this.http.get(`https://datatank.stad.gent/4/musea/museumpas.json?offset=${offset}&limit=${limit}`)
                .subscribe((value: any[]) => {
                    if (value.length) {
                        data = data.concat(value);
                        getdata(offset + limit, limit);
                    } else {
                        this.onDataReady$.next(data);
                    }
                })
        };
        getdata(0, 1000);
    }


}
