import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TaskdataService } from './taskdisplay/taskdata.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TaskResolved } from './taskdisplay/task';

@Injectable({
  providedIn: 'root'
})
export class Taskdisplay1ResolverService implements Resolve<TaskResolved> {

  constructor( private _taskdata:TaskdataService) { }
  resolve(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any>
  {
    return this._taskdata.getAllTasks().pipe(map(x=>({data:x,errorMessage:''})),
    catchError(err=>{
      console.log(err);
      return of({product:null,errorMessage:err.errorMessage});
    })
    );
  }
}
