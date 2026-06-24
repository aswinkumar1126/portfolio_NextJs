import type { Metadata } from "next";
import Layout from "@/src/frontend/user/component/layout/Layout";


export default function Userayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Layout>
        {children}
   </Layout>
  );
}
