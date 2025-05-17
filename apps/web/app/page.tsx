import { prisma } from "@repo/db/client";

const Home = async () => {
  const data = await prisma.user.findFirst();

  return <div>
    {data?.name}
    {data?.email}
  </div>;
};
export default Home;