import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval} from "rxjs";
import {environment} from "../../../environments/environment";

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
    const headers = {'Authorization': environment.token}
    return this.http.get<any>(environment.backend_url+'/service', {headers})
  }

  sendRequests(service: string, params: any) {
    console.log(service, params)
    const headers = {'Authorization': environment.token}
    const body = {service: service, params: params}
    this.isLoading = true
    this.isSpinnerTriggered = false
    return this.http.post<any>(environment.backend_url+'/send', body, {headers})
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
    const headers = {'Authorization': environment.token}
    this.http.get<any>(environment.backend_url+'/poll', {headers}).subscribe((res) => {

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
