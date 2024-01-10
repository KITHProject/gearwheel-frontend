import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type RecentUserData = {
  user: {
    id: number;
    username: string;
    email: string;
  };
  amount: number;
};
type RecentSalesData = {
  data: RecentUserData[];
};

export function RecentSales({ data }: RecentSalesData) {
  return (
    <>
      {data.map((sale) => {
        return (
          <div key={sale.user.id} className="flex items-center">
            {/* <Avatar className="h-9 w-9">
            <AvatarFallback>{user.avatar}</AvatarFallback>
          </Avatar> */}
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">
                {sale.user.username}
              </p>
              <p className="text-sm text-muted-foreground">{sale.user.email}</p>
            </div>
            <div className="ml-auto font-medium">{sale.amount}</div>
          </div>
        );
      })}
    </>
  );
}
