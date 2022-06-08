import { useState } from 'react';

type UseLoading = () => Promise<void>;

export const useLoading = (duration = 1000): UseLoading => {
  const [startTime] = useState(new Date().getTime());

  const loading = (): Promise<void> =>
    new Promise<void>((resolve) => {
      const interval = duration - (new Date().getTime() - startTime);
      if (interval > 0) {
        setTimeout(resolve, interval);
      } else {
        resolve();
      }
    });

  return loading;
};
