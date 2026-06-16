import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { SelfComponent } from './self.component';
import { ParentComponent } from './parent/parent.component';
import { UserDetailsComponent } from './userDetails/userDetails.component';
import { DirectivesListAllComponent } from './directives-list-all/directives-list-all.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { SortListComponent } from './sort-list/sort-list.component';
import { HooksComponent } from './hooks/hooks.component';
import {LifeCycleParentComponent} from './life-cycle-parent/life-cycle-parent.component';
import {DomManipulationComponent} from './dom-manipulation/dom-manipulation.component';
import {ErrorComponent} from './error/error.component';
import {ViewEncapsulationComponent} from './view-encapsulation/view-encapsulation.component';
import {DepedencyInjectionComponent} from './depedency-injection/depedency-injection.component';
import {FormValidationComponent} from './Form/form-validation/form-validation.component';
import {TemplateFormComponent} from './Form/template-form/template-form.component';
import {ReactiveFormComponent} from './Form/reactive-form/reactive-form.component';
import {TemplateFormOneComponent} from "./Form/template-form-one/template-form-one.component";
import {CustomValidationComponent} from './Form/custom-validation/custom-validation.component';
import {ConditionalValidationComponent} from './Form/conditional-validation/conditional-validation.component';
import {CustomDirectiveValidationComponent} from './Form/custom-directive-validation/custom-directive-validation.component';
import {PageNoTFound} from './utils/noComponent';
import {ProductComponent} from './product/product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {MainPageComponent} from './main-page/main-page.component';
import { SubPageOneComponent } from './sub-page-one/sub-page-one.component';
import { SubPageTwoComponent } from './sub-page-two/sub-page-two.component';
import { SubPageThreeComponent } from './sub-page-three/sub-page-three.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'self', component: SelfComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'userDetails', component: UserDetailsComponent},
  {path: 'directivesListAll', component: DirectivesListAllComponent},
  {path: 'dataFilter', component: DataFilterComponent},
  {path: 'sortList', component: SortListComponent},
  {path: 'hooks', component: HooksComponent},
  {path: 'lifeCycleHookParent', component:LifeCycleParentComponent},
  {path: 'domManipulation', component: DomManipulationComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'viewEncapsulation', component: ViewEncapsulationComponent},
  {path: 'dependencyInjection', component: DepedencyInjectionComponent},
  {path: 'formValidation', component: FormValidationComponent},
  {path: 'templateForm', component: TemplateFormComponent},
  {path: 'reactiveForm', component: ReactiveFormComponent},
  {path: 'reactiveFormOne', component: TemplateFormOneComponent},
  {path: 'customValidation', component:CustomValidationComponent},
  {path: 'consitionalValidation', component: ConditionalValidationComponent},
  {path: 'customDirectiveValidation', component: CustomDirectiveValidationComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'main-page', component: MainPageComponent, 
  children:[ 
    {path: 'sub-page-one', component: SubPageOneComponent},
    {path: 'sub-page-two', component: SubPageTwoComponent},
    {path: 'sub-page-three', component: SubPageThreeComponent},
          ]}, 
  {path:'**', component:PageNoTFound},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
