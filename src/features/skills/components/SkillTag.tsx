import { cn } from '@/lib/utils';

import { Skill } from '..';
import { iconForSkill } from '../iconForSkill';

type TagProps = {
  skill: Skill;
  size: 'xs' | 'lg';
};
export function SkillTag({ skill, size }: TagProps) {
  const Icon = iconForSkill(skill);
  return (
    <li
      className={cn(
        'flex items-center bg-card text-primary',
        'overflow-hidden transition-transform hover:scale-110',
        size === 'xs' && 'gap-1 py-0.5 px-1 text-xs rounded-full',
        size === 'lg' && 'gap-4 py-2 px-4 text-xl font-bold rounded-lg'
      )}
    >
      <Icon
        className={cn(size === 'xs' && 'size-4', size === 'lg' && 'size-12')}
      />
      {skill}
    </li>
  );
}
