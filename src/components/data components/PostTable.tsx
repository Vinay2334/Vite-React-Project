import React from "react";
import { Post } from "../../../typings";
import { Box, Stack, Typography } from "@mui/material";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import Skeleton from '@mui/material/Skeleton';

type PostTableProps = {
  posts?: Post[];
  status: "idle" | "loading" | "success" | "error";
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "userId",
    headerName: "User Id",
    width: 90,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 750,
    editable: true,
  },
];

const PostTable: React.FC<PostTableProps> = ({ posts, status }) => {
  const rows = posts || [];
  return (
    <Box sx={{ height: 650, width: "100%" }}>
      {status === "loading" ? (
        <Stack spacing={3}>
          {Array.from({length:8}).map(() => (
            <Skeleton variant="rectangular" height={50}/>
          ))}
        </Stack>
      ): (
        <>
         <Typography variant="h5" textAlign="center">
        Posts
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
        </>
      )}
    </Box>
  );
};
export default PostTable;
