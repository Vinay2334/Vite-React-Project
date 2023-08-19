import React from 'react';
import { Post } from '../../../typings';
import { Box, Typography } from '@mui/material';
import { GridColDef, DataGrid } from '@mui/x-data-grid';

type PostTableProps = {
    posts?: Post[],
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userId',
      headerName: 'User Id',
      width: 90,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      flex: 1,
      editable: true,
    },
  ];

const PostTable:React.FC<PostTableProps> = ({posts}) => {
    const rows = posts || [];
    return (
        <Box sx={{ height: 650, width: '100%'}}>
          <Typography variant="h5" textAlign='center'>Posts</Typography>
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
      </Box>
    )
}
export default PostTable;