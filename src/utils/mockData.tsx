export type mockData = {
  id: number;
  username: string;
  email: string;
  is_superuser: boolean;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  name: string;
};

export const mockData: mockData[] = [
  {
    id: 0,
    username: "krzysiem",
    email: "krzysiem@trojmiejskie.com",
    is_superuser: true,
    is_staff: true,
    is_active: true,
    date_joined: "2023-12-01T15:59:53.738Z",
    name: "krzysiek wicki",
  },
  {
    id: 1,
    username: "krzysiem1",
    email: "krzysiem1@trojmiejskie.com",
    is_superuser: false,
    is_staff: true,
    is_active: false,
    date_joined: "2023-12-02T15:59:53.738Z",
    name: "krzysztof wicki",
  },
  {
    id: 2,
    username: "krzysiem2",
    email: "krzysiem2@trojmiejskie.com",
    is_superuser: false,
    is_staff: false,
    is_active: false,
    date_joined: "2023-12-03T15:59:53.738Z",
    name: "krzyś wicki",
  },
  {
    id: 3,
    username: "nomzys",
    email: "nomzys@trojmiejskie.com",
    is_superuser: true,
    is_staff: true,
    is_active: false,
    date_joined: "2023-12-03T15:59:53.738Z",
    name: "szymon kowalski",
  },
  {
    id: 4,
    username: "larox",
    email: "larox@trojmiejskie.com",
    is_superuser: true,
    is_staff: false,
    is_active: true,
    date_joined: "2023-12-03T15:59:53.738Z",
    name: "karol rynkowski",
  },
];
