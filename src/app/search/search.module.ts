import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SearchResultModule } from '../search-results/search-results.module';
import { SearchComponent } from './search.component';

@NgModule({
    declarations:[
        SearchComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        SearchResultModule
    ],
    exports:[
        SearchComponent
    ]
})
export class SearchModule{}