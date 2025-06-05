import { Component } from '@angular/core';
import {navItems} from "../../../../layout/default-layout/_nav";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-election-setting',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './election-setting.component.html',
  styleUrl: './election-setting.component.scss'
})
export class ElectionSettingComponent {

  protected readonly navItems = navItems;
}
