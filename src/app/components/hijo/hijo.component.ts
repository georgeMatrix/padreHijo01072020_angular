import { Component, OnInit } from '@angular/core';
import {HijoService} from '../../services/hijo.service';
import {Hijo} from '../../models/hijo';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  hijos: Hijo[];
  constructor(private hijoService: HijoService) { }

  ngOnInit(): void {
    this.hijoService.getHijos().subscribe(response => {
      this.hijos = response;
      console.log(this.hijos);
    });
  }

}
