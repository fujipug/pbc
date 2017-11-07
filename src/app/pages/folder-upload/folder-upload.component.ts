import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'pbc-folder-upload',
  styleUrls: [ './folder-upload.style.scss' ],
  templateUrl: './folder-upload.template.html',
  providers: [ ]
})
export class FolderUploadComponent {

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {

  }
}
