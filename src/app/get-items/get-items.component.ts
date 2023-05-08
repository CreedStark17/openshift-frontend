import { Component } from '@angular/core';
import { Item } from "src/app/interfaces/Item";
import {CallBackendService} from "../call-backend.service";

@Component({
  selector: 'app-get-items',
  templateUrl: './get-items.component.html',
  styleUrls: ['./get-items.component.css']
})
export class GetItemsComponent {

  backendItems?: Item[];

  constructor(private callBackendService: CallBackendService) {}

  ngOnInit(): void {
    this.callBackendService.getItems().subscribe((response) => {
      if (response) {
        this.backendItems = response;
      }
    })
  }
}
