import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {

  
  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
              
                <div className=" flex justify-center items-center w-full h-[80px]">
                <img 
                        src="https://s3-alpha-sig.figma.com/img/681a/dbbe/35b48f53c328d9887d990363ae1f083f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sdC1IqzTNk855VY7FvHIBN8SxAfwX7oWN~BQ2zg~Xa5tAVn7~FwVZjJP-DYjM~OM4UKIrCmuIJf-3pOoUT0jDwNMrQhq-K-XqCM~DCaSMO3sRf3VegkxyeWYOjvQ0qYYEVVRPz5b1xwe-cO36jZXa1z2NclDEMaUZYkRk-Fw6vhgK4rgmZXXzJQ83sbiHUumghfx5RSJ28A5-SieCAvubb8szR6eNry9hLcPY8OWHcGEidQaFUjBAEL2-~7S2fv3c3Se0QPKCsxo3MPm1YD6S-3ocZQhDOXyY7zzOVKQcSNVdNftq0VAAl7c7SQlly65jsAsuOAhA-DgwUh~rvA8YA__" 
                        alt="Logo" 
                        className='w-full h-full object-contain ' 
                    />                </div>
              </Link>
              
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
