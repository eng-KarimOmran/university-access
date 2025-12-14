import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex justify-center items-center flex-col h-dvh">
      <img className="max-h-1/2 mt-auto" src="/404-error.png" alt="not found page" />
      <Button variant="main" asChild>
        <Link to="/">Back</Link>
      </Button>
      <Footer />
    </section>
  );
}
