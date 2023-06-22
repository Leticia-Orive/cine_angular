import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CineService } from '../cine.service';
import { Cine } from '../cine.model';

@Component({
  selector: 'app-cine-detail',
  templateUrl: './cine-detail.component.html',
  styleUrls: ['./cine-detail.component.css'],
})
export class CineDetailComponent implements OnInit {
  @Input() cine: Cine | undefined;
  constructor(
    private route: ActivatedRoute,
    private cineService: CineService
  ) {}
  ngOnInit() {
    const cineIdParam = this.route.snapshot.paramMap.get('id');
    if (cineIdParam !== null) {
      const cineId = +cineIdParam;
      this.getCine(cineId);
    } else {
      //Manejar el caso cuando el ID es null
      console.error('El ID del cine es nulo.');
    }
  }
  getCine(id: number) {
    this.cineService.getCine(id).subscribe((cine) => (this.cine = cine));
  }
}
