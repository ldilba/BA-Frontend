import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  responses: any = []
  expectedResponses: number = 0
  currentResponses: number = 0
  isLoading: boolean = false
  isSpinnerTriggered: boolean = false;
  loop: any


  constructor(private http: HttpClient) {
  }

  getServices() {
    const headers = {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJjOWU2M2IyZi03MDVlLTQxMmItOGNhZS0yMWEwOTc0OTkwNmYifQ.35uXt0b4osqWL4TEECiN0UqrsSi708meDqGpSAZ0KAE'}
    return this.http.get<any>('http://localhost:80/service', {headers})
  }

  sendRequests(service: string, params: any) {
    console.log(service, params)
    const headers = {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJjOWU2M2IyZi03MDVlLTQxMmItOGNhZS0yMWEwOTc0OTkwNmYifQ.35uXt0b4osqWL4TEECiN0UqrsSi708meDqGpSAZ0KAE'}
    const body = {service: service, params: params}
    this.isLoading = true
    this.isSpinnerTriggered = false
    return this.http.post<any>('http://localhost:80/send', body, {headers})
  }

  pollResponses(expectedResponses: number) {
    this.expectedResponses = expectedResponses
    this.currentResponses = 0
    this.loop = interval(2000).subscribe(x=>{this.poll()})
  }

  poll() {
    console.log(this.currentResponses, this.expectedResponses)
    if (this.currentResponses >= this.expectedResponses) {
      this.loop.unsubscribe()
      this.isLoading = false
      this.isSpinnerTriggered = false
      return
    }
    console.log("poll")
    const headers = {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJjOWU2M2IyZi03MDVlLTQxMmItOGNhZS0yMWEwOTc0OTkwNmYifQ.35uXt0b4osqWL4TEECiN0UqrsSi708meDqGpSAZ0KAE'}
    this.http.get<any>('http://localhost:80/poll', {headers}).subscribe((res) => {

      if (res['successful'] == true) {
        for (const message of res['response']) {
          for(const messageItem of message){
            console.log(messageItem)
            this.responses.push(messageItem)
          }
        }

        this.currentResponses += this.responses.length
        console.log('current responses: '+this.currentResponses)
      }
    })
  }
}
