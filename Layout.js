import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Home, 
  AlertCircle, 
  Map, 
  FileText, 
  User, 
  MapPin,
  Bell
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: Home,
    description: "View nearby issues"
  },
  {
    title: "Report Issue",
    url: createPageUrl("ReportIssue"),
    icon: AlertCircle,
    description: "Report a new civic issue"
  },
  {
    title: "Map View",
    url: createPageUrl("MapView"),
    icon: Map,
    description: "Explore issues on map"
  },
  {
    title: "My Reports",
    url: createPageUrl("MyReports"),
    icon: FileText,
    description: "Track your submissions"
  },
  {
    title: "Profile",
    url: createPageUrl("Profile"),
    icon: User,
    description: "Manage your account"
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <Sidebar className="border-r border-slate-200 bg-white">
          <SidebarHeader className="border-b border-slate-100 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg">CivicReport</h2>
                <p className="text-xs text-slate-500">Community Issue Tracker</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-xl p-3 ${
                          location.pathname === item.url 
                            ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
                            : 'text-slate-600'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3">
                          <item.icon className={`w-5 h-5 ${
                            location.pathname === item.url ? 'text-blue-600' : 'text-slate-400'
                          }`} />
                          <div className="flex-1">
                            <span className="font-medium text-sm">{item.title}</span>
                            <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-6">
              <div className="px-3 py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-800">Quick Stats</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                    Live
                  </Badge>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Total Issues</span>
                    <span className="font-semibold text-green-800">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Resolved Today</span>
                    <span className="font-semibold text-green-800">8</span>
                  </div>
                </div>
              </div>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-slate-100 p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-slate-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 text-sm truncate">Citizen User</p>
                <p className="text-xs text-slate-500 truncate">Help improve your city</p>
              </div>
              <Bell className="w-4 h-4 text-slate-400" />
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white border-b border-slate-200 px-6 py-4 lg:hidden">
            <div className="flex items-center justify-between">
              <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h1 className="text-lg font-bold text-slate-900">CivicReport</h1>
              </div>
              <Bell className="w-5 h-5 text-slate-400" />
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}