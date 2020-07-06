import { Component, OnInit } from '@angular/core';
import {Padre} from '../../models/padre';
import {PadreService} from '../../services/padre.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-padre-form',
  templateUrl: './padre-form.component.html',
  styleUrls: ['./padre-form.component.css']
})
export class PadreFormComponent implements OnInit {
  padre: Padre = new Padre();
  constructor(private padreService: PadreService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPadreById();
  }
  savePadre(): void{
    this.padreService.savePadres(this.padre).subscribe(response => this.router.navigate(['/padres']));
  }
  getPadreById(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.padreService.getPadreById(id).subscribe(response => this.padre = response);
      }
    });
  }
  actualizaPadre(): void{
    this.padreService.updatePadre(this.padre).subscribe(response => {
      this.padre = response;
      this.router.navigate(['/padres']);
      Swal.fire({icon: 'success', title: 'Cambio Hecho'});
    });
  }
}
