import ChatSection from "../components/ChatSection";
import NavBar from "../components/NavBar";

function chat() {
  return (
    <section className="h-screen w-screen absolute top-0 left-0 flex">
      <NavBar />
      <ChatSection />
    </section>
  );
}

export default chat;
