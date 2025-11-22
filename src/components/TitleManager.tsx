import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

const TitleManager = () => {
  const routerState = useRouterState();

  useEffect(() => {
    const match = routerState.matches[routerState.matches.length - 1];
    const meta = match?.meta as { title?: string } | undefined;
    const title = meta?.title || 'Ade Pangestu';
    document.title = title;
  }, [routerState]);

  return null;
};

export default TitleManager;
