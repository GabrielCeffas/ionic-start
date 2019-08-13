import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nota = 1
  nome = ""
  emoji = ""

  public produtos: Produto [] = [];
  constructor(private storage: Storage) {
  }
  load(){
    this.storage.get('produtos').then((produtos) => {
      this.produtos = produtos || [];
    });
  }
  ngOnInit() {
    this.load();
  }
  
  enviar(){
    this.produtos.push({
      nome: this.nome, 
      nota: this.nota,
      emoji: this.emoji
    }); 
    this.storage.set('produtos', this.produtos);
  }
  ionViewWillEnter(){
    this.load();
  }
  
 
}
class Produto {
  nome: string;
  nota: number;
  emoji: string;
}
