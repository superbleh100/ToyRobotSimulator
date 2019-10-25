import { Component, OnDestroy } from '@angular/core';
import { ToyRobotService } from './toy-robot.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toy-robot',
  templateUrl: './toy-robot.component.html',
  styleUrls: ['./toy-robot.component.scss']
})
export class ToyRobotComponent implements OnDestroy {
  public instructions: string;
  public output: string;
  private robotStatsSubscription: Subscription;

  constructor(private toyRobotService: ToyRobotService) {
    this.robotStatsSubscription = this.toyRobotService.robotStats.subscribe((robotStats) => this.output = robotStats);
  }

  ngOnDestroy(): void {
    this.robotStatsSubscription.unsubscribe();
  }

  public runInstructions(): void {
    this.toyRobotService.executeInstructions(this.instructions);
  }
}
