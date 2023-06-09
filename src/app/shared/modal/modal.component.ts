import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalId: string = '';

  constructor(public modal: ModalService) {}

  closeModal() {
    this.modal.toggleModal(this.modalId);
  }
}
