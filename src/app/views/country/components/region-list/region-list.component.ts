import {Component, OnInit} from '@angular/core';
import {Region} from "../../model/region.model";
import {CountryService} from "../../service/country.service";
import {
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  PaginationComponent, TableDirective
} from "@coreui/angular";
import {NgForOf} from "@angular/common";
import {RegionFormComponent} from "../region-form/region-form.component";
import {Country} from "../../model/country.model";

@Component({
  selector: 'app-countryService-list',
  imports: [
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    NgForOf,
    PaginationComponent,
    TableDirective,
    RegionFormComponent
  ],
  templateUrl: './region-list.component.html',
})
export class RegionListComponent implements OnInit {

  regions: Region[] = [];

  countries: Country[] = [];

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.listRegions();
    this.loadCountries();
  }

  listRegions() {
    this.countryService.getAllRegions().subscribe({
      next: (data) => {
        this.regions = !Array.isArray(data) ? [data] : data;
      },
      error: (error) => {
        console.error('Error fetching regions data:', error);
      },
    });
  }

  loadCountries() {
    this.countryService.getAllCountries().subscribe({
      next: (data) => {
        this.countries = !Array.isArray(data) ? [data] : data;
      },
      error: (error) => {
        console.error('Error fetching countries data:', error);
      },
    })
  }

  getCountryName(id: number): string {
    return this.countries.find(c => c.id === id)?.name || 'Desconocido';
  }

  onRegionAdded(region: Region): void {
    this.regions.push(region);
  }


}
