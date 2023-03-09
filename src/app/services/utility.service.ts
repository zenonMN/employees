import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  validateResponse(response: any, fallbackResponse: any = undefined) {
    if(!response.error) return response;

    return fallbackResponse;
  }
}
