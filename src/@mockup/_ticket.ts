import { _mock } from "@/@mockup/_mock";

export const _tickets = [...Array(20)].map((_, index) => {
  return {
    id: _mock.id(index),
    ticketNumber: `#601${index}`,
    title: "Website Problem",
    type: "normal",
    information: "When will my product arrive?",
    createdAt: _mock.time(index),
    status: "pending",
  };
});
