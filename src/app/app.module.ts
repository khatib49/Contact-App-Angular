import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { HeadermodalComponent } from './modal/headermodal/headermodal.component';
import { BodymodalComponent } from './modal/bodymodal/bodymodal.component';
import { FootermodalComponent } from './modal/footermodal/footermodal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'edit/:id' , component:EditComponent},
  {path:'contact-details/:id' , component:ContactDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactItemComponent,
    ContactsComponent,
    ContactListComponent,
    ModalComponent,
    HeadermodalComponent,
    BodymodalComponent,
    FootermodalComponent,
    EditComponent,
    HomeComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
