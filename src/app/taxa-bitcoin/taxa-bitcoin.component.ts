import { Component, OnInit } from '@angular/core';
import { TaxaBitcoinService } from '../services/taxa-bitcoin.service';
import { TemporizadorService } from '../services/temporizador.service';

@Component({
  selector: 'app-taxa-bitcoin',
  templateUrl: './taxa-bitcoin.component.html',
  styleUrls: ['./taxa-bitcoin.component.css'],
})
export class TaxaBitcoinComponent implements OnInit {
  constructor(
    public taxaBitcoinService: TaxaBitcoinService,
    public temporizadorService: TemporizadorService
  ) {}

  ngOnInit() {
    this.taxaBitcoinService.getRates();
  }

  getCurrentRate() {
    return this.taxaBitcoinService.currentRates;
  }

  update() {
    this.taxaBitcoinService.getRates();
  }
}
