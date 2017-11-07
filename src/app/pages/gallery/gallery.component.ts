import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'pbc-gallery',
  styleUrls: [ './gallery.style.scss' ],
  templateUrl: './gallery.template.html',
  providers: [ ]
})
export class GalleryComponent {

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {

  }
}
