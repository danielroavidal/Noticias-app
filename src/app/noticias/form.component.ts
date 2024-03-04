import { Component, OnInit } from '@angular/core';
import {Noticia} from './noticia'
import {NoticiaService} from './noticia.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private noticia: Noticia = new Noticia()
  private titulo:string = "Crear Noticia"
  cargarNoticia: any;

  constructor(private noticiaService: NoticiaService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarNoticia()
  }

  cargarNoticia(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.noticiaService.getNoticia(id).subscribe( (noticia) => this.noticia = noticia)
      }
    })
  }

  create(): void {
    this.noticiaService.create(this.noticia)
      .subscribe(noticia => {
        this.router.navigate(['/noticia'])
        swal('Nueva noticia', `Noticia ${noticia.nombre} creado con éxito!`, 'success')
      }
      );
  }

  update():void{
    this.noticiaService.update(this.noticia)
    .subscribe( noticia => {
      this.router.navigate(['/noticias'])
      swal('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
    }

    )
  }

}
