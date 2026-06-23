import {ReactNode} from 'react';
import { ThemeProvider } from "../../context/theme/Theme";

export const AllProvider = ({ children }: { children: ReactNode }) => {
  return (
            <ThemeProvider>
                {children}
            </ThemeProvider>
        )
};