import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  bpi: {
    [key in 'USD' | 'BRL']: {
      rate_float: number;
    };
  };
}

interface RatesList {
  timestamp: string;
  USD: number;
  BRL: number;
}

@Injectable()
export class TaxaBitcoinService {
  currentRates: Response;
  ratesList: Array<RatesList> = [];

  constructor(private http: HttpClient) {}

  getRates() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.currentRates = data;
        this.ratesList.push({
          timestamp: this.currentRates.time.updated,
          USD: this.currentRates.bpi.USD.rate_float,
          BRL: this.currentRates.bpi.BRL.rate_float,
        });
      });
  }
}
