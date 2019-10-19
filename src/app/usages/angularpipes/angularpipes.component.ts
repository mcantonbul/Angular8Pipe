import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularpipes',
  templateUrl: './angularpipes.component.html',
  styleUrls: ['./angularpipes.component.css']
})
export class AngularpipesComponent implements OnInit {

  //LowerCasePipe
  lowerCaseValue:any="BÜYÜK Harfler";

  //UpperCasePipe
  upperCaseValue:any="küçük hARFLER";

  //JsonPipe
  myObject:any={
    foo: 'bar', 
    baz: 'qux', 
    nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}
  };

  //TitleCasePipe
  titleCaseValue:any="örnek bir başlık";

  //SlicePipe
  sliceValue:any="eğitim";

  //PercentPipe
  percentValue:any=0.04;

  //DatePipe
  bugun=Date.now();
  
  constructor() { }

  ngOnInit() {
  }

}
