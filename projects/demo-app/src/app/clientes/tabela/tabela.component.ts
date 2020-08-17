import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Observable } from 'rxjs';
import { Parametros, Ordenacao, DataViewStateService } from 'data-view';

import { ClientesService } from '../clientes.service';
import { Cliente } from '../clientes';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  colunas: string[] = ['id', 'empresa', 'pais', 'moeda', 'departamento'];
  data$: Observable<Cliente[]>;

  constructor(
    private clientesService: ClientesService,
    private dataViewStateService: DataViewStateService
  ) {}

  ngOnInit() {
    this.data$ = this.dataViewStateService.getData((params: Parametros) =>
      this.clientesService.getAll(params)
    );
  }

  sortData(sort: Sort) {
    this.dataViewStateService.changeSort(sort as Ordenacao);
  }
}