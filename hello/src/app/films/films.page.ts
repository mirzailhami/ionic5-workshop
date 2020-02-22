import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpEvent } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films: any;
  isLoading = false;

  constructor(private http: HttpClient, private loading: LoadingController) { }

  async ngOnInit() {
    // const loading = this.loading.create({
    //   spinner: 'dots'
    // });
    // (await loading).present();

    this.isLoading = true;
    this.films = await this.http.get(`https://swapi.co/api/films/`).toPromise();

    this.isLoading = false;
    // (await loading).dismiss();
  }

  loadData() {
    console.log('load data');
  }

}
