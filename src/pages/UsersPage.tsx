import { useGetUsers } from "@/actions/get-users";
import { DataTable } from "@/components/data-table";
import { usersColumns } from "@/components/ui/users-columns";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Sidebar from "@/components/sidebar";
import { mockData } from "@/utils/mockData";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

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
    <div className="flex bg-zinc-100">
      <Sidebar />
      <div className="w-full p-4 max-w-7xl lg:mx-auto">
        <div className="relative text-center">
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
        </div>
        {isLoadingUsers ? (
          <div className="flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <DataTable columns={usersColumns} data={usersData} />
        )}
      </div>
    </div>
  );
}

export default UsersPage;
