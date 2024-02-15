import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuAlianzaComponent } from './components/menu-alianza/menu-alianza.component';
import { interval, Observable, Subscription } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuAlianzaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  eventDate: Date = new Date(2024, 3, 6, 16); 
  countdown$!: Observable<number>;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private countdownSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.countdown$ = interval(1000).pipe(
      map(() => Math.floor((this.eventDate.getTime() - new Date().getTime()) / 1000)),
      takeWhile(diff => diff > 0)
    );

    this.countdownSubscription = this.countdown$.subscribe(diff => {
      this.days = Math.floor(diff / (3600 * 24));
      this.hours = Math.floor((diff % (3600 * 24)) / 3600);
      this.minutes = Math.floor((diff % 3600) / 60);
      this.seconds = diff % 60;
    });
  }

  ngOnDestroy(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
  
}