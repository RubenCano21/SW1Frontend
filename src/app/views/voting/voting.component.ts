import { Component } from '@angular/core';
import { ElectionService } from '../election/service/election.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Eleccion} from './models/election'

interface Usuario {
  nombre: string;
  correo: string;
  dni: string;
}




@Component({
  selector: 'app-voting',
  imports: [CommonModule],
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.scss'
})
export class VotingComponent {
usuario: Usuario = {
    nombre: 'Juan Pérez',
    correo: 'juan.perez@ejemplo.com',
    dni: '12345678'
  };

  elecciones: Eleccion[] = [];

  constructor(private eleccionService: ElectionService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerElecciones();
  }

  obtenerElecciones(): void {
    this.eleccionService.getAllElections().subscribe({
      next: (data:any) => this.elecciones = data.elections,
      error: (err:any) => console.error('Error al obtener elecciones', err)
    });
  }

  irADetalle(eleccionId: string): void {
    this.router.navigate(['/voting/detalle-eleccion', eleccionId]);
  }
}
