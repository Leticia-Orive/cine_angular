import { Component, OnInit } from '@angular/core';
import { Cine } from '../cine.model';
import { CineService } from '../cine.service';

@Component({
  selector: 'app-cine-list',
  templateUrl: './cine-list.component.html',
  styleUrls: ['./cine-list.component.css'],
})
export class CineListComponent implements OnInit {
  cines: Cine[] | undefined;

  constructor(private cineService: CineService) {}

  ngOnInit() {
    this.getCines();
  }

  getCines() {
    this.cineService.getCines().subscribe((cines) => {
      this.cines = cines;
    });
  }
}
