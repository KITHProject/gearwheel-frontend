import { useAuthorizationStore } from "@/stores/useAuthorizationStore";

import Header from "@/components/header";

function Home() {
  const username = useAuthorizationStore((state) => state.username);

  return (
    <div className="flex-col flex min-h-screen relative">
      <Header />
      <div className="max-w-7xl mx-auto p-4 text-center">Home</div>
    </div>
  );
}

export default Home;
