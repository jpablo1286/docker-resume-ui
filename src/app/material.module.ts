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
         MatGridListModule,
         MatSnackBarModule
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
    MatGridListModule,
    MatSnackBarModule
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
    MatGridListModule,
    MatSnackBarModule
  ]
})
export class MaterialModule {}
