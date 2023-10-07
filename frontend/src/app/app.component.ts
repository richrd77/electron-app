import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electron-test';

  constructor() {
    console.log((window as any).require('electron').ipcRenderer, 'ipc', (window as any).require)
  }
}
