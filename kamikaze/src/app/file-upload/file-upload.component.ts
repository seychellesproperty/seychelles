import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FileSystemFileEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: [
    '../app.component.scss',
    './file-upload.component.scss'
  ]
})
export class FileUploadComponent implements OnInit {

  @Input() acceptType = 'application/pdf,image/*';
  @Input() label = 'File Upload';
  @Input() upload = null;
  @Input() isNoTitle = false;
  @Output() uploadChange = new EventEmitter();
  @ViewChild('fileImg') fileImg: any;

  insideText = 'Browse or Drop files here';
  checkFile = false;

  constructor() {
  }

  ngOnInit() {
  }

  removeFile() {
    this.fileImg.nativeElement.value = '';
    this.insideText = 'Browse or Drop files here';
    this.checkFile = false;
    this.uploadChange.emit(null);
  }

  uploadTaskAttachmentByID(event: any, isDrop: boolean) {
    if (event.files || event.target.files.length > 0) {
      if (isDrop) {
        this.insideText = event.files[0].fileEntry.name;
        this.checkFile = true;
        if (event.files[0].fileEntry.isFile) {
          const fileEntry = event.files[0].fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            this.uploadChange.emit(file);
          });
        }
      } else {
        this.uploadChange.emit(event.target.files[0]);
        this.insideText = event.target.files[0].name;
        this.checkFile = true;
      }
    }
  }

}
