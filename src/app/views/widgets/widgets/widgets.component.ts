import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { WidgetsBrandComponent } from '../widgets-brand/widgets-brand.component';
import { IconDirective } from '@coreui/icons-angular';
import { WidgetsDropdownComponent } from '../widgets-dropdown/widgets-dropdown.component';
import { DocsExampleComponent } from '@docs-components/public-api';
import {  CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent, WidgetStatBComponent, ProgressComponent, TemplateIdDirective, CardGroupComponent, WidgetStatCComponent } from '@coreui/angular';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
    imports: [ CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, WidgetsDropdownComponent, RowComponent, ColComponent, WidgetStatBComponent,  ProgressComponent,  TemplateIdDirective, IconDirective, WidgetsBrandComponent, CardGroupComponent, WidgetStatCComponent]
})
export class WidgetsComponent implements AfterContentInit {
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
