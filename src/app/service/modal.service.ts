import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible: boolean = false;

  constructor() { }

  isOpen() {
    return this.visible;
  }

  toggleModal() {
    this.visible = !this.visible;
  }
}
