import { Injectable } from '@angular/core';
import { TaxaBitcoinService } from './taxa-bitcoin.service';

@Injectable()
export class TemporizadorService {
  private contador: number = 30;
  private temporizador: any;

  constructor(public taxaBitcoinService: TaxaBitcoinService) {
    this.temporizador = setInterval(() => {
      this.contador--;
      if (this.contador == -1) {
        this.contador = 30;
        this.taxaBitcoinService.getRates();
      }
    }, 1000);
  }

  getContador() {
    return this.contador;
  }
}
