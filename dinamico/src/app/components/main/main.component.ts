import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  NombreCompleto = "Facundo Nicolas Duran";
  Descripcion = "Estudiante de Ingeniería en Sistemas de Información";
  Biografia = "Actualmente estudiante de la carrera de Ingeniería en Sistemas de Información con conocimientos elementales en desarrollo de software, experiencia en creación y edición de sitios web. Aprendizaje constante, disciplina y constancia.";

  constructor() { }

  ngOnInit(): void {
  }

}
