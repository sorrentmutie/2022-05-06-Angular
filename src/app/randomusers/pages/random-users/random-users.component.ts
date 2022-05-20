import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Result } from '../../randomuser';
import { RandomUsersService } from '../../services/random-users.service';

@Component({
  selector: 'app-random-users',
  templateUrl: './random-users.component.html',
  styleUrls: ['./random-users.component.css']
})
export class RandomUsersComponent implements OnInit, OnDestroy {

  subscription: Subscription | undefined = undefined;
  constructor(private service: RandomUsersService) { }
  users: Result[] = [];

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.getRandomUsers(50).subscribe( response => {
        this.users = response.results;
    });
  }

}
