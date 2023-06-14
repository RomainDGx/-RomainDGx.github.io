import { Component, ElementRef } from '@angular/core';
import { first, map } from 'rxjs';
import { ISkill, SkillType } from 'src/app/models/skills.model';
import { ApiService } from 'src/app/services/api.service';
import { ScrollService } from 'src/app/services/scroll.service';

type SkillOption = {
  label: string;
  value: 'all' | SkillType;
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {

  public skillOptions: Array<SkillOption> = [
    { label: 'Toutes', value: 'all' },
    { label: 'Techniques', value: 'hardSkill' },
    { label: 'Transverses', value: 'softSkill' }
  ];
  public selectedOption: number = 0;

  private _skills: Array<ISkill & { isOpenDetail: boolean; }> = [];
  public get skills(): Array<ISkill & { isOpenDetail: boolean; }> {
    return this._skills.filter(skill => this.skillOptions[this.selectedOption].value === 'all' || this.skillOptions[this.selectedOption].value === skill.type)
  }

  constructor(
    elRef: ElementRef<HTMLElement>,
    scrollService: ScrollService,
    apiService: ApiService
  ) {
    scrollService.registerSection('Mes Compétences', elRef.nativeElement, 'mes-competences');

    apiService.getSkills()
              .pipe(
                first(),
                map(skills => skills.map(skill => ({ ...skill, isOpenDetail: false })))
              )
              .subscribe(skills => this._skills = skills);
  }
}
