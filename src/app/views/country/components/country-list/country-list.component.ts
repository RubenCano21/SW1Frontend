import { Component } from '@angular/core';
import {Country} from "../../model/country.model";

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {

  country: Country[] = [];

}
