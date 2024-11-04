import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceListComponent } from './components/attendance-list/attendance-list.component'; 
import { MarkAttendanceComponent } from './components/mark-attendance/mark-attendance.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component'; 


const routes: Routes = [
  { path: 'attendance-list', component: AttendanceListComponent },
  { path: 'mark-attendance', component: MarkAttendanceComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
