import ErrorMessage from "@/components/common/error-message";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { AuthContext } from "@/context/Context";
import { LoginSchema } from "@/validationSchema/loginSchema";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { Activity, useContext } from "react";
import { toast } from "sonner";

export default function Login() {
  const { setIsLogin } = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const email = "user@user.com";
      const pass = "12345678";
      try {
        if (values.email === email && values.password === pass) {
          console.log(values);
          Cookies.set("token", "hi");
          setIsLogin(true);
        } else {
          throw new Error("Incorrect email or password");
        }
      } catch (error) {
        const err = error as Error;
        toast.error(err.message);
      }
    },
    validationSchema: LoginSchema,
  });
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Sign in to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              <Activity
                mode={
                  formik.errors.email && formik.touched.email
                    ? "visible"
                    : "hidden"
                }
              >
                <ErrorMessage message={formik.errors.email as string} />
              </Activity>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                id="password"
                type="password"
                name="password"
                required
              />
              <Activity
                mode={
                  formik.errors.password && formik.touched.password
                    ? "visible"
                    : "hidden"
                }
              >
                <ErrorMessage message={formik.errors.password as string} />
              </Activity>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          variant="main"
          type="submit"
          form="login-form"
          className="w-full"
          disabled={formik.isSubmitting}
        >
          <Activity mode={formik.isSubmitting ? "visible" : "hidden"}>
            <Spinner />
          </Activity>
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
