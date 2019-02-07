import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IncidentComponent } from './modules/incident/incident.component';
import { Incident } from './models/incident';
import { LoginComponent } from './modules/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'County Of The Future';

  constructor(public dialog: MatDialog) { }

  showIncident() {
    const dialogRef = this.dialog.open(IncidentComponent, {
      width: '250px',
      data: {incident: new Incident()}
    });
  }

  showLogin() {
    // const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dialog.open(LoginComponent, { data: { } });
  }

}
