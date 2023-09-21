import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import { QuestionsComponent } from './questions/questions.component';
import { SubmissionComponent } from './submission/submission.component';


const routes: Routes = [
  { path: '', component: UserComponent },
   { path: 'questions/:id', component: QuestionsComponent },
{ path: 'submission', component: SubmissionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
