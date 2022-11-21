import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  response: any = {}
  isLoading: boolean = false
  isSpinnerTriggered: boolean = false;

  constructor(private http: HttpClient) {
  }

  uploadText(inputStr: string) {
    const headers = {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJjOWU2M2IyZi03MDVlLTQxMmItOGNhZS0yMWEwOTc0OTkwNmYifQ.35uXt0b4osqWL4TEECiN0UqrsSi708meDqGpSAZ0KAE'}
    const body = {text: inputStr}
    this.isLoading = true
    this.isSpinnerTriggered = false
    this.http.post<any>('http://localhost:80/upload/text', body, {headers}).subscribe(res => {
      this.response = res
      this.isLoading = false
      this.isSpinnerTriggered = false
    })
  }

  uploadFile(inputStr: string) {

  }
}
