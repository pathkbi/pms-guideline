import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
    <ul class="layout-menu layout-main-menu clearfix">
        <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
    </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    ngOnInit() {
        this.model = [
            {
                label: '',
                items: [
                    { label: 'Dashboards', icon: '', routerLink: ['/'], },
                ]
            },
            {
                label: 'Reservation - Retail',routerLink: ['/reservation'],
                items: [
                    { label: 'Create new reservation', icon: '', routerLink: ['/reservation/retail-new'] },
                    { label: 'Find reservation', icon: '', routerLink: ['/reservation/retail-search'] },
                    { label: 'Check-in', icon: '', routerLink: ['/reservation/retail-check-in'] },
                    { label: 'Add services', icon: '', routerLink: ['/reservation/retail-add-services'] },
                    { label: 'Check-out', icon: '', routerLink: ['/reservation/retail-check-out'] },
                    { label: 'Invoices', icon: '', routerLink: ['/reservation/retail-invoice'] },
                    // {
                    //     label: 'Retail', icon: '', routerLink: [''],
                    //     items: [
                    //         { label: 'Create new reservation', icon: '', routerLink: ['/reservation/retail-new'] },
                    //         { label: 'Find reservation', icon: '', routerLink: ['/reservation/retail-search'] },
                    //         { label: 'Check-in', icon: '', routerLink: ['/reservation/retail-check-in'] },
                    //         { label: 'Add services', icon: '', routerLink: ['/reservation/retail-add-services'] },
                    //         { label: 'Check-out', icon: '', routerLink: ['/reservation/retail-check-out'] },
                    //         { label: 'Invoices', icon: '', routerLink: ['/reservation/retail-invoice'] },
                    //     ]
                    // },

                    // {
                    //     label: 'Group', icon: '', routerLink: [''],
                    //     items: [
                    //         { label: 'Create new reservation', icon: '', routerLink: ['/reservation/group-create'] },
                    //     ]
                    // }
                ]
            },
            {
                label: 'Reservation - Group',routerLink: ['/reservation'],
                items: [
                    { label: 'Create new reservation', icon: '', routerLink: ['/reservation/group-create'] },
                    // {
                    //     label: 'Retail', icon: '', routerLink: [''],
                    //     items: [
                    //         { label: 'Create new reservation', icon: '', routerLink: ['/reservation/retail-new'] },
                    //         { label: 'Find reservation', icon: '', routerLink: ['/reservation/retail-search'] },
                    //         { label: 'Check-in', icon: '', routerLink: ['/reservation/retail-check-in'] },
                    //         { label: 'Add services', icon: '', routerLink: ['/reservation/retail-add-services'] },
                    //         { label: 'Check-out', icon: '', routerLink: ['/reservation/retail-check-out'] },
                    //         { label: 'Invoices', icon: '', routerLink: ['/reservation/retail-invoice'] },
                    //     ]
                    // },

                    // {
                    //     label: 'Group', icon: '', routerLink: [''],
                    //     items: [
                    //         { label: 'Create new reservation', icon: '', routerLink: ['/reservation/group-create'] },
                    //     ]
                    // }
                ]
            },
            {
                label: 'Housekeeping', routerLink: ['/house-keeping'],
                items: [
                    {
                        label: 'Task assignment', icon: '', routerLink: ['/house-keeping/task-assignment'],
                    },
                    {
                        label: 'Process to clean', icon: '', routerLink: ['/house-keeping/process-to-clean'],
                    },
                    {
                        label: 'Lost and found', icon: '', routerLink: ['/house-keeping/lost-and-found'],
                    },
                    {
                        label: 'Change room status', icon: '', routerLink: ['/house-keeping/room-status'],
                    }
                ]
            },
            {
                label: 'F&B',
                items: [
                    // {
                    //     label: 'Retail', icon: '', routerLink: [''],
                    // },
                    // {
                    //     label: 'Group', icon: '', routerLink: [''],
                    // }
                ]
            },
            {
                label: 'Task list',
                items: [
                    {
                        label: 'Create a new task', icon: '', routerLink: [''],
                    },
                    {
                        label: 'Process the task', icon: '', routerLink: [''],
                    },
                ]
            },
            // {
            //     label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
            //     items: [
            //         { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
            //         { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
            //         { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
            //         { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
            //         { label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon' },
            //         { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
            //         { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
            //         { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
            //         { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
            //         { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
            //         { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
            //         { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], preventExact: true },
            //         { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
            //         { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
            //         { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
            //         { label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc'] }
            //     ]
            // },
            // {
            //     label: 'Prime Blocks', icon: 'pi pi-fw pi-prime', routerLink: ['/blocks'],
            //     items: [
            //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'] },
            //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
            //     ]
            // },
            // {
            //     label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['/utilities'],
            //     items: [
            //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['utilities/icons'] },
            //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
            //     ]
            // },
            // {
            //     label: 'Pages', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages'],
            //     items: [
            //         { label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud'] },
            //         { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar'] },
            //         { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline'] },
            //         { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
            //         { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'] },
            //         { label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice'] },
            //         { label: 'Wizard', icon: 'pi pi-fw pi-star', routerLink: ['/wizard'] },
            //         { label: 'Help', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help'] },
            //         { label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error'] },
            //         { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound'] },
            //         { label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access'] },
            //         { label: 'Empty', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty'] }
            //     ]
            // },
            // {
            //     label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' }
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
            //                     items: [
            //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' },
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Start', icon: 'pi pi-fw pi-download',
            //     items: [
            //         {
            //             label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
            //         },
            //         {
            //             label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
            //         }
            //     ]
            // }
        ];
    }
}