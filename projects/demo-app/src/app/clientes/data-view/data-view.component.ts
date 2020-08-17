import { Component, OnInit } from '@angular/core';

import { TabelaComponent } from '../tabela/tabela.component';
import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
})
export class DataViewComponent implements OnInit {
  table = TabelaComponent;
  filter = FiltroComponent;

  constructor() {}

  ngOnInit(): void {}
}
