import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";
import { Container, Stack } from "@mui/material";
import PostTable from "../data components/PostTable";
import DepartmentList from "../data components/DepartmentList";

const Data: React.FC = () => {
  const {status, error, data: posts} = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  if(status === 'loading') return <h1>loading...</h1>
  if(status === 'error') return <h1>{JSON.stringify(error)}</h1>
  return (
    <Container sx={{marginTop: '20pt'}}>
      <Stack spacing={10}>
      <PostTable posts={posts}/>
      <DepartmentList/>
      </Stack>
    </Container>
  )
};
export default Data;
