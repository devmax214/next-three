export type ITicketTableFilterValue = string | string[];

export type ITicketTableFilters = {
  name: string;
  type: string;
};

export type ITicketItem = {
  id: string;
  ticketNumber: string;
  title: string;
  type: string;
  information: string;
  createdAt: Date;
  status: string;
};
