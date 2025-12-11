import React, { useMemo } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useContribution } from '@/hooks/use-contribution';
import type { ContributionDay } from '@/types/github';

const getLevelClass = (level: number): string => {
  switch (level) {
    case 0:
      return 'bg-gray-100 dark:bg-white/5';
    case 1:
      return 'bg-brand-orange/30';
    case 2:
      return 'bg-brand-orange/50';
    case 3:
      return 'bg-brand-orange/80';
    case 4:
      return 'bg-brand-orange';
    default:
      return 'bg-gray-100 dark:bg-white/5';
  }
};

const GithubCard: React.FC = () => {
  const { data, isLoading } = useContribution('onesamket');

  // Calculate total contributions
  const total = useMemo(() => {
    if (!data?.total) return 0;
    return Object.values(data.total).reduce((sum, count) => sum + count, 0);
  }, [data?.total]);

  // Group data by weeks for the grid (vertical orientation of days)
  // The API returns a flat array of days. We need to chunk them into columns of 7 days.
  const weeks = useMemo<ContributionDay[][]>(() => {
    const result: ContributionDay[][] = [];
    if (!data?.contributions || data.contributions.length === 0) {
      return result;
    }

    let currentWeek: ContributionDay[] = [];
    data.contributions.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === data.contributions.length - 1) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });

    return result;
  }, [data?.contributions]);

  return (
    <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-white/5 w-full flex flex-col group transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-full bg-brand-black dark:bg-white text-white dark:text-brand-black">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-brand-black dark:text-white text-lg">Github Contributions</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isLoading ? 'Loading...' : `${total} contributions in the last year`}
            </p>
          </div>
        </div>

        <a
          href="https://github.com/onesamket"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-xs font-semibold text-brand-black dark:text-white transition-colors"
        >
          <span>@onesamket</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
        {isLoading ? (
          <div className="flex gap-1 animate-pulse">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, j) => (
                  <div key={j} className="w-3 h-3 rounded-[2px] bg-gray-100 dark:bg-white/5"></div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-[3px] min-w-max">
            {weeks.map((week, wIndex) => (
              <div key={wIndex} className="flex flex-col gap-[3px]">
                {week.map((day, dIndex) => (
                  <div
                    key={`${wIndex}-${dIndex}`}
                    className={`w-3 h-3 rounded-[2px] transition-colors hover:ring-1 ring-gray-300 dark:ring-gray-600 ${getLevelClass(day.level)}`}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4 text-xs text-gray-400 dark:text-gray-600 font-medium">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-[2px] bg-gray-100 dark:bg-white/5"></div>
          <div className="w-3 h-3 rounded-[2px] bg-brand-orange/30"></div>
          <div className="w-3 h-3 rounded-[2px] bg-brand-orange/50"></div>
          <div className="w-3 h-3 rounded-[2px] bg-brand-orange/80"></div>
          <div className="w-3 h-3 rounded-[2px] bg-brand-orange"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default GithubCard;