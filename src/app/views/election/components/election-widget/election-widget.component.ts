import { Component } from '@angular/core';
import {ColComponent, RowComponent, TemplateIdDirective, WidgetStatFComponent} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";
import {cilArrowRight, cilChartPie} from "@coreui/icons";

@Component({
  selector: 'app-election-widget',
  imports: [
    RowComponent,
    ColComponent,
    WidgetStatFComponent,
    TemplateIdDirective,
    IconDirective
  ],
  templateUrl: './election-widget.component.html',
})
export class ElectionWidgetComponent {

  icons = { cilChartPie, cilArrowRight };
}
