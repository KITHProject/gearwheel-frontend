import { useGetUsers } from "@/actions/get-users";
import { DataTable } from "@/components/data-table";
import { usersColumns } from "@/components/ui/users-columns";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Header from "@/components/header";
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
  return (
    <div className="flex-col md:flex">
      <Header />
      <div className="p-4 text-center max-w-7xl lg:mx-auto">
        <div className="text-center">
          <Button
            className="my-4"
            size="sm"
            variant="default"
            onClick={() => {
              refetchUsers();
              if (errorUsers) {
                toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description: `There was a problem with your request (${errorUsers?.message}).`,
                });
              }
            }}
          >
            {/* <LoadingSpinner /> */}
            {isLoadingUsers ? <LoadingSpinner /> : "Get users"}
          </Button>
        </div>
        <DataTable columns={usersColumns} data={mockData} />
      </div>
      {/* <footer className="text-sm text-center">...</footer> */}
    </div>
  );
}

export default UsersPage;
