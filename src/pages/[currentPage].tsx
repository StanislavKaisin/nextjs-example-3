// import { GetStaticPaths } from "next";
// import React from "react";
// import { openDb } from "../openDb";
// // import Index, { getStaticProps } from "./index";

const currentPage = () => {
  return (
    <div>
      <p>858585</p>
    </div>
  );
};

export default currentPage;
// export default Index;
// export { getStaticProps };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const db = await openDb();
//   const { total } = await db.get("select count(*) as total from microphone");
//   const numerOfPages = Math.ceil(total / 5);
//   const paths = Array(numerOfPages - 1)
//     .fill("")
//     .map((_, index) => {
//       return { params: { currentPage: (index + 1).toString() } };
//     });
//   return {
//     fallback: false,
//     paths: paths,
//   };
// };
