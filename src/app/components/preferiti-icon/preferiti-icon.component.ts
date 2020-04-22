import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-preferiti-icon',
  templateUrl: './preferiti-icon.component.html',
  styleUrls: ['./preferiti-icon.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PreferitiIconComponent),
    multi: true
  }]
})
export class PreferitiIconComponent implements OnInit {

  onChange: any = ()=>{};
  onTouch: any = ()=>{};

  value: boolean;

  constructor() { }

  writeValue(obj: boolean): void {
    this.value=obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectRate(item: boolean){
    this.value = item;
    this.onTouch(item);
    this.onChange(item);
  }

  ngOnInit(): void {
  }

}
