import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import * as moment from 'moment';
@Component({
  selector: 'ngx-order-history',
  templateUrl: 'order-history.html',
  styleUrls: ['order-history.scss'],
})
export class OrderHistoryComponent implements OnInit {
  historyData: Array<any>;
  orderData: any;
  productHistory: Array<any>;
  moment: any = moment;
  constructor(protected ref: NbDialogRef<OrderHistoryComponent>) {
  }

  ngOnInit() {
    this.productHistory = this.orderData?.products.map(p => p.history?.map(h => ({ sku: p.sku, history: h }))).flat()
      .sort((a, b) => {
        const n = a.sku.localeCompare(b.sku);
        if (n === 0) {
          return moment(a.history.dateCreated) > moment(b.history.dateCreated) ? 1 : 0;
        }
        return n;
      });
  }


  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
