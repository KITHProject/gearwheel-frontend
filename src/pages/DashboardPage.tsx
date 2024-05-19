import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentSales } from "@/components/recent-sales";
import { Dashboard } from "@/components/dashboard";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { useGetDashboard } from "@/actions/get-dashboard";
import { toast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const {
    data: dashboardData,
    isLoading: isLoadingDashboard,
    error: errorDashboard,
  } = useGetDashboard();

  if (errorDashboard) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: `There was a problem with your request (${errorDashboard}).`,
    });
  }
  return (
    <main className="p-8">
      <div className="pb-3 ">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          All values are generated randomly each time after a refresh.
        </p>
        <div className="flex items-center gap-2">
          {/* <CalendarDateRangePicker /> */}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col flex-1 gap-4 p-2">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoadingDashboard ? (
                    <Skeleton className="w-1/2 h-[30px] rounded" />
                  ) : (
                    <>${dashboardData.total_revenue}</>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoadingDashboard ? (
                    <Skeleton className="w-1/2 h-[30px] rounded" />
                  ) : (
                    <>{dashboardData.sales}</>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="mb-4 ">
                {isLoadingDashboard ? (
                  <Skeleton className="w-full h-[350px] rounded" />
                ) : (
                  <Dashboard data={dashboardData.last_months} />
                )}
              </CardContent>
            </Card>
            <Card className="grid ">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  {dashboardData?.recent_sales.length} people made sales this
                  month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingDashboard ? (
                  <Skeleton className="w-full h-[350px] rounded" />
                ) : (
                  <>
                    <div className="space-y-8 overflow-auto h-80">
                      <RecentSales data={dashboardData.recent_sales} />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
