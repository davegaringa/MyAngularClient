import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Owner } from '../../_interface/owner.model';
import { ErrorHandlerService } from '../../shared/error-handler.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit, AfterViewInit {
 
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Owner>();

  // Angular @ViewChild() error: Expected 2 arguments, but got 1
  // https://stackoverflow.com/questions/56704164/angular-viewchild-error-expected-2-arguments-but-got-1
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private repoService: RepositoryService, private errorService: ErrorHandlerService, private router: Router) { }
 
  ngOnInit() {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllOwners = () => {
    this.repoService.getData('api/v1/owners')
    .subscribe(res => {
      this.dataSource.data = res as Owner[];
    },
    (error) => {
      this.errorService.handleError(error);
    })
  }
 
  public redirectToDetails = (id: string) => {
    let url: string = `/owner/details/${id}`;
    this.router.navigate([url]);
  }
 
  public redirectToUpdate = (id: string) => {
    
  }
 
  public redirectToDelete = (id: string) => {
    
  }
 
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}