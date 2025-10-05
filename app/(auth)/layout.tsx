import {  ReactNode } from "react";

export default function AuthLayout({children}: {children : ReactNode}) {

return( 
    <div className=" relative flex min-h-svh flex-col item-center justify-center">

        this is  nav
     <div className="flex w-full maxow-sm flex-col gap-6">   {children}</div>
    </div>
)

}