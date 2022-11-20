import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransformationService {
  response: any = {}
  isLoading: boolean = false
  isSpinnerTriggered: boolean = false

  constructor(private http: HttpClient) {
  }


  transformCustom(transformString: string) {
    const headers = {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJjOWU2M2IyZi03MDVlLTQxMmItOGNhZS0yMWEwOTc0OTkwNmYifQ.35uXt0b4osqWL4TEECiN0UqrsSi708meDqGpSAZ0KAE'}
    const body = JSON.parse(transformString)

    this.isLoading = true
    this.isSpinnerTriggered = false

    this.http.post<any>('http://localhost:80/transform', body, {headers}).subscribe(res => {
      this.response = JSON.parse(JSON.stringify(res))
      this.isLoading = false
      this.isSpinnerTriggered = false
    })
  }

  transformLoad($event: string) {

  }
}
