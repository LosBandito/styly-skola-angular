import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'prvy',
  templateUrl: './prvy.component.html',
  styleUrls: ['./prvy.component.css'],
})
export class PrvyComponent {
  name = 'Angular ' + VERSION.major;
  bool: boolean = true;

  styles: any = {
    'background-color': this.bool ? 'orange' : 'blue',
  };

  zmenBool(): void {
    this.bool = !this.bool;
  }

  farba(): void {
    if (this.bool == this.bool) {
    }
  }
}
