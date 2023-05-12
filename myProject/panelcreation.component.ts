
import { Component, Input, NgModule, OnInit, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
// import  studentData  from '../student.json'; 
import {
    FormGroup,
    FormBuilder,

  } from "@angular/forms";
  import { NgxSpinnerService } from "ngx-spinner";
  import { ApplicantInterviewDetailService } from '../service/applicantInterviewDetails.service';
  import { SnackBarService } from '../service/snack-bar.service';
  // import { ApplicationDetailsModel } from "../model/applicantDetails.model";
  import { Router } from "@angular/router";
  import { StudentService } from "../service/student.service";
 
@Component({
    selector:'panelcreation-root',
    templateUrl:'./panelcreation.component.html',
    styleUrls:['./panelcreation.component.css'],
    
})
// var arr = ['A']
export class PanelCreationComponent implements OnInit{ 
readonly activeStepClass = 'active';
readonly nonActiveStepClass = "disabled";
@Input() mode: string;

public panelform: FormGroup;
wizardStepStyle: string[];
wizardSteppsExpandState: boolean[];
myForm: any;
PerfectAnswer;
IdealAnswer;

BadAnswer;
StandardAnswer;
RightDirection;
tickChecked = false;
gradesOfApplicant=false;
applicantInterview :any[];
selectedValue:String;
data;
previewData:any[];
interviewApplicantName;
applicantQuestions:String;
priorityDropDown: any;
storeData:any;
applicantQuestionDetailsModels: any;
conform = false;
selecteddata : any
getdata : any = false
backupapplicationdata : any
activate = "activate";
InterviewQuestions: any;
interviewSession:any;
  panelflowEventId: any;
  PanelData: any;

constructor(
    private dt: FormBuilder,
    public spinnerService: NgxSpinnerService,
    private modelDispenser: ApplicantInterviewDetailService,
    private modelDispenser2: StudentService,
    private messageService: SnackBarService,
    private router: Router,

  ) {

    this.wizardStepStyle = [
      this.activeStepClass,
      this.nonActiveStepClass,
    ]
    this.wizardSteppsExpandState = [true,false];

        this.createInterview();

  }
  ngOnInit():void{
   
    // this.priorityDropDown = this.getDropDownPriority('35');
    this.InterviewQuestions = [];
    this.previewData = [];
    this.panelflowEventId;
    this.PanelData = [];
    // console.log(this.getDropDownPriority('35'))
    // this.selecteddata = sessionStorage.setItem("selecteddata",JSON.stringify(this.applicantInterview))



  }
  createInterview(){
    this.panelform = this.dt.group({
      // interviewData:[this.applicantInterview],
      firstInterviewerName:[null],
      secondInterviewerName:[null],
      interviewDate:[null],
      stateOfInterviewer:[null],
      panelflowEventId:this.panelflowEventId

    })
  }

 
 






  


  // getPanelCreation(): void{
  //   this.modelDispenser.getPanelCreation().subscribe(
  //     (panelData)=>{
  //     console.log(panelData)
  //     },
  //     error=>{
  //       console.log("error in get,  ", error )
  //     }
  //   )
  // }

  savePanelDetails():void{
    this.spinnerService.show();
    let panelData = JSON.stringify({
      firstInterviewerName: this.panelform.get("firstInterviewerName").value,
      secondInterviewerName:this.panelform.get("secondInterviewerName").value,
      interviewDate:this.panelform.get("interviewDate").value, 
      stateOfInterviewer:this.panelform.get("stateOfInterviewer").value,
      panelflowEventId:this.panelflowEventId
    });
    console.log("panelData",panelData);
    this.modelDispenser.addPanelSetUpDetails(panelData).subscribe(data =>{
      this.messageService.success("Panel Data Submitted !")
      // this.router.navigate([`./interview/questionsList`]);
      // this.PanelData.push(data);
      this.spinnerService.hide();
    },
    error => {
      this.messageService.error("Error on Applicant Submission !!")
    })
    // console.log(this.PanelData);
  }

  onBack(){
    this.router.navigate([`./interview/:mode/panelnumber`]);
  }


  



}