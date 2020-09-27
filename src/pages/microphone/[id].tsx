import { GetStaticPaths, GetStaticProps, NextPageContext } from "next";
import React from "react";
import { Microphone } from "../../../model/Micophone";
import { openDb } from "../../openDb";
import { useRouter } from "next/router";

// export interface MecrophoneDetail extends Microphone {
//   //
// }

export type MicrophoneDetailProps = Microphone;

const MicrophoneDetail = ({
  id,
  brand,
  model,
  price,
  imageUrl,
}: MicrophoneDetailProps) => {
  // microphone.id;
  // microphone.brand;
  // microphone.model;
  // microphone.price;
  // microphone.imageUrl;
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div>
      MicrophoneDetail
      <h1>{model}</h1>
      <h2>{brand}</h2>
      <p>{price}</p>
      <img src={imageUrl} />
    </div>
  );
};

export default MicrophoneDetail;

export const getStaticProps: GetStaticProps<MicrophoneDetailProps> = async (
  ctx
) => {
  const id = ctx.params.id;
  const db = await openDb();
  const microphone = await db.get("select * from microphone where id = ?", +id);
  return { props: microphone };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const db = await openDb();
  const microphones: Microphone[] | undefined = await db.all(
    "select * from microphone"
  );
  const microphoneIds = microphones.map((microphone) => {
    return { params: { id: microphone.id.toString() } };
  });
  return {
    // fallback: false,
    fallback: true,
    paths: microphoneIds,
  };
};
