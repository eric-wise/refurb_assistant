import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="form-control"
        placeholder="Login"
        {...register("Login", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        className="form-control"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <select className="form-control" {...register}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>

      <input className="btn btn-primary" type="submit" />
    </form>
  );
}
