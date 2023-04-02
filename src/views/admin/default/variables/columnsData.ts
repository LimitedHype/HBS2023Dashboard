import { Column } from "react-table";
import tableDataCheck from "./tableDataCheck.json";

export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];
export const columnsDataComplex = [
  {
    Header: "ADDRESS",
    accessor: "address",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "CONFIDENCE",
    accessor: "confidence",
  },
];

export type ColumnData = Column[];

export type TableData = Column<{
  name: (string | boolean)[];
  date: string;
  progress: number;
  quantity?: number;
  status?: string;
  artworks?: string;
  rating?: number;
}>;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
};
