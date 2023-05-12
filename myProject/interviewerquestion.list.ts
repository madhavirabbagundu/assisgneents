import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
  
  } from "@angular/core";
  import * as feather from "feather-icons";
  import {
    StudentViewModel,
    
  } from "../model/studentViewNew.model";
  import { ApplicantInterviewDetailService } from "../service/applicantInterviewDetails.service";
  import { MatPaginator } from "@angular/material/paginator";
  import { MatTableDataSource } from "@angular/material/table";
  import { MatDialog } from "@angular/material/dialog";
  import { Router } from "@angular/router";
  import { AuthServiceService } from "../shared/auth-service.service";
  import { LoggedInUserDetails } from "../model/loggedinUser.model";
  import { UserAccess } from "../model/roleModuleAccess.model";
  import { NgxSpinnerService } from "ngx-spinner";
  
  @Component({
    selector: "app-list-interviewerquestion",
    templateUrl: "./interviewerquestion.list.html",
    styleUrls: ["./interviewerquestion.list.css"],
  })
  export class InterviewerquestionList implements OnInit, AfterViewInit {
    @Input() studentAcademicScreen: boolean;
    filterText: string;
    students: StudentViewModel[];
    interviewView: any;
    displayedColumns: string[];
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    result: string;
    header: string;
    currentUser: LoggedInUserDetails;
    userAccess = UserAccess;
    deleteAccess = false;
    editAccess = false;
    currentUrl: string;
    profileUrl: string;
    dataFilter = {
      filterOptions: ["questionId","interviewPriority","interviewQuestion"],
      placeholderValue: "Search with Applicant Name OR Applicant ID ..",
      filterData: [],
      originalData: [],
    };
    filteredData: any;
    applicantInterview:any;

    constructor(
      private interviewerDetails: ApplicantInterviewDetailService,
      public confirmDialog: MatDialog,
      private router: Router,
      private authService: AuthServiceService,
      private spinnerService: NgxSpinnerService,
    ) {
      this.filterText = "";
      this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    }
  
    ngOnInit(): void {
      this.spinnerService.show();
      feather.replace();
      this.applicantInterview = [];
      this.getApplicantInterview();
      this.currentUrl = this.router.url.includes('interview/interviewerquestionList') ? '/nterview/interviewerquestionList' : '/interview/interviewerquestionList';
      this.header = "Interviewer Questions List";
      this.displayedColumns =
        [
          "questionId",
          "interviewPriority",
          "interviewQuestion",
          "active",
          "passive"
        ]
  
    }
  
    ngAfterViewInit(): void {
      feather.replace();
    }
  
    ngAfterViewChecked(): void {
      feather.replace();
    }
  
    getApplicantInterview(): void {
      this.interviewerDetails.getApplicantInterview().subscribe(
        (interview) => {
          this.dataFilter.originalData = JSON.parse(JSON.stringify(interview));
          this.dataFilter.filterData = JSON.parse(JSON.stringify(interview));
          this.interviewView = interview
          this.interviewView.paginator = this.paginator;
          this.filteredData = this.interviewView;
          console.log(this.filteredData)
          

          this.spinnerService.hide();
        },
        (error) => {
          this.spinnerService.hide();
          // this.serviceErrors(error);
        }
      );
    }

    selectQuestion(e){
    console.log(e)
    this.applicantInterview.push(e)
     console.log("total data:",this.applicantInterview)
    }
    interviewQuestionsList(){
      console.log(this.applicantInterview,"this is continuebutton")
    }
      // onInterviewerDetails(interviewData,mode): void {
      //   if(mode == 'view') {
      //     this.spinnerService.show();
          
      //     this.interviewerDetails.getInterviewerById(interviewData.applicantId).subscribe((interviewData) => {
      //       sessionStorage.setItem("interviewData",JSON.stringify(interviewData));

      //     })
      //   }
      //   else if(mode == 'edit'){
      //       this.spinnerService.show();
      //       this.interviewerDetails.getInterviewerById(interviewData.applicantId).subscribe((interviewData) => {
      //           sessionStorage.setItem("interviewData",JSON.stringify(interviewData));
      //           // this.router.navigate([`./interview/profile`]);

      //       })
      //   }
      // }
    }
  
  
   
  
       
  
      
  
      
  
  
  
    
  
   
  
  
  