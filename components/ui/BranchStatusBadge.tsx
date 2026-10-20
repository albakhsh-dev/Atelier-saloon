'use client';

import React, { useState, useEffect } from 'react';
import { BranchHours } from '@/types/salon';
import { getBranchStatus, BranchStatus } from '@/lib/hours';
import { Badge } from './Badge';

interface BranchStatusBadgeProps {
  hours: BranchHours[];
  showDetails?: boolean;
}

export const BranchStatusBadge: React.FC<BranchStatusBadgeProps> = ({
  hours,
  showDetails = false,
}) => {
  const [status, setStatus] = useState<BranchStatus | null>(null);

  useEffect(() => {
    const update = () => {
      setStatus(getBranchStatus(hours));
    };

    update();
    const interval = setInterval(update, 60000); // Re-calculate every 60s
    return () => clearInterval(interval);
  }, [hours]);

  if (!status) {
    return (
      <Badge variant="subtle" size="sm">
        Checking Hours...
      </Badge>
    );
  }

  return (
    <div className="inline-flex items-center gap-2">
      <Badge
        variant={status.isOpen ? 'open' : 'closed'}
        size="sm"
        icon={
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              status.isOpen ? 'bg-[#2D6A4F] animate-pulse' : 'bg-[#9B2226]'
            }`}
          />
        }
      >
        {status.statusText}
      </Badge>
      {showDetails && (
        <span className="text-xs text-[#57524E]">
          {status.detailText}
        </span>
      )}
    </div>
  );
};
