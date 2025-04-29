import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProfileService} from '../../../data/servises/profile.service';
import {debounceTime, startWith, switchMap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-filters',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile-filters.component.html',
  styleUrl: './profile-filters.component.scss'
})
export class ProfileFiltersComponent {
  fb = inject(FormBuilder)
  profileService = inject(ProfileService)

  searchForm =this.fb.group({
    firstName: [''],
    lastName: [''],
    city: [''],
    stack: [''],

  })

  constructor() {
    this.searchForm.valueChanges
      .pipe(
        startWith({}),
        debounceTime(1000),
        switchMap(formValue  => {
         return this.profileService.filterProfiles(formValue)
        }),
        takeUntilDestroyed()
      )
      .subscribe()

  }
}
