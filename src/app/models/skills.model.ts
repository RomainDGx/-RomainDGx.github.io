export type SkillType = 'hardSkill' | 'softSkill';

export interface ISkill {
    type: SkillType;
    name: string;
    synopsis: string;
    detail: string;
};
