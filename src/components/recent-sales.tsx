import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    sales: "+$1,999.00",
    avatar: "OM",
  },
  {
    name: "Krzysiem Wicki",
    email: "kicky@email.com",
    sales: "+$696969.00",
    avatar: "KW",
  },
  {
    name: "Karol Rynkowski",
    email: "karolrynkowski@email.com",
    sales: "+$1337.00",
    avatar: "KR",
  },
  {
    name: "Szymon Kowalski",
    email: "szkmk@email.com",
    sales: "+$7.00",
    avatar: "SK",
  },
  {
    name: "Daniel Golebiewski",
    email: "danielgolebiewski@email.com",
    sales: "+$420.00",
    avatar: "DG",
  },
  {
    name: "Krzysiem Wicki2",
    email: "krzysiem@email.com",
    sales: "+$696969.00",
    avatar: "KW",
  },
  {
    name: "Krzysiem Wicki3",
    email: "krzysiem@email.com",
    sales: "+$696969.00",
    avatar: "KW",
  },
  {
    name: "Krzysiem Wicki4",
    email: "krzysiem@email.com",
    sales: "+$696969.00",
    avatar: "KW",
  },
];

export function RecentSales() {
  return (
    <div className="space-y-8 overflow-auto h-80">
      {mockSales.map((person) => {
        return (
          <div key={person.name} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{person.avatar}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{person.name}</p>
              <p className="text-sm text-muted-foreground">{person.email}</p>
            </div>
            <div className="ml-auto font-medium">{person.sales}</div>
          </div>
        );
      })}
    </div>
  );
}
