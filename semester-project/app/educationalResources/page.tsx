import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Resources",
};

function EducationalResources() {
  return (
    <main className="flex justify-center text-4x1 p-14">
      <h1 className="flex justify-center text-4x1 p-14 font-bold">
        Educational Resources page
      </h1>
    </main>
  );
}

export default EducationalResources;
