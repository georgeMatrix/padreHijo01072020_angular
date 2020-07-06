import { Component, OnInit } from '@angular/core';
import {HijoService} from '../../services/hijo.service';
import {Hijo} from '../../models/hijo';
import {ActivatedRoute, Router} from '@angular/router';
import {Padre} from '../../models/padre';
import {PadreService} from '../../services/padre.service';

@Component({
  selector: 'app-hijo-form',
  templateUrl: './hijo-form.component.html',
  styleUrls: ['./hijo-form.component.css']
})
export class HijoFormComponent implements OnInit {
  hijo: Hijo = new Hijo();
  padres: Padre[];
  constructor(private hijoService: HijoService,
              private router: Router,
              private padreService: PadreService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getByIdHijo();
    this.padreService.getPadres().subscribe(padres => this.padres = padres);
  }
  guardarPadre(): void{
    this.hijoService.saveHijos(this.hijo).subscribe(response => this.router.navigate(['/hijos']));
  }
  getByIdHijo(): void{
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id){
        this.hijoService.getHijo(id).subscribe(response => {
          this.hijo = response;
          console.log(this.hijo.idPadre);
        });
      }
    });
  }
  actualizarHijo(): void{
    this.hijoService.updateHijo(this.hijo).subscribe(response => {
      this.router.navigate(['/hijos']);
      this.hijo = response;
    });
  }
}
