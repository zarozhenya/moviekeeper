import React, {FC} from 'react';
import {
  QueryClientProvider,
  QueryClient as ReactQueryClient,
} from '@tanstack/react-query';

interface Props {
  children: React.ReactNode;
}

const queryClient = new ReactQueryClient();

export const QueryClient: FC<Props> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
