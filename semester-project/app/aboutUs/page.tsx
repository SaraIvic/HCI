import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

function AboutUs() {
  return (
    <main className="flex justify-center text-4x1 p-14">
      <h1 className="flex justify-center text-4x1 p-14 font-bold">
        About us page
      </h1>
    </main>
  );
}

export default AboutUs;
