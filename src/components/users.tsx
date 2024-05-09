import { useGetUsers } from "@/actions/get-users";
import { toast } from "./ui/use-toast";
import { Skeleton } from "./ui/skeleton";
import { DataTable } from "./data-table";
import { usersColumns } from "./ui/users-columns";

function Users() {
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
    <div className="p-4 mx-auto overflow-auto max-w-7xl">
      {isLoadingUsers ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <Skeleton className="w-full h-[20px] rounded-full" />
          <Skeleton className="w-full h-[20px] rounded-full" />
          <Skeleton className="w-full h-[20px] rounded-full" />
          <Skeleton className="w-full h-[20px] rounded-full" />
        </div>
      ) : (
        <DataTable columns={usersColumns} data={usersData} filter="email" />
      )}
    </div>
  );
}

export default Users;
