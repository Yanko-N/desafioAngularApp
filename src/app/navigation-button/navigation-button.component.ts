import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.css'
})
export class NavigationButtonComponent {
  @Input() routePath:string='/';// routa default
  @Input() displayText: string = 'Home'; // texto Default

   private router;
  constructor( _router: Router) {
    this.router=_router;
  }

  navigateToRoute() {
    this.router.navigate([this.routePath]);
  }
}
