import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { ConsoleComponent } from './profile/console/console.component';
import { AppRoutingModule } from './app-routing.module';
import { DegreeComponent } from './profile/degree/degree.component';
import { HttpClientModule } from '@angular/common/http';
import { CertificateComponent } from './profile/certificate/certificate.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { LanguageComponent } from './profile/language/language.component';
import { MyWorkComponent } from './profile/mywork/mywork.component';
import { AwardComponent } from './profile/award/award.component';
import { ExpirienceComponent } from './profile/expirience/expirience.component';
import { ProjectComponent } from './profile/project/project.component';
import { CodeComponent } from './profile/code/code.component';
import { PersonalDataComponent } from './profile/personaldata/personaldata.component';
import { FieldComponent } from './profile/field/field.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsoleComponent,
    DegreeComponent,
    CertificateComponent,
    SkillsComponent,
    LanguageComponent,
    MyWorkComponent,
    AwardComponent,
    ExpirienceComponent,
    ProjectComponent,
    CodeComponent,
    PersonalDataComponent,
    FieldComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
