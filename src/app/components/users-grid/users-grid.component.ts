import { Component } from '@angular/core';

@Component({
  selector: 'users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss']
})
export class UsersGridComponent {
  public gridData = [
    { channel: 'Organic Search', conversion: 8232, users: 70500 },
    { channel: 'Direct', conversion: 6574, users: 24900 },
    { channel: 'Referral', conversion: 4932, users: 20000 },
    { channel: 'Social Media', conversion: 2928, users: 19500 },
    { channel: 'Email', conversion: 2456, users: 18100 },
    { channel: 'Other', conversion: 1172, users: 16540 }
  ];
}
