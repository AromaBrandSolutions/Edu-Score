import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

type LoginFormInputs = {
  email: string;
  password: string;
};

const AdminLoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login Data:", data);
    // Handle login API request here
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, p: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email Field */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdminLoginForm;
