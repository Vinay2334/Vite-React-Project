import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type formInputs = {
  name: string;
  phoneNo: number;
  email: string;
};

const Home: React.FC = () => {
  const form = useForm<formInputs>({
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: formInputs) => {
    localStorage.setItem("user-data", JSON.stringify(data));
    navigate("/data");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width='100%'
      className='BOX'
    >
      <Box sx={{width : {
        xs: '70%',
        sm: '40%',
      }}}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={5} 
        //width={400} 
        >
          <TextField
            required
            label="Name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            required
            label="Phone No."
            type="number"
            {...register("phoneNo", {
              required: "PhoneNo is required",
              validate: {
                checkPhn: (v) =>
                  v.toString().length === 10 || "Phone no. should be 10 digits",
              },
            })}
            error={!!errors.phoneNo}
            helperText={errors.phoneNo?.message}
          />
          <TextField
            required
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Email address invalid!",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
      </Box>
    </Box>
  );
};
export default Home;
