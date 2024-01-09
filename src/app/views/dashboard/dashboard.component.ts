import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }

  redirectTo(page: string) {
    switch (page) {
      case 'transfers':
        this.router.navigate(['/transfers']);
        break;
      case 'sirone':
        this.router.navigate(['/sirone']);
        break;
      case 'settings':
        this.router.navigate(['/settings']);
        break;
      case 'beneficiaries':
        this.router.navigate(['/beneficiaries']);
        break;
      default:
        break;
    }

}}
