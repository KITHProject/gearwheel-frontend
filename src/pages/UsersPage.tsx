import { useGetUsers } from "@/actions/get-users";
import { DataTable } from "@/components/data-table";
import { usersColumns } from "@/components/ui/users-columns";
import Sidebar from "@/components/sidebar";
import { toast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

function UsersPage() {
  const {
    data: usersData,
    isLoading: isLoadingUsers,
    error: errorUsers,
    refetch: refetchUsers,
  } = useGetUsers();

  if (errorUsers) {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: `There was a problem with your request (${errorUsers}).`,
    });
  }

  return (
    <div className="flex bg-zinc-100 dark:bg-primary-foreground">
      <Sidebar />
      <div className="p-4 mx-auto overflow-auto max-w-7xl">
        {/* <div className="relative text-center"> */}
        {/* <Button
            className="my-4"
            size="sm"
            variant="default"
            onClick={() => {
              refetchUsers();
              if (errorUsers) {
                toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description: `There was a problem with your request (${errorUsers}).`,
                });
              }
            }}
          >
            {isLoadingUsers ? <LoadingSpinner /> : "Get users"}
          </Button> */}
        {/* </div> */}
        {isLoadingUsers ? (
          <div className="flex items-center justify-center">
            <Skeleton className="w-[100px] h-[20px] rounded-full" />
          </div>
        ) : (
          <DataTable columns={usersColumns} data={usersData} />
        )}
      </div>
    </div>
  );
}

export default UsersPage;
