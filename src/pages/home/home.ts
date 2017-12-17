import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { db } from "../../providers/firebase.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  item: string;
  itens: Array<any> = [];

  constructor(public navCtrl: NavController) {

  }

  setItem() {
    if (this.item !== '') {
      db.collection('item').add({
        item: this.item
      })
        .then((data) => {
          this.getItens();
          this.item = '';
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  getItens() {
    db.collection('item').get()
      .then((data) => {
        this.itens = [];
        data.forEach((d) => {
          this.itens.push({
            id: d.id,
            name: d.data().item
          });
          this.itens.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteItem(item: any) {
    db.collection('item').doc(item.id).delete()
      .then((data) => {
        this.getItens();
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
