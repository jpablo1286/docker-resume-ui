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
         MatSnackBarModule,
         MatTooltipModule
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
    MatSnackBarModule,
    MatTooltipModule
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
    MatSnackBarModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
