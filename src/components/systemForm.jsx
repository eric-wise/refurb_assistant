import React from "react";
import { useForm } from "react-hook-form";

export default function SystemForm() {
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
        type="number"
        className="form-control"
        placeholder="  Asset_ID"
        {...register("  Asset_ID", {})}
      />
      <select {...register}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      <input
        type="text"
        className="form-control"
        placeholder="Product_Name"
        {...register("Product_Name", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Serial_Number"
        {...register("Serial_Number", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Processor"
        {...register("Processor", {})}
      />
      <input
        type="number"
        className="form-control"
        placeholder="Procssor_Cores"
        {...register("Procssor_Cores", {})}
      />
      <input
        type="number"
        className="form-control"
        placeholder="Ram"
        {...register("Ram", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="First_Graphics_Card"
        {...register("First_Graphics_Card", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Second_Graphics_Card"
        {...register("Second_Graphics_Card", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Battery_Design_Capacity"
        {...register("Battery_Design_Capacity", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Battery_Current_Capacity"
        {...register("Battery_Current_Capacity", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Battery_Wear"
        {...register("Battery_Wear", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="HD_Model"
        {...register("HD_Model", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="HD_Serial_Number"
        {...register("HD_Serial_Number", {})}
      />
      <input
        type="text"
        className="form-control"
        placeholder="HD_Size"
        {...register("HD_Size", {})}
      />
      <select className="form-control" {...register}>
        <option value="Mechanical">Mechanical</option>
        <option value=" Solid State"> Solid State</option>
      </select>

      <input className="btn btn-primary" type="submit" />
    </form>
  );
}
