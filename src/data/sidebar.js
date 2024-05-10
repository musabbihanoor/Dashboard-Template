import { FaChartBar } from "react-icons/fa";
import { LuFileBarChart2 } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBuildOutline } from "react-icons/io5";
import { FaRecycle } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";

export const data = [
  {
    title: "Dashboard",
    icon: <FaChartBar className="text-3xl" />,
    route: "/dashboard",
  },
  {
    title: "Finance",
    icon: <LuFileBarChart2 className="text-3xl" />,
    submenu: [
      {
        title: "Accounts Receivable",
        route: "/finance/accounts-receivable",
      },
      {
        title: "Accounts Payable",
        route: "/finance/accounts-payable",
      },
      {
        title: "General Ledger",
        route: "/finance/general-ledger",
      },
      {
        title: "Budgeting",
        route: "/finance/budgeting",
      },
    ],
  },
  {
    title: "Human Resources",
    icon: <FaPeopleGroup className="text-3xl" />,
    submenu: [
      {
        title: "Employee Management",
        route: "/hr/employee-management",
      },
      {
        title: "Payroll",
        route: "/hr/payroll",
      },
      {
        title: "Recruitment",
        route: "/hr/recruitment",
      },
    ],
  },
  {
    title: "Manufacturing",
    icon: <IoBuildOutline className="text-3xl" />,
    submenu: [
      {
        title: "Production Planning",
        route: "/manufacturing/production-planning",
      },
      {
        title: "Job Order Management",
        route: "/manufacturing/job-order-management",
      },
    ],
  },
  {
    title: "Supply Chain",
    icon: <FaRecycle className="text-3xl" />,
    submenu: [
      {
        title: "Inventory Management",
        route: "/supply-chain/inventory-management",
      },
      {
        title: "Order Fulfillment",
        route: "/supply-chain/order-fulfillment",
      },
      {
        title: "Shipping and Receiving",
        route: "/supply-chain/shipping-receiving",
      },
    ],
  },
  {
    title: "Customer Relations",
    icon: <FaPeopleArrows className="text-3xl" />,
    submenu: [
      {
        title: "CRM Dashboard",
        route: "/crm/dashboard",
      },
      {
        title: "Customer Support",
        route: "/crm/support",
      },
      {
        title: "Lead Management",
        route: "/crm/lead-management",
      },
    ],
  },
  {
    title: "Reports",
    icon: <TbReportMoney className="text-3xl" />,
    route: "/reports",
  },
];
