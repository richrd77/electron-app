import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electron-test';

  ipc: any;
  bridge: any;

  constructor() {
    this.ipc = (window as any).require('electron').ipcRenderer;
    this.bridge = (window as any).require('electron').contextBridge;

    this.ipc.send('test-send', { d: 'data from ng' });
    this.ipc.on('test-reply', function (a: any, b: any) {
      console.log(b, 'fromBE')
    })


  }
}
