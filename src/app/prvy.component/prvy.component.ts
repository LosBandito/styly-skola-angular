import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'prvy',
  templateUrl: './prvy.component.html',
  styleUrls: ['./prvy.component.css'],
})
export class PrvyComponent {
  name = 'Angular ' + VERSION.major;
}
