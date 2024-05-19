import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, BadgeCheck, Ban, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserData } from "@/types/types";

export const usersColumns: ColumnDef<UserData>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "is_superuser",
    header: "Superuser",
    cell: ({ row }) => {
      if (row.getValue("is_superuser")) {
        return <BadgeCheck color="green" />;
      } else {
        return <Ban color="red" />;
      }
    },
  },
  {
    accessorKey: "is_staff",
    header: "Staff",
    cell: ({ row }) => {
      if (row.getValue("is_staff")) {
        return <Check color="green" />;
      } else {
        return <X color="red" />;
      }
    },
  },
  {
    accessorKey: "is_active",
    header: "Active",
    cell: ({ row }) => {
      if (row.getValue("is_active")) {
        return <Check color="green" />;
      } else {
        return <X color="red" />;
      }
    },
  },
];
