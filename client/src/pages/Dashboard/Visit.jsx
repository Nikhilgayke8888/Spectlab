import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { getAllVisits } from "../../lib/api-visit";


const columns = [
  { field: "srNo", headerName: "Sr No", width: 10, sortable: false },
  { field: "docName", headerName: "Doctor Name", width: 150 },
  { field: "mobno", headerName: "Mobile", width: 120 },
  { field: "emailid", headerName: "Email", width: 180 },
  { field: "specialization", headerName: "Specialization", width: 150 },
  { field: "city", headerName: "City", width: 100 },
  { field: "area", headerName: "Area", width: 130 },
  { field: "pincode", headerName: "Pin code", width: 80 },
  { field: "mrName", headerName: "MR Name", width: 140 },
  { field: "feedback", headerName: "Feedback", width: 120 },
];

export default function Visit() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await getAllVisits(controller);
        const jsonData = response.data.map((row, index) => ({
          id: row.vid,
          srNo: index + 1,
          docName: `${row["docAlias.docfname"]} ${row["docAlias.doclname"]}`,
          mobno: row["docAlias.mobno"],
          emailid: row["docAlias.emailid"],
          specialization: row["docAlias.specialization"],
          city: row["docAlias.city"],
          area: row["docAlias.area"],
          pincode: row["docAlias.pincode"],
          mrName: `${row["mrAlias.mrfname"] || ''} ${row["mrAlias.mrlname"] || ''}`.trim(),
          ...row,
        }));

        setRows(jsonData);
      } catch (error) {
        console.error("Error fetching visits:", error);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Paper elevation={3} style={{ width: "80%", padding: 20 }}>
          <DataGrid
            density="compact"
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </Paper>
      </div>
    </>
  );
}
