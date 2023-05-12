import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
    Output,
    EventEmitter,
  } from "@angular/core";
  import * as feather from "feather-icons";
  import {
    ServiceMessages,
  } from "../model/applicantHomeVisit.model";
  import { ApplicantDetailService } from "../service/applicantDetail.service";
  import { SnackBarService } from "../service/snack-bar.service";
  import { MatPaginator } from "@angular/material/paginator";
  import { MatTableDataSource } from "@angular/material/table";
  import { ConfirmDialogComponent } from "../shared/confirm-dialog.component";
  import { MatDialog } from "@angular/material/dialog";
  import { Router } from "@angular/router";
  import { AuthServiceService } from "../shared/auth-service.service";
  import { LoggedInUserDetails } from "../model/loggedinUser.model";
  import { Module, UserAccess } from "../model/roleModuleAccess.model";
  import { NgxSpinnerService } from "ngx-spinner";
  import { ApplicantInterviewDetailService } from "../service/applicantInterviewDetails.service";
  @Component({
    selector: "panelnumber-list",
    templateUrl: "./panelnumber.list.html",
    styleUrls: ["./panelnumber.list.css"],
  })
  export class PanelNumberComponent implements OnInit, AfterViewInit {
    applicantListScreen: boolean;
    filterText: string;
    applicantHomeView: any;
    displayedColumns: string[];
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    result: string;
    header: string;
    currentUser: LoggedInUserDetails;
    userAccess = UserAccess;
    deleteAccess = false;
    editAccess = false;
    isPendingList = false;
    currentUrl: string;
    profileUrl: string;
    applicantDocs;
    dataFilter = {
      filterOptions: ["panelflowEventId", "firstInterviewerName","secondInterviewerName"],
      placeholderValue: "Search with Applicant Name OR Applicant ID ..",
      filterData: [],
      originalData: [],
    };
    searchValue: any;
    filteredData: any;
  
    constructor(
      private applicantHomeDetails: ApplicantDetailService,
      private interviewerDetails: ApplicantInterviewDetailService,
  
      public confirmDialog: MatDialog,
      private messageService: SnackBarService,
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
      this.getPanelCreation();
      this.currentUrl = this.router.url.includes('interview/panelNumber') ? '/interview/panelNumber' : '/interview/panelNumber';
     
      this.displayedColumns =
    [
      "panelflowEventId",
      "firstInterviewerName",
      "secondInterviewerName"
  
    ]
  
    }
  
    ngAfterViewInit(): void {
      feather.replace();
    }
  
    ngAfterViewChecked(): void {
      feather.replace();
    }
  
   
    getPanelCreation(): void {
      this.interviewerDetails.getPanelCreation().subscribe(
        (panelData) => {
         console.log(panelData[panelData.length-1].firstInterviewerName)
         this.dataFilter.originalData = JSON.parse(JSON.stringify(panelData));
         this.filteredData = panelData;
          console.log("panel data:",(this.filteredData))
          
  
          this.spinnerService.hide();
          
        },
        (error) => {
          this.spinnerService.hide();
          // this.serviceErrors(error);
        }
      )
  
  
    }
  
   
  
   
  
  
    onApplicantHomeDetails(applicantData, mode): void {
      this.spinnerService.show();
      this.interviewerDetails.getPanelflowEventNumber(applicantData.panelflowEventId).subscribe((applicantData) => {
        sessionStorage.setItem("applicantData", JSON.stringify(applicantData));
        if(mode==='edit'){
          this.router.navigate([`./interview/interviewprofile`])
        }else if(mode==='view'){
          this.router.navigate([`./interview/interviewprofile`])
        }
        this.spinnerService.hide();
      });
    }
  
    
  
  
  
   
  
    ngDestroy(): void {
      sessionStorage.removeItem('applicantData');
      this.searchValue=undefined;
    }
  
  }
  