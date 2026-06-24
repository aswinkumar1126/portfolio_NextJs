
import {ReactNode} from 'react';
import { ThemeProvider } from "../../context/theme/Theme";
import Layout from '@/src/frontend/user/component/layout/Layout';

export const AllProvider = ({ children }: { children: ReactNode }) => {
  return (
            <ThemeProvider>
                <Layout>
                    {children}
                </Layout> 
            </ThemeProvider>
        )
};