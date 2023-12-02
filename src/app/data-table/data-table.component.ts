import { Component } from '@angular/core';
interface Supplier {
  name: string;
  address: string;
  email: string;
  phone: string;
}
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  
  suppliers: Array<Supplier> = [
    {name: 'Supplier 1',address: 'Address 1',email: 'supplier1@gmail.com',phone: '0123456789'},
    {name: 'Supplier 2',address: 'Address 2',email: 'supplier2@gmail.com',phone: '0123456789'},
    {name: 'Supplier 3',address: 'Address 3',email: 'supplier3@gmail.com',phone: '0123456789'},
    {name: 'Supplier 4',address: 'Address 4',email: 'supplier4@gmail.com',phone: '0123456789'},
    {name: 'Supplier 5',address: 'Address 5',email: 'supplier5@gmail.com',phone: '0123456789'},
    {name: 'Supplier 6',address: 'Address 6',email: 'supplier6@gmail.com',phone: '0123456789'},
    {name: 'Supplier 7',address: 'Address 7',email: 'supplier7@gmail.com',phone: '0123456789'},
    {name: 'Supplier 8',address: 'Address 8',email: 'supplier8@gmail.com',phone: '0123456789'},
    {name: 'Supplier 9',address: 'Address 9',email: 'supplier9@gmail.com',phone: '0123456789'},
    {name: 'Supplier 10',address: 'Address 10',email: 'supplier10@gmail.com',phone: '0123456789'},
    {name: 'Supplier 11',address: 'Address 11',email: 'supplier11@gmail.com',phone: '0123456789'},
    {name: 'Supplier 12',address: 'Address 12',email: 'supplier12@gmail.com',phone: '0123456789'},
    {name: 'Supplier 13',address: 'Address 13',email: 'supplier13@gmail.com',phone: '0123456789'},
    {name: 'Supplier 14',address: 'Address 14',email: 'supplier14@gmail.com',phone: '0123456789'},
    {name: 'Supplier 15',address: 'Address 15',email: 'supplier15@gmail.com',phone: '0123456789'},
    {name: 'Supplier 16',address: 'Address 16',email: 'supplier16@gmail.com',phone: '0123456789'},
    {name: 'Supplier 17',address: 'Address 17',email: 'supplier17@gmail.com',phone: '0123456789'},
    {name: 'Supplier 18',address: 'Address 18',email: 'supplier18@gmail.com',phone: '0123456789'},
    {name: 'Supplier 19',address: 'Address 19',email: 'supplier19@gmail.com',phone: '0123456789'},
    {name: 'Supplier 20',address: 'Address 20',email: 'supplier20@gmail.com',phone: '0123456789'},
    {name: 'Supplier 21',address: 'Address 21',email: 'supplier21@gmail.com',phone: '0123456789'}
  ]

  currentPage: number = 1;
  pageSize: number = 5;

  filteredSupplier: Array<Supplier> = this.suppliers;
  pageSizes: Array<number> = [ 5,10,20 ];

  ngOnInit (){
    this.visibleData();
    this.pageNumbers();
    // this.changePage();
  }

  visibleData(){
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredSupplier.slice(startIndex,endIndex);
  }
  nextPage(){
    this.currentPage++;//this.currentPage = this.currentPage + 1
    this.visibleData();
  }
  previousPage(){
    this.currentPage--;
    this.visibleData();
  }
  pageNumbers(){
    let totalPages = Math.ceil(this.filteredSupplier.length / this.pageSize);
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }
  changePage(pageNumber:number){
    this.currentPage = pageNumber;
    this.visibleData();
  }
  filterData(searchTerm:string){
    this.filteredSupplier = this.suppliers.filter((item)=>{
      return Object.values(item).some((val)=>{
        return val.toLowerCase().includes(searchTerm.toLowerCase());
      })
    });
    this.visibleData();
  }
  changePageSize(pageSize:any){
    this.pageSize = pageSize;
    this.visibleData();
  }
}
