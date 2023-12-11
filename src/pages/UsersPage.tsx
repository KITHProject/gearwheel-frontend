import { useGetStaffUsers } from "@/actions/get-staff-users";
import { DataTable } from "@/components/data-table";
import { columns } from "@/components/ui/columns";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Header from "@/components/header";
import { mockData } from "@/utils/mockData";
import { Button } from "@/components/ui/button";

function UsersPage() {
  const {
    data: staffUsersData,
    isLoading: isLoadingStaffUsers,
    error: errorStaffUsers,
    refetch: refetchStaffUsers,
  } = useGetStaffUsers();
  return (
    <div className="flex-col md:flex">
      <Header />
      <div className="max-w-7xl mx-auto p-4 text-center">
        <div className="text-center">
          <Button
            className="my-4 text-white w-32"
            size="sm"
            variant="default"
            onClick={() => {
              refetchStaffUsers();
            }}
          >
            {/* <LoadingSpinner /> */}
            {isLoadingStaffUsers ? <LoadingSpinner /> : "Get users"}
          </Button>
        </div>
        <DataTable columns={columns} data={mockData} />
      </div>
      <footer className="text-center text-sm">...</footer>
    </div>
  );
}

export default UsersPage;
