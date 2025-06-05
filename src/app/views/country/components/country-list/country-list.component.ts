import {Component, OnInit} from '@angular/core';
import {Country} from "../../model/country.model";
import {CountryService} from "../../service/country.service";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent, PaginationComponent, TableDirective
} from "@coreui/angular";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-country-list',
  imports: [
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    NgForOf,
    PaginationComponent,
    TableDirective,
  ],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent implements OnInit{

  countries: Country[] = [];

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.listCountries();
  }

  listCountries() {
    this.countryService.getAllCountries().subscribe({
      next: (data) => {
        this.countries = !Array.isArray(data) ? [data] : data;
      },
      error: (error) => {
        console.error('Error fetching countries data:', error);
      },
    });
  }

  getCountryById(id: number) {
    this.countryService.getCountryById(id).subscribe({
      next: (data) => {
        const country = this.countries.find(c => c.id === id);
        if (country) {
          Object.assign(country, data);
        } else {
          console.warn(`Country with id ${id} not found in the list.`);
        }
      }
    })
  }

  deleteCountry(id: number) {

  }

  getCountryName(id: number): string {
    return this.countries.find(c => c.id === id)?.name || 'Desconocido';
  }
}
