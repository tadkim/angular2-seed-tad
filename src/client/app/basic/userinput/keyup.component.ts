import { Component } from '@angular/core';
@Component({
  selector: 'keyup-loopback',
  templateUrl: 'app/basic/userinput/keyup.component.html'
})
export class KeyupComponent { 

  title: string;
  supportingText: string;
  ngOnInit() {
    this.title = "loop-back 예제";
    this.supportingText = "사용자입력값을 템플릿참조변수에서 얻기";
  }

  getInterpolateData() {
    return {
      title: this.title,
      supportingText: this.supportingText
    };
  }

  
}