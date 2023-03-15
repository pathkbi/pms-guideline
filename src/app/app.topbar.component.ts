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
                                <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                    <i class="pi pi-fw pi-palette"></i>
                                    <span>Change Theme</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                    <i class="pi pi-fw pi-star"></i>
                                    <span>Favorites</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                    <i class="pi pi-fw pi-lock"></i>
                                    <span>Lock Screen</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                    <i class="pi pi-fw pi-image"></i>
                                    <span>Wallpaper</span>
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
