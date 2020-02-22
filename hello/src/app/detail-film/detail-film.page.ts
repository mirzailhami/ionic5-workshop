import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.page.html',
  styleUrls: ['./detail-film.page.scss'],
})
export class DetailFilmPage implements OnInit {
  film: any = {};

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.film.id = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe((q) => {
      this.film = q;
    });

    // this.route.queryParams.subscribe(() => {
    //   this.film = this.router.getCurrentNavigation().extras.state ? this.router.getCurrentNavigation().extras.state.params : {};
    //   console.log(this.film);
    // });
  }

}
