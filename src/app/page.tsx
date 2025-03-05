import Image from "next/image";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="flex justify-center">
      <h2 className="text-xl font-medium">
        Welcome here, our store offers a varied product offering
      </h2>
    </div>
  );
}
