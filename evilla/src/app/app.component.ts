

import { Component } from '@angular/core';
import { ApiUrlService } from './shared/services/apiUrl.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private apiUrl: ApiUrlService)
{
}

  title = 'evilla';
}
