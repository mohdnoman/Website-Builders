import { Navbar, Header, Footer, ServiceList,  } from "../components";


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" px-6 md:px-64">
          <Header />
          <ServiceList />
        </div>
        <Footer />
      </div>
    </>
  );
}
