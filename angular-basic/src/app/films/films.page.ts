import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.films = this.data.getFilms;
  }

}
