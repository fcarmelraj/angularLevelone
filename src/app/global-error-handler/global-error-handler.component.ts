import { Component, ErrorHandler, Injectable } from '@angular/core';

@Component({
  selector: 'app-global-error-handler',
  templateUrl: './global-error-handler.component.html',
  styleUrls: ['./global-error-handler.component.css']
})
@Injectable()
export class GlobalErrorHandlerComponent implements ErrorHandler {
  handleError(error: any, stackTrace=null, reason = null): void {
    console.log('Global error caught:');
    console.log(error)
    // console.log(stackTrace)
    // add custom handling logic here (logging, user notification, etc.)
  }
}
