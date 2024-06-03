export const linksList = [
  {
    title: "All Leads",
    icon: "../assets/leads.svg",
    to: "/leads",
  },
  {
    title: "Master Inbox",
    icon: "../assets/inbox.svg",
    to: "/inbox",
  },
  {
    title: "Email Campaigns",
    icon: "../assets/speakerphone.svg",
    to: "/dashboard",
  },
];

export const anchorsList = [
  {
    title: "Join Slack Community",
    icon: "../assets/slack.svg",
    to: "https://smartlead-hq.slack.com/signup#/domain-signup",
  },
  {
    title: "Smartlead Tutorials",
    icon: "../assets/tutorails.svg",
    to: "https://www.youtube.com/@smartleadai/playlists",
  },
];

export const users = [
  {
    email: "admin@smartlead.ai",
    password: 123456,
  },
  {
    email: "user@smartlead.ai",
    password: 654321,
  },
  {
    email: "hamza@smartlead.ai",
    password: 515253,
  },
  {
    email: "dinesh@smartlead.ai",
    password: 887766,
  },
];

export const campaigns = [
  {
    name: "SW Zero Personalisation 1",
    status: "Sent",
    lastUpdateDate: "13 Apr 2023",
    sequenceCount: 5,
    metrics: [
      {
        label: "sent",
        count: 400,
        percent: null,
        isError: false,
      },
      {
        label: "opened",
        count: 400,
        percent: 12,
        isError: false,
      },
      {
        label: "clicked",
        count: 400,
        percent: 12,
        isError: false,
      },
      {
        label: "replied",
        count: 400,
        percent: 12,
        isError: false,
      },
      {
        label: "positiveReply",
        count: 400,
        percent: 12,
        isError: false,
      },
    ],
  },
];

export const columns = [
  {
    name: "details",
    align: "left",
    label: "Campaign Details",
    field: "details",
  },
  { name: "report", align: "left", label: "Reports", field: "sent" },
  { name: "actions", align: "left", label: "", field: "actions" },
];
