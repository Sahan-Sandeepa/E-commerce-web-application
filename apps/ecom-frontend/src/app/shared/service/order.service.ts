import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminOrderDetail, UserOrderDetail } from '../model/order.model';
import { createPaginationOption, Page, Pagination } from '../model/request.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  http = inject(HttpClient);

  getOrdersForConnectedUser(pageRequest: Pagination): Observable<Page<UserOrderDetail>> {
    const params = createPaginationOption(pageRequest);
    return this.http.get<Page<UserOrderDetail>>(`${environment.apiUrl}/orders/user`, { params });
  }

  getOrdersForAdmin(pageRequest: Pagination): Observable<Page<AdminOrderDetail>> {
    const params = createPaginationOption(pageRequest);
    return this.http.get<Page<AdminOrderDetail>>(`${environment.apiUrl}/orders/admin`, { params });
  }

  deleteOrder(publicId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/orders`, { params: { publicId } });
  }
}