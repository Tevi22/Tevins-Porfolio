import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UseCaseService } from '../../../services/use-case.service';
import { UseCase } from '../../models/use-case.model';

@Component({
  selector: 'app-use-case',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './use-case.component.html',
  styleUrls: ['./use-case.component.css']
})
export class UseCaseComponent implements OnInit {

  useCase?: UseCase;

  constructor(
    private route: ActivatedRoute,
    private useCaseService: UseCaseService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.useCase = this.useCaseService.getUseCaseBySlug(slug);
    }
  }
}
