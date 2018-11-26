import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ConsoleComponent } from './profile/console/console.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { MyWorkComponent } from './profile/mywork/mywork.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:acId', component: LoginComponent },
  { path: 'console', component: ConsoleComponent },
  { path: 'console/:acId', component: ConsoleComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'skills/:acId', component: SkillsComponent },
  { path: 'mywork', component: MyWorkComponent },
  { path: 'mywork/:acId', component: MyWorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
