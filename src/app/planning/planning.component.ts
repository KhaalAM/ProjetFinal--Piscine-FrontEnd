import { Component } from '@angular/core';
import {ViewChild, AfterViewInit} from "@angular/core";
import {
  DayPilot,
  DayPilotCalendarComponent,
  DayPilotMonthComponent,
  DayPilotNavigatorComponent
} from "@daypilot/daypilot-lite-angular";
import { PlanningService } from '../service/planning.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements AfterViewInit {
  @ViewChild("day") day!: DayPilotCalendarComponent;
  @ViewChild("week") week!: DayPilotCalendarComponent;
  @ViewChild("month") month!: DayPilotMonthComponent;
  @ViewChild("navigator") nav!: DayPilotNavigatorComponent;



  events: DayPilot.EventData[] = [];
  date = DayPilot.Date.today();

  
  configNavigator: DayPilot.NavigatorConfig = {
    showMonths: 3,
    cellWidth: 25,
    cellHeight: 25,
    onVisibleRangeChanged: args => {
      this.loadEvents();
    }
  };



    selectTomorrow() {
      this.date = DayPilot.Date.today().addDays(1);
    }
  
    changeDate(date: DayPilot.Date): void {
      this.configDay.startDate = date;
      this.configWeek.startDate = date;
      this.configMonth.startDate = date;
    }
  
    configDay: DayPilot.CalendarConfig = {
    };
    
    configWeek: DayPilot.CalendarConfig = {
      viewType: "Week",
      onTimeRangeSelected: async (args) => {
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
        const dp = args.control;
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add(new DayPilot.Event({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        }));
      }
    };

    configMonth: DayPilot.MonthConfig = {

    };
  
  
  constructor(private planningService: PlanningService) {
    this.semaine();
  }


 

  ngAfterViewInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    const from = this.nav.control.visibleStart();
    const to = this.nav.control.visibleEnd();
    this.planningService.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

  
    viewJour():void {
      this.configNavigator.selectMode = "Day";
      this.configDay.visible = true;
      this.configWeek.visible = false;
      this.configMonth.visible = false;
    }
  
    semaine():void {
      this.configNavigator.selectMode = "Week";
      this.configDay.visible = false;
      this.configWeek.visible = true;
      this.configMonth.visible = false;
    }
  
     Mois():void {
        this.configNavigator.selectMode = "Month";
        this.configDay.visible = false;
        this.configWeek.visible = false;
        this.configMonth.visible = true;
      }
  }
 
  
   

 






  

  



 




