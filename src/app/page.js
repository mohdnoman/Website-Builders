import { Navbar, Header, Footer, ServiceList, Deals, Signup } from "../components";


export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" px-6 md:px-64">
          <Header />
          <ServiceList />
          <Deals />
          <Signup />
        </div>
        <Footer />
      </div>
    </>
  );
}
