import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { NavController,AlertController,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public photoService: PhotoService, private modalController:ModalController) {}
  
  viewimage(){
    
  }

  ngOnInit() {
    this.photoService.loadSaved();
  }
  
}
