import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

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
    const headers = {'Authorization': environment.token}
    const body = JSON.parse(transformString)

    this.isLoading = true
    this.isSpinnerTriggered = false

    this.http.post<any>(environment.backend_url+'/transform', body, {headers}).subscribe(res => {
      this.response = res
      this.isLoading = false
      this.isSpinnerTriggered = false
    })
  }

  transformLoad($event: string) {

  }
}
