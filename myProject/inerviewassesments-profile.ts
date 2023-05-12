import { Component, Input, OnInit, ViewChild,ElementRef, Renderer2  } from '@angular/core';
import * as feather from 'feather-icons';
import {
  FormGroup,
  AbstractControl,
  FormControl,
  FormArray,
  NgForm,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DocumentViewerDialog } from '../shared/document-viewer.component';
import { Router } from "@angular/router";
import { ModalDialog } from '../shared/modal.component';
import { NgxSpinnerService } from "ngx-spinner";
import { ApplicantDetailService } from '../service/applicantDetail.service';
import { SnackBarService } from '../service/snack-bar.service';
import { LoggedInUserDetails } from '../model/loggedinUser.model';
import { Module, UserAccess } from '../model/roleModuleAccess.model';
import { ApplicantInterviewDetailService } from '../service/applicantInterviewDetails.service';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-profile-interviewassesments',
  templateUrl: './interviewassesments-profile.html',
  styleUrls: ['./interviewassesments-profile.css']
})
export class InterviewAssesmentsProfile implements OnInit {
  public panelform: FormGroup;
  wizardStepStyle: string[];

  readonly activeStepClass = "active";
  readonly nonActiveStepClass = "disabled";

  @Input() isWorkflowDashboard?: boolean;
  interviewView: any;

  @ViewChild(ModalDialog, {
    static: true
  }) modalDialog;
  @ViewChild(ModalDialog,{
    static:true
  }) modal: any;
  documentName: any;
  bootstrapimage: SafeResourceUrl;
    interview: any;
    wizardStepExpandState: boolean[];
    gradesDropDown: any;
    currentUrl: string;
    profileUrl: string;
    dataFilter = {
      filterOptions: ["questionId","interviewQuestion","interviewPriority","interviewActivate","interviewGrade"],
      placeholderValue: "Search with Applicant Name OR Applicant ID ..",
      filterData: [],
      originalData: [],
    };
    filteredData: any;
    applicantInterview: any;
    paginator: any;
    // getDrpDownValues: any;



  applicant;

  NA: String;
  imageUrlBootstrap: SafeResourceUrl;
  currentUser: LoggedInUserDetails;
  previewData: any;
  getdata: boolean;
  returnData: any;
  checked: boolean;
  constructor(
    private dt: FormBuilder,
    public datepipe: DatePipe,
    private sanitizer: DomSanitizer,
    private modelDispenser2: StudentService,
    private messageService: SnackBarService,
    private interviewerDetails: ApplicantInterviewDetailService,
    private modelDispenser: ApplicantDetailService,
    private router: Router,
    public spinnerService: NgxSpinnerService
    ) {

      this.wizardStepStyle = [
        this.activeStepClass,
        this.nonActiveStepClass
      ]
      this.wizardStepExpandState = [true, false];
      this.createInterview();


    this.interview = JSON.parse(sessionStorage.getItem('applicantData'));
  console.log(this.interview.firstInterviewerName)

  }

  changeSection(index: number) {
    if(index == 1){
      this.getdata = true
      console.log("returnbadck data",this.previewData)
      this.returnData = this.previewData
    }


    for (let i = 0; i < this.wizardStepExpandState.length; i++) {
      if (index - 1 === i) {
        this.wizardStepExpandState[i] = true;
        this.wizardStepStyle[i] = this.activeStepClass;
      } else {
        this.wizardStepExpandState[i] = false;
        this.wizardStepStyle[i] = this.nonActiveStepClass;
      }
    }

  }
  createInterview(){
    this.panelform = this.dt.group({
      applicationNumber: [null],
      applicantName:[null],
      firstInterviewerName:[null],
      secondInterviewerName:[null],
      interviewGrade:[null],
      // interviewAssesment:[null],
      // applicantQuestions:new FormControl(null),
    })
  }

  selectQuestion(e){
    console.log(e)
    //  if(e.questionId >= 0){
    let grade = this.panelform.get('interviewGrade').value;
    var number = this.panelform.get("applicationNumber").value;
     e.applicationNumber = number;
    e.interviewGrade = grade;
    this.applicantInterview.push(e)
     console.log("total data:",this.applicantInterview)
    
    // }
    }


  submit(){
    var count = 0;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
   
var number = this.panelform.get("applicationNumber").value;
var name = this.panelform.get("applicantName").value;
var firstInterviewerName = this.panelform.get("firstInterviewerName").value;
var secondInterviewerName = this.panelform.get("secondInterviewerName").value;
this.previewData = this.applicantInterview
console.log("preview data",this.previewData)

console.log(number,name,firstInterviewerName,secondInterviewerName)
    // if(this.panelform.invalid){
       for(var i = 0;i < this.previewData.length; i++){
        console.log(this.previewData[i].interviewPriority)
        if(this.previewData[i].interviewPriority=="Planning"){
            count++;
        }
        else if(this.previewData[i].interviewPriority=="Team Work"){
            count1++
        }      
        else if(this.previewData[i].interviewPriority=="Handling Failure"){
            count2++
        }
        else if(this.previewData[i].interviewPriority=="Modesty "){
            count3++
        }
        else if(this.previewData[i].interviewPriority=="Enterprising"){
            count4++
        }
    }
    if(count>=1 && count1>=1 && count2 >=1 && count3>=1 && count4 >=1){
    console.log(count,count1,count2,count3,count4)
      this.messageService.success("completed");
      this.changeSection(2);
    }
    else{
      console.log(count,count1,count2,count3,count4);
      this.messageService.error("Ask atleast one question in each catorgory")
    }
    
  }

  ngOnInit(): void {
    feather.replace();
    this.spinnerService.show();
    this.gradesDropDown = this.getDrpDownValues('33');

    feather.replace();
    // this.panelInterview = [];
    this.getApplicantInterview();
    this.applicantInterview = [];
    // this.getPanelCreation();
  }

  getDrpDownValues(referenceCode): any {
    let dropDownValues = [];
    this.modelDispenser2.getReferenceValueList(referenceCode).subscribe(referenceValue => {
      const referenceValues = referenceValue[0].referenceValues;
      for (let referenceValue of referenceValues) {
        dropDownValues.push({
          label: referenceValue.referenceCodeDisplayValue,
          value: referenceValue.referenceCodeValue
        })
      }
    },
      error => {
      });

    return dropDownValues;
  }
   
    getApplicantInterview(): void {
        this.interviewerDetails.getApplicantInterview().subscribe(
          (interview) => {
            var modInterviewActivate;
            modInterviewActivate = interview.filter(list=>
              list.interviewActivate=='Y')
            this.dataFilter.originalData = JSON.parse(JSON.stringify(modInterviewActivate));
            this.dataFilter.filterData = JSON.parse(JSON.stringify(modInterviewActivate));
            this.interviewView = modInterviewActivate
            this.interviewView.paginator = this.paginator;
            this.filteredData = modInterviewActivate;
            console.log(this.filteredData)
            this.spinnerService.hide();
            
          },
          (error) => {
            this.spinnerService.hide();
            // this.serviceErrors(error);
          }
        );
    
      }
      getPanelDetails(): void{
        this.interviewerDetails.getPanelDetails().subscribe(
          (applicantData)=>{
          console.log(applicantData)
          },
          error=>{
            console.log("error in get,  ", error )
          }
        )
      }
    
      savePanelDetail(): void{
        this.spinnerService.show();
        const assesmentData = JSON.stringify({
          applicationNumber: this.panelform.get("applicationNumber").value,
          applicantName: this.panelform.get("applicantName").value,
          secondInterviewerName:this.interview.secondInterviewerName,
          firstInterviewerName:this.interview.firstInterviewerName,
          // interviewGrade:this.panelform.get("interviewGrade").value,
          applicantQuestions:this.applicantInterview,

        })
        console.log(assesmentData)
        this.interviewerDetails.addPanelDetails(assesmentData).subscribe(applicant => {
          this.messageService.success("Applicant Data Submitted !")

        },
        error => {
          this.messageService.error("Error on Applicant Submission !!")
        })
      }

  // onBack(): void {
  //   sessionStorage.removeItem('applicantData');
  //   this.router.navigate(['./interview/interviewprofile']);
  // }

  ngOnDestroy(): void {
    this.interview = undefined;
    sessionStorage.removeItem('applicantData');
  }


}
