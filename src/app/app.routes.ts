import { Routes } from '@angular/router';

export const routes: Routes = [

  // 🔐 LOGIN FIRST (DEFAULT ENTRY)
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginComponent)
  },

  // 🔴 ADMIN
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout')
        .then(m => m.AdminLayout),

    children: [
      { path: 'dashboard', loadComponent: () => import('./features/admin/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'requests', loadComponent: () => import('./features/admin/request-management/request-management').then(m => m.RequestManagement) },
      { path: 'rooms', loadComponent: () => import('./features/admin/room-management/room-management').then(m => m.RoomManagement) },
      { path: 'resources', loadComponent: () => import('./features/admin/resource-management/resource-management').then(m => m.ResourceManagement) },
      { path: 'maintenance', loadComponent: () => import('./features/admin/maintenance-reports/maintenance-reports').then(m => m.MaintenanceReports) },
      { path: 'about', loadComponent: () => import('./features/admin/about/about').then(m => m.About) },
      { path: 'support', loadComponent: () => import('./features/admin/support/support').then(m => m.Support) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // 🔵 INSTRUCTOR
  {
    path: 'instructor',
    loadComponent: () =>
      import('./layouts/instructor-layout/instructor-layout')
        .then(m => m.InstructorLayout),

    children: [
      { path: 'dashboard', loadComponent: () => import('./features/instructor/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'availability', loadComponent: () => import('./features/instructor/room-availability/room-availability').then(m => m.RoomAvailability) },
      { path: 'booking', loadComponent: () => import('./features/instructor/create-booking/create-booking').then(m => m.CreateBooking) },
      { path: 'schedule', loadComponent: () => import('./features/instructor/schedule-status/schedule-status').then(m => m.ScheduleStatus) },
      { path: 'about', loadComponent: () => import('./features/instructor/about/about').then(m => m.About) },
      { path: 'support', loadComponent: () => import('./features/instructor/support/support').then(m => m.Support) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // 🟢 STUDENT
  {
    path: 'student',
    loadComponent: () =>
      import('./layouts/student-layout/student-layout')
        .then(m => m.StudentLayout),

    children: [
      { path: 'dashboard', loadComponent: () => import('./features/student/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'submit', loadComponent: () => import('./features/student/submit-maintenance/submit-maintenance').then(m => m.SubmitMaintenance) },
      { path: 'reports', loadComponent: () => import('./features/student/my-reports/my-reports').then(m => m.MyReports) },
      { path: 'rooms', loadComponent: () => import('./features/student/room-info/room-info').then(m => m.RoomInfo) },
      { path: 'about', loadComponent: () => import('./features/student/about/about').then(m => m.About) },
      { path: 'support', loadComponent: () => import('./features/student/support/support').then(m => m.Support) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // ❌ REMOVE wildcard redirect to admin or anything else
  { path: '**', redirectTo: '' }
];