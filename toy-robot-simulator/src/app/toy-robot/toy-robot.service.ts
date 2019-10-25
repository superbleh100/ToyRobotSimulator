import { Injectable } from '@angular/core';
import { Robot } from './robot';
import { Direction } from '../helper/directions.enum';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToyRobotService {
  private robot: Robot;
  private robotHasBeenInitialized = false;
  public robotStats = new Subject<string>();

  public executeInstructions(instructions: string): void {
    instructions.split('\n').forEach((instruction) => this.executeSingleInstruction(instruction));
  }

  private executeSingleInstruction(instruction: string): void {
    const code = instruction.split(' ');
    switch (code[0]) {
      case 'PLACE':
        const extraInstructions = code[1].split(',');
        const x = +extraInstructions[0];
        const y = +extraInstructions[1];
        const dir = Direction[extraInstructions[2]];
        if (isNaN(x) || x < 0 || x > 4 || isNaN(y) || y < 0 || y > 4) { return; }
        this.initializeRobot(x, y, dir);
        break;
      case 'MOVE':
        if (!this.robotHasBeenInitialized) { return; }
        this.moveRobot();
        break;
      case 'REPORT':
        if (!this.robotHasBeenInitialized) { return; }
        this.reportRobotStatistics();
        break;
      case 'LEFT':
        if (!this.robotHasBeenInitialized) { return; }
        this.turnRobotLeft();
        break;
      case 'RIGHT':
        if (!this.robotHasBeenInitialized) { return; }
        this.turnRobotRight();
        break;
      default: break;
    }
  }

  private moveRobot(): void {
    switch (this.robot.direction) {
      case Direction.NORTH:
        if (this.robot.y < 4) { ++this.robot.y; }
        break;
      case Direction.EAST:
        if (this.robot.x < 4) { ++this.robot.x; }
        break;
      case Direction.SOUTH:
        if (this.robot.y > 0) { --this.robot.y; }
        break;
      case Direction.WEST:
        if (this.robot.x > 0) { --this.robot.x; }
        break;
      default: break;
    }
  }

  private turnRobotLeft(): void {
    this.robot.direction = ((--this.robot.direction + 4) % 4);
  }

  private turnRobotRight(): void {
    this.robot.direction = (++this.robot.direction % 4);
  }

  private reportRobotStatistics(): void {
    this.robotStats.next(this.getRobotInfo());
  }

  private getRobotInfo(): string {
    return this.robotHasBeenInitialized ?  `${this.robot.x},${this.robot.y},${Direction[this.robot.direction]}` : '';
  }

  private initializeRobot(xPos: number, yPos: number, dir: Direction): void {
    this.robotHasBeenInitialized = true;
    this.robot = {x: xPos, y: yPos, direction: dir};
  }
}
