import { Injectable } from '@angular/core';
import { DataResult, orderBy, process, SortDescriptor } from '@progress/kendo-data-query';
import { Observable, of } from 'rxjs';
// import { products } from '../data/data.products';
import {mockTechKpis} from "../data/mock-tech-kpis";

@Injectable()
export class SpendSummaryGridService {
    public getMockTechKpis(
        skip: number,
        pageSize: number,
        sortDescriptor: SortDescriptor[],
        filterTerm: number | null
    ): Observable<DataResult> {
        let data;
        if (filterTerm) {
            data = process(orderBy(mockTechKpis, sortDescriptor), {
                filter: {
                    logic: 'and',
                    filters: [
                        {
                            field: 'CategoryID',
                            operator: 'eq',
                            value: filterTerm
                        }
                    ]
                }
            }).data;
        } else {
            data = orderBy(mockTechKpis, sortDescriptor);
        }
        return of({
            data: data.slice(skip, skip + pageSize),
            total: data.length
        });
    }
}
