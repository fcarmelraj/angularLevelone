import { Component } from '@angular/core';

@Component({
  selector: 'app-get-post-api',
  templateUrl: './get-post-api.component.html',
  styleUrls: ['./get-post-api.component.css']
})
export class GetPostApiComponent {
  post: any[] = [];
  jsonData: any[] = []
  loading: boolean = false;

  async ngOnInit() {    
  this.loading = true;   
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    this.post = await response.json();    
  } catch (error) {
    console.error(error);
  } finally{
    this.loading = false;   
  }

   try {
      const res = await fetch('assets/local-data.json');
      this.jsonData = await res.json();
      console.log(this.jsonData)
    } catch (err) {
      console.error('Error loading JSON', err);
    } finally {
      this.loading = false;
    }

  }

}
