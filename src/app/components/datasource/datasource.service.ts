import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

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
    const headers = {'Authorization': environment.token}
    const body = {text: inputStr}
    this.isLoading = true
    this.isSpinnerTriggered = false
    this.http.post<any>(environment.backend_url+'/upload/text', body, {headers}).subscribe(res => {
      this.response = res
      this.isLoading = false
      this.isSpinnerTriggered = false
    })
  }

  uploadFile(inputStr: string) {

  }
}
