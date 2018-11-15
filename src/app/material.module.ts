import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatIconModule,
         MatInputModule ,
         MatFormFieldModule,
         MatCardModule,
         MatToolbarModule,
         MatMenuModule,
         MatDividerModule,
         MatListModule,
         MatExpansionModule,
         MatTableModule,
         MatPaginatorModule,
         MatGridListModule
       } from '@angular/material';
@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
