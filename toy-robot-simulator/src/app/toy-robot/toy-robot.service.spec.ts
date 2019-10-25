import { TestBed } from '@angular/core/testing';

import { ToyRobotService } from './toy-robot.service';
import { Direction } from '../helper/directions.enum';

describe('ToyRobotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    expect(service).toBeTruthy();
  });

  it('instructions: PLACE', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 0, y: 0, direction: Direction.NORTH };
    service.executeInstructions('PLACE 0,0,NORTH');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: PLACE at corner', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 4, y: 4, direction: Direction.NORTH };
    service.executeInstructions('PLACE 4,4,NORTH');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: PLACE x < 0', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = undefined;
    service.executeInstructions('PLACE -1,0,NORTH');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeFalsy();
  });

  it('instructions: PLACE x > 4', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = undefined;
    service.executeInstructions('PLACE 5,0,NORTH');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeFalsy();
  });

  it('instructions: PLACE y < 0', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = undefined;
    service.executeInstructions('PLACE 0,-1,NORTH');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeFalsy();
  });

  it('instructions: PLACE y > 4', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = undefined;
    service.executeInstructions('PLACE 0,5,NORTH');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeFalsy();
  });

  it('instructions: PLACE east', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 0, y: 0, direction: Direction.EAST };
    service.executeInstructions('PLACE 0,0,EAST');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: PLACE south', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 0, y: 0, direction: Direction.SOUTH };
    service.executeInstructions('PLACE 0,0,SOUTH');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: PLACE west', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 0, y: 0, direction: Direction.WEST };
    service.executeInstructions('PLACE 0,0,WEST');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: PLACE with bad data', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = undefined;
    service.executeInstructions('PLACE 0,hello,NORTH');
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeFalsy();
  });

  it('instructions: MOVE NORTH', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 0, y: 1, direction: Direction.NORTH };
    service.executeInstructions(`PLACE 0,0,NORTH\nMOVE`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: MOVE at edge NORTH', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 0, y: 4, direction: Direction.NORTH };
    service.executeInstructions(`PLACE 0,4,NORTH\nMOVE`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: MOVE EAST', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 1, y: 0, direction: Direction.EAST };
    service.executeInstructions(`PLACE 0,0,EAST\nMOVE`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: MOVE at edge EAST', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 4, y: 0, direction: Direction.EAST };
    service.executeInstructions(`PLACE 4,0,EAST\nMOVE`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: MOVE SOUTH', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 0, y: 3, direction: Direction.SOUTH };
    service.executeInstructions(`PLACE 0,4,SOUTH\nMOVE`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: MOVE at edge SOUTH', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 0, direction: Direction.SOUTH };
    service.executeInstructions(`PLACE 2,0,SOUTH\nMOVE`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: MOVE WEST', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 3, y: 0, direction: Direction.WEST };
    service.executeInstructions(`PLACE 4,0,WEST\nMOVE`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: MOVE at edge WEST', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 0, y: 2, direction: Direction.WEST };
    service.executeInstructions(`PLACE 0,2,WEST\nMOVE`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: LEFT NORTH to WEST', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 2, direction: Direction.WEST };
    service.executeInstructions(`PLACE 2,2,NORTH\nLEFT`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: LEFT WEST to SOUTH', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 2, direction: Direction.SOUTH };
    service.executeInstructions(`PLACE 2,2,WEST\nLEFT`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: LEFT SOUTH to EAST', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 2, direction: Direction.EAST };
    service.executeInstructions(`PLACE 2,2,SOUTH\nLEFT`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: LEFT EAST to NORTH', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 2, direction: Direction.NORTH };
    service.executeInstructions(`PLACE 2,2,EAST\nLEFT`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: RIGHT NORTH to EAST', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 2, direction: Direction.EAST };
    service.executeInstructions(`PLACE 2,2,NORTH\nRIGHT`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: RIGHT WEST to NORTH', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 2, direction: Direction.NORTH };
    service.executeInstructions(`PLACE 2,2,WEST\nRIGHT`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: RIGHT SOUTH to WEST', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 2, direction: Direction.WEST };
    service.executeInstructions(`PLACE 2,2,SOUTH\nRIGHT`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });

  it('instructions: RIGHT EAST to SOUTH', () => {
    const service: ToyRobotService = TestBed.get(ToyRobotService);
    const robot = { x: 2, y: 2, direction: Direction.SOUTH };
    service.executeInstructions(`PLACE 2,2,EAST\nRIGHT`);
    expect((service as any).robot).toEqual(robot);
    expect((service as any).robotHasBeenInitialized).toBeTruthy();
  });
});
