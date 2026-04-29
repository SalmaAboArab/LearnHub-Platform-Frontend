import { FormProvider } from "@/shared/forms/form-provider";
import { Button } from "@/shared/ui/button";
import { RHFInput } from "@/shared/forms/rhf-input";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Lock, MailIcon, UsersRound } from "lucide-react";
import { RHFRadioButtonGroup } from "@/shared/forms/rhf-radio-button-group";

export default function Register() {
  const Schema = Yup.object().shape({
    username: Yup.string()
      .required("Full Name is required")
      .min(3, "Full Name must be at least 3 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string().required("Please select a role").default("student"),
  });

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  };

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    console.log("data: ", data);
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit} className="">
      <RHFRadioButtonGroup
        name="role"
        label="I want to join as"
        options={[
          { label: "Student", value: "student" },
          { label: "Instructor", value: "instructor" },
        ]}
      />

      <RHFInput
        name="username"
        label="Full Name"
        placeholder="John Doe"
        className="placeholder:text-sm"
        icon={<UsersRound className="w-4 h-4" />}
      />
      <RHFInput
        name="email"
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        className="placeholder:text-sm"
        icon={<MailIcon className="w-4 h-4" />}
      />
      <RHFInput
        name="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        className="placeholder:text-sm"
        icon={<Lock className="w-4 h-4" />}
      />
      <RHFInput
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        className="placeholder:text-sm"
        icon={<Lock className="w-4 h-4" />}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold"
      >
        {isSubmitting ? "Creating..." : "Create Account"}
      </Button>
    </FormProvider>
  );
}
