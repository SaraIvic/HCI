import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
};

function GetInvolved() {
  return (
    <main className="flex flex-col items-center justify-center p-14">
      <h1 className="flex justify-center text-4x1 p-14 font-bold">
        Get Involved page
      </h1>
    </main>
  );
}

export default GetInvolved;
