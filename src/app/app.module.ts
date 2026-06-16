import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ContentComponent } from './content/content.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SelfComponent } from './self.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';   
import { UserDetailsComponent } from './userDetails/userDetails.component';
import { UpdateColorDirective } from './Directive/update-color.directive';
import { ShowPasswordDirective } from './Directive/show-password.directive';
import { DirectivesListAllComponent } from './directives-list-all/directives-list-all.component';
import { CapitalizeCustomPipe } from './Pipe/capitalize.custom.pipe';
import { TrimTextCustomPipe } from './Pipe/trimText.custom.pipe';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { MyFilterPipe } from './Pipe/myFilter.custom.pipe';
import { PureSortCustomPipe } from './Pipe/pure.sort.custom.pipe';
import { ImpureSortCustomPipe } from './Pipe/impure.sort.custom.pipe';
import { SortListComponent } from './sort-list/sort-list.component';
import { HooksComponent } from './hooks/hooks.component';
import { LifeCycleParentComponent } from './life-cycle-parent/life-cycle-parent.component';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';
import { DomManipulationComponent } from './dom-manipulation/dom-manipulation.component';
import { DomManipulationChildComponent } from './dom-manipulation-child/dom-manipulation-child.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandlerComponent } from './global-error-handler/global-error-handler.component';
import { ErrorHandler } from '@angular/core';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ViewEncapsulationChildComponent } from './view-encapsulation-child/view-encapsulation-child.component';
import { ViewEncapsulationGrantChildComponent } from './view-encapsulation-grant-child/view-encapsulation-grant-child.component';
import { DepedencyInjectionComponent } from './depedency-injection/depedency-injection.component';
import { Car, Engine, Fuel, FuelInjector, Piston } from './Service/car.service';
import { UseClassDependencyComponent } from './use-class-dependency/use-class-dependency.component';
import { UseFactoryDependencyComponent } from './use-factory-dependency/use-factory-dependency.component';
import { UseValueDependencyComponent } from './use-value-dependency/use-value-dependency.component';
import { InjectionTokensComponent } from './injection-tokens/injection-tokens.component';
import { FormValidationComponent } from './Form/form-validation/form-validation.component';
import { TemplateFormComponent } from './Form/template-form/template-form.component';
import { ReactiveFormComponent } from './Form/reactive-form/reactive-form.component';
import {TemplateFormOneComponent} from "./Form/template-form-one/template-form-one.component";
import { CustomValidationComponent } from './Form/custom-validation/custom-validation.component';
import { ConditionalValidationComponent } from './Form/conditional-validation/conditional-validation.component';
import { CustomDirectiveValidationComponent } from './Form/custom-directive-validation/custom-directive-validation.component';
import { ErrorComponentOne } from './utils/error.component'; 
import { BorderStandAloneDirective } from './Directive/app.standalone.directive';
import { PageNoTFound } from './utils/noComponent';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SubPageOneComponent } from './sub-page-one/sub-page-one.component';
import { SubPageTwoComponent } from './sub-page-two/sub-page-two.component';
import { SubPageThreeComponent } from './sub-page-three/sub-page-three.component';
import { GetPostApiComponent } from './get-post-api/get-post-api.component';
import { LocalJsonDataComponent } from './local-json-data/local-json-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
    ContentComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    SelfComponent,
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    UserDetailsComponent,
    UpdateColorDirective,
    ShowPasswordDirective,
    DirectivesListAllComponent,
    CapitalizeCustomPipe,
    TrimTextCustomPipe,
    DataFilterComponent,
    MyFilterPipe,
    PureSortCustomPipe,
    ImpureSortCustomPipe,
    SortListComponent,
    HooksComponent,
    LifeCycleParentComponent,
    LifeCycleChildComponent,
    DomManipulationComponent,
    DomManipulationChildComponent,
    ErrorComponent,
    ViewEncapsulationComponent,
    ViewEncapsulationChildComponent,
    ViewEncapsulationGrantChildComponent,
    DepedencyInjectionComponent,
    UseClassDependencyComponent,
    UseFactoryDependencyComponent,
    UseValueDependencyComponent,
    InjectionTokensComponent,
    FormValidationComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TemplateFormOneComponent,
    CustomValidationComponent,
    ConditionalValidationComponent,
    CustomDirectiveValidationComponent,
    ErrorComponentOne,
    PageNoTFound,
    ProductComponent,
    ProductDetailComponent,
    MainPageComponent,
    SubPageOneComponent,
    SubPageTwoComponent,
    SubPageThreeComponent,
    GetPostApiComponent,
    LocalJsonDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BorderStandAloneDirective
  ],
  providers: [{provide:ErrorHandler, useClass: GlobalErrorHandlerComponent}, Car, Piston, FuelInjector, Engine, Fuel],
  bootstrap: [AppComponent]
})
export class AppModule { }
