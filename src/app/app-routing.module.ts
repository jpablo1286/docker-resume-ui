import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ConsoleComponent } from './profile/console/console.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { MyWorkComponent } from './profile/mywork/mywork.component';
import { PersonalDataComponent } from './profile/personaldata/personaldata.component';
import { PrintComponent} from './profile/print/print.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:acId', component: LoginComponent },
  { path: 'console', component: ConsoleComponent },
  { path: 'console/:acId', component: ConsoleComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'skills/:acId', component: SkillsComponent },
  { path: 'mywork', component: MyWorkComponent },
  { path: 'mywork/:acId', component: MyWorkComponent },
  { path: 'personaldata', component: PersonalDataComponent },
  { path: 'personaldata/:acId', component: PersonalDataComponent },
  { path: 'print', component: PrintComponent },
  { path: 'print/:acId', component: PrintComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
