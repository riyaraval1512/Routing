import {Injectable} from '@angular/core';
import {Iuserdata} from 'src/app/models/users.model';

@Injectable({
    providedIn: 'root'
})
export class SigninSignupService{
    public userData:Iuserdata[]=[
        {Name:'riya',Password:'riya', Email:'riya@gmail'},
        {Name:'admin',Password:'admin',Email:'admin@admin'}
      ];
      getData(){
          return this.userData;
      }
}