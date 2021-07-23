import Client from "@/components/Homepage/Client";
import Content from "@/components/Homepage/Content";
import Feature from "@/components/Homepage/Feature";
import Hero from "@/components/Homepage/Hero";
import Statistic from "@/components/Homepage/Statistic";
import Testimoni from "@/components/Homepage/Testimoni";

const Home = () => {
  return (
    <>
      <Hero />
      <Client />
      <Feature />
      <Testimoni />
      <Statistic />
      <Content />
    </>
  );
};

export default Home;
