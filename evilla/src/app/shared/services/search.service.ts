export class SearchService{
  
  public sortingMethods = ['growing','shrinking'];

  public currentSorting = '';

  setCurrentSorting(sorting: string){
    this.currentSorting = sorting;
  }

}