import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="topbar-left">
            </div>

            <div class="topbar-right">
                <a id="menu-button" href="#" (click)="appMain.onMenuButtonClick($event)"
                   [ngClass]="{'menu-button-rotate': appMain.rotateMenuButton}">
                    <i class="pi pi-angle-left"></i>
               </a>

                <a id="topbar-menu-button" href="#" (click)="appMain.onTopbarMenuButtonClick($event)">
                    <i class="pi pi-bars"></i>
                </a>

                <ul class="topbar-items fadeInDown" [ngClass]="{'topbar-items-visible': appMain.topbarMenuActive}">
                    <li #settings [ngClass]="{'active-top-menu':appMain.activeTopbarItem === settings}">
                        <a href="#" (click)="appMain.onTopbarItemClick($event,settings)">
                            <i class="topbar-icon pi pi-cog"></i>
                            <span class="topbar-item-name">Settings</span>
                        </a>
                        <ul class="layout-menu" [ngClass]="{'fadeInDown':!appMain.isMobile()}">
                            <li role="menuitem">
                                <a href="#" (click)="appMain.onTopbarSubItemClick($event)"  class="w-100">
                                    <img src="assets/layout/images/flag/vietnam.png"  class="icon-language-flag"/>
                                    Tiếng Việt
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="appMain.onTopbarSubItemClick($event)"  class="w-100">
                                    <img src="assets/layout/images/flag/united-kingdom.png"  class="icon-language-flag"/>
                                    English
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="appMain.onTopbarSubItemClick($event)" class="w-100">
                                    <img src="assets/layout/images/flag/cambodia.png"  class="icon-language-flag"/>
                                    Cambodia
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #search class="search-item" [ngClass]="{'active-top-menu':appMain.activeTopbarItem === search}"
                        (click)="appMain.onTopbarItemClick($event,search)">
                        <div class="topbar-search">
                            <input type="text" placeholder="Search" />
                            <i class="pi pi-search"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class AppTopBarComponent {

    constructor(public app: AppComponent, public appMain: AppMainComponent) {}

}
