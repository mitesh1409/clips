import { Component } from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal: boolean = false;

  constructor(public modal: ModalService) {

  }

  ngOnInit() {
    setInterval(
      () => {
        this.showModal = !this.showModal;
        console.log('modals', this.modal.modals);
      },
      1000
    );
  }
}
