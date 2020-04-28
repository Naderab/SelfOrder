import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'app/app.routing';
import { PresentationModule } from 'app/presentation/presentation.module';
import { SectionsModule } from 'app/sections/sections.module';
import { ComponentsModule } from 'app/components/components.module';
import { ExamplesModule } from 'app/examples/examples.module';



@NgModule({
  declarations: [AdminComponent,
    ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    PresentationModule,
    SectionsModule,
    ComponentsModule,
    ExamplesModule
    
  ]
})
export class AdminModule { }
