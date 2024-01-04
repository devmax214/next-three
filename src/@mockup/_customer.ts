import { _mock } from "@/@mockup/_mock";

export const CUSTOMER_STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "banned", label: "Banned" },
  { value: "rejected", label: "Rejected" },
];

export const _customerList = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  email: _mock.email(index),
  avatarUrl: _mock.image.avatar(index),
  phoneNumber: _mock.phoneNumber(index),
  zipCode: "85807",
  createdAt: _mock.time(index),
  status:
    (index % 2 && "pending") ||
    (index % 3 && "banned") ||
    (index % 4 && "rejected") ||
    "active",
}));
