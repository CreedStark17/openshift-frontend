import {Component } from '@angular/core';
import {CallBackendService} from "../call-backend.service";

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {

  backendResponse: string = "hello";

  constructor(private callBackendService: CallBackendService) {  }

  ngOnInit(): void {
    this.callBackendService.getBackendResponse().subscribe((response) => {
      if (response) {
        this.backendResponse = response;
      }
    })
  }
}
