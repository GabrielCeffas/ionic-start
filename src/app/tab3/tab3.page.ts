import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public produtos: [] = [];

  constructor(private storage: Storage) {}
  
  load(){
    this.storage.get('produtos').then((produtos) => {
      this.produtos = produtos || [];
    });
  }
  limpar(){
    this.storage.clear();
    this.load();
    
  }
  deletar(id){
    this.produtos.splice(id, 1);
    this.storage.set('produtos', this.produtos);

  }
  ngOnInit() {
    this.load();
  }
  ionViewWillEnter(){
    this.load();
  }
  
}
