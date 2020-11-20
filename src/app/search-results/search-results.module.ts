import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results.component';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';;


@NgModule({
    declarations:[
        SearchResultsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        PaginatorModule,
        TableModule
        
    ],
    exports:[
        SearchResultsComponent
    ]
})
export class SearchResultModule{}