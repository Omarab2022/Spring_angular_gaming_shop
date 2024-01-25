import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent {


  searchOrderForm!: FormGroup;

  order : any ;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.searchOrderForm = this.fb.group({
      trackingId: [null, [Validators.required]],
    });
  }

  submitForm() {
    if (this.searchOrderForm.valid) {
      this.authService.getOrderByTrackingId(this.searchOrderForm.get('trackingId').value).subscribe(
        (res) => {
          console.log(res);
          this.order = res;
          
        },
        (error) => {
          console.error(error);
       
        }
      );
    }
  }
}