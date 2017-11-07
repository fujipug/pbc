import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FileUploader } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

declare var jQuery: any;
// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'pbc-upload',
  styleUrls: [ './upload.style.scss' ],
  templateUrl: './upload.template.html',
  providers: [ ]
})
export class UploadComponent {
	public uploader:FileUploader = new FileUploader({url: URL});
	public hasBaseDropZoneOver:boolean = false;
	public hasAnotherDropZoneOver:boolean = false;

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  	jQuery('select').material_select()
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
