import { mockData } from "@/utils/mockData";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./button";
import { ArrowUpDown, BadgeCheck, Ban, Check, Trash2, X } from "lucide-react";

export const columns: ColumnDef<mockData>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
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
          <ArrowUpDown className="ml-2 h-4 w-4" />
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
          <ArrowUpDown className="ml-2 h-4 w-4" />
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
  // {
  //   accessorKey: "actions",
  //   header: "Actions",
  //   cell: ({}) => {
  //     return <Trash2 className="cursor-pointer" />;
  //   },
  // },
];
