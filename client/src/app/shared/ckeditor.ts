import {Component, Input} from '@angular/core'
import { CKEditorModule } from 'ng2-ckeditor';

@Component({
  selector: 'CKEDITOR',
  template: `
     <textarea name="targetId" id="targetId" rows="rows" cols="cols">
         This is my CKEditor component.
     </textarea>
     <ckeditor [(ngModel)]="content" debounce="500">
      <p>Hello <strong>world</strong></p>
    </ckeditor>
  `
})
export class CKEDITOR {

    //@Input() targetId;
    @Input() rows = 10;  //you can also give default values here
    @Input() cols;     

    constructor(){}
    ngOnInit(){
       window['CKEDITOR']['replace']( 'targetId' );
    }
}