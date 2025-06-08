import { Skill } from '@/features/skills';
import { iconForSkill } from '@/features/skills/iconForSkill';
import { cn } from '@/lib/utils';

type TagProps = {
  skill: Skill;
  size: 'xs' | 'lg';
};
export function SkillTag({ skill, size }: TagProps) {
  const Icon = iconForSkill(skill);
  return (
    <li
      className={cn(
        'flex items-center dark:bg-white/10 bg-black/10 text-primary select-none',
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
