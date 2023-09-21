import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {

  constructor(private router: Router) { }

  submitQuestionnaire() {
    // Handle submission logic here
    // You can access user selections from the QuestionComponent
    this.router.navigate(['/']);
  }

}
