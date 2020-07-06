import { Component, OnInit } from '@angular/core';
import {Padre} from '../../models/padre';
import {PadreService} from '../../services/padre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  padres: Padre[];
  constructor(private padreService: PadreService) { }

  ngOnInit(): void {
    this.padreService.getPadres().subscribe(padres => this.padres = padres);
  }

  eliminarPadre(padre: Padre): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: 'Aun puede haber una oportunidad',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.padreService.deletePadre(padre.id).subscribe(response => {
          this.padres = this.padres.filter(p => p !== padre);
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        });
      }
    });
  }
}
