import { Component, Input, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalId: string = '';

  constructor(
    public modal: ModalService,
    public element: ElementRef
  ) {
    console.log('element inside ModalComponent', element);
  }

  closeModal() {
    this.modal.toggleModal(this.modalId);
  }

  ngOnInit() {
    document.body.appendChild(this.element.nativeElement);
  }
}
